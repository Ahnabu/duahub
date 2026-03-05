import Fuse from "fuse.js";
import { duas, subcategoryMeta, categoryMeta } from "@/data/duas";
import type { Dua } from "@/types/dua";

let fuseInstance: Fuse<Dua> | null = null;

function getFuse(): Fuse<Dua> {
  if (!fuseInstance) {
    fuseInstance = new Fuse(duas, {
      keys: [
        { name: "purpose_en", weight: 0.35 },
        { name: "purpose_bn", weight: 0.35 },
        { name: "subcategory_label_en", weight: 0.25 },
        { name: "subcategory_label_bn", weight: 0.25 },
        { name: "meaning_en", weight: 0.2 },
        { name: "meaning_bn", weight: 0.2 },
        { name: "transliteration", weight: 0.15 },
        { name: "arabic", weight: 0.1 },
        { name: "source", weight: 0.08 },
        { name: "tags", weight: 0.2 },
      ],
      threshold: 0.5,          // was 0.4 — more permissive, catches more fuzzy hits
      includeMatches: true,
      minMatchCharLength: 2,
      ignoreLocation: true,    // don't penalise matches far from start of string
      findAllMatches: true,    // scan the full field, not just the first hit
    });
  }
  return fuseInstance;
}

/**
 * Build a single searchable string for a dua (covers all text fields).
 */
function duaHaystack(dua: Dua): string {
  return [
    dua.purpose_en,
    dua.purpose_bn,
    dua.meaning_en,
    dua.meaning_bn,
    dua.transliteration,
    dua.arabic,
    dua.source,
    dua.subcategory_label_en,
    dua.subcategory_label_bn,
    dua.context_en ?? "",
    dua.context_bn ?? "",
    ...(dua.tags ?? []),
  ]
    .join(" ")
    .toLowerCase();
}

/**
 * Partial-word substring match: every query word must appear as a
 * substring somewhere in the dua text (e.g. "forgiv" matches "forgiveness").
 */
function matchBySubstring(words: string[]): Dua[] {
  const nonEmpty = words.filter((w) => w.length >= 2);
  if (!nonEmpty.length) return [];

  return duas.filter((dua) => {
    const hay = duaHaystack(dua);
    return nonEmpty.every((w) => hay.includes(w.toLowerCase()));
  });
}

/**
 * Returns duas whose subcategory or category label contains ANY of the
 * space-split query words (case-insensitive, partial match).
 */
function matchByCategory(words: string[]): Dua[] {
  const matched: Dua[] = [];

  for (const dua of duas) {
    const subMeta = subcategoryMeta.find((s) => s.id === dua.subcategory);
    const catMeta = categoryMeta.find((c) => c.id === dua.category);

    const haystack = [
      dua.subcategory_label_en,
      dua.subcategory_label_bn,
      subMeta?.label_en ?? "",
      subMeta?.label_bn ?? "",
      catMeta?.label_en ?? "",
      catMeta?.label_bn ?? "",
      catMeta?.description_en ?? "",
      catMeta?.description_bn ?? "",
    ]
      .join(" ")
      .toLowerCase();

    const hit = words.some((w) => w.length >= 2 && haystack.includes(w.toLowerCase()));
    if (hit) matched.push(dua);
  }

  return matched;
}

export function searchDuas(query: string): Dua[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  // ── Explicit regex mode: /pattern/flags ─────────────────────────────
  const regexMatch = trimmed.match(/^\/(.+)\/([gimsuy]*)$/);

  if (regexMatch) {
    try {
      const [, pattern, flags] = regexMatch;
      const regex = new RegExp(pattern, flags || "i");

      return duas.filter((dua) => regex.test(duaHaystack(dua)));
    } catch {
      // Invalid regex — fall through to normal search
    }
  }

  const words = trimmed.split(/\s+/);

  // 1. Partial substring match (handles truncated words like "forgiv" → "forgiveness")
  const substringResults = matchBySubstring(words);

  // 2. Category / subcategory label matching
  const categoryResults = matchByCategory(words);

  // 3. Fuzzy search via Fuse.js (catches typos and similar spellings)
  const fuse = getFuse();
  const fuzzyResults = fuse.search(trimmed).map((r) => r.item);

  // 4. Merge — preserve category hits first, then substring, then fuzzy extras
  const seen = new Set<string>();
  const merged: Dua[] = [];

  for (const dua of [...categoryResults, ...substringResults, ...fuzzyResults]) {
    if (!seen.has(dua.id)) {
      seen.add(dua.id);
      merged.push(dua);
    }
  }

  return merged;
}


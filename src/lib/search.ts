import Fuse from "fuse.js";
import { duas, subcategoryMeta, categoryMeta } from "@/data/duas";
import type { Dua } from "@/types/dua";

let fuseInstance: Fuse<Dua> | null = null;

function getFuse(): Fuse<Dua> {
  if (!fuseInstance) {
    fuseInstance = new Fuse(duas, {
      keys: [
        { name: "purpose_en", weight: 0.3 },
        { name: "purpose_bn", weight: 0.3 },
        { name: "subcategory_label_en", weight: 0.25 },
        { name: "subcategory_label_bn", weight: 0.25 },
        { name: "meaning_en", weight: 0.2 },
        { name: "meaning_bn", weight: 0.2 },
        { name: "transliteration", weight: 0.1 },
        { name: "arabic", weight: 0.05 },
        { name: "source", weight: 0.05 },
        { name: "tags", weight: 0.15 },
      ],
      threshold: 0.4,
      includeMatches: true,
      minMatchCharLength: 2,
    });
  }
  return fuseInstance;
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

  // Check for regex pattern: /pattern/flags
  const regexMatch = trimmed.match(/^\/(.+)\/([gimuy]*)$/);
  
  if (regexMatch) {
    try {
      const [, pattern, flags] = regexMatch;
      const regex = new RegExp(pattern, flags || "i"); // default case-insensitive if no flags

      return duas.filter((dua) => {
        // Search across all text fields
        const searchableText = [
          dua.purpose_en,
          dua.purpose_bn,
          dua.meaning_en,
          dua.meaning_bn,
          dua.transliteration,
          dua.arabic,
          dua.source,
          ...(dua.tags || []),
          dua.subcategory_label_en,
          dua.subcategory_label_bn
        ].join(" ");
        
        return regex.test(searchableText);
      });
    } catch (e) {
      // Invalid regex fallback to normal search
      console.warn("Invalid regex provided:", e);
    }
  }

  const words = trimmed.split(/\s+/);

  // 1. Fuzzy search over all indexed fields
  const fuse = getFuse();
  const fuzzyResults = fuse.search(query).map((r) => r.item);

  // 2. Category / subcategory label matching (any word)
  const categoryResults = matchByCategory(words);

  // 3. Merge – category matches first (preserves their order), then unique fuzzy extras
  const seen = new Set<string>();
  const merged: Dua[] = [];

  for (const dua of [...categoryResults, ...fuzzyResults]) {
    if (!seen.has(dua.id)) {
      seen.add(dua.id);
      merged.push(dua);
    }
  }

  return merged;
}


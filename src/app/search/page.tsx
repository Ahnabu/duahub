"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { duas, subcategoryMeta, categoryMeta } from "@/data/duas";
import { searchDuas } from "@/lib/search";
import { useLanguage } from "@/context/LanguageContext";
import { DuaCard } from "@/components/DuaCard";
import { SearchBar } from "@/components/SearchBar";
import { cn } from "@/lib/utils";
import type { Dua } from "@/types/dua";

/** Returns subcategory/category labels that contain any query word */
function getMatchedLabels(query: string, isBn: boolean): string[] {
  if (!query.trim()) return [];
  const words = query.trim().split(/\s+/).filter((w) => w.length >= 2);
  const labels: string[] = [];

  for (const sub of subcategoryMeta) {
    const label = isBn ? sub.label_bn : sub.label_en;
    const labelBoth = `${sub.label_en} ${sub.label_bn}`.toLowerCase();
    if (words.some((w) => labelBoth.includes(w.toLowerCase()))) {
      labels.push(label);
    }
  }
  for (const cat of categoryMeta) {
    const label = isBn ? cat.label_bn : cat.label_en;
    const labelBoth = `${cat.label_en} ${cat.label_bn}`.toLowerCase();
    if (words.some((w) => labelBoth.includes(w.toLowerCase()))) {
      labels.push(label);
    }
  }
  return [...new Set(labels)];
}

function SearchResults() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const { isBn } = useLanguage();

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Dua[]>(() =>
    initialQuery ? searchDuas(initialQuery) : duas
  );

  useEffect(() => {
    if (query.trim()) {
      setResults(searchDuas(query));
    } else {
      setResults(duas);
    }
  }, [query]);

  const heading = query.trim()
    ? isBn
      ? `"${query}" এর ফলাফল`
      : `Results for "${query}"`
    : isBn
    ? "সকল দোয়া"
    : "All Duas";

  const matchedLabels = getMatchedLabels(query, isBn);

  return (
    <div className="space-y-6">
      {/* Centered search hero */}
      <div className="flex flex-col items-center gap-3 py-4">
        <h1 className={cn("text-2xl sm:text-3xl font-bold text-center", isBn ? "bangla" : "")}>
          {isBn ? "দোয়া খুঁজুন" : "Search Duas"}
        </h1>
        <p className={cn("text-sm text-muted-foreground text-center", isBn ? "bangla" : "")}>
          {isBn ? "বাংলা, ইংরেজি, আরবি বা বিভাগের নাম দিয়ে খুঁজুন" : "Search by Bengali, English, Arabic or category name"}
        </p>
        <SearchBar
          defaultValue={initialQuery}
          onSearch={setQuery}
          className="w-full max-w-2xl"
        />
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className={cn("text-base font-semibold", isBn ? "bangla" : "")}>
          {heading}
        </p>
        <span className="text-sm text-muted-foreground">
          {results.length} {isBn ? "টি" : "found"}
        </span>
      </div>

      {/* Category match hint */}
      {matchedLabels.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className={cn("text-xs text-muted-foreground", isBn ? "bangla" : "")}>
            {isBn ? "বিভাগ অনুযায়ী:" : "Matching categories:"}
          </span>
          {matchedLabels.map((label) => (
            <span
              key={label}
              className={cn(
                "text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20",
                isBn ? "bangla" : ""
              )}
            >
              {label}
            </span>
          ))}
        </div>
      )}

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((dua) => (
            <DuaCard key={dua.id} dua={dua} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p className={cn("text-lg", isBn ? "bangla" : "")}>
            {isBn ? "কোনো ফলাফল পাওয়া যায়নি" : "No results found"}
          </p>
          <p className="text-sm mt-1">
            {isBn ? "ভিন্ন শব্দ দিয়ে চেষ্টা করুন" : "Try different keywords"}
          </p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Suspense fallback={<div className="text-muted-foreground">Loading…</div>}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
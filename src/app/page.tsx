"use client";

import { duas, categoryMeta } from "@/data/duas";
import { useLanguage } from "@/context/LanguageContext";
import { CategoryCard } from "@/components/CategoryCard";
import { DuaCard } from "@/components/DuaCard";
import { SearchBar } from "@/components/SearchBar";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// compute category counts
const categoryCounts = Object.fromEntries(
  categoryMeta.map((cat) => [
    cat.id,
    duas.filter((d) => d.category === cat.id).length,
  ])
);

// featured duas (first of each category)
const featuredDuas = categoryMeta
  .map((cat) => duas.find((d) => d.category === cat.id))
  .filter(Boolean) as typeof duas;

export default function HomePage() {
  const { isBn } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      {/* Hero */}
      <section className="text-center space-y-4 py-6">
        <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isBn ? "কুরআন, সুন্নাহ ও সালাফ" : "Quran, Sunnah & Salaf"}</span>
        </div>
        <h1
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
            isBn ? "bangla" : ""
          )}
        >
          {isBn ? (
            <>
              ইসলামিক <span className="text-primary">দোয়া</span> সংকলন
            </>
          ) : (
            <>
              Islamic <span className="text-primary">Supplications</span>
            </>
          )}
        </h1>
        <p
          className={cn(
            "text-muted-foreground max-w-lg mx-auto text-base sm:text-lg",
            isBn ? "bangla" : ""
          )}
        >
          {isBn
            ? "কুরআন, সুন্নাহ ও সালাফ থেকে বিশুদ্ধ দোয়া — আরবি, বাংলা ও ইংরেজিতে"
            : "Authenticated duas from the Quran, Sunnah, and Salaf — in Arabic, English, and Bangla"}
        </p>
        <div className="max-w-lg mx-auto pt-2">
          <SearchBar redirect className="shadow-sm" />
        </div>
        <p className="text-xs text-muted-foreground">
          {duas.length} {isBn ? "টি দোয়া উপলব্ধ" : "duas available"}
        </p>
      </section>

      {/* Categories */}
      <section>
        <h2
          className={cn(
            "text-xl font-bold mb-4",
            isBn ? "bangla" : ""
          )}
        >
          {isBn ? "বিভাগ সমূহ" : "Browse by Category"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categoryMeta.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              count={categoryCounts[cat.id] ?? 0}
            />
          ))}
        </div>
      </section>

      {/* Featured Duas */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className={cn("text-xl font-bold", isBn ? "bangla" : "")}>
            {isBn ? "বিশেষ নির্বাচিত দোয়া" : "Featured Duas"}
          </h2>
          <Link
            href="/search"
            className="text-sm text-primary hover:underline"
          >
            {isBn ? "সব দেখুন →" : "View all →"}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredDuas.slice(0, 4).map((dua) => (
            <DuaCard key={dua.id} dua={dua} />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-3 gap-3 text-center">
        {categoryMeta.map((cat) => (
          <div
            key={cat.id}
            className="bg-card border border-border rounded-xl p-3 sm:p-4"
          >
            <p className="text-2xl sm:text-3xl font-bold text-primary">
              {categoryCounts[cat.id]}
            </p>
            <p
              className={cn(
                "text-xs sm:text-sm text-muted-foreground mt-1",
                isBn ? "bangla" : ""
              )}
            >
              {isBn ? cat.label_bn : cat.label_en}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

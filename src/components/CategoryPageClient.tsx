"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { duas, categoryMeta, subcategoryMeta } from "@/data/duas";
import { useLanguage } from "@/context/LanguageContext";
import { DuaCard } from "@/components/DuaCard";
import { SearchBar } from "@/components/SearchBar";
import type { DuaCategory } from "@/types/dua";
import { cn } from "@/lib/utils";

// Per-category gradient + accent colour
const CATEGORY_THEME: Record<string, { hero: string; accent: string; badge: string }> = {
  quran: {
    hero: "from-emerald-600 via-teal-600 to-cyan-700",
    accent: "border-emerald-500",
    badge: "text-emerald-200",
  },
  sunnah: {
    hero: "from-amber-500 via-orange-500 to-yellow-600",
    accent: "border-amber-500",
    badge: "text-amber-200",
  },
  salaf: {
    hero: "from-violet-600 via-purple-600 to-indigo-700",
    accent: "border-violet-500",
    badge: "text-violet-200",
  },
};

const DEFAULT_THEME = {
  hero: "from-slate-600 via-slate-700 to-slate-800",
  accent: "border-slate-400",
  badge: "text-slate-300",
};

export function CategoryPageClient({ slug }: { slug: string }) {
  const { isBn } = useLanguage();

  const category = categoryMeta.find((c) => c.slug === slug);
  if (!category) notFound();

  const catId = category.id as DuaCategory;
  const theme = CATEGORY_THEME[catId] ?? DEFAULT_THEME;
  const categoryDuas = duas.filter((d) => d.category === catId);
  const subcats = subcategoryMeta.filter((s) => s.category === catId && categoryDuas.some((d) => d.subcategory === s.id));

  // Does the nav need scrolling? (more than 6 subcategories)
  const manySubcats = subcats.length > 6;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">

      {/* ── Hero ── */}
      <div className={cn("rounded-2xl bg-linear-to-br p-8 text-white space-y-4", theme.hero)}>
        <div className="space-y-2">
          <p className={cn("text-sm font-medium uppercase tracking-wider", theme.badge)}>
            {isBn ? "দোয়া সংকলন" : "Duas Collection"}
          </p>
          <h1 className={cn("text-3xl sm:text-4xl font-bold", isBn ? "bangla" : "")}>
            {isBn ? category.label_bn : category.label_en}
          </h1>
          <p className={cn("text-white/80 max-w-xl leading-relaxed", isBn ? "bangla text-sm" : "text-sm")}>
            {isBn ? category.description_bn : category.description_en}
            {" "}
            <span className="opacity-70">
              {categoryDuas.length}{isBn ? "টি দোয়া।" : " duas."}
            </span>
          </p>
        </div>
        <div className="pt-2">
          <SearchBar
            placeholder={isBn ? "দোয়া খুঁজুন..." : `Search ${category.label_en} duas...`}
            redirect
          />
        </div>
      </div>

      {/* ── Subcategory quick-nav ── */}
      {subcats.length > 0 && (
        <div>
          {manySubcats && (
            <p className={cn("text-xs text-muted-foreground mb-2", isBn ? "bangla" : "")}>
              {isBn ? "নিচে স্ক্রোল করুন" : "Scroll to browse subcategories"}
            </p>
          )}
          <div
            className={cn(
              "grid gap-3",
              manySubcats
                ? "grid-cols-2 sm:grid-cols-3 max-h-56 overflow-y-auto pr-1 scrollbar-thin"
                : subcats.length <= 2
                ? "grid-cols-2"
                : subcats.length <= 4
                ? "grid-cols-2 sm:grid-cols-4"
                : "grid-cols-2 sm:grid-cols-3"
            )}
          >
            {subcats.map((subcat) => {
              const count = categoryDuas.filter((d) => d.subcategory === subcat.id).length;
              return (
                <a
                  key={subcat.id}
                  href={`#${subcat.id}`}
                  className="flex flex-col gap-1 p-4 rounded-xl border border-border bg-card hover:bg-muted transition-colors"
                >
                  <span className={cn("font-medium text-sm leading-snug", isBn ? "bangla" : "")}>
                    {isBn ? subcat.label_bn : subcat.label_en}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {count}{isBn ? " টি দোয়া" : " duas"}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Sections ── */}
      {subcats.map((subcat) => {
        const subcatDuas = categoryDuas.filter((d) => d.subcategory === subcat.id);
        if (subcatDuas.length === 0) return null;

        return (
          <section key={subcat.id} id={subcat.id} className="space-y-4 scroll-mt-20">
            <div className={cn("border-l-4 pl-4", theme.accent)}>
              <h2 className={cn("text-xl font-bold", isBn ? "bangla" : "")}>
                {isBn ? subcat.label_bn : subcat.label_en}
              </h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                {subcatDuas.length} {isBn ? "টি দোয়া" : "duas"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subcatDuas.map((dua) => (
                <DuaCard key={dua.id} dua={dua} />
              ))}
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <div className="rounded-xl border border-border bg-muted/40 p-6 text-center space-y-3">
        <h3 className={cn("font-semibold text-lg", isBn ? "bangla" : "")}>
          {isBn ? "আরও দোয়া অন্বেষণ করুন" : "Explore More Duas"}
        </h3>
        <p className={cn("text-sm text-muted-foreground", isBn ? "bangla" : "")}>
          {isBn
            ? "কুরআন, হাদিস ও সালাফ থেকে আরও অনেক দোয়া রয়েছে।"
            : "Discover more supplications from the Quran, Hadith, and the righteous Salaf."}
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-1">
          {catId !== "quran" && (
            <Link
              href="/category/quran"
              className="px-4 py-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors text-sm font-medium"
            >
              {isBn ? "কুরআনের দোয়া" : "Quranic Duas"}
            </Link>
          )}
          {catId !== "sunnah" && (
            <Link
              href="/category/sunnah"
              className="px-4 py-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors text-sm font-medium"
            >
              {isBn ? "সুন্নাহ দোয়া" : "Sunnah Duas"}
            </Link>
          )}
          {catId !== "salaf" && (
            <Link
              href="/category/salaf"
              className="px-4 py-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors text-sm font-medium"
            >
              {isBn ? "সালাফদের দোয়া" : "Salaf Duas"}
            </Link>
          )}
          <Link
            href="/search"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
          >
            {isBn ? "সব দোয়া খুঁজুন" : "Search All Duas"}
          </Link>
        </div>
      </div>
    </div>
  );
}

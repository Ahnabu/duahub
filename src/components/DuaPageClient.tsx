"use client";

import Link from "next/link";
import { ChevronLeft, Tag } from "lucide-react";
import { duas, categoryMeta } from "@/data/duas";
import { useLanguage } from "@/context/LanguageContext";
import { DuaCard } from "@/components/DuaCard";
import { ShareMenu } from "@/components/ShareMenu";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

export function DuaPageClient({ slug }: { slug: string }) {
  const { isBn } = useLanguage();

  const dua = duas.find((d) => d.slug === slug);
  if (!dua) notFound();

  const category = categoryMeta.find((c) => c.id === dua.category);

  const related = duas
    .filter((d) => d.subcategory === dua.subcategory && d.id !== dua.id)
    .slice(0, 3);

  const pageUrl = typeof window !== "undefined" ? window.location.href : `/dua/${slug}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <Link href="/" className="hover:text-foreground transition-colors">
          {isBn ? "হোম" : "Home"}
        </Link>
        <span>/</span>
        {category && (
          <>
            <Link
              href={`/category/${category.slug}`}
              className="hover:text-foreground transition-colors"
            >
              {isBn ? category.label_bn : category.label_en}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-foreground truncate max-w-[200px]">
          {isBn ? dua.purpose_bn : dua.purpose_en}
        </span>
      </nav>

      {/* Main card */}
      <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
        {/* Purpose header */}
        <div className="px-6 pt-6 pb-4 border-b border-border">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                {isBn ? dua.subcategory_label_bn : dua.subcategory_label_en}
              </span>
              <h1
                className={cn(
                  "text-xl font-bold leading-snug",
                  isBn ? "bangla" : ""
                )}
              >
                {isBn ? dua.purpose_bn : dua.purpose_en}
              </h1>
              <p className="text-sm text-muted-foreground">{dua.source}</p>
            </div>
            <ShareMenu
              url={pageUrl}
              title={isBn ? dua.purpose_bn : dua.purpose_en}
              text={dua.meaning_en}
            />
          </div>
        </div>

        {/* Arabic */}
        <div className="px-6 py-6 bg-muted/30">
          <p
            className="arabic text-right text-3xl sm:text-4xl leading-loose text-foreground"
            dir="rtl"
            lang="ar"
          >
            {dua.arabic}
          </p>
        </div>

        {/* Transliteration */}
        <div className="px-6 py-4 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Transliteration
          </p>
          <p className="italic text-muted-foreground leading-relaxed">
            {dua.transliteration}
          </p>
        </div>

        {/* English meaning */}
        <div className="px-6 py-4 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            English Meaning
          </p>
          <p className="text-foreground leading-relaxed">{dua.meaning_en}</p>
        </div>

        {/* Bangla meaning */}
        <div className="px-6 py-4 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            বাংলা অর্থ
          </p>
          <p className="bangla text-foreground leading-relaxed text-sm">
            {dua.meaning_bn}
          </p>
        </div>

        {/* Tags */}
        {dua.tags.length > 0 && (
          <div className="px-6 py-4 border-t border-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              {dua.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related duas */}
      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className={cn("text-lg font-semibold", isBn ? "bangla" : "")}>
            {isBn ? "সম্পর্কিত দোয়া" : "Related Duas"}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {related.map((r) => (
              <DuaCard key={r.id} dua={r} />
            ))}
          </div>
        </section>
      )}

      {/* Back */}
      <Link
        href={category ? `/category/${category.slug}` : "/"}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        {isBn
          ? `${category ? category.label_bn : "হোম"} এ ফিরে যান`
          : `Back to ${category ? category.label_en : "Home"}`}
      </Link>
    </div>
  );
}

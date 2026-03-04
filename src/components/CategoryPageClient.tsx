"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { duas, categoryMeta, subcategoryMeta } from "@/data/duas";
import { useLanguage } from "@/context/LanguageContext";
import { DuaCard } from "@/components/DuaCard";
import type { DuaCategory } from "@/types/dua";
import { cn } from "@/lib/utils";

export function CategoryPageClient({ slug }: { slug: string }) {
  const { isBn } = useLanguage();

  const category = categoryMeta.find((c) => c.slug === slug);
  if (!category) notFound();

  const catId = category.id as DuaCategory;
  const categoryDuas = duas.filter((d) => d.category === catId);
  const subcats = subcategoryMeta.filter((s) => s.category === catId);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        {isBn ? "প্রথম পাতা" : "Home"}
      </Link>

      {/* Header */}
      <div>
        <h1 className={cn("text-3xl font-bold", isBn ? "bangla" : "")}>
          {isBn ? category.label_bn : category.label_en}
        </h1>
        <p
          className={cn(
            "text-muted-foreground mt-2 max-w-2xl",
            isBn ? "bangla text-sm" : ""
          )}
        >
          {isBn ? category.description_bn : category.description_en}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {categoryDuas.length} {isBn ? "টি দোয়া" : "duas"}
        </p>
      </div>

      {/* Subcategories */}
      {subcats.map((subcat) => {
        const subcatDuas = categoryDuas.filter(
          (d) => d.subcategory === subcat.id
        );
        if (subcatDuas.length === 0) return null;

        return (
          <section key={subcat.id} className="space-y-4">
            <h2
              className={cn(
                "text-lg font-semibold border-b border-border pb-2",
                isBn ? "bangla" : ""
              )}
            >
              {isBn ? subcat.label_bn : subcat.label_en}
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                ({subcatDuas.length})
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subcatDuas.map((dua) => (
                <DuaCard key={dua.id} dua={dua} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

"use client";

import Link from "next/link";
import { BookOpen, Star, Users } from "lucide-react";
import type { CategoryMeta } from "@/types/dua";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const iconMap = {
  BookOpen,
  Star,
  Users,
} as const;

const colorVariants: Record<string, string> = {
  emerald: "from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300",
  amber: "from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300",
  violet: "from-violet-50 to-violet-100 dark:from-violet-950 dark:to-violet-900 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300",
};

interface CategoryCardProps {
  category: CategoryMeta;
  count: number;
}

export function CategoryCard({ category, count }: CategoryCardProps) {
  const { isBn } = useLanguage();
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] ?? BookOpen;
  const colorClass = colorVariants[category.color] ?? colorVariants.emerald;

  return (
    <Link
      href={`/category/${category.slug}`}
      className={cn(
        "block rounded-2xl border bg-linear-to-br p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 focus-ring",
        colorClass
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <IconComponent className="w-7 h-7 mt-0.5 shrink-0" />
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/50 dark:bg-black/20">
          {count} duas
        </span>
      </div>
      <h2
        className={cn(
          "mt-3 font-bold text-xl leading-snug",
          isBn ? "bangla" : ""
        )}
      >
        {isBn ? category.label_bn : category.label_en}
      </h2>
      <p
        className={cn(
          "mt-1 text-sm opacity-80 leading-relaxed line-clamp-2",
          isBn ? "bangla" : ""
        )}
      >
        {isBn ? category.description_bn : category.description_en}
      </p>
    </Link>
  );
}

"use client";

import Link from "next/link";
import { Bookmark, BookmarkCheck, Copy, Check } from "lucide-react";
import { useState, useCallback } from "react";
import type { Dua } from "@/types/dua";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { useBookmarks } from "@/hooks/useBookmarks";
import { ShareMenu } from "@/components/ShareMenu";

interface DuaCardProps {
  dua: Dua;
  /** If true, renders arabic text larger (detail view) */
  expanded?: boolean;
}

export function DuaCard({ dua, expanded = false }: DuaCardProps) {
  const { isBn } = useLanguage();
  const { isBookmarked, toggle } = useBookmarks();
  const [copied, setCopied] = useState(false);

  const bookmarked = isBookmarked(dua.id);

  const handleCopy = useCallback(async () => {
    const text = `${dua.arabic}\n\n${dua.transliteration}\n\n${isBn ? dua.meaning_bn : dua.meaning_en}\n\nSource: ${dua.source}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [dua, isBn]);

  const purposeLabel = isBn ? dua.purpose_bn : dua.purpose_en;
  const meaningLabel = isBn ? dua.meaning_bn : dua.meaning_en;
  const subcategoryLabel = isBn ? dua.subcategory_label_bn : dua.subcategory_label_en;

  return (
    <article className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-2">
        <div className="flex-1 min-w-0">
          <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground mb-1">
            {subcategoryLabel}
          </span>
          <h3 className={cn("font-semibold leading-snug", isBn ? "bangla text-base" : "text-sm")}>
            {expanded ? (
              purposeLabel
            ) : (
              <Link
                href={`/dua/${dua.slug}`}
                className="hover:text-primary transition-colors line-clamp-2"
              >
                {purposeLabel}
              </Link>
            )}
          </h3>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleCopy}
            aria-label="Copy dua"
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <ShareMenu
            url={`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/dua/${dua.slug}`}
            title={purposeLabel}
            text={`${dua.arabic}\n\n${dua.transliteration}\n\n${meaningLabel}`}
          />
          <button
            onClick={() => toggle(dua.id)}
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark dua"}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            {bookmarked ? (
              <BookmarkCheck className="w-3.5 h-3.5 text-primary" />
            ) : (
              <Bookmark className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Arabic */}
      <div className="px-4 pt-2 pb-3">
        <p
          className={cn(
            "arabic text-right leading-loose text-foreground",
            expanded ? "text-3xl sm:text-3xl" : "text-2xl sm:text-2xl"
          )}
          dir="rtl"
          lang="ar"
        >
          {dua.arabic}
        </p>
      </div>

      {/* Transliteration */}
      <div className="px-4 pb-2">
        <p className="text-sm italic text-muted-foreground leading-relaxed">
          {dua.transliteration}
        </p>
      </div>

      {/* Meaning */}
      <div className="px-4 pb-3">
        <p
          className={cn(
            "leading-relaxed text-foreground",
            isBn ? "bangla text-sm" : "text-sm"
          )}
        >
          {meaningLabel}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground truncate">{dua.source}</p>
        {!expanded && (
          <Link
            href={`/dua/${dua.slug}`}
            className="text-xs text-primary hover:underline shrink-0"
          >
            {isBn ? "বিস্তারিত →" : "Details →"}
          </Link>
        )}
      </div>
    </article>
  );
}

"use client";

import Link from "next/link";
import { duas, subcategoryMeta } from "@/data/duas";
import { useLanguage } from "@/context/LanguageContext";
import { DuaCard } from "@/components/DuaCard";
import { SearchBar } from "@/components/SearchBar";
import { cn } from "@/lib/utils";

const RAMADAN_SUBCATS = ["ramadan"] as const;

const SECTIONS = [
  {
    id: "iftar",
    label_en: "Iftar Dua (Breaking the Fast)",
    label_bn: "ইফতারের দোয়া",
    tags: ["iftar"],
    description_en:
      "Duas to recite when breaking the fast at sunset. The prophet ﷺ said: 'The supplication of the fasting person is not rejected.'",
    description_bn:
      "ইফতারের সময় পড়ার দোয়া। নবী ﷺ বলেছেন: 'রোজাদারের দোয়া প্রত্যাখ্যান হয় না।'",
  },
  {
    id: "sehri",
    label_en: "Sehri / Suhoor Dua",
    label_bn: "সেহরির দোয়া",
    tags: ["sehri", "suhoor"],
    description_en:
      "Intention and dua for the pre-dawn meal (suhoor) before beginning the fast.",
    description_bn:
      "রোজার নিয়ত ও সেহরির দোয়া — ভোরের খাবারের সময় পড়তে হয়।",
  },
  {
    id: "ashra",
    label_en: "Ashra Duas (Three Stages of Ramadan)",
    label_bn: "আশরার দোয়া",
    tags: ["ashra", "first ashra", "second ashra", "third ashra", "laylatul qadr"],
    description_en:
      "Ramadan is divided into three ten-day ashras: first (mercy), second (forgiveness), third (protection from Hell) and the dua for Laylatul Qadr.",
    description_bn:
      "রমজান তিনটি দশকে বিভক্ত: প্রথম আশরা (রহমত), দ্বিতীয় আশরা (মাগফিরাত), তৃতীয় আশরা (জাহান্নাম থেকে মুক্তি) এবং লাইলাতুল কদরের দোয়া।",
  },
  {
    id: "taraweeh",
    label_en: "Taraweeh Dua",
    label_bn: "তারাবির দোয়া",
    tags: ["taraweeh"],
    description_en:
      "The dua recited between sets of Taraweeh prayers during Ramadan nights.",
    description_bn:
      "তারাবিহ নামাজের প্রতি চার রাকাতের পর পড়ার দোয়া।",
  },
];

export function RamadanPageClient() {
  const { isBn } = useLanguage();

  const ramadanDuas = duas.filter((d) => d.subcategory === "ramadan");

  function getDuasByTags(tags: string[]) {
    return ramadanDuas.filter((d) =>
      tags.some((tag) =>
        d.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
      )
    );
  }

  const totalCount = ramadanDuas.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      {/* Hero */}
      <div className="rounded-2xl bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-700 p-8 text-white space-y-4">
        <div className="space-y-2">
          <p className="text-emerald-200 text-sm font-medium uppercase tracking-wider">
            {isBn ? "রমজান মাস" : "The Holy Month"}
          </p>
          <h1 className={cn("text-3xl sm:text-4xl font-bold", isBn ? "bangla" : "")}>
            {isBn ? "রমজানের দোয়া সংকলন" : "Ramadan Duas Collection"}
          </h1>
          <p className={cn("text-emerald-100 max-w-xl leading-relaxed", isBn ? "bangla text-sm" : "text-sm")}>
            {isBn
              ? `${totalCount}টি প্রামাণিক দোয়া — ইফতার, সেহরি, তারাবিহ, আশরা ও লাইলাতুল কদর সহ। আরবি, বাংলা অনুবাদ ও উচ্চারণসহ।`
              : `${totalCount} authentic supplications for iftar, sehri/suhoor, taraweeh, the three ashras and Laylatul Qadr — with Arabic text, transliteration, and English/Bangla meanings.`}
          </p>
        </div>
        <div className="pt-2">
          <SearchBar placeholder={isBn ? "দোয়া খুঁজুন..." : "Search Ramadan duas..."} redirect />
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex flex-col gap-1 p-4 rounded-xl border border-border bg-card hover:bg-muted transition-colors"
          >
            <span className={cn("font-medium text-sm", isBn ? "bangla" : "")}>
              {isBn ? section.label_bn : section.label_en}
            </span>
            <span className="text-xs text-muted-foreground">
              {getDuasByTags(section.tags).length}{" "}
              {isBn ? "টি দোয়া" : "duas"}
            </span>
          </a>
        ))}
      </div>

      {/* Sections */}
      {SECTIONS.map((section) => {
        const sectionDuas = getDuasByTags(section.tags);
        if (sectionDuas.length === 0) return null;

        return (
          <section key={section.id} id={section.id} className="space-y-4 scroll-mt-20">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h2 className={cn("text-xl font-bold", isBn ? "bangla" : "")}>
                {isBn ? section.label_bn : section.label_en}
              </h2>
              <p className={cn("text-sm text-muted-foreground mt-1 max-w-2xl", isBn ? "bangla" : "")}>
                {isBn ? section.description_bn : section.description_en}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sectionDuas.map((dua) => (
                <DuaCard key={dua.id} dua={dua} />
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
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
          <Link
            href="/category/sunnah"
            className="px-4 py-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors text-sm font-medium"
          >
            {isBn ? "সুন্নাহ দোয়া" : "Sunnah Duas"}
          </Link>
          <Link
            href="/category/quran"
            className="px-4 py-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors text-sm font-medium"
          >
            {isBn ? "কুরআনের দোয়া" : "Quranic Duas"}
          </Link>
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

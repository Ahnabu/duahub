import type { CategoryMeta, SubcategoryMeta } from "@/types/dua";

export const categories: CategoryMeta[] = [
  {
    id: "quran",
    slug: "quran",
    label_en: "Quranic Duas",
    label_bn: "কুরআনের দোয়া",
    description_en: "Supplications directly from the Holy Quran — the divine blueprint for calling upon Allah.",
    description_bn: "পবিত্র কুরআন থেকে সরাসরি গৃহীত দোয়া — মহান আল্লাহকে আহ্বানের ঐশী নীলনকশা।",
    icon: "📖",
    color: "emerald",
  },
  {
    id: "sunnah",
    slug: "sunnah",
    label_en: "Prophetic Duas",
    label_bn: "নবীজির (সা.) দোয়া",
    description_en: "Supplications from the Prophet Muhammad ﷺ — weaving remembrance into every act of daily life.",
    description_bn: "নবী মুহাম্মাদ (সা.)-এর সুন্নাহ থেকে প্রাপ্ত দোয়া — দৈনন্দিন জীবনের প্রতিটি কাজে ঐশী স্মরণ।",
    icon: "🌙",
    color: "amber",
  },
  {
    id: "salaf",
    slug: "salaf",
    label_en: "From the Salaf",
    label_bn: "সালাফদের দোয়া",
    description_en: "Supplications of the Sahabah and Tabi'un — lived piety applied to real historical challenges.",
    description_bn: "সাহাবা ও তাবেয়ীদের দোয়া — বাস্তব ঐতিহাসিক সংকটে জীবন্ত আধ্যাত্মিকতার প্রয়োগ।",
    icon: "⭐",
    color: "purple",
  },
];

export const subcategories: SubcategoryMeta[] = [
  { id: "repentance", slug: "repentance", label_en: "Repentance & Forgiveness", label_bn: "তাওবা ও ক্ষমা", category: "quran" },
  { id: "family", slug: "family", label_en: "Family & Offspring", label_bn: "পরিবার ও সন্তান", category: "quran" },
  { id: "protection", slug: "protection", label_en: "Protection & Steadfastness", label_bn: "সুরক্ষা ও অবিচলতা", category: "quran" },
  { id: "wisdom", slug: "wisdom", label_en: "Wisdom & Guidance", label_bn: "প্রজ্ঞা ও হেদায়েত", category: "quran" },
  { id: "salah", slug: "salah", label_en: "Salah & Worship", label_bn: "সালাত ও ইবাদত", category: "sunnah" },
  { id: "daily-life", slug: "daily-life", label_en: "Daily Life", label_bn: "প্রাত্যহিক জীবন", category: "sunnah" },
  { id: "morning-evening", slug: "morning-evening", label_en: "Morning & Evening", label_bn: "সকাল ও সন্ধ্যা", category: "sunnah" },
  { id: "sahabah", slug: "sahabah", label_en: "Companions (Sahabah)", label_bn: "সাহাবায়ে কেরাম", category: "salaf" },
  { id: "tabiun", slug: "tabiun", label_en: "Successors (Tabi'un)", label_bn: "তাবেয়ীগণ", category: "salaf" },
];

export function getCategoryMeta(id: string): CategoryMeta | undefined {
  return categories.find((c) => c.id === id || c.slug === id);
}

export function getSubcategoryMeta(id: string): SubcategoryMeta | undefined {
  return subcategories.find((s) => s.id === id || s.slug === id);
}

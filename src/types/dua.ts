export type DuaCategory = "quran" | "sunnah" | "salaf";

export type DuaSubcategory =
  | "repentance"
  | "family"
  | "protection"
  | "wisdom"
  | "salah"
  | "daily-life"
  | "morning-evening"
  | "food"
  | "ramadan"
  | "istikhara"
  | "travel"
  | "sahabah"
  | "tabiun"
  | "healing"
  | "sustenance"
  | "sunnah-healing"
  |"sunnah-sustenance"
  | "sunnah-travel"
  | "sunnah-family"
  | "sunnah-daily-life"
  | "sunnah-morning-evening"
  |"sunnah-wisdom"
  |"sunnah-protection"
  |"sunnah-repentance"
  | "general"
  | "guidance"
  | "gratitude"
  | "patience"
  | "knowledge"
  | "steadfastness"
  | "fear"
  | "hope"
  | "tawakkul"
  | "purification"
  | "akhira"
  | "dunya"
  | "community"
  | "leadership"
  | "character"
  | "rizq"
  | "hardship"
  | "ease"
  | "strength"
  | "faith"
  | "unity"
  | "remembrance"
  | "dhikr"
  | "sleep"
  | "home"
  | "clothing"
  | "safety"
  | "health"
  | "forgiveness"
  | "reflection"
  | "success"
  | "discipline";

export interface Dua {
  id: string;
  slug: string;
  category: DuaCategory;
  subcategory: DuaSubcategory;
  subcategory_label_en: string;
  subcategory_label_bn: string;
  purpose_en: string;
  purpose_bn: string;
  source: string;
  arabic: string;
  transliteration: string;
  meaning_bn: string;
  meaning_en: string;
  tags: string[];
  /** Optional theological/spiritual context and significance of the dua (English) */
  context_en?: string;
  /** Optional theological/spiritual context and significance of the dua (Bangla) */
  context_bn?: string;
}

export interface CategoryMeta {
  id: DuaCategory;
  slug: string;
  label_en: string;
  label_bn: string;
  description_en: string;
  description_bn: string;
  icon: string;
  color: string;
  count?: number;
}

export interface SubcategoryMeta {
  id: DuaSubcategory;
  slug: string;
  label_en: string;
  label_bn: string;
  category: DuaCategory;
}

export type Language = "en" | "bn";

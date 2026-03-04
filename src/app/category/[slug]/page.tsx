import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryMeta, duas } from "@/data/duas";
import { CategoryPageClient } from "@/components/CategoryPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryMeta.find((c) => c.slug === slug);
  if (!category) return {};

  const count = duas.filter((d) => d.category === category.id).length;

  const titles: Record<string, string> = {
    quran: `Quranic Duas – ${count} Supplications from the Quran | DuaHub`,
    sunnah: `Duas from Sunnah – ${count} Prophetic Supplications | DuaHub`,
    salaf: `Duas of the Salaf – ${count} Supplications from the Righteous | DuaHub`,
  };

  const descriptions: Record<string, string> = {
    quran: `Explore ${count} duas from the Holy Quran including morning/evening adhkar, dua qunoot, dua masura, and more. Arabic text, transliteration, English and Bangla meanings.`,
    sunnah: `Explore ${count} duas from the Sunnah including iftar dua, sehri ki dua, manzil dua, istikhara dua, Ramadan supplications and more. Arabic, transliteration and English/Bangla.`,
    salaf: `Explore ${count} duas and supplications from the Sahabah, Taabi'een and righteous scholars of Islam. Arabic text with transliteration and meanings.`,
  };

  const title = titles[slug] ?? `${category.label_en} | DuaHub`;
  const description = descriptions[slug] ?? category.description_en;

  const keywords: Record<string, string[]> = {
    quran: ["dua from quran", "quranic dua", "dua qunoot", "dua masura", "morning dua", "evening dua", "dua for protection", "Islamic supplications"],
    sunnah: ["dua from hadith", "iftar dua", "sehri ki dua", "taraweeh ki dua", "dua istikhara", "manzil dua", "Ramadan dua", "dua before eating", "first ashra dua", "prophetic supplication"],
    salaf: ["duas of sahabah", "duas of salaf", "duas of tabiun", "Islamic prayers", "righteous scholars dua"],
  };

  return {
    title,
    description,
    keywords: keywords[slug] ?? [],
    openGraph: { title, description, type: "website" },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `/category/${slug}` },
  };
}

export async function generateStaticParams() {
  return categoryMeta.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const exists = categoryMeta.some((c) => c.slug === slug);
  if (!exists) notFound();
  return <CategoryPageClient slug={slug} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { duas, categoryMeta } from "@/data/duas";
import { DuaPageClient } from "@/components/DuaPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dua = duas.find((d) => d.slug === slug);
  if (!dua) return {};

  const title = `${dua.purpose_en} – Arabic, Transliteration & Meaning | DuaHub`;
  const description = `${dua.purpose_en}: Read the Arabic text, transliteration, English and Bangla meaning. Source: ${dua.source}.`;

  return {
    title,
    description,
    keywords: [...dua.tags, dua.purpose_en, "dua", "Islamic supplication", "Arabic", "meaning", "transliteration"],
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/dua/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return duas.map((d) => ({ slug: d.slug }));
}

export default async function DuaPage({ params }: Props) {
  const { slug } = await params;
  const exists = duas.some((d) => d.slug === slug);
  if (!exists) notFound();
  return <DuaPageClient slug={slug} />;
}

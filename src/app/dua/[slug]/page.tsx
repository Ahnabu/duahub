import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { duas } from "@/data/duas";
import { DuaPageClient } from "@/components/DuaPageClient";
import Script from "next/script";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dua = duas.find((d) => d.slug === slug);
  if (!dua) return {};

  const title = `${dua.purpose_en} (${dua.purpose_bn}) – DuaHub`;
  const description = `${dua.purpose_en} / ${dua.purpose_bn}. Learn this dua with Arabic text, transliteration, English & Bangla translation. Source: ${dua.source}.`;
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://duahub.vercel.app";
  const url = `${siteUrl}/dua/${slug}`;

  return {
    title,
    description,
    keywords: [
      ...dua.tags,
      dua.subcategory_label_en,
      "Dua",
      "Supplication",
      "Arabic",
      "Transliteration",
      "English Meaning",
      "Bangla Meaning",
      "Quranic Dua",
      "Masnoon Dua"
    ],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "DuaHub",
      locale: "en_US",
      type: "article",
      authors: ["DuaHub Team"],
      tags: dua.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@duahub", // Replace with actual handle if available
    },
  };
}

export async function generateStaticParams() {
  return duas.map((d) => ({ slug: d.slug }));
}

export default async function DuaPage({ params }: Props) {
  const { slug } = await params;
  const dua = duas.find((d) => d.slug === slug); // Find the dua directly here
  
  if (!dua) notFound();

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": dua.purpose_en,
    "alternativeHeadline": dua.purpose_bn,
    "description": `Learn the dua for "${dua.purpose_en}" with Arabic text, transliteration, and translations.`,
    "author": {
      "@type": "Organization",
      "name": "DuaHub"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DuaHub",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://duahub.vercel.app"}/icon.png`
      }
    },
    "datePublished": "2024-01-01", // Or dynamic if you have creation dates
    "inLanguage": ["en", "bn", "ar"],
    "about": {
      "@type": "Thing",
      "name": "Islamic Supplication",
      "sameAs": "https://en.wikipedia.org/wiki/Dua"
    },
    "articleBody": `${dua.arabic} \n ${dua.transliteration} \n ${dua.meaning_en}`,
    "keywords": dua.tags.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://duahub.vercel.app"}/dua/${slug}`
    }
  };
  
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": process.env.NEXT_PUBLIC_SITE_URL || "https://duahub.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": dua.category.charAt(0).toUpperCase() + dua.category.slice(1),
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || "https://duahub.vercel.app"}/category/${dua.category}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": dua.purpose_en,
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || "https://duahub.vercel.app"}/dua/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DuaPageClient slug={slug} />
    </>
  );
}

import type { Metadata } from "next";
import { RamadanPageClient } from "@/components/RamadanPageClient";

export const metadata: Metadata = {
  title: "Ramadan Duas – Iftar, Sehri, Taraweeh & Ashra Supplications | DuaHub",
  description:
    "Complete Ramadan duas collection: iftar dua, sehri ki dua (suhoor), taraweeh ki dua, first/second/third ashra duas, and Laylatul Qadr supplication. Arabic text with transliteration and English/Bangla meanings.",
  keywords: [
    "ramadan dua",
    "iftar dua",
    "iftar ki dua",
    "dua for breaking fast",
    "sehri ki dua",
    "sehri dua",
    "suhoor dua",
    "taraweeh ki dua",
    "taraweeh dua",
    "first ashra dua",
    "second ashra dua",
    "third ashra dua",
    "laylatul qadr dua",
    "ramadan supplication",
    "dua for ramadan",
    "রমজানের দোয়া",
    "ইফতারের দোয়া",
    "সেহরির দোয়া",
  ],
  openGraph: {
    title: "Ramadan Duas – Iftar, Sehri, Taraweeh & Ashra Supplications | DuaHub",
    description:
      "Complete Ramadan duas collection with Arabic, transliteration, English and Bangla meanings — iftar, sehri/suhoor, taraweeh, ashra and Laylatul Qadr duas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramadan Duas Collection | DuaHub",
    description: "Iftar dua, sehri ki dua, taraweeh dua, ashra duas and more.",
  },
  alternates: {
    canonical: "/ramadan",
  },
};

export default function RamadanPage() {
  return <RamadanPageClient />;
}

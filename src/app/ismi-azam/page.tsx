import { IsmiAzamPageClient } from "@/components/IsmiAzamPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isme Azam – Allah's Greatest Names & Supplications | DuaHub",
  description:
    "Complete Isme Azam collection: authenticated duas containing Allah's Greatest Name from the narrations of Anas ibn Malik, Buraidah al-Aslami, Abu Umamah, and Asma bint Yazid. Includes Al-Hayy Al-Qayyum, Ya Dhal-Jalali wal-Ikram, Allahu Samad, and Ayat al-Kareema — with Arabic, transliteration, and English/Bangla meanings.",
  keywords: [
    "isme azam",
    "ismi azam",
    "ism-e-azam",
    "greatest name of allah",
    "al ismu al azam",
    "isme azam dua",
    "al hayy al qayyum",
    "ya dhal jalali wal ikram",
    "allahu samad",
    "ayat al kareema",
    "anas ibn malik dua",
    "buraidah dua",
    "dua for answered prayer",
    "ইসমে আজম",
    "আল্লাহর সর্বশ্রেষ্ঠ নাম",
    "ইসমে আজম দোয়া",
  ],
  openGraph: {
    title: "Isme Azam – Allah's Greatest Names & Supplications | DuaHub",
    description:
      "Authenticated Isme Azam duas from the Quran and Sunnah — Al-Hayy Al-Qayyum, Ya Dhal-Jalali wal-Ikram, Allahu Samad, and more — with Arabic, transliteration, and deep theological explanation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isme Azam Collection | DuaHub",
    description:
      "Al-Hayy Al-Qayyum, Ya Dhal-Jalali wal-Ikram, Allahu Samad, Ayat al-Kareema and more.",
  },
  alternates: {
    canonical: "/ismi-azam",
  },
};

export default function IsmiAzamPage() {
  return <IsmiAzamPageClient />;
}

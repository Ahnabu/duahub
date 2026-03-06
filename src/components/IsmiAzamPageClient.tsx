"use client";

import Link from "next/link";
import { duas } from "@/data/duas";
import { useLanguage } from "@/context/LanguageContext";
import { DuaCard } from "@/components/DuaCard";
import { SearchBar } from "@/components/SearchBar";
import { cn } from "@/lib/utils";

// ─── Scholar opinions ───────────────────────────────────────────────────────
const SCHOLAR_OPINIONS = [
  {
    scholar_en: "Abd al-Qadir al-Jilani (RA)",
    scholar_bn: "আবদুল কাদের জিলানি (রহ.)",
    name_en: "'Allah' (الله) — with complete sincerity (ikhlas)",
    name_bn: "'আল্লাহ' — পূর্ণ ইখলাসের সাথে",
    basis_en: "The primal name of Being (Ism al-Dhat); all other names flow from it",
    basis_bn: "সত্তাবাচক মূল নাম; অন্য সব নাম এর থেকেই উৎসারিত",
  },
  {
    scholar_en: "Shaykh al-Uthaymeen (RA)",
    scholar_bn: "শায়খ আল-উসায়মিন (রহ.)",
    name_en: "Al-Hayy and Al-Qayyum (Ever-Living, Sustainer)",
    name_bn: "আল-হাইয়্যু ও আল-ক্বাইয়ুম",
    basis_en: "Common element across Al-Baqarah, Aal-e-Imran & Ta-Ha",
    basis_bn: "তিনটি সূরায় সাধারণ উপাদান (বাকারাহ, আলে-ইমরান, ত্বা-হা)",
  },
  {
    scholar_en: "Majority of Hadith Scholars",
    scholar_bn: "অধিকাংশ মুহাদ্দিস",
    name_en: "The complete authenticated duas confirmed by the Prophet ﷺ",
    name_bn: "নবী ﷺ কর্তৃক স্বীকৃত পূর্ণ হাদিস-বর্ণিত দোয়াগুলো",
    basis_en: "Direct prophetic confirmation in Anas, Buraidah, Asma narrations",
    basis_bn: "আনাস, বুরাইদাহ ও আসমার হাদিসে সরাসরি নবিজির স্বীকৃতি",
  },
  {
    scholar_en: "Al-Jazzari (RA)",
    scholar_bn: "আল্লামা জাযারী (রহ.)",
    name_en: "La ilaha illa Huwal-Hayyul-Qayyum",
    name_bn: "লা ইলাহা ইল্লা হুওয়াল হাইয়্যুল ক্বাইয়ুম",
    basis_en: "Combines declaration of Tawhid with eternal life and cosmic sustenance",
    basis_bn: "তাওহিদ ঘোষণার সাথে চিরজীবন ও মহাজাগতিক পালনকর্তার একত্র",
  },
];

// ─── Conditions ─────────────────────────────────────────────────────────────
const CONDITIONS = [
  {
    num: 1,
    title_en: "Ikhlas & Yaqin",
    title_bn: "ইখলাস ও ইয়াকিন",
    desc_en:
      "Complete sincerity and unwavering certainty that none but Allah can resolve your situation. If the heart depends on any worldly means alongside Allah, the spiritual power of the name diminishes.",
    desc_bn:
      "পূর্ণ একনিষ্ঠতা ও অটল বিশ্বাস যে আল্লাহ ছাড়া কেউ সমস্যা সমাধান করতে পারবে না। হৃদয়ে অন্য কোনো নির্ভরতা থাকলে এই নামের আধ্যাত্মিক শক্তি কমে যায়।",
  },
  {
    num: 2,
    title_en: "Halal Sustenance",
    title_bn: "হালাল রিজিক",
    desc_en:
      "A body nourished by unlawful earnings cannot reach the Divine Throne. The Prophet ﷺ described a man raising his hands in prayer yet his food was haram — \"how then could he be answered?\"",
    desc_bn:
      "হারাম উপার্জনে লালিত শরীরের দোয়া আল্লাহর আরশ পর্যন্ত পৌঁছায় না। নবী ﷺ এক ব্যক্তির কথা বলেছেন যে হাত তুলে দোয়া করছিল অথচ তার খাবার ছিল হারাম — 'তাহলে তার দোয়া কীভাবে কবুল হবে?'",
  },
  {
    num: 3,
    title_en: "Blessed Moments",
    title_bn: "বরকতময় সময়",
    desc_en:
      "Recite during the last third of the night (Tahajjud), after obligatory prayers, or on Friday between Asr and Maghrib — windows when supplications are most powerfully received.",
    desc_bn:
      "রাতের শেষ তৃতীয়াংশে (তাহাজ্জুদ), ফরজ নামাজের পর, অথবা শুক্রবারে আসর-মাগরিবের মাঝে — এই বিশেষ মুহূর্তগুলোতে দোয়া সবচেয়ে শক্তিশালীভাবে কবুল হয়।",
  },
];

// ─── Section definitions ─────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: "anas",
    label_en: "Narration of Anas ibn Malik (RA)",
    label_bn: "আনাস ইবনে মালিক (রা.)-এর বর্ণনা",
    theme_en: "Creation & Bestowal",
    theme_bn: "সৃষ্টি ও দানশীলতা",
    tags: ["anas-mannan-badi"],
    description_en:
      "The Prophet \u{FDFA} overheard a companion reciting this and declared: 'He has supplicated Allah by His Greatest Name — by which, when asked, He gives; and when called, He responds.' (Abu Dawud 1495, Tirmidhi 3544)",
    description_bn:
      "নবী ﷺ একজন সাহাবিকে এই দোয়া পড়তে শুনলেন এবং বললেন: 'সে আল্লাহর ইসমে আজমের মাধ্যমে দোয়া করেছে — যার দ্বারা চাইলে আল্লাহ দান করেন এবং ডাকলে সাড়া দেন।' (আবু দাউদ ১৪৯৫, তিরমিজি ৩৫৪৪)",
  },
  {
    id: "buraidah",
    label_en: "Narration of Buraidah al-Aslami (RA)",
    label_bn: "বুরাইদাহ আল-আসলামি (রা.)-এর বর্ণনা",
    theme_en: "Absolute Unity",
    theme_bn: "নিরঙ্কুশ একত্ব",
    tags: ["buraidah-ahad-samad"],
    description_en:
      "The Prophet \u{FDFA} swore by the One in Whose Hand his soul is: 'He has most certainly supplicated Allah using His Greatest Name.' This dua transposes Surah Al-Ikhlas into a living supplication. (Tirmidhi 3475, Abu Dawud 1493)",
    description_bn:
      "নবী ﷺ তাঁর প্রাণের মালিকের শপথ করে বললেন: 'সে নিশ্চিতভাবেই আল্লাহর ইসমে আজমের মাধ্যমে দোয়া করেছে।' এই দোয়াটি সূরা ইখলাসকে একটি জীবন্ত প্রার্থনায় রূপান্তরিত করে। (তিরমিজি ৩৪৭৫, আবু দাউদ ১৪৯৩)",
  },
  {
    id: "abu-umamah",
    label_en: "Al-Hayy Al-Qayyum — Three Surahs",
    label_bn: "আল-হাইয়্যু আল-ক্বাইয়ুম — তিনটি সূরায়",
    theme_en: "Eternal Life & Cosmic Order",
    theme_bn: "চিরঞ্জীব ও মহাজাগতিক শৃঙ্খলা",
    tags: ["asma-three-surahs-hayyul-qayyum"],
    description_en:
      "Scholars (including Shaykh al-Uthaymeen) identify this as the Isme Azam based on Abu Umamah's narration — it appears in Al-Baqarah 2:255, Aal-e-Imran 3:2, and Ta-Ha 20:111. (Ibn Majah 3856)",
    description_bn:
      "পণ্ডিতরা (শায়খ আল-উসায়মিনসহ) আবু উমামার হাদিসের ভিত্তিতে এটিকে ইসমে আজম হিসেবে চিহ্নিত করেন — আল-বাকারাহ ২:২৫৫, আলে-ইমরান ৩:২ এবং ত্বা-হা ২০:১১১-এ বিদ্যমান। (ইবনে মাজাহ ৩৮৫৬)",
  },
  {
    id: "asma",
    label_en: "Narration of Asma bint Yazid (RA)",
    label_bn: "আসমা বিনতে ইয়াজিদ (রা.)-এর বর্ণনা",
    theme_en: "Mercy & Sustenance",
    theme_bn: "রহমত ও প্রতিপালন",
    tags: ["asma-bint-yazid-tawhid"],
    description_en:
      "The Prophet \u{FDFA} identified the Isme Azam in two Quranic passages: Al-Baqarah 2:163 and Aal-e-Imran 3:1-2 — merging absolute monotheism, universal mercy and the Ever-Living Sustainer. (Abu Dawud 1496, Tirmidhi 3478)",
    description_bn:
      "নবী ﷺ ইসমে আজম দুটি কুরআনিক অংশে চিহ্নিত করেন: আল-বাকারাহ ২:১৬৩ এবং আলে-ইমরান ৩:১-২ — যেখানে তাওহিদ, রহমত ও চিরঞ্জীব পালনকর্তার গুণ একত্রে আছে। (আবু দাউদ ১৪৯৬, তিরমিজি ৩৪৭৮)",
  },
  {
    id: "dhal-jalali",
    label_en: "Yā Dhal-Jalāli wal-Ikrām",
    label_bn: "ইয়া জাল জালালি ওয়াল ইকরাম",
    theme_en: "Majesty & Honour",
    theme_bn: "পরাক্রম ও মহানুভবতা",
    tags: ["dhal-jalali-wal-ikram"],
    description_en:
      "Appears twice in Surah Ar-Rahman (55:27 & 55:78). The Prophet \u{FDFA} commanded: 'Persist in reciting Ya Dhal-Jalali wal-Ikram.' Several scholars consider it a standalone Isme Azam that perfectly balances Divine rigour and mercy. (Riyad-us-Saliheen 1491)",
    description_bn:
      "সূরা আর-রহমানে দুবার উল্লেখিত (৫৫:২৭ ও ৫৫:৭৮)। নবী ﷺ বললেন: 'ইয়া জাল জালালি ওয়াল ইকরাম পড়তে থাকো।' অনেক আলেম একে স্বতন্ত্র ইসমে আজম মনে করেন — আল্লাহর কঠোরতা ও রহমতের মধ্যে নিখুঁত ভারসাম্য। (রিয়াদুস সালেহিন ১৪৯১)",
  },
  {
    id: "allahu-samad",
    label_en: "Allāhu Ṣamad — Surah Al-Ikhlāṣ",
    label_bn: "আল্লাহু সামাদ — সূরা আল-ইখলাস",
    theme_en: "Absolute Self-Sufficiency",
    theme_bn: "পরম অমুখাপেক্ষিতা",
    tags: ["allahu-samad-ikhlas"],
    description_en:
      "The second verse of Surah Al-Ikhlas (112:2). Spiritual tradition identifies this as an independent Isme Azam — the self-sufficient Master on Whom all creation depends for every breath.",
    description_bn:
      "সূরা আল-ইখলাসের দ্বিতীয় আয়াত (১১২:২)। আধ্যাত্মিক ঐতিহ্যে এটিকে স্বতন্ত্র ইসমে আজম হিসেবে চিহ্নিত করা হয় — সেই পরম অমুখাপেক্ষী সত্তা যার ওপর সমগ্র সৃষ্টির প্রতিটি নিঃশ্বাস নির্ভরশীল।",
  },
  {
    id: "yunus",
    label_en: "Yunus (AS) — Āyat al-Karīma",
    label_bn: "ইউনুস (আ.) — আয়াত আল-কারীমা",
    theme_en: "Deliverance from Darkness",
    theme_bn: "অন্ধকার থেকে মুক্তি",
    tags: ["yunus"],
    description_en:
      "The Prophet \u{FDFA} said: 'No Muslim calls upon Allah with these words for anything, except that Allah answers him.' (Tirmidhi) Recited by Yunus (AS) from the deepest darkness — the belly of the whale.",
    description_bn:
      "নবী ﷺ-এর বাণী (তিরমিজি): 'কোনো মুসলিম যখন এই শব্দে আল্লাহকে ডাকে, আল্লাহ অবশ্যই তার ডাকে সাড়া দেন।' ইউনুস (আ.) সবচেয়ে গভীর অন্ধকার থেকে — মাছের পেট থেকে — এটি পড়েছিলেন।",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export function IsmiAzamPageClient() {
  const { isBn } = useLanguage();

  const ismiAzamDuas = duas.filter(
    (d) => d.subcategory === "ismi-azam" || d.tags.includes("ismi-azam")
  );

  function getDuasByTags(tags: string[]) {
    return ismiAzamDuas.filter((d) =>
      tags.some((tag) =>
        d.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
      )
    );
  }

  const totalCount = ismiAzamDuas.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="rounded-2xl bg-linear-to-br from-amber-600 via-orange-600 to-yellow-700 p-8 text-white space-y-4">
        <div className="space-y-2">
          <p className="text-amber-200 text-sm font-medium uppercase tracking-wider">
            {isBn ? "আল্লাহর সর্বশ্রেষ্ঠ নাম" : "Greatest Name of Allah"}
          </p>
          <h1 className={cn("text-3xl sm:text-4xl font-bold", isBn ? "bangla" : "")}>
            {isBn ? "ইসমে আজম সংকলন" : "Isme Azam Collection"}
          </h1>
          <p
            className={cn(
              "text-amber-100 max-w-xl leading-relaxed",
              isBn ? "bangla text-sm" : "text-sm"
            )}
          >
            {isBn
              ? `${totalCount}টি প্রামাণিক দোয়া — সহিহ হাদিস ও কুরআন থেকে। আনাস, বুরাইদাহ, আবু উমামা ও আরও সাহাবির বর্ণনায়। আরবি, বাংলা অনুবাদ ও গভীর তাৎপর্যসহ।`
              : `${totalCount} authenticated supplications from the Quran & Sunnah — across the narrations of Anas, Buraidah, Abu Umamah and more — with Arabic, transliteration, and deep theological explanation.`}
          </p>
        </div>
        <div className="pt-2">
          <SearchBar
            placeholder={isBn ? "দোয়া খুঁজুন..." : "Search Isme Azam duas..."}
            redirect
          />
        </div>
      </div>

      {/* ── What is Isme Azam ─────────────────────────────────────────────── */}
      <div className="space-y-5">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className={cn("text-xl font-bold", isBn ? "bangla" : "")}>
            {isBn ? "ইসমে আজম কী?" : "What is Isme Azam?"}
          </h2>
          <p className={cn("text-sm text-muted-foreground mt-1", isBn ? "bangla" : "")}>
            {isBn
              ? "সংজ্ঞা, তাৎপর্য এবং কীভাবে কাজ করে"
              : "Definition, theological significance, and how it works"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Definition */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <h3 className={cn("font-semibold", isBn ? "bangla" : "")}>
              {isBn ? "সংজ্ঞা" : "Definition"}
            </h3>
            <p className={cn("text-sm text-muted-foreground leading-relaxed", isBn ? "bangla" : "")}>
              {isBn
                ? "ইসমে আজম (الاسم الأعظم) মানে 'আল্লাহর সর্বশ্রেষ্ঠ নাম'। হাদিস অনুযায়ী, এই নামের মাধ্যমে প্রার্থনা করলে আল্লাহ তা নিশ্চিতভাবে কবুল করেন এবং এই নামে ডাকলে তিনি অবশ্যই সাড়া দেন। এটি ঐশী দরবারে সরাসরি প্রবেশের এক অতুলনীয় চাবিকাঠি।"
                : "Isme Azam (الاسم الأعظم) literally means 'the Greatest Name of Allah'. According to authenticated hadith, when Allah is asked through this name, He grants the request; and when called by it, He responds. It is an unparalleled key that opens the door to direct Divine intervention."}
            </p>
          </div>

          {/* How it works */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <h3 className={cn("font-semibold", isBn ? "bangla" : "")}>
              {isBn ? "কীভাবে কাজ করে?" : "How Does It Work?"}
            </h3>
            <p className={cn("text-sm text-muted-foreground leading-relaxed", isBn ? "bangla" : "")}>
              {isBn
                ? "এটি কোনো যান্ত্রিক বা জাদুকরী প্রক্রিয়া নয়। ইসমে আজম কাজ করে যখন বান্দা আল্লাহর মহিমা সম্পূর্ণরূপে উপলব্ধি করে, নিজের চরম অসহায়ত্ব স্বীকার করে নেয় এবং হৃদয়ের পূর্ণ উপস্থিতি নিশ্চিত করে। ইবনে কাসির (রহ.) বলেছেন: আল্লাহর যেকোনো নামই ইসমে আজমের মর্যাদা পেতে পারে যদি তা হৃদয় সম্পূর্ণ আল্লাহমুখী থাকা অবস্থায় উচ্চারিত হয়।"
                : "It is not mechanical or magical. Isme Azam works when the servant fully comprehends Allah's majesty, acknowledges their complete helplessness, and ensures the heart is fully present. Ibn Kathir stated: any of Allah's names can attain the rank of Isme Azam if uttered in a moment when the heart is completely directed toward Allah alone."}
            </p>
          </div>
        </div>

        {/* Scholarly opinions */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-4">
          <div>
            <h3 className={cn("font-semibold", isBn ? "bangla" : "")}>
              {isBn ? "আলেমদের মতামত" : "Scholarly Opinions"}
            </h3>
            <p className={cn("text-xs text-muted-foreground mt-1", isBn ? "bangla" : "")}>
              {isBn
                ? "আল্লামা সুয়ূতি (রহ.) তাঁর 'আদ-দুররুল মুনাজ্জাম' গ্রন্থে ২০টিরও বেশি মত উল্লেখ করেছেন। প্রধান মতসমূহ:"
                : "Al-Suyuti documented 20+ scholarly opinions in 'Ad-Durr Al-Munazzam'. Key positions:"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SCHOLAR_OPINIONS.map((op, i) => (
              <div
                key={i}
                className="rounded-lg bg-muted/50 p-3 space-y-1 border border-border"
              >
                <p className={cn("font-medium text-sm", isBn ? "bangla" : "")}>
                  {isBn ? op.scholar_bn : op.scholar_en}
                </p>
                <p className={cn("text-xs text-primary font-medium", isBn ? "bangla" : "")}>
                  {isBn ? op.name_bn : op.name_en}
                </p>
                <p className={cn("text-xs text-muted-foreground", isBn ? "bangla" : "")}>
                  {isBn ? op.basis_bn : op.basis_en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Conditions ───────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className={cn("text-xl font-bold", isBn ? "bangla" : "")}>
            {isBn ? "কবুল হওয়ার শর্তসমূহ" : "Conditions for Acceptance"}
          </h2>
          <p className={cn("text-sm text-muted-foreground mt-1", isBn ? "bangla" : "")}>
            {isBn
              ? "ইসমে আজমের পূর্ণ আধ্যাত্মিক শক্তি পেতে যা আবশ্যক"
              : "What is essential to access the full spiritual power of Isme Azam"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CONDITIONS.map((cond) => (
            <div
              key={cond.num}
              className="rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/60 dark:bg-amber-950/20 p-5 space-y-2"
            >
              <span className="text-amber-500 font-bold text-lg">{cond.num}.</span>
              <h3 className={cn("font-semibold", isBn ? "bangla" : "")}>
                {isBn ? cond.title_bn : cond.title_en}
              </h3>
              <p className={cn("text-xs text-muted-foreground leading-relaxed", isBn ? "bangla" : "")}>
                {isBn ? cond.desc_bn : cond.desc_en}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Quick nav ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {SECTIONS.slice(0, 4).map((section) => {
          const count = getDuasByTags(section.tags).length;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex flex-col gap-1 p-4 rounded-xl border border-border bg-card hover:bg-muted transition-colors"
            >
              <span className={cn("font-medium text-sm line-clamp-2", isBn ? "bangla" : "")}>
                {isBn ? section.label_bn : section.label_en}
              </span>
              <span className="text-xs text-muted-foreground">
                {count}{" "}
                {isBn ? "টি দোয়া" : count === 1 ? "dua" : "duas"}
              </span>
            </a>
          );
        })}
      </div>

      {/* ── Dua sections ─────────────────────────────────────────────────── */}
      {SECTIONS.map((section) => {
        const sectionDuas = getDuasByTags(section.tags);
        if (sectionDuas.length === 0) return null;

        return (
          <section key={section.id} id={section.id} className="space-y-4 scroll-mt-20">
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className={cn("text-xl font-bold", isBn ? "bangla" : "")}>
                  {isBn ? section.label_bn : section.label_en}
                </h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-medium">
                  {isBn ? section.theme_bn : section.theme_en}
                </span>
              </div>
              <p className={cn("text-sm text-muted-foreground mt-1 max-w-3xl", isBn ? "bangla" : "")}>
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

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
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
            href="/ramadan"
            className="px-4 py-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors text-sm font-medium"
          >
            {isBn ? "রমজানের দোয়া" : "Ramadan Duas"}
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

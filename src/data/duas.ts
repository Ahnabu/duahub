import type { Dua, CategoryMeta, SubcategoryMeta } from "@/types/dua";

export const duas: Dua[] = [
  // ─── QURAN: Repentance ───────────────────────────────────────────────────
  {
    id: "q-rep-001",
    slug: "adam-hawwa-repentance",
    category: "quran",
    subcategory: "repentance",
    subcategory_label_en: "Repentance & Forgiveness",
    subcategory_label_bn: "তাওবা ও ক্ষমা",
    purpose_en: "Repentance for transgression (Adam (AS) & Hawwa's Dua)",
    purpose_bn: "নিজের ভুলের জন্য অনুশোচনা (আদম (আ.) ও হাওয়ার দোয়া)",
    source: "Quran: Surah Al-A'raf, 7:23",
    arabic:
      "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
    transliteration:
      "Rabbana zalamna anfusana wa illam taghfir lana wa tarhamna lanakunanna minal khasirin.",
    meaning_bn:
      "হে আমাদের প্রতিপালক! আমরা নিজেদের আত্মার প্রতি অবিচার করেছি, আপনি যদি আমাদের ক্ষমা না করেন ও দয়া না করেন, তবে আমরা নিশ্চিতভাবেই চরম ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হয়ে পড়ব।",
    meaning_en:
      "Our Lord! We have wronged ourselves. If You do not forgive us and have mercy on us, we will surely be among the losers.",
    tags: ["repentance", "forgiveness", "adam", "hawwa", "tawbah"],
  },
  {
    id: "q-rep-002",
    slug: "nuh-forgiveness-parents-ummah",
    category: "quran",
    subcategory: "repentance",
    subcategory_label_en: "Repentance & Forgiveness",
    subcategory_label_bn: "তাওবা ও ক্ষমা",
    purpose_en:
      "Seeking forgiveness for self, parents, and the believers (Nuh (AS)'s Dua)",
    purpose_bn:
      "নিজ, পিতামাতা ও উম্মাহর জন্য ক্ষমা প্রার্থনা (নূহ (আ.)-এর দোয়া)",
    source: "Quran: Surah Nuh, 71:28",
    arabic:
      "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ وَلَا تَزِدِ الظَّالِمِينَ إِلَّا تَبَارًا",
    transliteration:
      "Rabbighfir li wa liwaalidayya wa liman dakhala baytiya mu'minan wa lilmu'minina wal mu'minat; wa la tazidiz zalimina illa tabara.",
    meaning_bn:
      "হে আমার রব! আমাকে, আমার পিতামাতাকে এবং মুমিন হয়ে যারা আমার গৃহে আশ্রয় নেয় তাদের এবং সমগ্র মুমিন নারী-পুরুষকে ক্ষমা করুন। আর জালিমদের কেবল ধ্বংসই বৃদ্ধি করুন।",
    meaning_en:
      "My Lord! Forgive me and my parents and whoever enters my house as a believer, and all believing men and women. And increase the wrongdoers only in ruin.",
    tags: ["forgiveness", "parents", "ummah", "nuh", "community"],
  },
  {
    id: "q-rep-003",
    slug: "plea-forgiveness-protection-hellfire",
    category: "quran",
    subcategory: "repentance",
    subcategory_label_en: "Repentance & Forgiveness",
    subcategory_label_bn: "তাওবা ও ক্ষমা",
    purpose_en: "Plea for forgiveness and protection from Hellfire",
    purpose_bn: "জাহান্নামের আগুন থেকে চূড়ান্ত সুরক্ষা",
    source: "Quran: Surah Al-Imran, 3:16",
    arabic:
      "رَبَّنَا إِنَّنَا آَمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbana innana amanna faghfir lana dhunubana waqina adhaban nar.",
    meaning_bn:
      "হে আমাদের প্রতিপালক! আমরা নিখাদ ঈমান এনেছি; সুতরাং আমাদের সমস্ত পাপ ক্ষমা করুন এবং আমাদেরকে আগুনের নিদারুণ শাস্তি থেকে রক্ষা করুন।",
    meaning_en:
      "Our Lord! We have surely believed, so forgive our sins and protect us from the punishment of the Fire.",
    tags: ["forgiveness", "hellfire", "iman", "protection"],
  },
  {
    id: "q-rep-004",
    slug: "seeking-pardon-sins-extravagance",
    category: "quran",
    subcategory: "repentance",
    subcategory_label_en: "Repentance & Forgiveness",
    subcategory_label_bn: "তাওবা ও ক্ষমা",
    purpose_en: "Seeking pardon for sins and extravagance in affairs",
    purpose_bn: "পাপ মোচন এবং চরম প্রতিকূলতায় অবিচল থাকার প্রার্থনা",
    source: "Quran: Surah Al-Imran, 3:147",
    arabic:
      "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Rabbanaghfir lana dhunubana wa israfana fi amrina wa thabbit aqdamana wansurna alal qawmil kafirin.",
    meaning_bn:
      "হে আমাদের প্রতিপালক! আমাদের অপরাধ ও সীমালঙ্ঘন ক্ষমা করুন, যুদ্ধের ময়দানে আমাদের পদযুগল সুদৃঢ় রাখুন এবং সত্যপ্রত্যাখ্যানকারীদের বিরুদ্ধে আমাদের বিজয়ী করুন।",
    meaning_en:
      "Our Lord! Forgive our sins and excesses, make our feet firm, and grant us victory over the disbelieving people.",
    tags: ["forgiveness", "steadfastness", "victory", "sins"],
  },
  {
    id: "q-rep-005",
    slug: "petition-supreme-mercy",
    category: "quran",
    subcategory: "repentance",
    subcategory_label_en: "Repentance & Forgiveness",
    subcategory_label_bn: "তাওবা ও ক্ষমা",
    purpose_en: "Petition to the Supreme Dispenser of Mercy",
    purpose_bn: "পরম দয়ালুর কাছে নিখাদ সমর্পণ",
    source: "Quran: Surah Al-Mu'minun, 23:118",
    arabic: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
    transliteration: "Rabbighfir warham wa anta khairur rahimin.",
    meaning_bn:
      "হে আমার রব! আমাকে ক্ষমা করুন ও দয়া করুন, আপনিই তো দয়ালুদের মধ্যে সর্বশ্রেষ্ঠ দয়ালু।",
    meaning_en:
      "My Lord! Forgive and have mercy, for You are the best of those who show mercy.",
    tags: ["forgiveness", "mercy", "concise", "powerful"],
  },
  {
    id: "q-rep-006",
    slug: "yunus-distress-darkness",
    category: "quran",
    subcategory: "repentance",
    subcategory_label_en: "Repentance & Forgiveness",
    subcategory_label_bn: "তাওবা ও ক্ষমা",
    purpose_en: "The Supplication of Yunus (AS) — Ayat al-Kareema",
    purpose_bn: "ইউনুস (আ.)-এর দোয়া (আয়াত আল-কারীমা)",
    source: "Quran: Surah Al-Anbiya, 21:87",
    arabic: "لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ",
    transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin.",
    meaning_bn: "তুমি ব্যতীত কোন উপাস্য নেই; তুমি পবিত্র, মহান। নিশ্চয়ই আমি সীমালংঘনকারীদের অন্তর্ভুক্ত।",
    meaning_en: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    tags: ["yunus", "distress", "depression", "darkness", "forgiveness"],
    context_en: "The historical invocation of Yunus (AS), the Prophet Jonah, represents the ultimate archetype of a plea delivered from the depths of profound isolation, despair, and systemic darkness. Found in Surah Al-Anbiya of the Qur'an, it is recited both historically and contemporarily during moments of severe distress and perceived entrapment. The semantic brilliance of this specific prayer is its total lack of a direct petition or demand. It consists entirely of a tripartite structure: a definitive declaration of monotheism, a profound glorification that negates any flaw from the Divine entity, and an unconditional admission of absolute human fault.",
    context_bn: "নবী ইউনুস (আ.)-এর এই ঐতিহাসিক আহ্বানটি গভীর একাকীত্ব, হতাশা এবং অন্ধকারের অতল গহ্বর থেকে উদিত হাহাকারের এক অনন্য নিদর্শন। কুরআনের সূরা আল-আম্বিয়ায় বর্ণিত এই দোয়াটি চরম বিপদ ও অসহায়ত্বের মুহূর্তে পঠিত হয়। এই দোয়ার ভাষাগত অলৌকিকতা হলো এতে কোনো প্রত্যক্ষ প্রার্থনা বা দাবি নেই। এটি তিনটি অংশে বিন্যস্ত: তাওহিদের সুস্পষ্ট ঘোষণা, আল্লাহর পবিত্রতা ও মহিমা বর্ণনা (যা আল্লাহর সত্তা থেকে সকল ত্রুটি নাকচ করে), এবং নিজের ভুলের নিঃশর্ত স্বীকারোক্তি।"
  },

  // ─── QURAN: Family ───────────────────────────────────────────────────────
  {
    id: "q-fam-001",
    slug: "zakariya-righteous-offspring",
    category: "quran",
    subcategory: "family",
    subcategory_label_en: "Family & Progeny",
    subcategory_label_bn: "পরিবার ও বংশধর",
    purpose_en:
      "Supplication for pure and righteous offspring (Zakariya (AS)'s Dua)",
    purpose_bn: "পবিত্র ও পুণ্যবান সন্তানের প্রার্থনা (জাকারিয়া (আ.)-এর দোয়া)",
    source: "Quran: Surah Al-Imran, 3:38",
    arabic:
      "رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ",
    transliteration:
      "Rabbi hab li min ladunka dhurriyyatan tayyibatan, innaka sami'ud du'a.",
    meaning_bn:
      "হে আমার প্রতিপালক! আপনার বিশেষ অনুগ্রহে আমাকে পবিত্র সন্তান দান করুন। নিশ্চয়ই আপনি প্রার্থনা শ্রবণকারী।",
    meaning_en:
      "My Lord! Grant me from Yourself righteous offspring. Indeed, You are the Hearer of supplication.",
    tags: ["children", "offspring", "family", "zakariya", "dua"],
  },
  {
    id: "q-fam-002",
    slug: "ibrahim-prayer-steadfastness-progeny",
    category: "quran",
    subcategory: "family",
    subcategory_label_en: "Family & Progeny",
    subcategory_label_bn: "পরিবার ও বংশধর",
    purpose_en:
      "Steadfastness in prayer for self and progeny (Ibrahim (AS)'s Dua)",
    purpose_bn:
      "নামাজ প্রতিষ্ঠাকারী বংশধরের প্রার্থনা (ইব্রাহিম (আ.)-এর দোয়া)",
    source: "Quran: Surah Ibrahim, 14:40-41",
    arabic:
      "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ. رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    transliteration:
      "Rabbij'alni muqimas salati wa min dhurriyyati, Rabbana wa taqabbal du'a. Rabbanaghfir li wa liwalidayya wa lilmu'minina yawma yaqumul hisab.",
    meaning_bn:
      "হে আমার রব! আমাকে ও আমার বংশধরদের নামাজ প্রতিষ্ঠাকারী বানান। হে আমাদের রব, আমার দোয়া কবুল করুন এবং হিসাবের দিনে আমাকে, আমার পিতামাতাকে ও সকল মুমিনকে ক্ষমা করুন।",
    meaning_en:
      "My Lord! Make me and my descendants steadfast in prayer. Our Lord! Accept my supplication. Our Lord! Forgive me, my parents, and the believers on the Day of Reckoning.",
    tags: ["prayer", "salah", "children", "parents", "ibrahim", "forgiveness"],
  },
  {
    id: "q-fam-003",
    slug: "comfort-spouses-children",
    category: "quran",
    subcategory: "family",
    subcategory_label_en: "Family & Progeny",
    subcategory_label_bn: "পরিবার ও বংশধর",
    purpose_en: "Seeking comfort in spouses and children",
    purpose_bn: "জীবনসঙ্গী ও সন্তানের মাঝে প্রশান্তি লাভ",
    source: "Quran: Surah Al-Furqan, 25:74",
    arabic:
      "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    transliteration:
      "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lilmuttaqina imama.",
    meaning_bn:
      "হে আমাদের প্রতিপালক! আমাদের স্ত্রী ও সন্তানদের আমাদের জন্য 'নয়ন জুড়ানো' প্রশান্তির কারণ বানান এবং আমাদেরকে মুত্তাকিদের নেতা হিসেবে কবুল করুন।",
    meaning_en:
      "Our Lord! Grant us joy in our spouses and children, and make us a model for the righteous.",
    tags: ["family", "spouse", "children", "leadership", "taqwa"],
    context_en: "The nuclear family is intended to function as an impenetrable emotional sanctuary, a concept captured perfectly by the poetic Qur'anic idiom 'coolness of the eyes' (Qurrata A'yun). In the harsh, unforgiving environment of 7th-century Arabia, 'coolness of the eyes' was a literal metaphor for ultimate relief, tears of profound joy, and safety from the blistering elements. Sociologically and psychologically, this supplication seeks to make the home a zone of absolute psychological safety.",
    context_bn: "ইসলামে পরিবারকে একটি নিরাপদ আবেগীয় দুর্গ হিসেবে কল্পনা করা হয়েছে, যা কুরআনের 'নয়ন জুড়ানো' (কুররাতু আ'য়ুন) উপমায় নিখুঁতভাবে ফুটে উঠেছে। সপ্তম শতাব্দীর আরবের রুক্ষ ও প্রতিকূল পরিবেশে 'চোখের শীতলতা' ছিল চরম স্বস্তি, আনন্দাশ্রু এবং প্রখর তাপ থেকে মুক্তির রূপক। এই দোয়াটি মূলত ঘর ও পরিবারকে এমন একটি নিরাপদ আশ্রয়ে পরিণত করার আহ্বান জানায়, যেখানে বাইরের পৃথিবীর অস্থিরতা ও উদ্বেগ প্রবেশ করতে পারে না।"
  },
  {
    id: "q-fam-004",
    slug: "forgiveness-predecessors-cleanse-malice",
    category: "quran",
    subcategory: "family",
    subcategory_label_en: "Family & Progeny",
    subcategory_label_bn: "পরিবার ও বংশধর",
    purpose_en: "Forgiveness for predecessors and cleansing the heart of malice",
    purpose_bn: "পূর্বসূরিদের জন্য ক্ষমা এবং অন্তরকে বিদ্বেষমুক্ত রাখা",
    source: "Quran: Surah Al-Hashr, 59:10",
    arabic:
      "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آَمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَحِيمٌ",
    transliteration:
      "Rabbanaghfir lana wa li ikhwaninalladhina sabaquna bil imani wa la taj'al fi qulubina ghillan lilladhina amanu Rabbana innaka ra'ufur rahim.",
    meaning_bn:
      "হে আমাদের প্রতিপালক! আমাদের এবং আমাদের পূর্বে যারা ঈমান এনেছে তাদের ক্ষমা করুন। মুমিনদের প্রতি আমাদের অন্তরে কোনো প্রচ্ছন্ন বিদ্বেষ রাখবেন না। আপনি অত্যন্ত দয়ালু।",
    meaning_en:
      "Our Lord! Forgive us and our brothers who preceded us in faith, and do not put in our hearts any resentment toward those who believe. Our Lord! You are indeed Full of Kindness, Most Merciful.",
    tags: ["forgiveness", "brotherhood", "unity", "heart", "ummah"],
  },
  {
    id: "q-fam-005",
    slug: "parents-mercy-rabbir-hamhuma",
    category: "quran",
    subcategory: "family",
    subcategory_label_en: "Family & Progeny",
    subcategory_label_bn: "পরিবার ও বংশধর",
    purpose_en: "Continuous Mercy for Parents",
    purpose_bn: "পিতামাতার জন্য অফুরন্ত রহমতের দোয়া",
    source: "Quran: Surah Al-Isra, 17:24",
    arabic: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration: "Rabbir-hamhuma kama rabbayani sagheera.",
    meaning_bn: "হে আমার পালনকর্তা! তাদের উভয়ের প্রতি রহম করুন, যেমন তারা আমাকে শৈশবকালে লালন-পালন করেছেন।",
    meaning_en: "My Lord, have mercy on them, as they raised me when I was a child.",
    tags: ["parents", "mercy", "tarbiyah", "childhood", "family"],
    context_en: "The Quran inextricably links the worship of God with profound benevolence toward parents. The linguistic formulation 'kama rabbayani sagheera' (exactly as they cherished/raised me when I was small) functions to systematically eliminate intergenerational arrogance. It forces the capable adult petitioner to continuously recall their initial state of total vulnerability and biological helplessness.",
    context_bn: "কুরআন আল্লাহর ইবাদতের পরেই পিতামাতার প্রতি সদ্ব্যবহারের নির্দেশ দিয়েছে। 'কামা রাব্বায়ানি সাগিরা' (যেমন তারা শৈশবে আমাকে লালন করেছেন) শব্দগুচ্ছটি আন্তঃপ্রজন্মের অহংকার চূর্ণ করে দেয়। এটি একজন সক্ষম বয়স্ক সন্তানকে তার শৈশবের অসহায়ত্ব ও দুর্বলতার কথা স্মরণ করিয়ে দেয় এবং পিতামাতার প্রতি গভীর মমতবোধ জাগ্রত করে।"
  },

  // ─── QURAN: Protection ───────────────────────────────────────────────────
  {
    id: "q-pro-001",
    slug: "comprehensive-good-dunya-akhira",
    category: "quran",
    subcategory: "protection",
    subcategory_label_en: "Protection & Success",
    subcategory_label_bn: "সুরক্ষা ও সাফল্য",
    purpose_en: "Comprehensive good in this world and the Hereafter",
    purpose_bn: "ইহকাল ও পরকালের সমন্বিত কল্যাণ",
    source: "Quran: Surah Al-Baqarah, 2:201",
    arabic:
      "رَبَّنَا آَتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآَخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina adhaban nar.",
    meaning_bn:
      "হে আমাদের রব! আমাদের দুনিয়াতেও কল্যাণ দিন এবং আখেরাতেও কল্যাণ দিন, আর আমাদেরকে জাহান্নামের আগুন থেকে রক্ষা করুন।",
    meaning_en:
      "Our Lord! Grant us good in this world and good in the Hereafter, and protect us from the torment of the Fire.",
    tags: ["dunya", "akhira", "protection", "tawaf", "comprehensive"],
  },
  {
    id: "q-pro-002",
    slug: "deliverance-from-hellfire-permanence",
    category: "quran",
    subcategory: "protection",
    subcategory_label_en: "Protection & Success",
    subcategory_label_bn: "সুরক্ষা ও সাফল্য",
    purpose_en: "Seeking deliverance from the permanence of Hellfire",
    purpose_bn: "জাহান্নামের স্থায়ী আজাব থেকে পরিত্রাণ",
    source: "Quran: Surah Al-Furqan, 25:65-66",
    arabic:
      "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا. إِنَّهَا سَاءَتْ مُسْتَقَرًّا وَمُقَامًا",
    transliteration:
      "Rabbanasrif anna adhaba jahannama inna adhabaha kana gharama. Innaha sa'at mustaqarran wa muqama.",
    meaning_bn:
      "হে আমাদের প্রতিপালক! আমাদের থেকে জাহান্নামের আজাব সরিয়ে নিন; এর শাস্তি তো চিরস্থায়ীভাবে আঁকড়ে থাকার মতো। আবাসস্থল হিসেবে তা কতই না নিকৃষ্ট!",
    meaning_en:
      "Our Lord! Keep the punishment of Hell away from us. Its punishment is indeed a constant torment — it is truly the worst place to settle and reside.",
    tags: ["hellfire", "protection", "akhira", "punishment"],
  },
  {
    id: "q-pro-003",
    slug: "protection-beyond-capacity-burden",
    category: "quran",
    subcategory: "protection",
    subcategory_label_en: "Protection & Success",
    subcategory_label_bn: "সুরক্ষা ও সাফল্য",
    purpose_en: "Protection against bearing burdens beyond capacity",
    purpose_bn: "সাধ্যাতীত বোঝার চাপ থেকে মুক্তি",
    source: "Quran: Surah Al-Baqarah, 2:286",
    arabic:
      "رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Rabbana wa la tuhammilna ma la taqata lana bihi; wa'fu anna waghfir lana warhamna, anta mawlana fansurna alal qawmil kafirin.",
    meaning_bn:
      "হে আমাদের প্রতিপালক! আমাদের ওপর এমন বোঝা চাপাবেন না যা বইবার সামর্থ্য আমাদের নেই। আমাদের পাপ মোচন করুন, আমাদের প্রতি দয়া করুন। আপনিই আমাদের অভিভাবক, সুতরাং অবিশ্বাসীদের বিরুদ্ধে আমাদের সাহায্য করুন।",
    meaning_en:
      "Our Lord! Do not burden us with what we cannot bear. Pardon us, forgive us, and have mercy on us. You are our Master, so grant us victory over the disbelieving people.",
    tags: ["burden", "capacity", "forgiveness", "mercy", "victory"],
  },
  {
    id: "q-pro-004",
    slug: "tawakkul-reliance-on-allah",
    category: "quran",
    subcategory: "protection",
    subcategory_label_en: "Protection & Success",
    subcategory_label_bn: "সুরক্ষা ও সাফল্য",
    purpose_en: "Absolute reliance on Allah (Tawakkul)",
    purpose_bn: "আল্লাহর ওপর নিরঙ্কুশ ভরসা (তাওয়াক্কুল)",
    source: "Quran: Surah Al-Mumtahina, 60:4",
    arabic:
      "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
    transliteration:
      "Rabbana alaika tawakkalna wa ilaika anabna wa ilaikal masir.",
    meaning_bn:
      "হে আমাদের প্রতিপালক! আমরা কেবল আপনার ওপরই ভরসা করেছি, আপনার দিকেই মুখ ফিরিয়েছি এবং চূড়ান্ত প্রত্যাবর্তন তো আপনার কাছেই।",
    meaning_en:
      "Our Lord! In You we put our trust. To You we turn, and to You is the final return.",
    tags: ["tawakkul", "reliance", "trust", "return", "ibrahim"],
  },
  {
    id: "q-pro-005",
    slug: "hasbiyallah-sufficiency",
    category: "quran",
    subcategory: "protection",
    subcategory_label_en: "Protection & Success",
    subcategory_label_bn: "সুরক্ষা ও সাফল্য",
    purpose_en: "Declaration of ultimate sufficiency in Allah",
    purpose_bn: "আল্লাহই মুমিনের জন্য যথেষ্ট",
    source: "Quran: Surah At-Tawbah, 9:129",
    arabic:
      "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration:
      "Hasbiyallahu la ilaha illa huwa alayhi tawakkaltu wa huwa rabbul arshil azim.",
    meaning_bn:
      "আমার জন্য আল্লাহই যথেষ্ট, তিনি ছাড়া কোনো ইলাহ নেই, আমি তাঁরই ওপর ভরসা করি এবং তিনি মহা আরশের অধিপতি।",
    meaning_en:
      "Allah is sufficient for me. There is no god except Him. In Him I put my trust, and He is the Lord of the Mighty Throne.",
    tags: ["hasbiyallah", "tawakkul", "sufficiency", "power", "arsh"],
    context_en: "When faced with overwhelming external opposition, geopolitical instability, or profound systemic failure, the invocation of absolute divine sufficiency acts as an impenetrable psychological shield. Once an individual comprehensively exhausts all material avenues, reciting Hasbiya Allahu consciously transfers the locus of control from the limited self to the omnipotent Divine.",
    context_bn: "যখন মানুষ প্রবল শত্রুতা বা চরম বিপর্যয়ের সম্মুখীন হয়, তখন আল্লাহর ওপর পরম নির্ভরতাই হয়ে ওঠে তার সবচেয়ে শক্তিশালী মানসিক বর্ম। যখন সকল বৈষয়িক চেষ্টা ব্যর্থ হয়, তখন 'হাসবিয়াল্লাহ' পাঠের মাধ্যমে মানুষ তার অসহায়ত্বকে আল্লাহর অসীম ক্ষমতার কাছে সমর্পণ করে এবং মানসিক প্রশান্তি লাভ করে।"
  },

  // ─── QURAN: Wisdom ───────────────────────────────────────────────────────
  {
    id: "q-wis-001",
    slug: "musa-expand-chest-fluency",
    category: "quran",
    subcategory: "wisdom",
    subcategory_label_en: "Wisdom & Guidance",
    subcategory_label_bn: "প্রজ্ঞা ও হেদায়েত",
    purpose_en:
      "Expansion of the chest and fluency of speech (Musa (AS)'s Dua)",
    purpose_bn: "বক্ষ প্রশস্তকরণ ও বাগ্মিতা বৃদ্ধি (মুসা (আ.)-এর দোয়া)",
    source: "Quran: Surah Ta-Ha, 20:25-28",
    arabic:
      "رَبِّ اشْرَحْ لِي صَدْرِي. وَيَسِّرْ لِي أَمْرِي. وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي. يَفْقَهُوا قَوْلِي",
    transliteration:
      "Rabbish-rah li sadri. Wa yassir li amri. Wahlul uqdatan min lisani. Yafqahu qawli.",
    meaning_bn:
      "হে আমার প্রতিপালক! আমার বক্ষ প্রশস্ত করে দিন, আমার কাজ সহজ করে দিন এবং আমার জিহবার জড়তা দূর করে দিন, যাতে তারা আমার কথা বুঝতে পারে।",
    meaning_en:
      "My Lord! Uplift my heart for me. And ease my task for me. And remove the knot from my tongue, so people may understand my speech.",
    tags: [
      "musa",
      "speech",
      "eloquence",
      "ease",
      "courage",
      "wisdom",
      "tongue",
    ],
  },
  {
    id: "q-wis-002",
    slug: "ibrahim-wisdom-honorable-mention",
    category: "quran",
    subcategory: "wisdom",
    subcategory_label_en: "Wisdom & Guidance",
    subcategory_label_bn: "প্রজ্ঞা ও হেদায়েত",
    purpose_en: "Request for wisdom and honorable mention (Ibrahim (AS)'s Dua)",
    purpose_bn: "প্রজ্ঞা এবং সত্যের সুখ্যাতি লাভ (ইব্রাহিম (আ.)-এর দোয়া)",
    source: "Quran: Surah Ash-Shu'ara, 26:83-85",
    arabic:
      "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ. وَاجْعَلْ لِي لِسَانَ صِدْقٍ فِي الْآَخِرِينَ. وَاجْعَلْنِي مِنْ وَرَثَةِ جَنَّةِ النَّعِيمِ",
    transliteration:
      "Rabbi hab li hukman wa alhiqni bissalihin. Waj'al li lisana sidqin fil akhirin. Waj'alni min warathati jannatin na'im.",
    meaning_bn:
      "হে আমার প্রতিপালক! আমাকে প্রজ্ঞা দান করুন, সৎকর্মশীলদের অন্তর্ভুক্ত করুন, ভবিষ্যৎ প্রজন্মের মাঝে আমার সত্যের সুখ্যাতি রাখুন এবং আমাকে নেয়ামতপূর্ণ জান্নাতের উত্তরাধিকারী করুন।",
    meaning_en:
      "My Lord! Grant me wisdom and join me with the righteous. Give me an honourable mention among later generations. And make me one of the inheritors of the Garden of Bliss.",
    tags: [
      "ibrahim",
      "wisdom",
      "righteous",
      "legacy",
      "jannah",
      "reputation",
    ],
  },
  {
    id: "q-wis-003",
    slug: "protection-heart-deviation",
    category: "quran",
    subcategory: "wisdom",
    subcategory_label_en: "Wisdom & Guidance",
    subcategory_label_bn: "প্রজ্ঞা ও হেদায়েত",
    purpose_en: "Protection from the deviation of the heart",
    purpose_bn: "অন্তরের বিচ্যুতি থেকে হেদায়েতের সুরক্ষা",
    source: "Quran: Surah Al-Imran, 3:8",
    arabic:
      "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
    transliteration:
      "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana min ladunka rahmah, innaka antal wahhab.",
    meaning_bn:
      "হে আমাদের রব! হেদায়েত দান করার পর আমাদের অন্তরকে সত্য থেকে বিচ্যুত করবেন না এবং আপনার পক্ষ থেকে আমাদের রহমত দিন, আপনিই তো মহাদাতা।",
    meaning_en:
      "Our Lord! Do not let our hearts deviate after You have guided us. Grant us Your mercy. You are indeed the Giver of all bounties.",
    tags: ["heart", "guidance", "deviation", "mercy", "steadfastness"],
  },
  {
    id: "q-wis-004",
    slug: "musa-destitution-need-faqir",
    category: "quran",
    subcategory: "wisdom",
    subcategory_label_en: "Wisdom & Guidance",
    subcategory_label_bn: "প্রজ্ঞা ও হেদায়েত",
    purpose_en: "The Declaration of Utter Destitution (Musa's Dua)",
    purpose_bn: "চরম মুখাপেক্ষিতা ও অসহায়ত্বের ঘোষণা (মুসার দোয়া)",
    source: "Quran: Surah Al-Qasas, 28:24",
    arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    transliteration: "Rabbi inni lima anzalta ilayya min khairin faqir.",
    meaning_bn: "হে আমার পালনকর্তা! আপনি আমার প্রতি যে অনুগ্রহই নাযিল করবেন, আমি তো তারই মুখাপেক্ষী।",
    meaning_en: "My Lord, indeed I am, for whatever good You would send down to me, in need.",
    tags: ["musa", "need", "poverty", "humility", "provision"],
    context_en: "When Prophet Moses, Musa (AS), fled Egypt, arriving in Midian destitute and exhausted, his supplication was a masterclass in theological politeness. He did not explicitly demand food, shelter, or safety. Instead, he simply stated a profound ontological fact: he was faqir (absolutely bankrupt) of whatever khayr (goodness) the Divine chose to dispense.",
    context_bn: "মিশর থেকে পালিয়ে মাদিয়ানে পৌঁছানোর পর মুসা (আ.) ছিলেন নিঃস্ব ও ক্লান্ত। তখন তিনি আল্লাহর কাছে সরাসরি খাদ্য বা আশ্রয় না চেয়ে নিজের অসহায়ত্ব তুলে ধরেন। তিনি নিজেকে 'ফকির' বা চরম অভাবী হিসেবে উপস্থাপন করেন এবং আল্লাহর নির্ধারিত যেকোনো কল্যাণের প্রতি মুখাপেক্ষী থাকার ঘোষণা দেন।"
  },

  // ─── SUNNAH: Salah ───────────────────────────────────────────────────────
  {
    id: "s-sal-001",
    slug: "dua-after-wudu",
    category: "sunnah",
    subcategory: "salah",
    subcategory_label_en: "Prayer & Ritual",
    subcategory_label_bn: "নামাজ ও আনুষ্ঠানিকতা",
    purpose_en: "Upon completing ablution (Wudu)",
    purpose_bn: "ওজু শেষ করার পরের দোয়া",
    source: "Hadith: Tirmidhi 55, Muslim 345",
    arabic:
      "أَشْهَدُ أَنْ لا إِلهَ إِلاّ اللهُ وَحْدَه لاَ شَرِيْكَ لَهُ، وَأَشْهَدُ أَنّ مُحَمّدًا عَبْدُهُ وَرَسُولُهُ، اللّهُمّ اجْعَلْنِي مِنَ التّوّابِينَ، وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    transliteration:
      "Ashhadu alla ilaha illallahu wahdahu la sharika lah, wa ashhadu anna Muhammadan abduhu wa rasuluh, Allahummaaj'alni minat-tawwabin, waj'alni minal-mutatahhirin.",
    meaning_bn:
      "আমি সাক্ষ্য দিচ্ছি আল্লাহ ছাড়া কোনো মাবুদ নেই। তিনি একক, তাঁর কোনো শরিক নেই এবং আমি সাক্ষ্য দিচ্ছি মুহাম্মাদ (সা.) তাঁর বান্দা ও রাসুল। হে আল্লাহ! আপনি আমাকে তাওবাকারীদের এবং পবিত্রতা অর্জনকারীদের অন্তর্ভুক্ত করুন।",
    meaning_en:
      "I bear witness that there is no god worthy of worship but Allah alone, with no partner, and I bear witness that Muhammad is His servant and messenger. O Allah, make me among those who repent and among those who purify themselves.",
    tags: ["wudu", "ablution", "purity", "shahadah", "tawbah"],
  },
  {
    id: "s-sal-002",
    slug: "dua-istiftah-thana",
    category: "sunnah",
    subcategory: "salah",
    subcategory_label_en: "Prayer & Ritual",
    subcategory_label_bn: "নামাজ ও আনুষ্ঠানিকতা",
    purpose_en: "Opening supplication of Salah (Dua Al-Istiftah / Thana)",
    purpose_bn: "সালাত শুরুর দোয়া (ছানা / দোয়ায়ে ইস্তিফতাহ)",
    source: "Hadith: Muslim 399, Abu Dawood 775",
    arabic:
      "سُبْحانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلاَ إِلَهَ غَيْرُكَ",
    transliteration:
      "Subhanakallahumma wa bihamdika wa tabarakasmuka wa ta'ala jadduka wa la ilaha ghairuk.",
    meaning_bn:
      "হে আল্লাহ! আপনার প্রশংসাসহ আপনার পবিত্রতা ও মহিমা ঘোষণা করছি, আপনার নাম বড়ই বরকতময়, আপনার মহিমা অতি উচ্চ। আর আপনি ছাড়া অন্য কোনো সত্য ইলাহ্‌ নেই।",
    meaning_en:
      "Glory be to You, O Allah, and praise. Blessed is Your Name and exalted is Your Majesty. There is no god worthy of worship but You.",
    tags: ["salah", "opening", "thana", "glorification", "prayer"],
  },
  {
    id: "s-sal-003",
    slug: "dua-qunoot-witr",
    category: "sunnah",
    subcategory: "salah",
    subcategory_label_en: "Prayer & Ritual",
    subcategory_label_bn: "নামাজ ও আনুষ্ঠানিকতা",
    purpose_en: "Dua Qunoot (recited in Witr prayer)",
    purpose_bn: "বিতর নামাজে পঠিত 'দোয়া কুনুত'",
    source: "Hadith: Tirmidhi, Abu Dawood",
    arabic:
      "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ وَقِنِي شَرَّ مَا قَضَيْتَ",
    transliteration:
      "Allahummahdini fiman hadayt, wa afini fiman afayt, wa tawallani fiman tawallayt, wa barik li fima a'tayt, wa qini sharra ma qadayt.",
    meaning_bn:
      "হে আল্লাহ! আপনি যাদের হেদায়েত দিয়েছেন আমাকে তাদের অন্তর্ভুক্ত করুন, আপনি যাদের স্বস্তি দিয়েছেন আমাকে তাদের অন্তর্ভুক্ত করুন। আপনি আমাকে যা দিয়েছেন তাতে বরকত দিন এবং আপনার ফয়সালার অকল্যাণ হতে আমাকে রক্ষা করুন।",
    meaning_en:
      "O Allah, guide me among those You have guided, pardon me among those You have pardoned, be an ally to me among those You have allied, bless me in what You have given, and protect me from the evil of what You have decreed.",
    tags: ["witr", "qunoot", "guidance", "blessing", "protection", "decree"],
  },
  {
    id: "s-sal-004",
    slug: "dua-after-salam",
    category: "sunnah",
    subcategory: "salah",
    subcategory_label_en: "Prayer & Ritual",
    subcategory_label_bn: "নামাজ ও আনুষ্ঠানিকতা",
    purpose_en: "Immediately after the final Salam in Salah",
    purpose_bn: "নামাজের সালাম ফেরানোর ঠিক পরের দোয়া",
    source: "Hadith: Abu Dawood 1512",
    arabic:
      "اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ",
    transliteration:
      "Allahumma antas salam wa minkas salam tabarakta ya dhal jalali wal ikram.",
    meaning_bn:
      "হে আল্লাহ! আপনিই শান্তিময় এবং আপনার থেকেই শান্তি আসে। আপনি কল্যাণময় এবং চরম সম্মান ও প্রতিপত্তির অধিকারী।",
    meaning_en:
      "O Allah! You are Peace, and from You comes peace. Blessed are You, O Possessor of Majesty and Honour.",
    tags: ["salah", "after prayer", "salam", "peace", "majesty"],
    context_en: "By invoking As-Salam (The Source of Flawless Peace), the worshipper requests that the tranquility achieved during the isolated act of prayer is sustained as they re-engage with the chaotic variables of family, commerce, and societal obligations. It frames peace not as the absence of conflict, but as an active emanation from the Divine.",
    context_bn: "নামাজ শেষে 'আস-সালাম' (শান্তির উৎস) নাম ধরে ডাকার মাধ্যমে বান্দা প্রার্থনা করে যেন নামাজের ভেতরের প্রশান্তি বাইরের কোলাহলপূর্ণ জগতেও বজায় থাকে। এটি জগতকে কেবল সংঘাতহীন নয়, বরং ঐশী শান্তির এক সক্রিয় প্রতিফলন হিসেবে দেখতে শেখায়।"
  },

  // ─── SUNNAH: Daily Life ──────────────────────────────────────────────────
  {
    id: "s-dal-001",
    slug: "dua-entering-marketplace",
    category: "sunnah",
    subcategory: "daily-life",
    subcategory_label_en: "Daily Life",
    subcategory_label_bn: "দৈনন্দিন জীবন",
    purpose_en: "Upon entering the marketplace",
    purpose_bn: "বাজারে (মার্কেটে) প্রবেশের দোয়া",
    source: "Hadith: Tirmidhi 3428, Ibn Majah 3860",
    arabic:
      "لاَ إِلَهَ إِلاَّ اللّٰهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، يُحْيِيْ وَيُمِيْتُ، وَهُوَ حَيٌّ لاَ يَمُوْتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ",
    transliteration:
      "La ilaha illallahu wahdahu la sharika lah, lahul mulku wa lahul hamdu, yuhyi wa yumitu, wa huwa hayyul la yamut, biyadihil khayru, wa huwa ala kulli shay-in qadir.",
    meaning_bn:
      "আল্লাহ ছাড়া কোনো মাবুদ নেই, তিনি এক, তার কোনো অংশীদার নেই। সকল ক্ষমতা ও প্রশংসা তাঁরই, তিনিই জীবন ও মৃত্যু দেন, তিনি চিরঞ্জীব, কখনো মারা যাবেন না। তাঁর হাতেই মঙ্গল এবং তিনিই সকল কিছুর ওপর ক্ষমতাশালী।",
    meaning_en:
      "There is no god worthy of worship but Allah alone, with no partner. His is all sovereignty and to Him belongs all praise. He gives life and causes death. He is Ever-Living and never dies. In His hand is all good and He is able to do all things.",
    tags: ["marketplace", "business", "tawhid", "protection", "barakah"],
    context_en: "The marketplace is traditionally viewed as a nexus of distraction and spiritual amnesia. Actively invoking the Divine in such a contested space yields disproportionately high spiritual merit. Reciting this formula anchors the believer against the overwhelming pull of aggressive consumerism.",
    context_bn: "বাজারকে সাধারণত গাফিলতি ও বিস্মৃতির স্থান হিসেবে দেখা হয়। এমন স্থানে আল্লাহকে স্মরণ করা অত্যন্ত ফজিলতপূর্ণ। এই দোয়াটি পাঠের মাধ্যমে মুমিন নিজেকে ভোগবাদী মানসিকতা থেকে রক্ষা করতে পারে।"
  },
  {
    id: "s-dal-002",
    slug: "dua-anxiety-depression-debt",
    category: "sunnah",
    subcategory: "daily-life",
    subcategory_label_en: "Daily Life",
    subcategory_label_bn: "দৈনন্দিন জীবন",
    purpose_en: "Protection from anxiety, depression, and overwhelming debt",
    purpose_bn:
      "দুশ্চিন্তা, বিষণ্ণতা এবং ঋণের বোঝা থেকে মুক্তির দোয়া",
    source: "Hadith: Bukhari 2893 (Narrated by Anas ibn Malik (RA))",
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    transliteration:
      "Allahumma inni a'udhu bika minal hammi wal hazan, wal ajzi wal kasal, wal bukhli wal jubn, wa dala'id-dayni wa ghalabatir-rijal.",
    meaning_bn:
      "হে আল্লাহ! আমি আপনার আশ্রয় নিচ্ছি দুশ্চিন্তা ও দুঃখ থেকে, অক্ষমতা ও অলসতা থেকে, কৃপণতা ও ভীরুতা থেকে, ঋণের অসহনীয় ভার ও মানুষদের দমন-পীড়ন থেকে।",
    meaning_en:
      "O Allah! I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.",
    tags: [
      "anxiety",
      "depression",
      "debt",
      "laziness",
      "courage",
      "mental health",
    ],
    context_en: "This linguistic structure operates on four distinct, interconnected dyads: temporal afflictions (anxiety/sorrow), operational failure (weakness/laziness), behavioral retractions (miserliness/cowardice), and socio-economic subjugation (debt/oppression). By actively vocalizing protection against these systemic constraints, the individual undergoes a cognitive reframing from victimhood to resilience.",
    context_bn: "এই দোয়াটি চারটি প্রধান মানসিক ও সামাজিক সংকটকে মোকাবিলা করে: ভবিষ্যৎ উদ্বেগ ও অতীত দুঃখ, অক্ষমতা ও অলসতা, কৃপণতা ও ভীরুতা, এবং ঋণের বোঝা ও মানুষের শোষণ। এর মাধ্যমে মানুষ মানসিকভাবে নিজেকে শক্তিশালী ও সুরক্ষিত অনুভব করে।"
  },
  {
    id: "s-dal-003",
    slug: "dua-janazah-deceased",
    category: "sunnah",
    subcategory: "daily-life",
    subcategory_label_en: "Daily Life",
    subcategory_label_bn: "দৈনন্দিন জীবন",
    purpose_en: "Supplication for the deceased in Janazah prayer",
    purpose_bn: "জানাজার নামাজে মৃত ব্যক্তির জন্য পঠিত দোয়া",
    source: "Hadith: Muslim (narrated by Awf ibn Malik (RA))",
    arabic:
      "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ",
    transliteration:
      "Allahummaghfir lahu warhamhu wa afihi wa'fu anhu wa akrim nuzulahu wa wassi' mudkhalahu waghsilhu bil-mai was-salji wal-barad.",
    meaning_bn:
      "হে আল্লাহ, তাকে ক্ষমা করুন, তার প্রতি দয়া করুন, তাকে পূর্ণ নিরাপত্তা দিন এবং মাফ করে দিন। তার আতিথেয়তা সম্মানজনক করুন, কবর প্রশস্ত করে দিন এবং তাকে পানি, বরফ ও শিলাবৃষ্টি দ্বারা ধৌত করে পবিত্র করুন।",
    meaning_en:
      "O Allah, forgive him, have mercy on him, grant him well-being, pardon him. Honour his arrival, expand his entrance, wash him with water, snow, and hail.",
    tags: ["janazah", "funeral", "deceased", "forgiveness", "grave"],
  },
  {
    id: "s-dai-004",
    slug: "transforming-hardship-ease",
    category: "sunnah",
    subcategory: "daily-life",
    subcategory_label_en: "Daily Life",
    subcategory_label_bn: "দৈনন্দিন জীবন",
    purpose_en: "Supplication for Actively Easing Difficulties",
    purpose_bn: "কঠিন কাজ সহজ করার দোয়া",
    source: "Hadith: Sahih Ibn Hibban, Hisnul Muslim 42",
    arabic: "اللَّهُمَّ لاَ سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً",
    transliteration: "Allahumma la sahla illa ma ja'altahu sahla, wa anta taj'alul-hazna idha shi'ta sahla.",
    meaning_bn: "হে আল্লাহ! আপনি যা সহজ করে দেন তা ছাড়া কোনো কিছুই সহজ নয়। আর আপনি চাইলে কঠিন বিষয়কেও সহজ করে দেন।",
    meaning_en: "O Allah, there is no ease except in that which You have made easy, and You make the difficulty, if You wish, easy.",
    tags: ["ease", "difficulty", "exams", "challenges", "guidance"],
    context_en: "This prayer introduces a crucial theological insight: 'ease' and 'difficulty' are not intrinsic properties of a task but are subjective states dictated by the Divine. A mountain can be traversed effortlessly if facilitated by grace, while a pebble can cause a stumble without it.",
    context_bn: "এই দোয়াটি শেখায় যে কোনো কাজ নিজে কঠিন বা সহজ নয়; আল্লাহর ইচ্ছাতেই তা সহজ বা কঠিন হয়। আল্লাহর সাহায্য থাকলে পাহাড়ও ডিঙ্গানো সহজ, আর না থাকলে ছোট কাজেও মানুষ হোঁচট খায়।"
  },
  {
    id: "s-dhikr-001",
    slug: "subhanallah-wa-bihamdihi",
    category: "sunnah",
    subcategory: "daily-life",
    subcategory_label_en: "Daily Life",
    subcategory_label_bn: "দৈনন্দিন জীবন",
    purpose_en: "The Statement of Perfection and Praise",
    purpose_bn: "আল্লাহর পবিত্রতা ও প্রশংসার ঘোষণা",
    source: "Hadith: Riyad us-Saliheen 1433",
    arabic: "سُبْحانَ اللّهِ وَ بِحَمْدِهِ",
    transliteration: "Subhan Allah Wa Bihamdihi.",
    meaning_bn: "মহিমান্বিত আল্লাহ এবং তাঁরই সমস্ত প্রশংসা।",
    meaning_en: "Glory be to Allah and Praise Him.",
    tags: ["dhikr", "praise", "tasbih", "daily", "reward"],
    context_en: "The constant repetition of this phrase acts as a spiritual abrasive, scrubbing the subconscious of ingratitude. 'Subhan' removes all imperfections from our concept of God, while 'Bihamdihi' attributes all perfection to Him.",
    context_bn: "এই জিকিরটি নিয়মিত পাঠ করা অন্তরের অকৃতজ্ঞতা দূর করে। 'সুবহানাল্লাহ' আল্লাহর সত্তা থেকে সকল ত্রুটি নাকচ করে এবং 'আলহামদুলিল্লাহ' সকল প্রশংসা তাঁর দিকেই নিবেদন করে।"
  },

  // ─── SUNNAH: Morning & Evening ───────────────────────────────────────────
  {
    id: "s-me-001",
    slug: "morning-dhikr-alive-kingdom",
    category: "sunnah",
    subcategory: "morning-evening",
    subcategory_label_en: "Morning & Evening",
    subcategory_label_bn: "সকাল ও সন্ধ্যার আমল",
    purpose_en: "Morning dhikr: affirming Allah's dominion at dawn",
    purpose_bn: "সকালের ঘুম থেকে ওঠার পর আল্লাহর প্রশংসা",
    source: "Hadith: Bukhari 6312",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration:
      "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur.",
    meaning_bn:
      "সমস্ত প্রশংসা আল্লাহর, যিনি মৃত্যুর পর আমাদের জীবন দান করেছেন (ঘুম থেকে জাগিয়েছেন) এবং তাঁর কাছেই পুনরুত্থান।",
    meaning_en:
      "All praise is for Allah, who gave us life after causing us to die, and to Him is the resurrection.",
    tags: ["morning", "waking up", "gratitude", "resurrection", "praise"],
  },
  {
    id: "s-me-002",
    slug: "sayyid-ul-istighfar-master-forgiveness",
    category: "sunnah",
    subcategory: "morning-evening",
    subcategory_label_en: "Morning & Evening",
    subcategory_label_bn: "সকাল ও সন্ধ্যার আমল",
    purpose_en: "Sayyid al-Istighfar – the master supplication for forgiveness",
    purpose_bn: "সাইয়িদুল ইস্তিগফার – ক্ষমার শ্রেষ্ঠ দোয়া",
    source: "Hadith: Bukhari 6306",
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration:
      "Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana abduka, wa ana ala ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika alayya, wa abu'u laka bidhanbi, faghfir li fa innahu la yaghfirudh-dhunuba illa anta.",
    meaning_bn:
      "হে আল্লাহ! তুমি আমার রব, তুমি ছাড়া কোনো ইলাহ নেই। তুমি আমাকে সৃষ্টি করেছ এবং আমি তোমার বান্দা। আমি সাধ্যমতো তোমার অঙ্গীকার ও প্রতিশ্রুতিতে অটল আছি। আমি আমার কৃতকর্মের অনিষ্ট থেকে তোমার আশ্রয় চাই। আমি তোমার নিআমতের কথা স্বীকার করছি এবং আমার পাপের কথাও স্বীকার করছি। সুতরাং আমাকে ক্ষমা করো, কারণ তুমি ছাড়া গুনাহ কেউ মাফ করতে পারে না।",
    meaning_en:
      "O Allah, You are my Lord. There is no god worthy of worship except You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me, and I acknowledge my sin. So forgive me, for none forgives sins but You.",
    tags: [
      "sayyid istighfar",
      "morning",
      "evening",
      "forgiveness",
      "covenant",
      "sins",
    ],
    context_en: "The Sayyidul Istighfar is universally recognized as the most comprehensive formula for seeking divine pardon. Its linguistic structure is a masterpiece: it affirms divine Lordship, declares servitude, reaffirms the primordial covenant, acknowledges human fragility, and culminates in a desperate plea for absolution. Reciting this with conviction provides a paradigm of ultimate hope.",
    context_bn: "সাইয়িদুল ইস্তিগফার হলো ক্ষমা প্রার্থনার সর্বশ্রেষ্ঠ বাক্য। এর গঠনশৈলী অত্যন্ত চমৎকার: এতে আল্লাহর প্রভুত্বের স্বীকৃতি, নিজের দাসত্বের ঘোষণা, আদি প্রতিশ্রুতির নবায়ন এবং নিজের ভুলের স্বীকারোক্তি রয়েছে। এটি পাঠে মুমিনের মনে আশার সঞ্চার হয় এবং পাপবোধের নিরাশা দূর হয়।"
  },
  {
    id: "s-me-003",
    slug: "evening-protection-complete-words",
    category: "sunnah",
    subcategory: "morning-evening",
    subcategory_label_en: "Morning & Evening",
    subcategory_label_bn: "সকাল ও সন্ধ্যার আমল",
    purpose_en:
      "Evening protection using Allah's perfect words from every evil",
    purpose_bn: "সন্ধ্যায় আল্লাহর পরিপূর্ণ বাক্যের দ্বারা সুরক্ষা",
    source: "Hadith: Muslim 2709",
    arabic:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration:
      "A'udhu bikalimatiллahi at-tammati min sharri ma khalaq.",
    meaning_bn:
      "আমি আল্লাহর পরিপূর্ণ বাক্যসমূহের মাধ্যমে তাঁর সৃষ্টির যাবতীয় অনিষ্ট থেকে আশ্রয় প্রার্থনা করছি।",
    meaning_en:
      "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    tags: ["evening", "protection", "refuge", "evil", "morning-evening"],
  },
  {
    id: "s-me-004",
    slug: "evening-supplication-amsayna",
    category: "sunnah",
    subcategory: "morning-evening",
    subcategory_label_en: "Morning & Evening",
    subcategory_label_bn: "সকাল ও সন্ধ্যার আমল",
    purpose_en: "The Comprehensive Evening Supplication",
    purpose_bn: "সন্ধ্যাবেলার বিশেষ আমল",
    source: "Hadith: Hisnul Muslim 75",
    arabic: "أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله... رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر",
    transliteration: "Amsayna wa amsal-mulku lillah walhamdu lillah... Rabbi a'udhu bika minal-kasali wa su'il-kibar.",
    meaning_bn: "আমরা সন্ধ্যায় উপনীত হয়েছি, আর রাজত্ব একমাত্র আল্লাহর জন্য এবং সমস্ত প্রশংসাও আল্লাহর... হে আমার রব, আমি আপনার কাছে অলসতা এবং বার্ধক্যের কষ্ট থেকে আশ্রয় চাই।",
    meaning_en: "We have reached the evening and at this very time unto Allah belongs all sovereignty, and all praise is for Allah... My Lord, I seek refuge in You from laziness and helpless old age.",
    tags: ["evening", "sovereignty", "protection", "laziness", "old age"],
    context_en: "By initiating the evening with an explicit acknowledgment that sovereignty remains with the Divine even as the sun sets, the individual surrenders the anxieties accumulated during the workday. The prayer also seeks refuge from the evils of helpless old age, ensuring dignity throughout one's lifecycle.",
    context_bn: "সূর্যাস্তের সাথে সাথে এই দোয়ার মাধ্যমে মুমিন ঘোষণা করে যে সকল রাজত্ব একমাত্র আল্লাহর। এটি দিনের ক্লান্তি ও উদ্বেগ দূর করে এবং বার্ধক্যের অক্ষমতা থেকে মুক্তি চাওয়ার এক শক্তিশালী মাধ্যম।"
  },

  // ─── SUNNAH: Repentance (New) ────────────────────────────────────────────
  {
    id: "s-rep-001",
    slug: "daily-istighfar-routine",
    category: "sunnah",
    subcategory: "repentance",
    subcategory_label_en: "Repentance & Forgiveness",
    subcategory_label_bn: "তাওবা ও ক্ষমা",
    purpose_en: "The Daily Repetitive Invocation for Forgiveness",
    purpose_bn: "দৈনন্দিন ক্ষমা প্রার্থনার জিকির",
    source: "Hadith: Riyad as-Salihin 1877",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    transliteration: "Subhan Allahi wa bihamdihi; Astaghfirullaha wa atubu ilaihi.",
    meaning_bn: "আল্লাহ পবিত্র এবং তাঁরই সমস্ত প্রশংসা; আমি আল্লাহর কাছে ক্ষমা প্রার্থনা করছি এবং তাঁর দিকেই ফিরে যাচ্ছি।",
    meaning_en: "Allah is free from imperfection, and I begin with praising Him. I beg forgiveness from Allah and I turn to Him in repentance.",
    tags: ["istighfar", "daily", "repentance", "tasbih", "maintenance"],
    context_en: "The continuous, rhythmic repetition of this specific phrase—often cited as being recited frequently by the Prophet ﷺ—acts as a spiritual abrasive, scrubbing the human consciousness of the psychological residue of daily micro-transgressions.",
    context_bn: "নবীজি (সা.) নিয়মিত এই দোয়াটি পাঠ করতেন। এটি দিনের ছোটখাটো ভুলের গ্লানি মুছে ফেলে এবং অন্তরের পবিত্রতা ফিরিয়ে আনে।"
  },

  // ─── SUNNAH: Protection & Healing (New Categorization) ───────────────────
  {
    id: "s-pro-001",
    slug: "ontological-shield-protection",
    category: "sunnah",
    subcategory: "protection",
    subcategory_label_en: "Protection & Safety",
    subcategory_label_bn: "সুরক্ষা ও নিরাপত্তা",
    purpose_en: "Invocation for Environmental and Physical Protection",
    purpose_bn: "সর্বাত্মক সুরক্ষা ও নিরাপত্তার দোয়া",
    source: "Hadith: Sunan at-Tirmidhi, Abu Dawood",
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Bismillahil-ladhi la yadurru ma'as-mihi shai'un fil-ardi wa la fis-sama'i, wa Hu-was-Sami'ul-'Alim.",
    meaning_bn: "সেই আল্লাহর নামে যাঁর নামের সাথে আসমান ও যমীনের কোনো কিছুই কোনো ক্ষতি করতে পারে না; আর তিনি সর্বশ্রোতা, সর্বজ্ঞানী।",
    meaning_en: "In the Name of Allah with Whose Name there is protection against every kind of harm in the earth or in the heaven, and He is the All-Hearing and All-Knowing.",
    tags: ["protection", "morning", "evening", "safety", "harm"],
    context_en: "This supplication establishes a paradigm where the verbal recitation itself modifies susceptibility to random environmental trauma. It grounds safety absolutely in the omniscience and omnipresence of the Creator.",
    context_bn: "এই দোয়াটি পাঠ করলে আসমান ও জমিনের কোনো অনিষ্টই ক্ষতি করতে পারে না। এটি মুমিনের নিরাপত্তাকে সম্পূর্ণভাবে আল্লাহর সর্বজ্ঞ ও সর্বশ্রোতা সত্তার ওপর ন্যস্ত করে।"
  },
  {
    id: "s-pro-002",
    slug: "protection-grave-dajjal",
    category: "sunnah",
    subcategory: "protection",
    subcategory_label_en: "Protection & Safety",
    subcategory_label_bn: "সুরক্ষা ও নিরাপত্তা",
    purpose_en: "Refuge from the Grave and Dajjal",
    purpose_bn: "কবর ও দাজ্জালের ফিতনা থেকে মুক্তির দোয়া",
    source: "Hadith: Sahih al-Bukhari, Sahih Muslim",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
    transliteration: "Allahumma inni a'udhu bika min 'adhabil qabr wa min 'adhabi jahannam, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-masihid-Dajjal.",
    meaning_bn: "হে আল্লাহ! আমি আপনার কাছে কবরের আযাব, জাহান্নামের আযাব, জীবন ও মৃত্যুর ফিতনা এবং দাজ্জালের ফিতনার অনিষ্ট থেকে আশ্রয় চাই।",
    meaning_en: "O Allah, I seek refuge in You from the torment of the grave, from the torment of the Hellfire, from the trials of life and death, and from the evil affliction of Al-Maseeh Ad-Dajjal.",
    tags: ["dajjal", "grave", "protection", "salah", "fitnah"],
    context_en: "Recited daily before the conclusion of Salah, this dua seeks refuge from unseen and apocalyptic trials. The specific mention of Dajjal acts as an inoculation against mass deception and systemic illusion.",
    context_bn: "প্রতি নামাজের শেষ বৈঠকে এই দোয়াটি পড়া অত্যন্ত গুরুত্বপূর্ণ। এটি কবর, জাহান্নাম এবং দাজ্জালের মতো মহাবিপদ থেকে সুরক্ষার জন্য একটি শক্তিশালী বর্ম।"
  },
  {
    id: "s-hea-001",
    slug: "healing-rabban-nas",
    category: "sunnah",
    subcategory: "healing",
    subcategory_label_en: "Health & Healing",
    subcategory_label_bn: "স্বাস্থ্য ও আরোগ্য",
    purpose_en: "Supplication for Total Physical Recovery",
    purpose_bn: "রোগমুক্তির জন্য পরিপূর্ণ আরোগ্যের দোয়া",
    source: "Hadith: Sahih al-Bukhari",
    arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ، اشْفِ أَنتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
    transliteration: "Allahumma Rabban-nas, adhhibil-ba'sa, ishfi antash-Shafi, la shifa'a illa shifa'uka, shifa'an la yughadiru saqaman.",
    meaning_bn: "হে আল্লাহ, মানুষের পালনকর্তা! আপনি কষ্ট দূর করে দিন এবং আরোগ্য দান করুন; আপনিই আরোগ্যকারী। আপনার আরোগ্য ছাড়া কোনো আরোগ্য নেই, এমন আরোগ্য যা কোনো রোগকে অবশিষ্ট রাখে না।",
    meaning_en: "O Allah, Lord of mankind, remove the affliction and heal; You are the Healer. There is no healing but Your healing, a healing that leaves no illness.",
    tags: ["healing", "sickness", "shifa", "health", "ruqyah"],
    context_en: "This prayer contextualizes medical intervention as merely a tool, while establishing the Divine as the ultimate Healer. It aims for the total eradication of pathology, rather than just symptom management.",
    context_bn: "এই দোয়াটি মনে করিয়ে দেয় যে ওষুধ ও চিকিৎসা কেবল উসিলা মাত্র, প্রকৃত আরোগ্যদানকারী আল্লাহ। এতে এমন এক আরোগ্য চাওয়া হয় যা রোগের কোনো রেশমাত্র অবশিষ্ট রাখে না।"
  },

  // ─── SUNNAH: Sustenance & Wisdom (New Categorization) ────────────────────
  {
  id: "s-pro-001",
  slug: "protection-useless-knowledge",
  category: "sunnah",
  subcategory: "protection",
  subcategory_label_en: "Protection",
  subcategory_label_bn: "সুরক্ষা",
  purpose_en: "Protection from harmful states of the soul",
  purpose_bn: "ক্ষতিকর অবস্থা থেকে আশ্রয় প্রার্থনা",
  source: "Hadith: Sahih Muslim 2722",
  arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ...",
  transliteration: "Allahumma inni a'udhu bika min 'ilmin la yanfa'.",
  meaning_en: "O Allah, I seek refuge in You from knowledge that does not benefit, a heart that does not humble itself, a soul that is never satisfied, and a supplication that is not answered.",
  meaning_bn: "হে আল্লাহ! আমি আপনার কাছে আশ্রয় চাই এমন জ্ঞান থেকে যা উপকারী নয়, এমন অন্তর থেকে যা বিনয়ী নয়, এমন নফস থেকে যা তৃপ্ত নয় এবং এমন দোয়া থেকে যা কবুল হয় না।",
  tags: ["protection", "knowledge", "heart"],
  context_en: "A powerful supplication covering intellectual, spiritual, and emotional protection.",
  context_bn: "এটি মানুষের জ্ঞান, অন্তর ও আত্মার সুরক্ষার জন্য গুরুত্বপূর্ণ দোয়া।"
},
  {
    id: "s-sus-002",
    slug: "beneficial-knowledge-sustenance",
    category: "sunnah",
    subcategory: "sustenance",
    subcategory_label_en: "Business & Wealth",
    subcategory_label_bn: "ব্যবসা ও সম্পদ",
    purpose_en: "The Alignment of Beneficial Knowledge and Goodly Provision",
    purpose_bn: "উপকারী জ্ঞান ও পবিত্র রিজিকের দোয়া",
    source: "Hadith: Sunan Ibn Majah 925",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
    transliteration: "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan tayyiban, wa 'amalan mutaqabbalan.",
    meaning_bn: "হে আল্লাহ! আমি আপনার নিকট উপকারী জ্ঞান, পবিত্র রিজিক এবং কবুলযোগ্য আমল প্রার্থনা করছি।",
    meaning_en: "O Allah, I ask You for beneficial knowledge, goodly provision, and acceptable deeds.",
    tags: ["knowledge", "rizq", "deeds", "morning", "success"],
    context_en: "The intentional sequencing here is profound: beneficial knowledge precedes pure provision, implying that ethical clarity is a prerequisite for acquiring wealth that does not corrupt.",
    context_bn: "এখানে জ্ঞানের কথা আগে বলা হয়েছে, কারণ সঠিক জ্ঞান ছাড়া হালাল উপার্জন চেনা সম্ভব নয়। সকালবেলায় এই দোয়াটি পাঠ করা দিনের কাজগুলোর উদ্দেশ্য ঠিক করতে সাহায্য করে।"
  },
  {
    id: "s-sus-003",
    slug: "universal-debt-relief",
    category: "sunnah",
    subcategory: "sustenance",
    subcategory_label_en: "Business & Wealth",
    subcategory_label_bn: "ব্যবসা ও সম্পদ",
    purpose_en: "Resolution of Debts and Broad Obligations",
    purpose_bn: "ঋণ মুক্তি ও দায়বদ্ধতা পরিশোধের দোয়া",
    source: "Hadith: Misbah al-Mutahajjid",
    arabic: "اَللَّهُمَّ ٱرْدُدْ إِلىٰ جَمِيعِ خَلْقِكَ",
    transliteration: "Allahumma urdud ila jami'i khalqika.",
    meaning_bn: "হে আল্লাহ! আপনার সকল সৃষ্টির পাওনা পরিশোধে আমাকে সাহায্য করুন।",
    meaning_en: "O Allah, (please) help me pay back to all of Your creatures.",
    tags: ["debt", "obligation", "rights", "freedom", "relief"],
    context_en: "The alleviation of debt is viewed as the restoration of liberty. This plea encompasses not just financial debt but all moral and social obligations owed to creation.",
    context_bn: "ঋণ মানুষকে পরাধীন করে রাখে। এই দোয়াটি কেবল আর্থিক ঋণ নয়, বরং মানুষ ও সৃষ্টির প্রতি সকল প্রকার দায়বদ্ধতা থেকে মুক্তির জন্য প্রার্থনা।"
  },
  {
  id: "s-fin-001",
  slug: "protection-debt",
  category: "sunnah",
  subcategory: "sustenance",
  subcategory_label_en: "Business & Wealth",
  subcategory_label_bn: "ব্যবসা ও সম্পদ",
  purpose_en: "Seeking protection from debt",
  purpose_bn: "ঋণ থেকে আশ্রয় প্রার্থনা",
  source: "Hadith: Sahih al-Bukhari",
  arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ",
  transliteration: "Allahumma inni a'udhu bika minal ma'thami wal maghram.",
  meaning_en: "O Allah, I seek refuge in You from sin and debt.",
  meaning_bn: "হে আল্লাহ! আমি আপনার কাছে পাপ ও ঋণ থেকে আশ্রয় চাই।",
  tags: ["debt", "wealth", "protection"],
  context_en: "The Prophet ﷺ often sought refuge from debt because it burdens the soul and affects character.",
  context_bn: "ঋণ মানুষের চরিত্র ও জীবনকে কঠিন করে তোলে বলে রাসুল ﷺ এ থেকে আশ্রয় চাইতেন।"
},
{
  id: "s-akh-001",
  slug: "asking-for-jannah",
  category: "sunnah",
  subcategory: "daily-life",
  subcategory_label_en: "Hereafter",
  subcategory_label_bn: "আখিরাত",
  purpose_en: "Seeking Paradise and protection from Hell",
  purpose_bn: "জান্নাত কামনা ও জাহান্নাম থেকে আশ্রয়",
  source: "Hadith: Abu Dawud",
  arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
  transliteration: "Allahumma inni as'aluka al-jannah wa a'udhu bika min an-nar.",
  meaning_en: "O Allah, I ask You for Paradise and seek refuge in You from the Fire.",
  meaning_bn: "হে আল্লাহ! আমি আপনার কাছে জান্নাত চাই এবং জাহান্নামের আগুন থেকে আশ্রয় চাই।",
  tags: ["jannah", "akhirah", "protection"],
  context_en: "One of the simplest and most comprehensive supplications for the Hereafter.",
  context_bn: "আখিরাতের জন্য সবচেয়ে সংক্ষিপ্ত ও গুরুত্বপূর্ণ দোয়াগুলোর একটি।"
},
{
  id: "s-char-001",
  slug: "good-character",
  category: "sunnah",
  subcategory: "character",
  subcategory_label_en: "Character & Ethics",
  subcategory_label_bn: "চরিত্র ও নৈতিকতা",
  purpose_en: "Seeking the best character",
  purpose_bn: "উত্তম চরিত্রের দোয়া",
  source: "Hadith: Sahih Muslim",
  arabic: "اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الْأَخْلَاقِ",
  transliteration: "Allahumma ihdini li ahsanil akhlaq.",
  meaning_en: "O Allah, guide me to the best character.",
  meaning_bn: "হে আল্লাহ! আমাকে উত্তম চরিত্রের পথে পরিচালিত করুন।",
  tags: ["character", "ethics"],
  context_en: "Islam places immense emphasis on good character.",
  context_bn: "ইসলামে উত্তম চরিত্র অত্যন্ত গুরুত্বপূর্ণ।"
},{
  id: "s-health-001",
  slug: "ask-for-afiyah",
  category: "sunnah",
  subcategory: "healing",
  subcategory_label_en: "Health & Wellbeing",
  subcategory_label_bn: "স্বাস্থ্য ও কল্যাণ",
  purpose_en: "Seeking wellbeing and protection",
  purpose_bn: "সুস্থতা ও নিরাপত্তার দোয়া",
  source: "Hadith: Tirmidhi",
  arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ",
  transliteration: "Allahumma inni as'aluka al-afiyah.",
  meaning_en: "O Allah, I ask You for wellbeing.",
  meaning_bn: "হে আল্লাহ! আমি আপনার কাছে নিরাপত্তা ও সুস্থতা চাই।",
  tags: ["health", "wellbeing"],
  context_en: "The Prophet ﷺ said that after faith nothing better is given than wellbeing.",
  context_bn: "ঈমানের পরে মানুষের জন্য সবচেয়ে বড় নিয়ামত হলো সুস্থতা।"
},
  {
    id: "s-wis-001",
    slug: "anchoring-heart-muqallib",
    category: "sunnah",
    subcategory: "wisdom",
    subcategory_label_en: "Wisdom & Guidance",
    subcategory_label_bn: "প্রজ্ঞা ও হেদায়েত",
    purpose_en: "Steadfastness and Anchoring of the Heart",
    purpose_bn: "অন্তরের অবিচলতা ও দৃঢ়তার দোয়া",
    source: "Hadith: Jami' at-Tirmidhi 3522",
    arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    transliteration: "Ya Muqallibal-qulub, thabbit qalbi 'ala dinik.",
    meaning_bn: "হে অন্তরসমূহের পরিবর্তনকারী! আমার অন্তরকে আপনার দ্বীনের উপর অবিচল রাখুন।",
    meaning_en: "O Changer of the hearts, make my heart firm upon Your religion.",
    tags: ["heart", "steadfastness", "iman", "guidance", "prophet"],
    context_en: "This was one of the most frequently repeated supplications by the Prophet ﷺ. It acknowledges that spiritual stability is not a permanent achievement but a continuous divine grant.",
    context_bn: "নবীজি (সা.) এই দোয়াটি খুব বেশি পড়তেন। মানুষের অন্তর সর্বদা পরিবর্তনশীল; তাই আল্লাহর কাছে দ্বীনের ওপর অটল থাকার তাওফিক চাওয়া অত্যন্ত জরুরি।"
  },

  // ─── SALAF: Sahabah ──────────────────────────────────────────────────────
  {
    id: "sl-sah-001",
    slug: "abu-bakr-sincere-faith-dua",
    category: "salaf",
    subcategory: "sahabah",
    subcategory_label_en: "Companions (Sahabah)",
    subcategory_label_bn: "সাহাবীগণের দোয়া",
    purpose_en:
      "Abu Bakr al-Siddiq (RA)'s supplication for sincere faith and purity of heart",
    purpose_bn:
      "আবু বকর সিদ্দিক (রা.)-এর খালেস ঈমান ও পবিত্র অন্তরের দোয়া",
    source:
      "Hisnul Muslim; transmitted through Abu Bakr al-Siddiq (may Allah be pleased with him)",
    arabic:
      "اللَّهُمَّ اجْعَلْ أَوَّلَ هَذَا النَّهَارِ صَلاَحاً وَوَسَطَهُ فَلاَحاً وَآخِرَهُ نَجَاحاً",
    transliteration:
      "Allahummaaj'al awwala hadhan nahari salahan wa wasatahu falahan wa akhirahu najahan.",
    meaning_bn:
      "হে আল্লাহ! এই দিনের শুরুটি সংশোধনমূলক করুন, মধ্যভাগটি সাফল্যময় করুন এবং শেষভাগটি কৃতকার্যময় করুন।",
    meaning_en:
      "O Allah! Make the beginning of this day righteous, its middle successful, and its end triumphant.",
    tags: ["abu bakr", "day", "morning", "success", "righteousness"],
  },
  {
    id: "sl-sah-002",
    slug: "umar-guidance-protection-enemy",
    category: "salaf",
    subcategory: "sahabah",
    subcategory_label_en: "Companions (Sahabah)",
    subcategory_label_bn: "সাহাবীগণের দোয়া",
    purpose_en:
      "Umar ibn al-Khattab (RA)'s supplication for guidance and protection from internal enemies",
    purpose_bn:
      "উমর ইবনুল খাত্তাব (রা.)-এর হেদায়েত ও অভ্যন্তরীণ শত্রু থেকে সুরক্ষার দোয়া",
    source:
      "Transmitted through Umar ibn al-Khattab (may Allah be pleased with him)",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ فِعْلَ الخَيْرَاتِ وَتَرْكَ المُنْكَرَاتِ وَحُبَّ المَسَاكِينِ",
    transliteration:
      "Allahumma inni as'aluka fi'lal khayrati wa tarkal munkarat wa hubbal masakin.",
    meaning_bn:
      "হে আল্লাহ! আমি আপনার কাছে ভালো কাজ করার, মন্দ কাজ থেকে বিরত থাকার এবং গরিব-মিসকিনদের ভালোবাসার তাওফিক চাই।",
    meaning_en:
      "O Allah! I ask You for the ability to do good deeds, to avoid evil deeds, and to love the poor.",
    tags: ["umar", "good deeds", "avoiding evil", "poor", "masakin"],
  },

  // ─── SALAF: Tabi'un ──────────────────────────────────────────────────────
  {
    id: "sl-tab-001",
    slug: "hasan-basri-gratitude-contentment",
    category: "salaf",
    subcategory: "tabiun",
    subcategory_label_en: "Successors (Tabi'un)",
    subcategory_label_bn: "তাবেয়ীগণের দোয়া",
    purpose_en:
      "Al-Hasan al-Basri (RH)'s supplication for gratitude and contentment with divine decree",
    purpose_bn:
      "হাসান আল-বাসরি (রহ.)-এর কৃতজ্ঞতা ও তাকদিরের প্রতি সন্তুষ্টির দোয়া",
    source: "Transmitted through Al-Hasan al-Basri (may Allah have mercy on him)",
    arabic:
      "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْماً",
    transliteration:
      "Allahumman fa'ni bima allamtani wa allimni ma yanfa'uni wa zidni ilma.",
    meaning_bn:
      "হে আল্লাহ! আপনি আমাকে যা শিখিয়েছেন তা দিয়ে আমাকে উপকৃত করুন, আমাকে এমন কিছু শেখান যা আমার উপকার করবে এবং আমার জ্ঞান বৃদ্ধি করুন।",
    meaning_en:
      "O Allah! Benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge.",
    tags: [
      "hasan basri",
      "knowledge",
      "ilm",
      "benefit",
      "learning",
      "tabi'un",
    ],
  },
  {
    id: "sl-tab-002",
    slug: "sufyan-thawri-protection-innovations",
    category: "salaf",
    subcategory: "tabiun",
    subcategory_label_en: "Successors (Tabi'un)",
    subcategory_label_bn: "তাবেয়ীগণের দোয়া",
    purpose_en:
      "Sufyan al-Thawri (RH)'s supplication for protection from bid'ah and misguidance",
    purpose_bn:
      "সুফিয়ান আস-সাওরি (রহ.)-এর বিদআত ও পথভ্রষ্টতা থেকে সুরক্ষার দোয়া",
    source:
      "Transmitted through Sufyan al-Thawri (may Allah have mercy on him)",
    arabic:
      "اللَّهُمَّ اهْدِنَا إِلَى الصِّرَاطِ الْمُسْتَقِيمِ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
    transliteration:
      "Allahummah-dina ilas-siratal mustaqim, siratil-ladhina an'amta alayhim.",
    meaning_bn:
      "হে আল্লাহ! আমাদের সরল পথে পরিচালিত করুন — তাদের পথে যাদের উপর আপনি অনুগ্রহ করেছেন।",
    meaning_en:
      "O Allah! Guide us to the straight path — the path of those upon whom You have bestowed Your grace.",
    tags: ["sufyan thawri", "guidance", "straight path", "sirat", "tabi'un"],
  },

  // ─── SUNNAH: Ramadan ─────────────────────────────────────────────────────
  {
    id: "s-ram-001",
    slug: "dua-suhoor-sehri",
    category: "sunnah",
    subcategory: "ramadan",
    subcategory_label_en: "Ramadan Duas",
    subcategory_label_bn: "রমজানের দোয়া",
    purpose_en: "Dua for Suhoor (Sehri) – intention for fasting",
    purpose_bn: "সেহরি / সুহুরের দোয়া – রোজার নিয়ত",
    source: "Hadith: Abu Dawood 2454; Nasai 2162",
    arabic: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
    transliteration: "Wa bisawmi ghadin nawaitu min shahri Ramadan.",
    meaning_bn:
      "আমি রমজান মাসের আগামীকালের রোজার নিয়ত করলাম।",
    meaning_en:
      "I intend to keep the fast for tomorrow in the month of Ramadan.",
    tags: [
      "suhoor",
      "sehri",
      "fasting",
      "ramadan",
      "niyyah",
      "intention",
      "dua for suhoor",
      "sehri ki dua",
    ],
  },
  {
    id: "s-ram-002",
    slug: "dua-iftar-breaking-fast",
    category: "sunnah",
    subcategory: "ramadan",
    subcategory_label_en: "Ramadan Duas",
    subcategory_label_bn: "রমজানের দোয়া",
    purpose_en: "Dua for Iftar – breaking the fast",
    purpose_bn: "ইফতারের দোয়া – রোজা খোলার দোয়া",
    source: "Hadith: Abu Dawood 2357; Ibn Majah 1753",
    arabic:
      "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    transliteration: "Allahumma laka sumtu wa ala rizqika aftartu.",
    meaning_bn:
      "হে আল্লাহ! আমি আপনার জন্য রোজা রেখেছি এবং আপনার রিজিক দিয়ে ইফতার করছি।",
    meaning_en:
      "O Allah! I fasted for You and I break my fast with Your sustenance.",
    tags: [
      "iftar",
      "iftar dua",
      "dua for iftar",
      "breaking fast",
      "roza kholne ki dua",
      "ramadan",
      "fasting",
    ],
  },
  {
    id: "s-ram-003",
    slug: "dua-iftar-extended",
    category: "sunnah",
    subcategory: "ramadan",
    subcategory_label_en: "Ramadan Duas",
    subcategory_label_bn: "রমজানের দোয়া",
    purpose_en:
      "Extended Dua at Iftar – thirst gone, veins moistened, reward secured",
    purpose_bn: "ইফতারের বিস্তারিত দোয়া – তৃষ্ণা দূর হল, শিরা সতেজ হল",
    source: "Hadith: Abu Dawood 2357; Al-Hakim",
    arabic:
      "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
    transliteration:
      "Dhahaba-z-zzama'u wabtallatil-'uruqu wa thabatal-ajru insha'allah.",
    meaning_bn:
      "তৃষ্ণা দূর হয়েছে, শিরাগুলো আর্দ্র হয়েছে এবং ইনশাআল্লাহ পুরস্কার নিশ্চিত হয়েছে।",
    meaning_en:
      "The thirst is gone, the veins are moistened, and the reward is secured, if Allah wills.",
    tags: [
      "iftar",
      "dua to break fast",
      "dua for breaking fast",
      "ramadan",
      "fasting",
      "iftar ki dua",
    ],
  },
  {
    id: "s-ram-004",
    slug: "dua-first-ashra-ramadan",
    category: "sunnah",
    subcategory: "ramadan",
    subcategory_label_en: "Ramadan Duas",
    subcategory_label_bn: "রমজানের দোয়া",
    purpose_en:
      "Dua for the First Ashra of Ramadan (First 10 days – Mercy)",
    purpose_bn:
      "রমজানের প্রথম আশরার দোয়া (প্রথম ১০ দিন – রহমত)",
    source: "Hisnul Muslim; widely transmitted",
    arabic:
      "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
    transliteration: "Ya Hayyu Ya Qayyumu birahmatika astaghith.",
    meaning_bn:
      "হে চিরঞ্জীব! হে স্বয়ম্ভু সত্তা! আমি আপনার রহমতের মাধ্যমে সাহায্য চাইছি।",
    meaning_en:
      "O Ever-Living! O Self-Sustaining! Through Your mercy I seek relief.",
    tags: [
      "first ashra",
      "pehle ashray ki dua",
      "ramadan",
      "mercy",
      "rahmat",
      "first 10 days",
    ],
  },
  {
    id: "s-ram-005",
    slug: "dua-second-ashra-ramadan",
    category: "sunnah",
    subcategory: "ramadan",
    subcategory_label_en: "Ramadan Duas",
    subcategory_label_bn: "রমজানের দোয়া",
    purpose_en: "Dua for the Second Ashra of Ramadan (Second 10 days – Forgiveness)",
    purpose_bn: "রমজানের দ্বিতীয় আশরার দোয়া (দ্বিতীয় ১০ দিন – মাগফিরাত)",
    source: "Widely transmitted; recommended by scholars",
    arabic: "أَسْتَغْفِرُ اللَّهَ رَبِّي مِنْ كُلِّ ذَنْبٍ وَأَتُوبُ إِلَيْهِ",
    transliteration:
      "Astaghfirullaha Rabbi min kulli dhanbin wa atubu ilayh.",
    meaning_bn:
      "আমি আমার সকল গুনাহ থেকে আমার রব আল্লাহর কাছে ক্ষমা চাই এবং তাঁর দিকে তাওবা করি।",
    meaning_en:
      "I seek forgiveness from Allah, my Lord, from every sin, and I repent to Him.",
    tags: [
      "second ashra",
      "dusray ashray ki dua",
      "ramadan",
      "forgiveness",
      "mghfirat",
      "istighfar",
    ],
  },
  {
    id: "s-ram-006",
    slug: "dua-third-ashra-laylatul-qadr",
    category: "sunnah",
    subcategory: "ramadan",
    subcategory_label_en: "Ramadan Duas",
    subcategory_label_bn: "রমজানের দোয়া",
    purpose_en: "Dua for Laylat al-Qadr (Third Ashra – Night of Power)",
    purpose_bn: "লাইলাতুল কদরের দোয়া (তৃতীয় আশরা – মুক্তি)",
    source: "Hadith: Tirmidhi 3513 (narrated by Aisha (RA))",
    arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    transliteration: "Allahumma innaka afuwwun tuhibbul afwa fa'fu anni.",
    meaning_bn:
      "হে আল্লাহ! আপনি ক্ষমাশীল, আপনি ক্ষমা করতে ভালোবাসেন। অতএব আমাকে ক্ষমা করুন।",
    meaning_en:
      "O Allah! You are the Pardoner, You love to pardon, so pardon me.",
    tags: [
      "laylatul qadr",
      "third ashra",
      "night of power",
      "ramadan",
      "aisha",
      "pardon",
      "afuw",
    ],
    context_en: "Within Islamic theology, a distinction is made between Maghfirah (concealing sin) and 'Afw (erasing sin entirely). This supplication, taught specifically for Laylatul Qadr, asks for the complete, irrevocable erasure of sins, appealing to the Divine attribute of loving to pardon.",
    context_bn: "মাগফিরাত মানে পাপ গোপন রাখা, আর 'আফ্উ' মানে পাপকে সম্পূর্ণ মুছে ফেলা। লাইলাতুল কদরের এই বিশেষ দোয়াটি আল্লাহর কাছে পরিপূর্ণ ক্ষমার আবদার করে—এমন ক্ষমা যা পাপের কোনো চিহ্ন রাখে না।"
  },
  {
    id: "s-ram-007",
    slug: "taraweeh-dua-between-rakats",
    category: "sunnah",
    subcategory: "ramadan",
    subcategory_label_en: "Ramadan Duas",
    subcategory_label_bn: "রমজানের দোয়া",
    purpose_en: "Dua recited between Taraweeh rakats",
    purpose_bn: "তারাবির নামাজের মাঝে পঠিত দোয়া",
    source: "Widely transmitted; common Taraweeh practice",
    arabic:
      "سُبْحانَ ذِي الْمُلْكِ وَالْمَلَكُوتِ سُبْحانَ ذِي الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْكِبْرِيَاءِ وَالْجَبَرُوتِ سُبْحانَ الْمَلِكِ الْحَيِّ الَّذِي لاَ يَنَامُ وَلاَ يَمُوتُ أَبَدًا أَبَدًا سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلآئِكَةِ وَالرُّوحِ",
    transliteration:
      "Subhana dhil mulki wal malakut, subhana dhil izzati wal azamati wal haybati wal qudrati wal kibriya'i wal jabarut. Subhanal malikil hayyil ladhi la yanamu wa la yamut abadan abada. Subbuhun quddusun rabbul mala'ikati war ruh.",
    meaning_bn:
      "পবিত্র তিনি যিনি রাজত্ব ও মহাসাম্রাজ্যের অধিকারী। পবিত্র তিনি যিনি সম্মান, মহত্ত্ব, প্রতাপ, শক্তি, অহংকার ও পরাক্রমের অধিকারী। সেই চির-জীবন্ত মালিক পবিত্র যিনি কখনো ঘুমান না এবং কখনো মৃত্যুবরণ করবেন না। মহাপবিত্র, সর্বপবিত্র — ফেরেশতা ও রুহের রব।",
    meaning_en:
      "Glory be to the Possessor of dominion and sovereignty. Glory be to the Possessor of honour, greatness, awe, power, pride, and might. Glory be to the Ever-Living King who neither sleeps nor dies, ever and ever. Most Glorified, Most Holy, Lord of the angels and the Spirit.",
    tags: [
      "taraweeh",
      "taraweeh dua",
      "taraweeh ki dua",
      "ramadan",
      "night prayer",
      "glorification",
    ],
  },

  // ─── SUNNAH: Food & Eating ────────────────────────────────────────────────
  {
    id: "s-food-001",
    slug: "dua-before-eating",
    category: "sunnah",
    subcategory: "food",
    subcategory_label_en: "Food & Eating",
    subcategory_label_bn: "খাওয়ার দোয়া",
    purpose_en: "Dua before eating (Bismillah)",
    purpose_bn: "খাওয়ার আগের দোয়া (বিসমিল্লাহ)",
    source: "Hadith: Abu Dawood 3767; Ibn Majah 3264",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah.",
    meaning_bn: "আল্লাহর নামে (শুরু করছি)।",
    meaning_en: "In the name of Allah.",
    tags: [
      "before eating",
      "dua before eating",
      "bismillah",
      "food",
      "meal",
      "eating",
    ],
    context_en: "A simple yet profound invocation that elevates the basic biological act of consumption into an act of worship. It reminds the believer that sustenance is a divine gift.",
    context_bn: "খাবারের শুরুতে 'বিসমিল্লাহ' বলা সাধারণ খাওয়াকে ইবাদতে পরিণত করে। এটি মনে করিয়ে দেয় যে জীবিকা কেবল আল্লাহর দান।"
  },
  {
    id: "s-food-002",
    slug: "dua-before-eating-forgot",
    category: "sunnah",
    subcategory: "food",
    subcategory_label_en: "Food & Eating",
    subcategory_label_bn: "খাওয়ার দোয়া",
    purpose_en: "Dua if one forgot the Bismillah before eating",
    purpose_bn: "খাওয়ার আগে বিসমিল্লাহ ভুলে গেলে পড়ার দোয়া",
    source: "Hadith: Abu Dawood 3767; Tirmidhi 1858",
    arabic: "بِسْمِ اللَّهِ فِي أَوَّلِهِ وَآخِرِهِ",
    transliteration: "Bismillahi fi awwalihi wa akhirih.",
    meaning_bn:
      "আল্লাহর নামে এর শুরু ও শেষে (পড়ছি)।",
    meaning_en:
      "In the name of Allah at its beginning and its end.",
    tags: ["before eating", "forgot", "bismillah", "food", "sunnah"],
  },
  {
    id: "s-food-003",
    slug: "dua-after-eating",
    category: "sunnah",
    subcategory: "food",
    subcategory_label_en: "Food & Eating",
    subcategory_label_bn: "খাওয়ার দোয়া",
    purpose_en: "Dua after eating (complete supplication of thanks)",
    purpose_bn: "খাওয়ার পরের দোয়া (পূর্ণ শোকর)",
    source: "Hadith: Abu Dawood 3850; Tirmidhi 3457",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ",
    transliteration:
      "Alhamdu lillahil-ladhi at'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah.",
    meaning_bn:
      "সমস্ত প্রশংসা আল্লাহর, যিনি আমাকে এটি খাইয়েছেন এবং আমার কোনো শক্তি ও সামর্থ্য ছাড়াই আমাকে এটি রিজিক হিসেবে দিয়েছেন।",
    meaning_en:
      "All praise is for Allah who fed me this and provided it for me without any might or power on my part.",
    tags: [
      "after eating",
      "dua after eating",
      "food",
      "gratitude",
      "rizq",
      "alhamdulillah",
    ],
  },
  {
    id: "s-food-004",
    slug: "dua-masura-end-of-salah",
    category: "sunnah",
    subcategory: "salah",
    subcategory_label_en: "Prayer & Ritual",
    subcategory_label_bn: "নামাজ ও আনুষ্ঠানিকতা",
    purpose_en: "Dua al-Masura – supplication before the final Salam",
    purpose_bn: "দোয়া মাসুরা – শেষ সালামের আগের দোয়া",
    source: "Hadith: Bukhari 1377; Muslim 588",
    arabic:
      "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
    transliteration:
      "Allahumma inni zalamtu nafsi zulman kathiran wa la yaghfirudh-dhunuba illa anta faghfir li maghfiratan min indika warhamni innaka antal ghafurur rahim.",
    meaning_bn:
      "হে আল্লাহ! আমি নিজের উপর অনেক বেশি অত্যাচার করেছি এবং আপনি ছাড়া কেউ গুনাহ মাফ করতে পারে না। সুতরাং আপনার পক্ষ থেকে আমাকে ক্ষমা করুন এবং আমার প্রতি দয়া করুন। নিশ্চয়ই আপনি ক্ষমাশীল, অতিশয় দয়ালু।",
    meaning_en:
      "O Allah! I have wronged myself a great deal, and none forgives sins but You. So grant me forgiveness from You and have mercy on me. Truly, You are the All-Forgiving, the Most Merciful.",
    tags: [
      "dua masura",
      "dua al-masura",
      "salah",
      "before salam",
      "tashahud",
      "forgiveness",
    ],
  },

  // ─── SUNNAH: Istikhara ───────────────────────────────────────────────────
  {
    id: "s-ist-001",
    slug: "dua-istikhara",
    category: "sunnah",
    subcategory: "istikhara",
    subcategory_label_en: "Istikhara (Seeking Guidance)",
    subcategory_label_bn: "ইস্তিখারা (সঠিক সিদ্ধান্তের দোয়া)",
    purpose_en: "Dua al-Istikhara – seeking Allah's guidance on a decision",
    purpose_bn: "দোয়া ইস্তিখারা – আল্লাহর কাছে সঠিক সিদ্ধান্তের পথ চাওয়া",
    source: "Hadith: Bukhari 1166 (narrated by Jabir ibn Abdullah (RA))",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلاَ أَقْدِرُ وَتَعْلَمُ وَلاَ أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ",
    transliteration:
      "Allahumma inni astakhiruka bi'ilmika, wa astaqdiruka biqudratika, wa as'aluka min fadlikal-azim. Fa innaka taqdiru wa la aqdiru, wa ta'lamu wa la a'lamu, wa anta allamul ghuyub. Allahumma in kunta ta'lamu anna hadhal amra khayrun li fi dini wa ma'ashi wa aqibati amri faqdurhu li wa yassirhu li thumma barik li fihi. Wa in kunta ta'lamu anna hadhal amra sharrun li fi dini wa ma'ashi wa aqibati amri fasrifhu anni wasrifni anhu waqdur liyal khayra haythu kana thumma ardini bih.",
    meaning_bn:
      "হে আল্লাহ! আমি আপনার জ্ঞানের মাধ্যমে আপনার কাছে কল্যাণ চাই, আপনার শক্তির মাধ্যমে শক্তি চাই এবং আপনার মহাঅনুগ্রহ থেকে চাই। কারণ আপনি সক্ষম আর আমি অক্ষম, আপনি জানেন আর আমি জানি না, আর আপনি অদৃশ্য বিষয়ের পরিপূর্ণ জ্ঞানী। হে আল্লাহ! আপনি যদি জানেন এই কাজটি আমার দ্বীন, জীবিকা এবং ভবিষ্যতের জন্য কল্যাণকর, তাহলে এটি আমার জন্য নির্ধারণ করুন, সহজ করুন এবং বরকত দিন। আর যদি জানেন এটি আমার জন্য ক্ষতিকর, তাহলে এটিকে আমার জন্য এবং আমাকে এটি থেকে দূরে রাখুন। আর যেখানেই কল্যাণ থাকুক তা আমার জন্য নির্ধারণ করুন এবং তাতে আমাকে সন্তুষ্ট রাখুন।",
    meaning_en:
      "O Allah! I seek the counsel of Your knowledge, and I seek the help of Your omnipotence, and I beseech You for Your magnificent grace. Surely, You are capable and I am not. You know and I know not, and You are the Knower of the unseen. O Allah! If You know this matter to be good for my religion, livelihood and its consequences then ordain it for me, make it easy for me, and bless it for me. And if You know this matter to be ill for my religion, livelihood and its consequences, then turn it away from me, and turn me away from it, and ordain goodness for me wherever it may be, and make me pleased with it.",
    tags: [
      "istikhara",
      "dua istikhara",
      "istikhara dua",
      "decision",
      "guidance",
      "jabir",
      "choice",
    ],
    context_en: "The core theological mechanic of the Istikhara is the systematic dismantling of the illusion of absolute human agency. By declaring 'You know and I do not', the petitioner preemptively insulates themselves against post-decision regret. It asks for three things: decree (execution), facilitation (logistics), and blessing (sustainability).",
    context_bn: "ইস্তিখারা মানুষের অহংকার দূর করে এবং আল্লাহর ওপর নির্ভরতা শেখায়। এর মাধ্যমে বান্দা স্বীকার করে যে, ভবিষ্যতের জ্ঞান একমাত্র আল্লাহর কাছেই আছে। সঠিক সিদ্ধান্ত নেওয়ার জন্য এর চেয়ে উত্তম কোনো মাধ্যম নেই।"
  },

  // ─── SUNNAH: Travel & Protection ─────────────────────────────────────────
  {
    id: "s-trv-001",
    slug: "manzil-dua-protection",
    category: "sunnah",
    subcategory: "travel",
    subcategory_label_en: "Travel & Protection",
    subcategory_label_bn: "সফর ও সুরক্ষা",
    purpose_en: "Manzil Dua – comprehensive protection from evil and magic",
    purpose_bn: "মনজিল দোয়া – জাদু ও অনিষ্ট থেকে সর্বাত্মক সুরক্ষা",
    source:
      "Compiled by Shaykh Muhammad Zakariyya al-Kandhlawi (RH) from Quran & Sunnah",
    arabic:
      "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
    transliteration:
      "Bismillahir rahmanir rahim. Qul huwallahu ahad, Allahus samad, lam yalid wa lam yulad, wa lam yakun lahu kufuwan ahad.",
    meaning_bn:
      "পরম করুণাময় ও অতিশয় দয়ালু আল্লাহর নামে। বলুন: তিনিই আল্লাহ, একমাত্র। আল্লাহ হলেন অমুখাপেক্ষী। তিনি কাউকে জন্ম দেননি, এবং কেউ তাঁকে জন্ম দেয়নি। আর কেউ তাঁর সমকক্ষ নেই।",
    meaning_en:
      "In the name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor was born, nor is there to Him any equivalent.",
    tags: [
      "manzil",
      "manzil dua",
      "protection",
      "ruqyah",
      "evil eye",
      "sihr",
      "surah ikhlas",
      "travel",
    ],
  },
  {
    id: "s-trv-002",
    slug: "dua-leaving-home",
    category: "sunnah",
    subcategory: "travel",
    subcategory_label_en: "Travel & Protection",
    subcategory_label_bn: "সফর ও সুরক্ষা",
    purpose_en: "Dua when leaving the home",
    purpose_bn: "ঘর থেকে বের হওয়ার দোয়া",
    source: "Hadith: Abu Dawood 5095; Tirmidhi 3426",
    arabic:
      "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ",
    transliteration:
      "Bismillahi, tawakkaltu alallahi, wa la hawla wa la quwwata illa billah.",
    meaning_bn:
      "আল্লাহর নামে, আমি আল্লাহর উপর ভরসা করলাম এবং আল্লাহ ছাড়া কোনো শক্তি ও ক্ষমতা নেই।",
    meaning_en:
      "In the name of Allah, I put my trust in Allah, and there is no might or power except with Allah.",
    tags: [
      "leaving home",
      "travel",
      "morning",
      "protection",
      "tawakkul",
      "bismillah",
    ],
  },
  {
    id: "s-trv-003",
    slug: "dua-travel-journey",
    category: "sunnah",
    subcategory: "travel",
    subcategory_label_en: "Travel & Protection",
    subcategory_label_bn: "সফর ও সুরক্ষা",
    purpose_en: "Dua when beginning a journey (mounting a vehicle)",
    purpose_bn: "সফর শুরুর দোয়া (যানবাহনে ওঠার দোয়া)",
    source: "Hadith: Abu Dawood 2602; Tirmidhi 3446",
    arabic:
      "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    transliteration:
      "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin. Wa inna ila rabbina lamunqalibun.",
    meaning_bn:
      "পবিত্র তিনি যিনি এটিকে আমাদের অধীন করেছেন, অথচ আমরা এটিকে বশীভূত করতে সক্ষম ছিলাম না। আর নিশ্চয়ই আমরা আমাদের রবের কাছেই ফিরে যাব।",
    meaning_en:
      "Glory be to the One Who has subjected this to us, and we were not capable of subduing it. And indeed, to our Lord we will surely return.",
    tags: [
      "travel",
      "journey",
      "vehicle",
      "transportation",
      "quran 43:13",
      "safar",
    ],
  },
  {
    id: "s-trv-004",
    slug: "travel-ascent-descent",
    category: "sunnah",
    subcategory: "travel",
    subcategory_label_en: "Travel & Protection",
    subcategory_label_bn: "সফর ও সুরক্ষা",
    purpose_en: "Declarations during Travel and Ascent",
    purpose_bn: "সফরে চড়াই-উতরাইয়ের ধিকির",
    source: "Hadith: Sahih al-Bukhari 1080",
    arabic: "اللَّهُ أَكْبَرُ / سُبْحَانَ اللَّهِ",
    transliteration: "Allahu Akbar / Subhan Allah.",
    meaning_bn: "আল্লাহ সর্বশ্রেষ্ঠ (উঁচুতে ওঠার সময়) / আল্লাহ পবিত্র-মহান (নিচে নামার সময়)।",
    meaning_en: "Allah is the Greatest (Upon ascending) / Allah is free from imperfection (Upon descending).",
    tags: ["travel", "dhikr", "mountain", "plane", "ascent"],
    context_en: "Declaring 'Allahu Akbar' when physically ascending reminds the ego that regardless of elevation, the Divine remains superior. 'Subhan Allah' during descent negates any concept of lowliness from the Creator.",
    context_bn: "ওপরে ওঠার সময় 'আল্লাহু আকবার' বলা মানুষের অহংকার চূর্ণ করে, আর নিচে নামার সময় 'সুবহানাল্লাহ' বলা আল্লাহর পবিত্রতা ঘোষণা করে।"
  },
// ─── SUNNAH: Sayyidul Istighfar ───────────────────────────────────────────
{
  id: 's-rep-002',
  slug: 'sayyidul-istighfar',
  category: 'sunnah',
  subcategory: 'repentance',
  subcategory_label_en: 'Repentance & Forgiveness',
  subcategory_label_bn: 'তাওবা ও ক্ষমা',
  purpose_en: 'Sayyidul Istighfar — the master supplication for seeking forgiveness',
  purpose_bn: 'সাইয়িদুল ইস্তিগফার — ক্ষমা প্রার্থনার সর্বশ্রেষ্ঠ দোয়া',
  source: 'Sahih al-Bukhari 6306',
  arabic: 'اَللَّهُمَّ أَنْتَ رَبِّىْ لآ إِلهَ إلاَّ أَنْتَ خَلَقْتَنِىْ وَأَنَا عَبْدُكَ وَأَنَا عَلى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُبِكَ مِنْ شَرِّمَا صَنَعْتُ، أبُوْءُ لَكَ بِنِعْمَتِكَ عَلَىَّ وَأَبُوْءُ بِذَنْبِىْ فَاغْفِرْلِىْ، فَإِنَّهُ لاَيَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ',
  transliteration: "Allahumma anta rabbi la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi faghfir li, fa innahu la yaghfirudh-dhunuba illa anta.",
  meaning_en: "O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your slave. I am fulfilling my covenant and promise to You as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your blessing upon me and confess my sin to You, so forgive me, for truly none can forgive sins except You.",
  meaning_bn: 'হে আল্লাহ! তুমি আমার পালনকর্তা। তুমি ব্যতীত কোন উপাস্য নেই। তুমি আমাকে সৃষ্টি করেছ এবং আমি তোমার বান্দা। আমি যথাসাধ্য তোমার সাথে প্রতিশ্রুতি ও অঙ্গীকারে অটল রয়েছি। আমি নিজের কৃতকর্মের অনিষ্ট থেকে তোমার কাছে আশ্রয় চাই। তোমার দেওয়া নিয়ামতের স্বীকৃতি দিচ্ছি এবং নিজের পাপের কথা স্বীকার করছি — আমাকে ক্ষমা করো, কারণ তুমি ছাড়া কেউ গুনাহ মাফ করতে পারে না।',
  tags: ['repentance','forgiveness','istighfar','sayyidul istighfar','morning','evening'],
  context_en: "The Prophet ﷺ said whoever recites this with firm belief during the day and dies before evening, or at night and dies before dawn, will be among the people of Paradise. It is called Sayyidul Istighfar — the master of all supplications for forgiveness — because it combines acknowledgment of Allah's lordship, admission of one's covenant, seeking refuge, acknowledging blessings, confessing sin, and a plea for pardon.",
  context_bn: 'নবী ﷺ বলেছেন: যে ব্যক্তি দৃঢ় বিশ্বাসের সাথে দিনে এটি পড়ে এবং সন্ধ্যার আগে মারা যায়, অথবা রাতে পড়ে ভোরের আগে মারা যায়, সে জান্নাতবাসী হবে। এটিকে সাইয়িদুল ইস্তিগফার বলা হয় কারণ এতে আল্লাহর রুবুবিয়্যাতের স্বীকৃতি, অঙ্গীকারের কথা, আশ্রয়প্রার্থনা, নিয়ামতের স্বীকৃতি, পাপ স্বীকার ও ক্ষমার আবেদন একত্রিত হয়েছে।',
},

// ─── SUNNAH: Short Istighfar (Ibn Umar) ────────────────────────────────────
{
  id: 's-rep-003',
  slug: 'istighfar-ibn-umar',
  category: 'sunnah',
  subcategory: 'repentance',
  subcategory_label_en: 'Repentance & Forgiveness',
  subcategory_label_bn: 'তাওবা ও ক্ষমা',
  purpose_en: 'Short supplication for forgiveness and acceptance of repentance',
  purpose_bn: 'ক্ষমা ও তাওবা কবুলের জন্য সংক্ষিপ্ত দোয়া',
  source: 'Riyad as-Salihin 1872, Book 19, Hadith 4',
  arabic: 'رَبِّ اغْفِرْ لِي، وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ',
  transliteration: "Rabb-ighfir li, wa tubb 'alayya, innaka Antat-Tawwabur-Rahim.",
  meaning_en: 'My Lord! Forgive me and pardon me. Indeed, You are the Oft-Returning with compassion, the Most Merciful.',
  meaning_bn: 'হে আমার প্রভু! আমাকে ক্ষমা করুন এবং আমার তওবা কবুল করুন। নিশ্চয়ই আপনি তওবা কবুলকারী, পরম দয়ালু।',
  tags: ['repentance','forgiveness','tawbah','short dua','ibn umar'],
  context_en: 'Ibn Umar (رضي الله عنه) reported that he counted the Prophet ﷺ repeating this supplication one hundred times in a single sitting. Its brevity and completeness make it ideal for frequent repetition throughout the day and in moments of regret.',
  context_bn: 'ইবনে উমার (রাদিয়াল্লাহু আনহু) বলেন, তিনি একটি মজলিসে নবী ﷺ-কে এই দোয়াটি একশত বার পড়তে গুনেছেন। এর সংক্ষিপ্ততা ও পরিপূর্ণতার কারণে এটি দিনে বারবার এবং অনুশোচনার মুহূর্তে পড়ার জন্য আদর্শ।',
},

// ─── SUNNAH: Dua against Anxiety, Sorrow & Debt ───────────────────────────
{
  id: 's-pro-003',
  slug: 'dua-against-anxiety-sorrow-debt',
  category: 'sunnah',
  subcategory: 'protection',
  subcategory_label_en: 'Protection & Safety',
  subcategory_label_bn: 'সুরক্ষা ও নিরাপত্তা',
  purpose_en: 'Seeking refuge from anxiety, sorrow, weakness, laziness, miserliness, cowardice, debt and oppression',
  purpose_bn: 'দুশ্চিন্তা, দুঃখ, দুর্বলতা, অলসতা, কার্পণ্য, কাপুরুষতা, ঋণ ও মানুষের কর্তৃত্ব থেকে আশ্রয়',
  source: 'Sahih al-Bukhari 2893; Sahih Muslim 2706',
  arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحُزْنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
  transliteration: "Allahumma inni a'udhu bika minal-hammi wal-huzni wal-'ajazi wal-kasli wal-bukhli wal-jubni wa dala'id-dayni wa ghalabatir-rijal.",
  meaning_en: 'O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts, and from being overpowered by men.',
  meaning_bn: 'হে আল্লাহ! নিশ্চয় আমি আপনার আশ্রয় নিচ্ছি দুশ্চিন্তা ও দুঃখ থেকে, অপারগতা ও অলসতা থেকে, কার্পণ্য ও কাপুরুষতা থেকে, ঋণের বোঝা থেকে এবং মানুষের কর্তৃত্ব থেকে।',
  tags: ['anxiety','worry','protection','debt','strength','daily','hisnul muslim'],
  context_en: "Anas (رضي الله عنه) reported that the Prophet ﷺ frequently recited this dua. It addresses six paired afflictions spanning mental (anxiety/grief), physical-spiritual (weakness/laziness), moral (miserliness/cowardice), and socioeconomic (debt/oppression) realms — making it one of the most comprehensive protection supplications in the Sunnah.",
  context_bn: 'আনাস (রাদিয়াল্লাহু আনহু) বর্ণনা করেন যে নবী ﷺ এই দোয়া ঘন ঘন পড়তেন। এটি ছয় জোড়া বিপদ — মানসিক, শারীরিক-আধ্যাত্মিক, নৈতিক ও আর্থসামাজিক — আবৃত করায় এটি সুন্নাহর সবচেয়ে ব্যাপক সুরক্ষার দোয়াগুলির একটি।',
},

// ─── QURAN: Hasbiyallah — Divine Sufficiency (9:129) ──────────────────────
{
  id: 'q-pro-006',
  slug: 'hasbiyallah-divine-sufficiency',
  category: 'quran',
  subcategory: 'protection',
  subcategory_label_en: 'Protection & Success',
  subcategory_label_bn: 'সুরক্ষা ও সাফল্য',
  purpose_en: "Declaring Allah's sufficiency and placing complete reliance (Tawakkul) upon Him",
  purpose_bn: 'আল্লাহর যথেষ্টতা ঘোষণা এবং তাঁর উপর পূর্ণ তাওয়াক্কুল',
  source: 'Quran: Surah At-Tawbah 9:129; Sunan Abu Dawud 5081',
  arabic: 'حَسْبِيَ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَۖ عَلَيۡهِ تَوَكَّلۡتُۖ وَهُوَ رَبُّ ٱلۡعَرۡشِ ٱلۡعَظِيمِ',
  transliteration: "Hasbiya Allahu la ilaha illa huwa 'alayhi tawakkaltu wa huwa rabbul 'arshil 'azim.",
  meaning_en: "Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne.",
  meaning_bn: 'আল্লাহ্ আমার জন্য যথেষ্ট, তিনি ব্যতীত অন্য কোনো উপাস্য নেই, তাঁরই উপরে আমি নির্ভর করেছি এবং তিনিই মহান আরশের অধিপতি।',
  tags: ['tawakkul','reliance','protection','hasbiyallah','trust in allah','quran'],
  context_en: 'The Prophet ﷺ instructed that whoever recites this seven times morning and evening with conviction, Allah will suffice him in all his concerns of this world and the next. These were among the last Quranic words revealed regarding the Prophet ﷺ himself, making this a pinnacle expression of tawakkul.',
  context_bn: 'নবী ﷺ বলেছেন: যে ব্যক্তি সকাল-সন্ধ্যা দৃঢ়তার সাথে সাতবার এই দোয়া পড়বে, আল্লাহ তার দুনিয়া ও আখিরাতের সব ব্যাপারে যথেষ্ট হয়ে যাবেন। এই আয়াতটি নবী ﷺ সম্পর্কে নাযিলকৃত শেষ কোরআনিক কথাগুলির অন্তর্ভুক্ত, যা তাওক্কুলের সর্বোচ্চ প্রকাশ।',
},

// ─── SUNNAH: Dua for Halal Rizq ───────────────────────────────────────────
{
  id: 's-sus-004',
  slug: 'dua-halal-rizq-lawful-provision',
  category: 'sunnah',
  subcategory: 'sustenance',
  subcategory_label_en: 'Business & Wealth',
  subcategory_label_bn: 'ব্যবসা ও সম্পদ',
  purpose_en: 'Seeking sufficiency through lawful provision and independence from all except Allah',
  purpose_bn: 'হালাল রিজিকের মাধ্যমে যথেষ্টতা এবং আল্লাহ ছাড়া সবার মুখাপেক্ষিতা থেকে মুক্তির দোয়া',
  source: 'Sunan at-Tirmidhi 3563',
  arabic: 'اَللّٰهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
  transliteration: "Allahumma akfini bihalalika an haramika, wa aghnini bifadlika 'amman siwak.",
  meaning_en: 'O Allah, suffice me with Your lawful provision and save me from the unlawful, and make me independent of all others besides You through Your bounty.',
  meaning_bn: 'হে আল্লাহ! আপনার হালাল রিজিক দিয়ে আমাকে হারাম থেকে বাঁচান, এবং আপনার অনুগ্রহ দিয়ে আপনি ছাড়া অন্য সবার মুখাপেক্ষিতা থেকে মুক্ত করুন।',
  tags: ['rizq','halal','sustenance','provision','independence','wealth'],
  context_en: "Ali ibn Abi Talib (رضي الله عنه) narrated this when a freed slave sought financial help. The Prophet ﷺ taught him this dua and said: 'Even if you had a debt equal to the mountains, Allah would pay it for you.' It combines seeking halal provision with liberation from dependence on people.",
  context_bn: 'আলী ইবনে আবি তালিব (রাদিয়াল্লাহু আনহু) বর্ণনা করেন একজন মুক্ত দাস সাহায্য চাইলে নবী ﷺ তাকে এই দোয়া শেখান এবং বলেন: পর্বতসমান ঋণ থাকলেও আল্লাহ মিটিয়ে দেবেন। এটি হালাল রিজিক চাওয়া ও মানুষের মুখাপেক্ষিতা থেকে মুক্তির যুগল প্রার্থনা।',
},

// ─── SUNNAH: Ya Raziqal Muqillin ──────────────────────────────────────────
{
  id: 's-sus-005',
  slug: 'ya-raziqal-muqillin-sustenance',
  category: 'sunnah',
  subcategory: 'sustenance',
  subcategory_label_en: 'Business & Wealth',
  subcategory_label_bn: 'ব্যবসা ও সম্পদ',
  purpose_en: 'Extensive supplication for sustenance, recognizing Allah as the ultimate provider who brings provision from any source',
  purpose_bn: 'আল্লাহকে পরম রিজিকদাতা হিসেবে স্বীকার করে রিজিকের বিস্তারিত দোয়া',
  source: 'Misbah al-Mutahajjid (Tahajjud supplications)',
  arabic: 'يَا رَازِقَ الْمُقِلِّينَ، وَيَا رَاحِمَ الْمَسَاكِينِ، اللَّهُمَّ إِنْ كَانَ رِزْقِي فِي السَّمَاءِ فَأَنْزِلْهُ، وَإِنْ كَانَ فِي الْأَرْضِ فَأَخْرِجْهُ، وَإِنْ كَانَ بَعِيداً فَقَرِّبْهُ، وَإِنْ كَانَ قَرِيباً فَيَسِّرْهُ',
  transliteration: "Ya raziqal-muqillin, wa ya rahimal-masakin, Allahumma in kana rizqi fis-sama'i fa-anzilhu, wa in kana fil-ardi fa-akhrijhu, wa in kana ba'idan fa-qarrubhu, wa in kana qariban fa-yassirhu.",
  meaning_en: 'O Sustainer of the impoverished, O Compassionate to the destitute — O Allah, if my sustenance is in the heavens bring it down, if it is in the earth bring it out, if it is far bring it near, and if it is near make it easy.',
  meaning_bn: 'হে অভাবীদের রিজিকদাতা, হে দরিদ্রদের প্রতি দয়াশীল — হে আল্লাহ, আমার রিজিক যদি আসমানে থাকে তাহলে নামিয়ে দিন, জমিনে থাকলে বের করে দিন, দূরে থাকলে কাছে আনুন, আর কাছে থাকলে সহজ করে দিন।',
  tags: ['rizq','sustenance','tahajjud','night prayer','provision','poverty'],
  context_en: "Traditionally recited during voluntary night prayers (Tahajjud), this supplication systematically addresses all conceivable locations and states of provision. Opening with two of Allah's names as Provider and Merciful, it then makes four comprehensive requests that leave no scenario unaddressed — reflecting total reliance on Allah.",
  context_bn: 'ঐতিহ্যগতভাবে তাহাজ্জুদে পঠিত এই দোয়া রিজিকের সমস্ত সম্ভাব্য অবস্থান পদ্ধতিগতভাবে আবৃত করে। আল্লাহর দুটি নাম — রিজিকদাতা ও দয়াশীল — দিয়ে শুরু করে চারটি ব্যাপক আবেদন করা হয় যা কোনো পরিস্থিতি বাদ রাখে না।',
},

// ─── SUNNAH: Direct Dua for Healing ───────────────────────────────────────
{
  id: 's-hea-002',
  slug: 'allahumma-as-aluka-shifa',
  category: 'sunnah',
  subcategory: 'healing',
  subcategory_label_en: 'Health & Healing',
  subcategory_label_bn: 'স্বাস্থ্য ও আরোগ্য',
  purpose_en: 'Direct and concise plea to Allah for healing',
  purpose_bn: 'আল্লাহর কাছে আরোগ্যের জন্য সরাসরি ও সংক্ষিপ্ত প্রার্থনা',
  source: 'Mustadrak al-Hakim; Hadith Tradition',
  arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الشِّفَاءَ',
  transliteration: "Allahumma inni as'alukash-shifa'.",
  meaning_en: 'O Allah, I ask You for healing.',
  meaning_bn: 'হে আল্লাহ! আমি আপনার কাছে আরোগ্য প্রার্থনা করছি।',
  tags: ['healing','health','shifa','illness','recovery','short dua'],
  context_en: 'This minimalist supplication carries the full weight of direct petition to the Most Powerful. Scholars note that asking Allah for shifa (healing) without specifying the condition reflects absolute trust that Allah knows all ailments. Its brevity makes it ideal for continuous repetition for oneself or when placing a hand on one who is ill.',
  context_bn: 'এই সংক্ষিপ্ততম দোয়া সর্বশক্তিমানের কাছে সরাসরি প্রার্থনার পূর্ণ ভার বহন করে। আলেমগণ বলেন, রোগ নির্দিষ্ট না করে শিফা চাওয়া পরম বিশ্বাসের প্রতিফলন যে আল্লাহ সব রোগ জানেন। এর সংক্ষিপ্ততা নিজের বা অসুস্থ অন্যদের জন্য ক্রমাগত পুনরাবৃত্তির জন্য আদর্শ।',
},

// ─── SUNNAH: Marketplace Dua ──────────────────────────────────────────────
{
  id: 's-dal-004',
  slug: 'dua-entering-marketplace',
  category: 'sunnah',
  subcategory: 'daily-life',
  subcategory_label_en: 'Daily Life',
  subcategory_label_bn: 'দৈনন্দিন জীবন',
  purpose_en: 'Supplication upon entering a marketplace or commercial area',
  purpose_bn: 'বাজার বা ব্যবসায়িক এলাকায় প্রবেশের দোয়া',
  source: 'Sunan at-Tirmidhi 3428; Hisnul Muslim 119',
  arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
  transliteration: "La ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu, wa Huwa 'ala kulli shay'in Qadir.",
  meaning_en: 'There is no true god except Allah alone, He has no partner. To Him belongs the dominion, to Him belongs all praise, and He is over all things Omnipotent.',
  meaning_bn: 'আল্লাহ ব্যতীত কোনো সত্য উপাস্য নেই, তিনি একা, তাঁর কোনো শরিক নেই। রাজত্ব তাঁরই, সমস্ত প্রশংসা তাঁরই এবং তিনি সর্ব বিষয়ে ক্ষমতাবান।',
  tags: ['marketplace','daily life','dhikr','tahlil','business','hisnul muslim'],
  context_en: "The Prophet ﷺ said: 'Whoever enters the marketplace and recites this, Allah will record for him a million good deeds, erase a million evil deeds, raise him a million degrees, and build a house for him in Paradise.' The marketplace is a place of heedlessness; this dua anchors the believer in divine consciousness amid worldly transactions.",
  context_bn: 'নবী ﷺ বলেছেন: যে ব্যক্তি বাজারে প্রবেশ করে এই দোয়া পড়বে, আল্লাহ তার জন্য দশ লক্ষ নেকি লিখবেন, দশ লক্ষ গুনাহ মুছে দেবেন, তাকে দশ লক্ষ মর্যাদা উঁচু করবেন এবং জান্নাতে একটি ঘর নির্মাণ করবেন। বাজার গাফলতির জায়গা; এই দোয়া লেনদেনের মাঝেও মুমিনকে আল্লাহর স্মরণে স্থির রাখে।',
},

// ─── SUNNAH: Food Blessing Dua ────────────────────────────────────────────
{
  id: 's-food-005',
  slug: 'dua-barik-lana-food-blessing',
  category: 'sunnah',
  subcategory: 'food',
  subcategory_label_en: 'Food & Eating',
  subcategory_label_bn: 'খাওয়ার দোয়া',
  purpose_en: 'Supplication for blessings in food and protection from the Fire',
  purpose_bn: 'খাবারে বরকতের জন্য এবং আগুনের আযাব থেকে সুরক্ষার দোয়া',
  source: 'Muwatta Imam Malik; Sunan at-Tirmidhi',
  arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
  transliteration: "Allahumma barik lana fima razaqtana waqina 'azaban-nar.",
  meaning_en: 'O Allah! Bless us in what You have provided us with, and protect us from the punishment of the Fire.',
  meaning_bn: 'হে আল্লাহ! আপনি আমাদেরকে যা রিজিক দিয়েছেন তাতে বরকত দিন এবং আমাদেরকে জাহান্নামের আযাব থেকে রক্ষা করুন।',
  tags: ['food','eating','barakah','blessing','hellfire','meal dua'],
  context_en: 'This supplication transforms eating into worship by combining gratitude for provision with a plea for protection from the Fire. It reminds the believer that baraka in food is tied to spiritual state, and every meal is an opportunity to invoke divine mercy and mindfulness of the Hereafter.',
  context_bn: 'এই দোয়া রিজিকের কৃতজ্ঞতা ও আযাব থেকে সুরক্ষার প্রার্থনা যুক্ত করে খাওয়ার কাজকে ইবাদতে পরিণত করে। এটি মুমিনকে স্মরণ করিয়ে দেয় যে খাবারে বরকত আধ্যাত্মিক অবস্থার সাথে সংযুক্ত এবং প্রতিটি খাবার আল্লাহর রহমত স্মরণ করার সুযোগ।',
},

// ─── SUNNAH: Subhanallah wa Bihamdihi ─────────────────────────────────────
{
  id: 's-dhikr-002',
  slug: 'subhanallah-wa-bihamdihi',
  category: 'sunnah',
  subcategory: 'dhikr',
  subcategory_label_en: 'Daily Life',
  subcategory_label_bn: 'দৈনন্দিন জীবন',
  purpose_en: 'Glorification and praise of Allah — among the most beloved words to Him',
  purpose_bn: 'আল্লাহর পবিত্রতা ও প্রশংসা — তাঁর কাছে সবচেয়ে প্রিয় কালাম',
  source: 'Sahih al-Bukhari 6682; Riyad as-Salihin 1433',
  arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
  transliteration: 'Subhan Allahi wa bihamdihi.',
  meaning_en: 'Glory be to Allah and praise be to Him.',
  meaning_bn: 'আল্লাহ পবিত্র এবং তাঁরই সমস্ত প্রশংসা।',
  tags: ['dhikr','tasbih','praise','glorification','light on tongue','scales'],
  context_en: "The Prophet ﷺ said: 'Two words are light on the tongue, heavy in the scales, and beloved to the Most Merciful: Subhanallah wa bihamdihi, Subhanallahil-Azim.' Whoever recites it one hundred times daily has sins forgiven even if like the sea's foam (Bukhari 6405). It is called the dhikr of the heavens and the earth.",
  context_bn: 'নবী ﷺ বলেছেন: দুটি কালাম জিহ্বায় হালকা, মিযানে ভারী এবং রহমানের কাছে প্রিয়: সুবহানাল্লাহি ওয়া বিহামদিহি, সুবহানাল্লাহিল আযিম। যে ব্যক্তি দিনে একশতবার বলবে তার গুনাহ মাফ হবে যদিও তা সমুদ্রের ফেনার মতো বেশি হয়। এটিকে আসমান ও জমিনের যিকির বলা হয়।',
},

// ─── SUNNAH: After-Salah — Allahumma Antas-Salam ──────────────────────────
{
  id: 's-sal-005',
  slug: 'allahumma-antas-salam-after-salah',
  category: 'sunnah',
  subcategory: 'salah',
  subcategory_label_en: 'Prayer & Ritual',
  subcategory_label_bn: 'নামাজ ও আনুষ্ঠানিকতা',
  purpose_en: 'Supplication recited immediately after completing the five daily prayers',
  purpose_bn: 'পাঁচ ওয়াক্ত নামাজ শেষে পড়ার দোয়া',
  source: 'Sahih Muslim 591; Sunan at-Tirmidhi; Sunan Ibn Majah',
  arabic: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
  transliteration: 'Allahumma Antas-Salam, wa minkas-salam, tabarakta ya Dhal-Jalali wal-Ikram.',
  meaning_en: 'O Allah, You are As-Salam (The Giver of Peace), and from You comes all peace. Blessed are You, O Lord of Majesty and Honour.',
  meaning_bn: 'হে আল্লাহ! আপনিই আস-সালাম (শান্তিদাতা), আর আপনার নিকট থেকেই সকল শান্তি আসে। আপনি বরকতময়, হে মহিমা ও সম্মানের মালিক।',
  tags: ['salah','after prayer','salam','peace','post-salah dhikr','hisnul muslim'],
  context_en: 'Thawban (رضي الله عنه) reported that when the Prophet ﷺ finished his prayer he would seek forgiveness three times then recite this. Addressing Allah as As-Salam upon completing prayer acknowledges that all tranquility in the prayer came from Him — ending worship by returning its gift of peace to its source.',
  context_bn: 'সাওবান (রাদিয়াল্লাহু আনহু) বর্ণনা করেন নবী ﷺ নামাজ শেষ করে তিনবার ইস্তিগফার করতেন তারপর এই দোয়া পড়তেন। নামাজের পরে আল্লাহকে আস-সালাম নামে সম্বোধন করা স্বীকৃতি যে নামাজে যে প্রশান্তি অনুভব হয়েছিল তা একমাত্র তাঁর কাছ থেকেই এসেছে।',
},


// ─── SUNNAH: General Comprehensive Supplication ──────────────────────────────
{
  id: 's-gen-001',
  slug: 'sunnah-general-dua-five-blessings',
  category: 'sunnah',
  subcategory: 'daily-life',
  subcategory_label_en: 'Daily Life',
  subcategory_label_bn: 'দৈনন্দিন জীবন',
  purpose_en: 'Comprehensive supplication for forgiveness, mercy, guidance, well-being and provision',
  purpose_bn: 'সাধারণ কল্যাণ ও সুরক্ষার দোয়া',
  source: 'Hisnul Muslim collection; Sahih Muslim 2697',
  arabic: 'اللّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي',
  transliteration: "Allahummaghfir li warhamni wahdini wa \'afini warzuqni.",
  meaning_en: 'O Allah, forgive me, have mercy on me, guide me, grant well-being and provide for me.',
  meaning_bn: 'হে আল্লাহ! আমাকে ক্ষমা করুন, দয়া করুন, হেদায়েত দিন, নিরাপত্তা দিন এবং রিজিক দিন।',
  tags: ['general', 'forgiveness', 'guidance', 'provision', 'mercy', 'daily'],
  context_en: 'Ibn Abbas (رضي الله عنه) reported that a man once came to the Prophet ﷺ and asked him to teach a supplication. The Prophet ﷺ taught him this five-part dua combining forgiveness, mercy, guidance, well-being (aafiya), and provision — making it a complete supplication for both spiritual and worldly needs. The Prophet ﷺ placed his fingers together as he taught it, saying these five words contain all the good of this world and the next.',
  context_bn: 'ইবনে আব্বাস (রাদিয়াল্লাহু আনহু) বর্ণনা করেন যে একবার এক ব্যক্তি নবী ﷺ-এর কাছে এসে একটি দোয়া শিখতে চাইলেন। নবী ﷺ তাকে এই পাঁচ অংশবিশিষ্ট দোয়া শেখালেন — ক্ষমা, রহমত, হেদায়েত, আফিয়া (সুস্থতা ও নিরাপত্তা) এবং রিজিক। এই পাঁচটি শব্দ দুনিয়া ও আখিরাতের সকল কল্যাণকে একত্রিত করে।',
},

// ─── QURAN: Adam's Repentance ─────────────────────────────────────────────────
{
  id: 'q-rep-adam-001',
  slug: 'adam-repentance-quran-7-23',
  category: 'quran',
  subcategory: 'repentance',
  subcategory_label_en: 'Repentance & Forgiveness',
  subcategory_label_bn: 'তাওবা ও ক্ষমা',
  purpose_en: "Repentance of Adam (AS) and Hawwa — first human supplication for forgiveness",
  purpose_bn: 'আদম ও হাওয়া (আ.)-এর তওবা — ক্ষমার জন্য প্রথম মানবিক দোয়া',
  source: "Qur'an 7:23",
  arabic: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
  transliteration: 'Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna minal-khasirin.',
  meaning_en: 'Our Lord, we have wronged ourselves. If You do not forgive us and have mercy upon us, we will surely be among the losers.',
  meaning_bn: 'হে আমাদের রব! আমরা নিজেদের প্রতি জুলুম করেছি। আপনি যদি আমাদের ক্ষমা না করেন এবং দয়া না করেন, তবে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।',
  tags: ['quran', 'repentance', 'prophet', 'adam', 'forgiveness', 'mercy'],
  context_en: "This is the first recorded act of human repentance in the Qur'an. After Adam and Hawwa (AS) ate from the forbidden tree and were sent to earth, they did not make excuses or blame each other. Instead they jointly acknowledged their fault: 'We have wronged ourselves.' Allah accepted their repentance (2:37). This supplication is a model of true tawbah — admitting wrong, expressing need, and seeking both forgiveness and mercy together.",
  context_bn: "এটি কুরআনে বর্ণিত মানব ইতিহাসের প্রথম তাওবা। আদম ও হাওয়া (আ.) নিষিদ্ধ ফল খেয়ে পৃথিবীতে পাঠানো হওয়ার পর তারা একে অপরকে দোষ দেননি বা অজুহাত করেননি। বরং তারা একসাথে নিজেদের দোষ স্বীকার করলেন। আল্লাহ তাদের তওবা কবুল করলেন (২:৩৭)। এই দোয়া সত্যিকারের তওবার আদর্শ — ভুল স্বীকার, প্রয়োজন প্রকাশ এবং একসাথে ক্ষমা ও রহমত চাওয়া।",
},

// ─── QURAN: Yunus (AS) in the Whale ──────────────────────────────────────────
{
  id: 'q-prop-yunus-001',
  slug: 'yunus-dua-whale-quran-21-87',
  category: 'quran',
  subcategory: 'repentance',
  subcategory_label_en: 'Repentance & Forgiveness',
  subcategory_label_bn: 'তাওবা ও ক্ষমা',
  purpose_en: 'Supplication of Yunus (AS) from inside the whale — the dua of Dhun-Nun',
  purpose_bn: 'মাছের পেট থেকে ইউনুস (আ.)-এর দোয়া — যুন-নূনের দোয়া',
  source: "Qur'an 21:87",
  arabic: 'لَا إِلَـٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
  transliteration: 'La ilaha illa anta subhanaka inni kuntu minaz-zalimin.',
  meaning_en: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
  meaning_bn: 'আপনি ছাড়া কোনো উপাস্য নেই। আপনি পবিত্র। নিশ্চয়ই আমি জালিমদের অন্তর্ভুক্ত ছিলাম।',
  tags: ['quran', 'repentance', 'prophet', 'yunus', 'tawhid', 'distress'],
  context_en: "Yunus (AS) left his people without permission from Allah and was swallowed by a whale. In complete darkness — inside the whale, in the ocean depths, in the night — he called out in perfect tawbah. The supplication begins with tawhid (لَا إِلَـٰهَ إِلَّا أَنتَ), continues with tasbih (سُبْحَانَكَ), and ends with admission of fault (إِنِّي كُنتُ مِنَ الظَّالِمِينَ). The Prophet ﷺ said: 'No Muslim calls upon Allah with this supplication for anything, except that Allah responds to him.' (Tirmidhi 3505) This makes it one of the most powerful duas in Islam for times of extreme hardship.",
  context_bn: "ইউনুস (আ.) আল্লাহর অনুমতি ছাড়াই তাঁর জাতি ছেড়ে চলে যান এবং একটি মাছ তাকে গ্রাস করে। তিনবার অন্ধকারে — মাছের পেটে, সমুদ্রের গভীরে, রাতের আঁধারে — তিনি এই নিখুঁত তাওবা দিয়ে ডাক দেন। দোয়াটি তাওহীদ দিয়ে শুরু হয়, তাসবীহ দিয়ে চলে, এবং নিজের দোষ স্বীকার দিয়ে শেষ হয়। নবী ﷺ বলেছেন: 'কোনো মুসলিম এই দোয়া দিয়ে আল্লাহকে ডাকলে অবশ্যই তিনি সাড়া দেন।' (তিরমিযী ৩৫০৫) চরম বিপদের সময়ে ইসলামের সবচেয়ে শক্তিশালী দোয়াগুলোর মধ্যে এটি একটি।",
},

// ─── QURAN: Musa's Supplication Before Pharaoh ───────────────────────────────
{
  id: "q-wis-001",
  slug: "rabbi-zidni-ilma",
  category: "quran",
  subcategory: "knowledge",
  subcategory_label_en: "Knowledge & Wisdom",
  subcategory_label_bn: "জ্ঞান ও প্রজ্ঞা",
  purpose_en: "Seeking increase in knowledge",
  purpose_bn: "জ্ঞান বৃদ্ধির জন্য দোয়া",
  source: "Quran: Surah Ta-Ha, 20:114",
  arabic: "رَبِّ زِدْنِي عِلْمًا",
  transliteration: "Rabbi zidni ilma.",
  meaning_en:
    "My Lord, increase me in knowledge.",
  meaning_bn:
    "হে আমার প্রতিপালক! আমার জ্ঞান আরও বৃদ্ধি করে দিন।",
  tags: ["knowledge", "learning", "education", "wisdom", "students"],
  context_en:
    "This is the only supplication in the Qur'an where the Prophet ﷺ was directly instructed by Allah to ask for an increase in something — knowledge. It highlights the supreme value of beneficial knowledge in Islam.",
  context_bn:
    "কুরআনে এটিই একমাত্র দোয়া যেখানে আল্লাহ সরাসরি নবী ﷺ-কে কোনো কিছুর বৃদ্ধি প্রার্থনা করতে বলেছেন, আর সেটি হলো জ্ঞান। এটি ইসলামে উপকারী জ্ঞানের মর্যাদা ও গুরুত্বকে স্পষ্টভাবে তুলে ধরে।"
},

// ─── QURAN: Ibrahim's Supplication during the period of the Prophet’s migration ───────────────────────────────

{
  id: "q-guid-002",
  slug: "rabbi-adkhilni-mudkhala-sidqin",
  category: "quran",
  subcategory: "guidance",
  subcategory_label_en: "Guidance & Integrity",
  subcategory_label_bn: "হেদায়েত ও সততা",
  purpose_en: "Seeking honorable entrance, exit, and divine support",
  purpose_bn: "সম্মানজনক প্রবেশ, প্রস্থান ও আল্লাহর সাহায্যের প্রার্থনা",
  source: "Quran: Surah Al-Isra, 17:80",
  arabic:
    "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَل لِّي مِن لَّدُنكَ سُلْطَانًا نَّصِيرًا",
  transliteration:
    "Rabbi adkhilni mudkhala sidqin wa akhrijni mukhraja sidqin waj'al li min ladunka sultanan nasira.",
  meaning_en:
    "My Lord, grant me an honorable entrance and an honorable exit, and grant me from Yourself a supporting authority.",
  meaning_bn:
    "হে আমার প্রতিপালক! আমাকে সত্য ও মর্যাদার সাথে প্রবেশ করান এবং সত্য ও মর্যাদার সাথে বের করুন, এবং আপনার পক্ষ থেকে আমাকে শক্তিশালী সহায়তা দান করুন।",
  tags: ["guidance", "integrity", "success", "divine-support"],
  context_en:
    "Scholars explain that this supplication was revealed during the period of the Prophet ﷺ’s migration from Makkah. It expresses a profound request that every beginning and ending in life be based on truth, sincerity, and divine support.",
  context_bn:
    "মুফাসসিরগণ ব্যাখ্যা করেন যে এই দোয়াটি নবী ﷺ-এর মক্কা থেকে মদিনায় হিজরতের সময় নাযিল হয়। এতে জীবনের প্রতিটি শুরু ও সমাপ্তি যেন সত্য, সততা ও আল্লাহর সাহায্যের সাথে হয়—এই গভীর প্রার্থনা প্রকাশ পেয়েছে।"
},
// ─── SUNNAH: Mu'adh's Dua After Prayer ───────────────────────────────────────
{
  id: 's-sal-dhikr-001',
  slug: 'muadh-dua-after-prayer-abu-dawud-1522',
  category: 'sunnah',
  subcategory: 'dhikr',
  subcategory_label_en: 'Remembrance of Allah',
  subcategory_label_bn: 'আল্লাহর যিকর',
  purpose_en: "Supplication taught by the Prophet ﷺ to Mu'adh ibn Jabal — recited after every prayer",
  purpose_bn: "নবী ﷺ কর্তৃক মু'আয ইবন জাবাল (রা.)-কে শেখানো দোয়া — প্রতিটি নামাজের পরে",
  source: 'Abu Dawud 1522; An-Nasai 1303; authenticated by Al-Albani',
  arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
  transliteration: "Allahumma a'inni ala dhikrika wa shukrika wa husni ibadatik.",
  meaning_en: 'O Allah, help me to remember You, to thank You, and to worship You in the best manner.',
  meaning_bn: 'হে আল্লাহ! আমাকে আপনার যিকর (স্মরণ), শুকর (কৃতজ্ঞতা) এবং সুন্দর ইবাদতে সাহায্য করুন।',
  tags: ['sunnah', 'dhikr', 'salah', 'after prayer', 'worship', 'muadh', 'remembrance'],
  context_en: "Mu'adh ibn Jabal (رضي الله عنه) narrated that the Prophet ﷺ took his hand one day and said: 'O Mu'adh, by Allah I love you.' The Prophet ﷺ then advised him: 'Do not leave reciting after every prayer: Allahumma a'inni...' This extraordinary introduction — expressing love before giving advice — shows the significance of this dua. It combines three ascending levels of devotion: dhikr (remembrance), shukr (gratitude), and husn al-ibadah (excellence in worship). It is sunnah to recite it as a du'a at the end of every salah before the final tasleem.",
  context_bn: "মু'আয ইবন জাবাল (রাদিয়াল্লাহু আনহু) বর্ণনা করেন, একদিন নবী ﷺ তার হাত ধরে বললেন: 'হে মু'আয, আল্লাহর কসম, আমি তোমাকে ভালোবাসি।' তারপর তিনি উপদেশ দিলেন: 'প্রতিটি নামাজের পর এই দোয়া পড়তে ভুলো না।' এই অসাধারণ ভূমিকা — উপদেশ দেওয়ার আগে ভালোবাসা প্রকাশ করা — এই দোয়ার গুরুত্ব নির্দেশ করে। এতে তিনটি ধাপে উৎকর্ষতার স্তর রয়েছে: যিকর (স্মরণ), শুকর (কৃতজ্ঞতা) এবং হুসনুল ইবাদাহ (ইবাদতের উৎকর্ষতা)। প্রতিটি নামাজের শেষে সালাম ফেরানোর আগে এটি পড়া সুন্নত।",
},
{
  id: "s-ease-001",
  slug: "ease-affairs",
  category: "sunnah",
  subcategory: "daily-life",
  subcategory_label_en: "Life Affairs",
  subcategory_label_bn: "জীবনের বিষয়",
  purpose_en: "Seeking ease in life matters",
  purpose_bn: "জীবনের কাজে সহজতার দোয়া",
  source: "Hadith: Ibn Hibban",
  arabic: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا",
  transliteration: "Allahumma la sahla illa ma ja'altahu sahla.",
  meaning_en: "O Allah, nothing is easy except what You make easy.",
  meaning_bn: "হে আল্লাহ! আপনি সহজ না করলে কোনো কিছুই সহজ নয়।",
  tags: ["ease", "life"],
  context_en: "A powerful reminder that ease comes only from Allah.",
  context_bn: "সব সহজতা আল্লাহর পক্ষ থেকেই আসে।"
},{
  id: "s-pro-002",
  slug: "protection-from-evil",
  category: "sunnah",
  subcategory: "protection",
  subcategory_label_en: "Protection",
  subcategory_label_bn: "সুরক্ষা",
  purpose_en: "Seeking protection from evil deeds",
  purpose_bn: "মন্দ কাজ থেকে আশ্রয় চাওয়া",
  source: "Hadith: Sahih Muslim",
  arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ",
  transliteration: "Allahumma inni a'udhu bika min sharri ma 'amiltu.",
  meaning_en: "O Allah, I seek refuge in You from the evil of what I have done.",
  meaning_bn: "হে আল্লাহ! আমি আমার করা মন্দ কাজের অনিষ্ট থেকে আপনার কাছে আশ্রয় চাই।",
  tags: ["protection", "sins"],
  context_en: "A supplication asking protection from the consequences of one's own actions.",
  context_bn: "নিজের কর্মের ক্ষতিকর পরিণতি থেকে রক্ষা চাওয়ার দোয়া।"
}
];

export const categoryMeta: CategoryMeta[] = [
  {
    id: "quran",
    slug: "quran",
    label_en: "Quran",
    label_bn: "কুরআন",
    description_en:
      "Divine supplications directly from the Holy Quran — the highest level of eloquence and theological perfection.",
    description_bn:
      "পবিত্র কুরআন থেকে সরাসরি প্রাপ্ত ঐশী দোয়া — বাগ্মিতা ও ধর্মতাত্ত্বিক পূর্ণতার চূড়ান্ত নিদর্শন।",
    icon: "BookOpen",
    color: "emerald",
  },
  {
    id: "sunnah",
    slug: "sunnah",
    label_en: "Sunnah",
    label_bn: "সুন্নাহ",
    description_en:
      "Prophetic supplications from authenticated Hadith — woven into every aspect of daily life.",
    description_bn:
      "বিশুদ্ধ হাদিস থেকে নবীজির (সা.) দোয়া — দৈনন্দিন জীবনের প্রতিটি মুহূর্তে প্রাসঙ্গিক।",
    icon: "Star",
    color: "amber",
  },
  {
    id: "salaf",
    slug: "salaf",
    label_en: "Salaf",
    label_bn: "সালাফ",
    description_en:
      "Supplications of the pious predecessors — the Sahabah and Tabi'un — who lived Islam in its purest form.",
    description_bn:
      "সালাফদের (সাহাবা ও তাবেয়ী) দোয়া — যারা সবচেয়ে বিশুদ্ধ রূপে ইসলাম অনুশীলন করেছেন।",
    icon: "Users",
    color: "violet",
  },
];

export const subcategoryMeta: SubcategoryMeta[] = [
  // ── Quran subcategories ─────────────────────────────────────────────────
  {
    id: "family",
    slug: "family",
    label_en: "Family & Progeny",
    label_bn: "পরিবার ও বংশধর",
    category: "quran",
  },
  {
    id: "protection",
    slug: "protection",
    label_en: "Protection & Success",
    label_bn: "সুরক্ষা ও সাফল্য",
    category: "quran",
  },
  {
    id: "repentance",
    slug: "repentance",
    label_en: "Repentance & Forgiveness",
    label_bn: "তাওবা ও ক্ষমা",
    category: "quran",
  },
  {
    id: "wisdom",
    slug: "wisdom",
    label_en: "Wisdom & Guidance",
    label_bn: "প্রজ্ঞা ও হেদায়েত",
    category: "quran",
  },
  // ── Sunnah subcategories ─────────────────────────────────────────────────
  {
    id: "daily-life",
    slug: "daily-life",
    label_en: "Daily Life",
    label_bn: "দৈনন্দিন জীবন",
    category: "sunnah",
  },
  {
    id: "dhikr",
    slug: "dhikr",
    label_en: "Remembrance of Allah",
    label_bn: "আল্লাহর যিকর",
    category: "sunnah",
  },
  {
    id: "food",
    slug: "food",
    label_en: "Food & Eating",
    label_bn: "খাওয়ার দোয়া",
    category: "sunnah",
  },
  {
    id: "healing",
    slug: "healing",
    label_en: "Health & Healing",
    label_bn: "স্বাস্থ্য ও আরোগ্য",
    category: "sunnah",
  },
  {
    id: "istikhara",
    slug: "istikhara",
    label_en: "Istikhara (Seeking Guidance)",
    label_bn: "ইস্তিখারা (সঠিক সিদ্ধান্তের দোয়া)",
    category: "sunnah",
  },
  {
    id: "morning-evening",
    slug: "morning-evening",
    label_en: "Morning & Evening",
    label_bn: "সকাল ও সন্ধ্যার আমল",
    category: "sunnah",
  },
  {
    id: "protection",
    slug: "protection",
    label_en: "Protection & Safety",
    label_bn: "সুরক্ষা ও নিরাপত্তা",
    category: "sunnah",
  },
  {
    id: "ramadan",
    slug: "ramadan",
    label_en: "Ramadan Duas",
    label_bn: "রমজানের দোয়া",
    category: "sunnah",
  },
  {
    id: "repentance",
    slug: "repentance",
    label_en: "Repentance & Forgiveness",
    label_bn: "তাওবা ও ক্ষমা",
    category: "sunnah",
  },
  {
    id: "salah",
    slug: "salah",
    label_en: "Prayer & Ritual",
    label_bn: "নামাজ ও আনুষ্ঠানিকতা",
    category: "sunnah",
  },
  {
    id: "sustenance",
    slug: "sustenance",
    label_en: "Business & Wealth",
    label_bn: "ব্যবসা ও সম্পদ",
    category: "sunnah",
  },
  {
    id: "travel",
    slug: "travel",
    label_en: "Travel & Protection",
    label_bn: "সফর ও সুরক্ষা",
    category: "sunnah",
  },
  {
    id: "wisdom",
    slug: "wisdom",
    label_en: "Wisdom & Guidance",
    label_bn: "প্রজ্ঞা ও হেদায়েত",
    category: "sunnah",
  },
  // ── Salaf subcategories ──────────────────────────────────────────────────
  {
    id: "sahabah",
    slug: "sahabah",
    label_en: "Companions (Sahabah)",
    label_bn: "সাহাবীগণের দোয়া",
    category: "salaf",
  },
  {
    id: "tabiun",
    slug: "tabiun",
    label_en: "Successors (Tabi'un)",
    label_bn: "তাবেয়ীগণের দোয়া",
    category: "salaf",
  },
];

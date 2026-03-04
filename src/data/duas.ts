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
    purpose_en: "Repentance for transgression (Adam & Hawwa's Dua)",
    purpose_bn: "নিজের ভুলের জন্য অনুশোচনা (আদম ও হাওয়ার দোয়া)",
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
      "Seeking forgiveness for self, parents, and the believers (Nuh's Dua)",
    purpose_bn:
      "নিজ, পিতামাতা ও উম্মাহর জন্য ক্ষমা প্রার্থনা (নূহের দোয়া)",
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

  // ─── QURAN: Family ───────────────────────────────────────────────────────
  {
    id: "q-fam-001",
    slug: "zakariya-righteous-offspring",
    category: "quran",
    subcategory: "family",
    subcategory_label_en: "Family & Progeny",
    subcategory_label_bn: "পরিবার ও বংশধর",
    purpose_en:
      "Supplication for pure and righteous offspring (Zakariya's Dua)",
    purpose_bn: "পবিত্র ও পুণ্যবান সন্তানের প্রার্থনা (জাকারিয়ার দোয়া)",
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
      "Steadfastness in prayer for self and progeny (Ibrahim's Dua)",
    purpose_bn:
      "নামাজ প্রতিষ্ঠাকারী বংশধরের প্রার্থনা (ইব্রাহিমের দোয়া)",
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
      "Expansion of the chest and fluency of speech (Musa's Dua)",
    purpose_bn: "বক্ষ প্রশস্তকরণ ও বাগ্মিতা বৃদ্ধি (মুসার দোয়া)",
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
    purpose_en: "Request for wisdom and honorable mention (Ibrahim's Dua)",
    purpose_bn: "প্রজ্ঞা এবং সত্যের সুখ্যাতি লাভ (ইব্রাহিমের দোয়া)",
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
      "হে আল্লাহ! আপনি যাদের হেদায়েত দিয়েছেন আমাকে তাদের অন্তর্ভুক্ত করে হেদায়েত দিন, আপনি যাদের ক্ষমা করেছেন আমাকে তাদের অন্তর্ভুক্ত করে ক্ষমা করুন। আপনি আমাকে যা দিয়েছেন তাতে বরকত দিন এবং আপনি যা ফয়সালা করেছেন তার অকল্যাণ হতে আমাকে রক্ষা করুন।",
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
    source: "Hadith: Bukhari 2893 (Narrated by Anas ibn Malik)",
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
    source: "Hadith: Muslim (narrated by Awf ibn Malik)",
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

  // ─── SALAF: Sahabah ──────────────────────────────────────────────────────
  {
    id: "sl-sah-001",
    slug: "abu-bakr-sincere-faith-dua",
    category: "salaf",
    subcategory: "sahabah",
    subcategory_label_en: "Companions (Sahabah)",
    subcategory_label_bn: "সাহাবীগণের দোয়া",
    purpose_en:
      "Abu Bakr al-Siddiq's supplication for sincere faith and purity of heart",
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
      "Umar ibn al-Khattab's supplication for guidance and protection from internal enemies",
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
      "Al-Hasan al-Basri's supplication for gratitude and contentment with divine decree",
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
      "Sufyan al-Thawri's supplication for protection from bid'ah and misguidance",
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
    source: "Hadith: Tirmidhi 3513 (narrated by Aisha)",
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
    source: "Hadith: Bukhari 1166 (narrated by Jabir ibn Abdullah)",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلاَ أَقْدِرُ وَتَعْلَمُ وَلاَ أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ",
    transliteration:
      "Allahumma inni astakhiruka bi'ilmika, wa astaqdiruka biqudratika, wa as'aluka min fadlikal-azim. Fa innaka taqdiru wa la aqdiru, wa ta'lamu wa la a'lamu, wa anta allamul ghuyub. Allahumma in kunta ta'lamu anna hadhal amra khayrun li fi dini wa ma'ashi wa aqibati amri faqdurhu li wa yassirhu li thumma barik li fihi. Wa in kunta ta'lamu anna hadhal amra sharrun li fi dini wa ma'ashi wa aqibati amri fasrifhu anni wasrifni anhu waqdur liyal khayra haythu kana thumma ardini bih.",
    meaning_bn:
      "হে আল্লাহ! আমি আপনার জ্ঞানের মাধ্যমে আপনার কাছে কল্যাণ চাই, আপনার শক্তির মাধ্যমে শক্তি চাই এবং আপনার মহাঅনুগ্রহ থেকে চাই। কারণ আপনি সক্ষম আর আমি অক্ষম, আপনি জানেন আর আমি জানি না, আর আপনি অদৃশ্য বিষয়ের পরিপূর্ণ জ্ঞানী। হে আল্লাহ! আপনি যদি জানেন এই কাজটি আমার দ্বীন, জীবিকা এবং ভবিষ্যতের জন্য কল্যাণকর, তাহলে এটি আমার জন্য নির্ধারণ করুন, সহজ করুন এবং বরকত দিন। আর যদি জানেন এটি আমার জন্য ক্ষতিকর, তাহলে এটিকে আমার থেকে এবং আমাকে এটি থেকে দূরে রাখুন। আর যেখানেই কল্যাণ থাকুক তা আমার জন্য নির্ধারণ করুন এবং তাতে আমাকে সন্তুষ্ট রাখুন।",
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
      "Compiled by Shaykh Muhammad Zakariyya al-Kandhlawi from Quran & Sunnah",
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
  {
    id: "repentance",
    slug: "repentance",
    label_en: "Repentance & Forgiveness",
    label_bn: "তাওবা ও ক্ষমা",
    category: "quran",
  },
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
    id: "wisdom",
    slug: "wisdom",
    label_en: "Wisdom & Guidance",
    label_bn: "প্রজ্ঞা ও হেদায়েত",
    category: "quran",
  },
  {
    id: "salah",
    slug: "salah",
    label_en: "Prayer & Ritual",
    label_bn: "নামাজ ও আনুষ্ঠানিকতা",
    category: "sunnah",
  },
  {
    id: "daily-life",
    slug: "daily-life",
    label_en: "Daily Life",
    label_bn: "দৈনন্দিন জীবন",
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
  {
    id: "ramadan",
    slug: "ramadan",
    label_en: "Ramadan Duas",
    label_bn: "রমজানের দোয়া",
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
    id: "istikhara",
    slug: "istikhara",
    label_en: "Istikhara (Seeking Guidance)",
    label_bn: "ইস্তিখারা",
    category: "sunnah",
  },
  {
    id: "travel",
    slug: "travel",
    label_en: "Travel & Protection",
    label_bn: "সফর ও সুরক্ষা",
    category: "sunnah",
  },
];

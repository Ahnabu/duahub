"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Language } from "@/types/dua";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggle: () => void;
  isBn: boolean;
  isEn: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("dua-language") as Language | null;
    if (stored === "en" || stored === "bn") {
      setLanguageState(stored);
    }
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("dua-language", lang);
  }

  function toggle() {
    setLanguage(language === "en" ? "bn" : "en");
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggle,
        isBn: language === "bn",
        isEn: language === "en",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}

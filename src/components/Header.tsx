"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Search, Globe, BookOpen, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label_en: "Home", label_bn: "হোম" },
  { href: "/category/quran", label_en: "Quran", label_bn: "কুরআন" },
  { href: "/category/sunnah", label_en: "Sunnah", label_bn: "সুন্নাহ" },
  { href: "/category/salaf", label_en: "Salaf", label_bn: "সালাফ" },
  { href: "/ramadan", label_en: "Ramadan", label_bn: "রমজান" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { language, toggle, isBn } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity shrink-0"
        >
          <BookOpen className="w-5 h-5 text-primary" />
          <span className={cn(isBn ? "bangla" : "")}>
            {isBn ? "দোয়া সংকলন" : "DuaHub"}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-1.5 rounded-md transition-colors whitespace-nowrap",
                isBn ? "bangla text-sm" : "",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {isBn ? item.label_bn : item.label_en}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Search */}
          <Link
            href="/search"
            aria-label="Search"
            className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <Search className="w-4 h-4" />
          </Link>

          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            title={language === "en" ? "Switch to Bangla" : "Switch to English"}
            className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-muted transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{language === "en" ? "বাংলা" : "EN"}</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-3 py-2.5 rounded-lg transition-colors text-sm font-medium",
                isBn ? "bangla" : "",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {isBn ? item.label_bn : item.label_en}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

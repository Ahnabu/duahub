"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { ExternalLink, Mail } from "lucide-react";

export function Footer() {
  const { isBn } = useLanguage();

  return (
    <footer className="border-t border-border bg-card/50 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 space-y-2">
            <h3 className={cn("font-semibold text-foreground", isBn ? "bangla" : "")}>
              {isBn ? "দোয়া সংকলন" : "DuaHub"}
            </h3>
            <p className={cn("text-xs text-muted-foreground leading-relaxed", isBn ? "bangla" : "")}>
              {isBn
                ? "কুরআন, সুন্নাহ ও সালাফ থেকে বিশুদ্ধ দোয়া — আরবি, বাংলা ও ইংরেজিতে"
                : "Authenticated duas from the Quran, Sunnah, and Salaf — in Arabic, English, and Bangla."}
            </p>
          </div>

          {/* Browse */}
          <div className="space-y-2">
            <h3 className={cn("font-semibold text-sm text-foreground", isBn ? "bangla" : "")}>
              {isBn ? "বিভাগ" : "Browse"}
            </h3>
            <ul className="space-y-1.5 text-xs">
              {[
                { href: "/category/quran", en: "Quran Duas", bn: "কুরআনের দোয়া" },
                { href: "/category/sunnah", en: "Sunnah Duas", bn: "সুন্নাহর দোয়া" },
                { href: "/category/salaf", en: "Salaf Duas", bn: "সালাফের দোয়া" },
                { href: "/ramadan", en: "Ramadan Duas", bn: "রমজানের দোয়া" },
                { href: "/search", en: "Search All", bn: "সব খুঁজুন" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-muted-foreground hover:text-primary transition-colors",
                      isBn ? "bangla" : ""
                    )}
                  >
                    {isBn ? item.bn : item.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h3 className={cn("font-semibold text-sm text-foreground", isBn ? "bangla" : "")}>
              {isBn ? "যোগাযোগ" : "Contact"}
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="https://portfolio-abu-horaira.vercel.app/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className={isBn ? "bangla" : ""}>
                    {isBn ? "ডেভেলপারের সাথে যোগাযোগ করুন" : "Contact the Developer"}
                  </span>
                  <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://portfolio-abu-horaira.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  <span className={isBn ? "bangla" : ""}>
                    {isBn ? "ডেভেলপারের পোর্টফোলিও" : "Developer Portfolio"}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-t border-border text-xs text-muted-foreground text-center">
          <p className={cn(isBn ? "bangla" : "")}>
            {isBn
              ? "আল্লাহ আপনার দোয়া কবুল করুন। সমস্ত বিষয়বস্তু বিশুদ্ধ উৎস থেকে সংকলিত।"
              : "May Allah accept your supplications. All content sourced from authenticated texts."}
          </p>
        </div>
      </div>
    </footer>
  );
}

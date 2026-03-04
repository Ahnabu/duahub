import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  verification: {
    google: "wxL3sutjoZHupHM-v-eiQARKOVP9KKnif6s1rizNfxI",
  },
  title: {
    default: "DuaHub – Islamic Duas & Supplications in Arabic, English, Bangla",
    template: "%s | DuaHub",
  },
  description:
    "Complete collection of Islamic duas from the Quran, Sunnah, and Salaf. Includes iftar dua, sehri ki dua, dua qunoot, istikhara dua, manzil dua, Ramadan duas, morning/evening adhkar — with Arabic text, transliteration, and English & Bangla meanings.",
  keywords: [
    "dua", "duas", "islamic dua", "dua qunoot", "ramadan dua", "iftar dua",
    "sehri ki dua", "sehri dua", "istikhara dua", "dua istikhara", "manzil dua",
    "taraweeh ki dua", "morning dua", "evening dua", "dua masura", "first ashra dua",
    "second ashra dua", "third ashra dua", "dua before eating", "dua after eating",
    "bangla dua", "দোয়া", "ইসলামিক দোয়া", "islamic supplication", "Arabic dua with meaning",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "DuaHub – Islamic Duas & Supplications in Arabic, English, Bangla",
    description:
      "Complete duas from Quran, Sunnah and Salaf with Arabic text, transliteration, and English/Bangla meanings. Includes Ramadan duas, dua qunoot, iftar dua, istikhara dua and more.",
    type: "website",
    locale: "en_US",
    alternateLocale: "bn_BD",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#16a34a" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0d0d0d" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700&family=Noto+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
                <p>
                  May Allah accept your supplications. All content sourced from
                  authenticated texts.
                </p>
              </footer>
            </div>
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { Share2, Link2, Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareMenuProps {
  url?: string;
  title: string;
  text: string;
}

const SHARE_OPTIONS = [
  {
    id: "copy",
    label: "Copy Link",
    label_bn: "লিংক কপি",
    icon: <Link2 className="w-4 h-4" />,
    color: "text-foreground",
    bg: "hover:bg-muted",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    label_bn: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "text-[#25D366]",
    bg: "hover:bg-[#25D366]/10",
  },
  {
    id: "telegram",
    label: "Telegram",
    label_bn: "Telegram",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    color: "text-[#0088cc]",
    bg: "hover:bg-[#0088cc]/10",
  },
  {
    id: "twitter",
    label: "X (Twitter)",
    label_bn: "X (Twitter)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "text-foreground",
    bg: "hover:bg-muted",
  },
  {
    id: "facebook",
    label: "Facebook",
    label_bn: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "text-[#1877F2]",
    bg: "hover:bg-[#1877F2]/10",
  },
  {
    id: "email",
    label: "Email",
    label_bn: "ইমেইল",
    icon: <Mail className="w-4 h-4" />,
    color: "text-muted-foreground",
    bg: "hover:bg-muted",
  },
];

export function ShareMenu({ url, title, text }: ShareMenuProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const pageUrl = url ?? (typeof window !== "undefined" ? window.location.href : "");
  const shareText = `${title}\n\n${text}`;

  function buildLink(id: string) {
    const encoded = encodeURIComponent(pageUrl);
    const encodedText = encodeURIComponent(shareText);
    switch (id) {
      case "whatsapp":
        return `https://wa.me/?text=${encodeURIComponent(shareText + "\n" + pageUrl)}`;
      case "telegram":
        return `https://t.me/share/url?url=${encoded}&text=${encodeURIComponent(title)}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${encoded}&text=${encodeURIComponent(title)}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;
      case "email":
        return `mailto:?subject=${encodeURIComponent(title)}&body=${encodedText}%0A%0A${encoded}`;
      default:
        return null;
    }
  }

  async function handleOption(id: string) {
    if (id === "copy") {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 1500);
      return;
    }
    const link = buildLink(id);
    if (link) window.open(link, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Share"
        aria-expanded={open}
        className={cn(
          "w-9 h-9 flex items-center justify-center rounded-lg transition-colors",
          open
            ? "bg-muted text-foreground"
            : "hover:bg-muted text-muted-foreground hover:text-foreground"
        )}
      >
        <Share2 className="w-4 h-4" />
      </button>

      {open && (
        <div
          className={cn(
            "absolute right-0 top-11 z-50 w-48",
            "bg-card border border-border rounded-xl shadow-xl overflow-hidden",
            "animate-in fade-in slide-in-from-top-2 duration-150"
          )}
        >
          <div className="px-3 py-2 border-b border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Share via
            </p>
          </div>
          <div className="py-1">
            {SHARE_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleOption(opt.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors",
                  opt.color,
                  opt.bg
                )}
              >
                <span className="shrink-0">
                  {opt.id === "copy" && copied ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    opt.icon
                  )}
                </span>
                <span className="font-medium">
                  {opt.id === "copy" && copied ? "Copied!" : opt.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

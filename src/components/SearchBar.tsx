"use client";

import { Search, X } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  defaultValue?: string;
  className?: string;
  onSearch?: (query: string) => void;
  /** If true, submitting redirects to /search?q=. Default: false */
  redirect?: boolean;
  placeholder?: string;
}

export function SearchBar({
  defaultValue = "",
  className,
  onSearch,
  redirect = false,
  placeholder: placeholderProp,
}: SearchBarProps) {
  const { isBn } = useLanguage();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(!!defaultValue);

  const placeholder =
    placeholderProp ??
    (isBn
      ? "দোয়া খুঁজুন… (বাংলা, ইংরেজি বা আরবিতে)"
      : "Search duas… (English, Bangla, or Arabic)");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = inputRef.current?.value ?? "";
    if (redirect) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
    } else {
      onSearch?.(q);
    }
  }

  function handleClear() {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
      setHasValue(false);
      onSearch?.("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("relative group", className)}>
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none transition-colors group-focus-within:text-primary" />
      <input
        ref={inputRef}
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={cn(
          "w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-card text-foreground",
          "placeholder:text-muted-foreground text-sm",
          "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring))] focus:border-transparent",
          "transition-colors",
          isBn ? "bangla" : ""
        )}
        onChange={(e) => {
          setHasValue(e.target.value.length > 0);
          if (!redirect) onSearch?.(e.target.value);
        }}
      />
      {hasValue && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Clear search"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </form>
  );
}

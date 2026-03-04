"use client";

import { useState, useCallback, useEffect } from "react";

export function useBookmarks() {
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const stored = localStorage.getItem("dua-bookmarks");
      if (stored) {
        setBookmarked(new Set(JSON.parse(stored) as string[]));
      }
    } catch {
      // ignore
    }
  }, []);

  const isBookmarked = useCallback(
    (id: string) => bookmarked.has(id),
    [bookmarked]
  );

  const toggle = useCallback((id: string) => {
    setBookmarked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem("dua-bookmarks", JSON.stringify([...next]));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const bookmarkedIds = [...bookmarked];

  return { bookmarked, isBookmarked, toggle, bookmarkedIds };
}

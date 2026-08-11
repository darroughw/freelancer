"use client";
import { useEffect, useState } from "react";

// Two hard-won fixes live here (see CLAUDE.md history):
// (1) entries.find() alone only sees IDs whose intersection state changed in
//     that batch, not the full observed set — the persistent Map tracks every
//     ID's last-known state so an untouched-but-still-intersecting section
//     doesn't get dropped when a later batch reports a different one.
// (2) the last section can't always be scrolled far enough to cross the top
//     trigger band before the page ends — the scrolled-to-bottom fallback
//     force-activates it.
export function useScrollSpy(ids: string[], defaultId: string, rootMargin = "-10% 0px -80% 0px") {
  const [activeId, setActiveId] = useState(defaultId);

  useEffect(() => {
    const intersecting = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersecting.set(entry.target.id, entry.isIntersecting);
        });
        const current = ids.find((id) => intersecting.get(id));
        if (current) setActiveId(current);
      },
      { rootMargin }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScrollEnd = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) setActiveId(ids[ids.length - 1]);
    };
    window.addEventListener("scroll", handleScrollEnd, { passive: true });
    handleScrollEnd();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(","), rootMargin]);

  return activeId;
}

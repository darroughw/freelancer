"use client";
import { useEffect } from "react";

// Progressive enhancement: [data-reveal] elements only start hidden once the
// "reveal-ready" class lands on <body>, which this hook adds — see the
// `body.reveal-ready [data-reveal]` rule in globals.scss. Without JS (or
// before this effect runs), everything stays in its normal visible state
// instead of being invisible forever.
export function useScrollReveal(rootMargin = "0px 0px -10% 0px") {
  useEffect(() => {
    document.body.classList.add("reveal-ready");

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [rootMargin]);
}

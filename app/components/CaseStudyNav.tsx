"use client";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { slugifyHeading } from "../data/case-study-helpers";

export default function CaseStudyNav({ headings }: { headings: string[] }) {
  const ids = headings.map(slugifyHeading);
  const activeId = useScrollSpy(ids, ids[0]);

  return (
    <nav className="case-nav" aria-label="Case study sections">
      {headings.map((heading, i) => (
        <a
          key={ids[i]}
          href={`#${ids[i]}`}
          className={`case-nav-link${activeId === ids[i] ? " is-active" : ""}`}
          aria-current={activeId === ids[i] ? "true" : undefined}
        >
          {heading}
        </a>
      ))}
    </nav>
  );
}

import Link from "next/link";
import type { CaseStudy } from "../data/case-studies";

export default function CasePager({ prev, next }: { prev: CaseStudy; next: CaseStudy }) {
  return (
    <nav className="case-pager" aria-label="More case studies">
      <Link href={`/work/${prev.slug}`} className="case-pager-link case-pager-prev">
        <span className="case-pager-label">← Previous</span>
        <span className="case-pager-title">{prev.title}</span>
      </Link>
      <Link href={`/work/${next.slug}`} className="case-pager-link case-pager-next">
        <span className="case-pager-label">Next →</span>
        <span className="case-pager-title">{next.title}</span>
      </Link>
    </nav>
  );
}

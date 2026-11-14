import type { ReactNode } from "react";
import Link from "next/link";
import KingfisherMark from "./KingfisherMark";

type SiteHeaderProps = {
  name?: string;
  role?: string;
  /** Number shown in the badge's red numeral slot. */
  badgeNumber?: string;
  badgeLabel?: string;
  badgeSub?: string;
  /** Section nav, shown in the orange strip on wide screens (it moves itself to a bottom bar on narrow ones). */
  nav?: ReactNode;
};

// Two pieces: a tall cream band (mark, name, status badge) that scrolls away
// with the page, and a thin orange strip rendered as a sibling (not a child)
// of <header> so `position: sticky` can pin it for the whole page — a sticky
// element only sticks within its parent, and the parent here is the page.
export default function SiteHeader({
  name = "Darrough West",
  role = "UX Designer + Front-End Engineer",
  badgeNumber = "42",
  badgeLabel = "Open to work",
  badgeSub = "full-time · projects",
  nav,
}: SiteHeaderProps) {
  return (
    <>
      <header className="header">
        <Link href="/" className="logo-mark" aria-label={`${name} — home`}>
          <KingfisherMark
            shape="square"
            size={84}
            background="var(--color-ink)"
            foreground="var(--color-cream)"
          />
        </Link>
        <div className="header-name">{name}</div>
        <div className="status-badge">
          <span className="status-badge-num" aria-hidden="true">{badgeNumber}</span>
          <span className="status-badge-divider" aria-hidden="true" />
          <span className="status-badge-lockup">
            <svg className="status-badge-emblem" width="96" height="14" viewBox="0 0 96 14" aria-hidden="true">
              <line x1="0" y1="7" x2="96" y2="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M28 7 L48 1 L68 7 L48 13 Z" fill="var(--color-periwinkle)" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="48" cy="7" r="2" fill="var(--color-cream)" />
            </svg>
            <span className="status-badge-label">{badgeLabel}</span>
            <span className="status-badge-sub">{badgeSub}</span>
          </span>
        </div>
      </header>
      <div className="header-strip">
        <span className="header-role">{role}</span>
        {nav}
      </div>
    </>
  );
}

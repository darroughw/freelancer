import Link from "next/link";
import KingfisherMark from "./components/KingfisherMark";

// The one page every user visits and nobody bookmarks.
export default function NotFound() {
  return (
    <div className="page">
      <header className="header">
        <Link href="/" className="logo-mark" aria-label="Darrough West — home">
          <KingfisherMark size={34} />
        </Link>
        <div className="header-name">Darrough West</div>
      </header>

      <main>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="eyebrow">$ cd /404</div>
            <h1 className="masthead-title">Window not found.</h1>
            <p className="masthead-sub">
              This page doesn&apos;t exist, but the rest of the site does. Let&apos;s get you back.
            </p>
            <Link href="/" className="not-found-cta">Back to home ↗</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page">
      <header className="header">
        <Link href="/" className="logo-mark">DW</Link>
        <div className="header-name">Darrough West</div>
      </header>

      <main>
        <section className="masthead">
          <div className="masthead-eyebrow">◉ REC · SIDE C</div>
          <h1 className="masthead-title">Tape&apos;s run out.</h1>
          <p className="masthead-sub">
            This page doesn&apos;t exist, but the rest of the site does. Let&apos;s get you back.
          </p>
          <Link href="/" className="not-found-cta">Back to home ↗</Link>
        </section>
      </main>
    </div>
  );
}

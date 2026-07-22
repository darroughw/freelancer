import type { Metadata } from "next";
import Link from "next/link";
import FeedbackForm from "./FeedbackForm";

export const metadata: Metadata = {
  title: "Feedback · Darrough West",
  description: "Share feedback or critique on this site.",
  robots: { index: false, follow: false },
};

export default function FeedbackPage() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="header">
        <Link href="/" className="logo-mark">DW</Link>
        <div className="header-name">Darrough West</div>
      </header>

      <main id="main-content">
        <section className="masthead">
          <div className="masthead-eyebrow">◉ REC · SIDE D</div>
          <h1 className="masthead-title">
            Tell me it&apos;s
            <br />
            <span className="masthead-accent">rough.</span>
          </h1>
          <p className="masthead-sub">
            You know me: be honest. Broken layout, confusing copy, an ugly color, whatever.
            I&apos;d rather hear it from you than a recruiter.
          </p>
        </section>

        <section className="feedback-section">
          <FeedbackForm />
        </section>
      </main>
    </div>
  );
}

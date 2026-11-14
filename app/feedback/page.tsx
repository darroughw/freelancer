import type { Metadata } from "next";
import FeedbackForm from "./FeedbackForm";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Feedback · Darrough West",
  description: "Share feedback or critique on this site.",
  robots: { index: false, follow: false },
};

export default function FeedbackPage() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <SiteHeader />

      <main id="main-content">
        <section className="masthead">
          <div className="masthead-inner">
            <div className="eyebrow">$ cd /feedback</div>
            <h1 className="masthead-title">
              Tell me it&apos;s
              <br />
              <span className="masthead-accent">rough.</span>
            </h1>
            <p className="masthead-sub">
              You know me: be honest. Broken layout, confusing copy, an ugly color, whatever.
              I&apos;d rather hear it from you than a recruiter.
            </p>
          </div>
        </section>

        <section className="feedback-section">
          <div className="bento bento--feedback">
            <div className="bento-tile tone-cream span-7x2 feedback-tile">
              <span className="tile-label">Send a note</span>
              <FeedbackForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

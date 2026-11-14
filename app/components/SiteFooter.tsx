import Link from "next/link";
import ContactCTA from "./ContactCTA";

type SiteFooterProps = {
  /** Extra bottom padding below 900px so the fixed bottom nav bar doesn't cover the footer. */
  withBottomNav?: boolean;
};

// Contact bento + copyright, shared by the home page and case study pages:
// the cream CTA tile beside "Elsewhere" and "More" link tiles, on red.
export default function SiteFooter({ withBottomNav = false }: SiteFooterProps) {
  return (
    <section
      id="contact"
      className={`contact-section${withBottomNav ? " contact-section--with-nav" : ""}`}
      data-reveal
    >
      <div className="bento bento--contact">
        <ContactCTA variant="tile" className="span-7x2" />

        <div className="bento-tile tone-orange span-5x1 contact-links-tile">
          <span className="tile-label">Elsewhere</span>
          <div className="contact-pill-row">
            <a href="https://linkedin.com/in/darroughw" target="_blank" rel="noopener" className="pill">
              LinkedIn ↗<span className="visually-hidden"> (opens in new tab)</span>
            </a>
            <a href="https://github.com/darroughw" target="_blank" rel="noopener" className="pill">
              GitHub ↗<span className="visually-hidden"> (opens in new tab)</span>
            </a>
            <a href="https://open.spotify.com/user/darrough?si=0c7cd65c69b347c2" className="pill">Spotify</a>
          </div>
        </div>

        <div className="bento-tile tone-periwinkle span-5x1 contact-links-tile">
          <span className="tile-label">More</span>
          <div className="contact-pill-row">
            <a href="/resume.pdf" target="_blank" rel="noopener" className="pill">
              Resume ↗<span className="visually-hidden"> (opens in new tab)</span>
            </a>
            <a href="https://namedrop.io/darroughwest" target="_blank" rel="noopener" className="pill">
              Pronounce my name ↗<span className="visually-hidden"> (opens in new tab)</span>
            </a>
            <Link href="/feedback" className="pill">Feedback</Link>
            <a href="/storybook" target="_blank" rel="noopener" className="pill">
              Design System ↗<span className="visually-hidden"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-row">
        <span className="footer-text">© 2026 Darrough West</span>
      </div>
    </section>
  );
}

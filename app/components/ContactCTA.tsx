type ContactCTAProps = {
  title?: string;
  sub?: string;
  email?: string;
  /**
   * "window": terminal-style window chrome (case study pages).
   * "tile": a cream bento tile for the home page's contact grid.
   */
  variant?: "window" | "tile";
  /** Extra classes on the root, e.g. a bento span class. */
  className?: string;
};

export default function ContactCTA({
  title = "Let's ship it.",
  sub = "Tell me about the gig. I reply within a day, usually with questions.",
  email = "darrough@gmail.com",
  variant = "window",
  className = "",
}: ContactCTAProps) {
  const body = (
    <>
      <h2 className="contact-title">{title}</h2>
      <p className="contact-sub">{sub}</p>
      <div className="contact-email-wrap">
        <a href={`mailto:${email}`} className="contact-email-btn">{email} ↗</a>
      </div>
    </>
  );

  if (variant === "tile") {
    return (
      <div className={`bento-tile tone-cream contact-tile ${className}`.trim()}>
        <span className="tile-label">Contact</span>
        {body}
      </div>
    );
  }

  return (
    <div className={`window contact-window ${className}`.trim()}>
      <div className="window-titlebar">
        <span className="window-titlebar-label">contact.sh</span>
      </div>
      <div className="window-body">{body}</div>
    </div>
  );
}

type ContactCTAProps = {
  title?: string;
  sub?: string;
  email?: string;
};

export default function ContactCTA({
  title = "Let's ship it.",
  sub = "Tell me about the gig. I reply within a day, usually with questions.",
  email = "darrough@gmail.com",
}: ContactCTAProps) {
  return (
    <div className="window contact-window">
      <div className="window-titlebar">
        <span className="window-titlebar-label">contact.sh</span>
      </div>
      <div className="window-body">
        <h2 className="contact-title">{title}</h2>
        <p className="contact-sub">{sub}</p>
        <div className="contact-email-wrap">
          <a href={`mailto:${email}`} className="contact-email-btn">{email} ↗</a>
        </div>
      </div>
    </div>
  );
}

type ContactCTAProps = {
  title?: string;
  sub?: string;
  email?: string;
};

export default function ContactCTA({
  title = "Phone home.",
  sub = "Tell me about the brief. I reply within a day, usually with questions.",
  email = "darrough@gmail.com",
}: ContactCTAProps) {
  return (
    <>
      <h2 className="contact-title">{title}</h2>
      <p className="contact-sub">{sub}</p>
      <div className="contact-email-wrap">
        <a href={`mailto:${email}`} className="contact-email-btn">{email} ↗</a>
      </div>
    </>
  );
}

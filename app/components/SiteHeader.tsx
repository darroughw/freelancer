import Link from "next/link";

type SiteHeaderProps = {
  initials?: string;
  name?: string;
  email?: string;
  ctaLabel?: string;
};

export default function SiteHeader({
  initials = "DW",
  name = "Darrough West",
  email = "darrough@gmail.com",
  ctaLabel = "Open to work",
}: SiteHeaderProps) {
  return (
    <header className="header">
      <Link href="/" className="logo-mark">{initials}</Link>
      <div className="header-name">{name}</div>
      <a href={`mailto:${email}`} className="header-cta">{ctaLabel} ↗</a>
    </header>
  );
}

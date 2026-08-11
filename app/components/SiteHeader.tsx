import Link from "next/link";
import KingfisherMark from "./KingfisherMark";

type SiteHeaderProps = {
  name?: string;
  email?: string;
  ctaLabel?: string;
};

export default function SiteHeader({
  name = "Darrough West",
  email = "darrough@gmail.com",
  ctaLabel = "Open to work",
}: SiteHeaderProps) {
  return (
    <header className="header">
      <Link href="/" className="logo-mark" aria-label={`${name} — home`}>
        <KingfisherMark size={34} />
      </Link>
      <div className="header-name">{name}</div>
      <a href={`mailto:${email}`} className="header-cta">{ctaLabel} ↗</a>
    </header>
  );
}

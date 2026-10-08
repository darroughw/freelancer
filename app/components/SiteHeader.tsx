import Link from "next/link";
import KingfisherMark from "./KingfisherMark";

type SiteHeaderProps = {
  name?: string;
};

export default function SiteHeader({
  name = "Darrough West",
}: SiteHeaderProps) {
  return (
    <header className="header">
      <Link href="/" className="logo-mark" aria-label={`${name} — home`}>
        <KingfisherMark size={34} />
      </Link>
      <div className="header-name">{name}</div>
    </header>
  );
}

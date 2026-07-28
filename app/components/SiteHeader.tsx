import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="header">
      <Link href="/" className="logo-mark">DW</Link>
      <div className="header-name">Darrough West</div>
      <a href="mailto:darrough@gmail.com" className="header-cta">Open to work ↗</a>
    </header>
  );
}

"use client";
import { CSSProperties } from "react";

const PALETTE = {
  red: "oklch(0.58 0.17 27)",
  orange: "oklch(0.73 0.15 55)",
  mustard: "oklch(0.79 0.13 90)",
  teal: "oklch(0.56 0.09 195)",
  plum: "oklch(0.42 0.10 325)",
};
const ink = "oklch(0.22 0.02 55)";
const cream = "oklch(0.95 0.018 80)";
const creamDark = "oklch(0.90 0.02 75)";
const paperFont = "'Archivo', -apple-system, sans-serif";
const headFont = "'Archivo Black', 'Archivo', sans-serif";
const monoFont = "'Space Mono', monospace";

const stripeColors = [PALETTE.red, PALETTE.orange, PALETTE.mustard, PALETTE.teal, PALETTE.plum, ink];

const projects = [
  {
    num: "001",
    title: "Delta Shower Doors — Search Behavior & UX Redesign",
    desc: "Used behavioral analytics to identify critical UX failures on a high-traffic product site, then redesigned the core product finder to eliminate friction.",
    role: "UX Researcher & Designer",
    year: "2024–2025",
    tags: ["UX Research", "Content Strategy"],
    href: "#",
    imgSrc: "/images/delta.jpg",
  },
  {
    num: "002",
    title: "Fidelity Design System — iOS Mobile Workstream",
    desc: "Led the iOS mobile workstream for a company-wide design system unifying 150+ designers. Delivered the full Figma component library in 9 months.",
    role: "Principal UX Designer",
    year: "2022–23",
    tags: ["Design Systems", "iOS"],
    href: "#",
    imgSrc: "/images/fidelity.jpg",
  },
  {
    num: "003",
    title: "Liberty Hardware Shopify Platform",
    desc: "Complete redesign for a hardware manufacturer, modernizing their Shopify platform to improve product discovery and streamline the customer journey.",
    role: "Lead Design / Development",
    year: "2025",
    tags: ["Web Design", "SEO"],
    href: "#",
    imgSrc: "/images/liberty.jpg",
  },
  {
    num: "004",
    title: "YouFit Livestream Virtual 5K",
    desc: "Transformed a local Miami charity race into a nationwide live-streamed event with treadmill-synced live video.",
    role: "Lead Design / Development",
    year: "2016",
    tags: ["Mobile", "Live Streaming"],
    href: "#",
    imgSrc: "/images/youfit.jpg",
  },
];

const skillGroups = [
  { title: "Design", tags: ["Figma", "Design systems", "Prototyping", "User research", "Wireframing"] },
  { title: "Engineering", tags: ["React", "TypeScript", "CSS/Motion", "Accessibility", "Design tokens"] },
  { title: "Agency fit", tags: ["Client workshops", "Sprint embeds", "Handoff docs", "QA passes"] },
];

const topFives = [
  { title: "Food", items: ["Al pastor tacos", "Neapolitan pizza", "Pho", "Backyard smash burgers", "Mango sticky rice"] },
  { title: "Video games", items: ["Outer Wilds", "Disco Elysium", "Hades", "The Last of Us Part II", "Slay the Spire"] },
  { title: "Activities", items: ["Thrifting for VHS tapes", "Trail running", "Board game nights", "Film photography", "Farmers market runs"] },
];

const styles: Record<string, CSSProperties> = {
  page: {
    background: cream,
    color: ink,
    fontFamily: paperFont,
    minHeight: "100vh",
    backgroundImage: "radial-gradient(oklch(0 0 0 / 0.02) 1px, transparent 1px)",
    backgroundSize: "3px 3px",
    paddingBottom: 76,
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px clamp(16px,4vw,32px)",
    background: ink,
    color: cream,
  },
  logoMark: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: cream,
    color: ink,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: `700 12px ${monoFont}`,
    flexShrink: 0,
  },
  headerName: { font: `900 16px/1.1 ${headFont}` },
  headerCta: {
    marginLeft: "auto",
    font: `700 13px ${paperFont}`,
    textDecoration: "none",
    color: ink,
    background: PALETTE.mustard,
    padding: "10px 16px",
    borderRadius: 100,
    minHeight: 44,
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
  masthead: { padding: "clamp(32px,8vw,64px) clamp(16px,4vw,32px) clamp(28px,6vw,48px)", maxWidth: 720 },
  mastheadEyebrow: { font: `700 12px ${monoFont}`, letterSpacing: "0.08em", color: PALETTE.red, marginBottom: 20 },
  mastheadTitle: { font: `900 clamp(34px,9vw,64px)/1.06 ${headFont}`, margin: "0 0 20px", letterSpacing: "-0.01em" },
  mastheadSub: { font: `500 clamp(15px,3vw,18px)/1.6 ${paperFont}`, maxWidth: 480, color: "oklch(0.22 0.02 55 / 0.78)", margin: "0 0 28px" },
  stripeRow: { display: "flex", gap: 5, height: 12, maxWidth: 360 },
  sectionLabelRow: { display: "flex", alignItems: "center", gap: 14, padding: "0 clamp(16px,4vw,32px)" },
  sectionTag: { font: `700 12px ${monoFont}`, letterSpacing: "0.1em", color: PALETTE.red, whiteSpace: "nowrap" },
  sectionRule: { flex: 1, height: 2, background: ink, opacity: 0.15 },
  sectionTagLight: { font: `700 12px ${monoFont}`, letterSpacing: "0.1em", color: cream, whiteSpace: "nowrap" },
  sectionRuleLight: { flex: 1, height: 2, background: cream, opacity: 0.25 },
  workSection: { padding: "24px 0 56px" },
  workNote: { font: `600 13px ${monoFont}`, color: "oklch(0.22 0.02 55 / 0.5)", margin: "16px 0 0", padding: "0 clamp(16px,4vw,32px)" },
  shelf: { display: "flex", gap: 16, overflowX: "auto", padding: "24px clamp(16px,4vw,32px) 16px", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" },
  card: { flexShrink: 0, scrollSnapAlign: "start", width: 220, display: "flex", flexDirection: "column", textDecoration: "none", color: ink, borderRadius: 10, overflow: "hidden", boxShadow: "0 12px 26px oklch(0.22 0.02 55 / 0.14)" },
  cardImgWrap: { position: "relative", height: 130, background: creamDark },
  cardImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  cardNum: { position: "absolute", top: 8, left: 8, font: `700 11px ${monoFont}`, color: cream, background: "oklch(0.22 0.02 55 / 0.7)", padding: "3px 7px", borderRadius: 4 },
  cardFace: { background: cream, padding: 16, display: "flex", flexDirection: "column", gap: 10, flex: 1 },
  cardTitle: { font: `800 14px/1.3 ${headFont}`, margin: 0 },
  cardDesc: { font: `400 12.5px/1.5 ${paperFont}`, color: "oklch(0.22 0.02 55 / 0.72)", margin: 0 },
  cardMeta: { font: `600 10.5px ${monoFont}`, color: "oklch(0.22 0.02 55 / 0.5)" },
  cardTagRow: { display: "flex", flexWrap: "wrap", gap: 6 },
  cardTag: { font: `600 10px ${monoFont}`, padding: "4px 8px", borderRadius: 100, background: creamDark },
  cardArrow: { font: `700 11px ${paperFont}`, color: PALETTE.red, marginTop: "auto" },
  aboutSection: { padding: "clamp(32px,8vw,56px) clamp(16px,4vw,32px) clamp(28px,6vw,48px)", maxWidth: 720 },
  aboutLead: { font: `400 clamp(15px,2.5vw,17px)/1.65 ${paperFont}`, color: "oklch(0.22 0.02 55 / 0.85)", margin: 0 },
  dropCap: { font: `900 52px ${headFont}`, float: "left", lineHeight: 0.8, margin: "6px 8px 0 0", color: PALETTE.red },
  pullQuote: { borderLeft: `3px solid ${PALETTE.red}`, paddingLeft: 18, marginTop: 24 },
  pullQuoteText: { font: `700 18px/1.4 ${headFont}`, margin: "0 0 10px" },
  pullQuoteRule: { width: 32, height: 3, background: PALETTE.mustard },
  specSheet: { display: "flex", flexDirection: "column", marginTop: 36, borderTop: `1.5px solid ${ink}` },
  specRow: { display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: `1.5px solid ${ink}` },
  specKey: { font: `600 12px ${monoFont}`, letterSpacing: "0.03em", textTransform: "uppercase", opacity: 0.65 },
  specVal: { font: `800 15px ${paperFont}` },
  skillsSection: { background: ink, color: cream, padding: "clamp(32px,8vw,56px) clamp(16px,4vw,32px) clamp(40px,8vw,64px)" },
  skillTable: { display: "flex", flexDirection: "column", maxWidth: 600 },
  skillRow: { display: "flex", flexDirection: "column", gap: 10, padding: "16px 0", borderBottom: "1px solid oklch(0.95 0.018 80 / 0.14)" },
  skillLabel: { font: `700 13px ${paperFont}` },
  skillTagRow: { display: "flex", flexWrap: "wrap", gap: 7 },
  skillTag: { font: `600 11px ${monoFont}`, padding: "6px 11px", borderRadius: 100, background: cream, color: ink },
  topFivesSection: { padding: "clamp(32px,8vw,56px) 0 clamp(40px,8vw,56px)" },
  topFivesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, padding: "0 clamp(16px,4vw,32px)", marginTop: 24 },
  topFiveCard: { background: creamDark, borderRadius: 12, padding: 20 },
  topFiveCardTitle: { font: `800 14px ${headFont}`, marginBottom: 14 },
  topFiveList: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9 },
  topFiveItem: { display: "flex", alignItems: "baseline", gap: 10, font: `500 13.5px/1.4 ${paperFont}` },
  topFiveNum: { font: `700 11px ${monoFont}`, color: PALETTE.red, minWidth: 14 },
  contactSection: { background: PALETTE.red, color: cream, padding: "clamp(32px,8vw,56px) clamp(16px,4vw,32px) 32px" },
  contactLabel: { font: `700 12px ${monoFont}`, letterSpacing: "0.08em", opacity: 0.85, marginBottom: 18 },
  contactTitle: { font: `900 clamp(32px,8vw,56px)/1.0 ${headFont}`, margin: "0 0 18px" },
  contactSub: { font: `500 clamp(15px,3vw,17px)/1.5 ${paperFont}`, maxWidth: 420, opacity: 0.9, margin: "0 0 28px" },
  contactEmailBtn: { display: "inline-flex", font: `700 15px ${paperFont}`, textDecoration: "none", color: ink, background: cream, padding: "15px 24px", borderRadius: 100, minHeight: 44, alignItems: "center" },
  contactSocialRow: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 },
  contactSocialLink: { font: `600 13px ${paperFont}`, textDecoration: "none", color: cream, opacity: 0.85, minHeight: 44, display: "flex", alignItems: "center", padding: "8px 10px" },
  footerRow: { display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, paddingTop: 18, borderTop: "1.5px solid oklch(0.95 0.018 80 / 0.3)" },
  footerText: { font: `600 11px ${monoFont}`, opacity: 0.75 },
  bottomNav: { position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 10, display: "flex", gap: 8, overflowX: "auto", padding: "12px clamp(16px,4vw,32px)", background: ink, borderTop: "2px solid oklch(0.95 0.018 80 / 0.15)", scrollSnapType: "x mandatory" },
  pillActive: { flexShrink: 0, scrollSnapAlign: "start", display: "flex", alignItems: "center", minHeight: 36, padding: "0 14px", borderRadius: 100, background: PALETTE.red, color: ink, font: `700 12px ${paperFont}`, textDecoration: "none" },
  pill: { flexShrink: 0, display: "flex", alignItems: "center", minHeight: 36, padding: "0 14px", borderRadius: 100, background: "oklch(0.95 0.018 80 / 0.12)", color: cream, font: `700 12px ${paperFont}`, textDecoration: "none", cursor: "pointer", transition: "all 0.3s ease" },
  pillActive: { background: cream, color: ink },
  navPills: { position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 100 },
};

export default function Page() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logoMark}>DW</div>
        <div style={styles.headerName}>Darrough West</div>
      </header>

      <section style={styles.masthead}>
        <div style={styles.mastheadEyebrow}>◉ REC — SIDE A</div>
        <h1 style={styles.mastheadTitle}>
          A freelance designer who <span style={{ color: PALETTE.red }}>ships fast.</span>
        </h1>
        <p style={styles.mastheadSub}>
          I embed with your team on a project basis — no agency overhead, no bench — taking a concept from
          whiteboard to working product. Wireframes Monday, React by Friday.
        </p>
        <div style={styles.stripeRow}>
          {stripeColors.map((c, i) => (
            <div key={i} style={{ flex: 1, background: c }} />
          ))}
        </div>
      </section>

      <section id="work" style={styles.workSection}>
        <div style={styles.sectionLabelRow}>
          <span style={styles.sectionTag}>01 — SELECTED WORK</span>
          <span style={styles.sectionRule} />
        </div>
        <p style={styles.workNote}>A few recent case studies — from behavioral UX research to enterprise design systems.</p>
        <div style={styles.shelf}>
          {projects.map((proj) => (
            <a key={proj.num} href={proj.href} style={styles.card}>
              <div style={styles.cardImgWrap}>
                <img src={proj.imgSrc} alt={proj.title} style={styles.cardImg} />
                <span style={styles.cardNum}>{proj.num}</span>
              </div>
              <div style={styles.cardFace}>
                <h3 style={styles.cardTitle}>{proj.title}</h3>
                <p style={styles.cardDesc}>{proj.desc}</p>
                <div style={styles.cardMeta}>{proj.role} · {proj.year}</div>
                <div style={styles.cardTagRow}>
                  {proj.tags.map((t) => (
                    <span key={t} style={styles.cardTag}>{t}</span>
                  ))}
                </div>
                <span style={styles.cardArrow}>View case study ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="about" style={styles.aboutSection}>
        <div style={styles.sectionLabelRow}>
          <span style={styles.sectionTag}>02 — ABOUT</span>
          <span style={styles.sectionRule} />
        </div>
        <p style={{ ...styles.aboutLead, marginTop: 24 }}>
          <span style={styles.dropCap}>T</span>
          en-plus years bouncing between Figma and VS Code taught me that the best interfaces come from people
          who can prototype the interaction, not just describe it. I've spent most of that time inside agencies —
          pulled in mid-sprint to unstick a flow, or brought on from kickoff to own design and build end to end.
        </p>
        <aside style={styles.pullQuote}>
          <p style={styles.pullQuoteText}>"Designers who ship code make better decisions in the room."</p>
          <div style={styles.pullQuoteRule} />
        </aside>
        <div style={styles.specSheet}>
          <div style={styles.specRow}><span style={styles.specKey}>Projects shipped</span><span style={styles.specVal}>40+</span></div>
          <div style={styles.specRow}><span style={styles.specKey}>Agency partners</span><span style={styles.specVal}>12</span></div>
          <div style={styles.specRow}><span style={styles.specKey}>Team size</span><span style={styles.specVal}>1, full stack</span></div>
        </div>
      </section>

      <section id="skills" style={styles.skillsSection}>
        <div style={styles.sectionLabelRow}>
          <span style={styles.sectionTagLight}>03 — SKILLS</span>
          <span style={styles.sectionRuleLight} />
        </div>
        <div style={{ ...styles.skillTable, marginTop: 24 }}>
          {skillGroups.map((group) => (
            <div key={group.title} style={styles.skillRow}>
              <span style={styles.skillLabel}>{group.title}</span>
              <div style={styles.skillTagRow}>
                {group.tags.map((tag) => (
                  <span key={tag} style={styles.skillTag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="topfives" style={styles.topFivesSection}>
        <div style={styles.sectionLabelRow}>
          <span style={styles.sectionTag}>04 — OFF DUTY</span>
          <span style={styles.sectionRule} />
        </div>
        <p style={styles.workNote}>A few top 5s, because a well-rounded life makes for better design instincts.</p>
        <div style={styles.topFivesGrid}>
          {topFives.map((cat) => (
            <div key={cat.title} style={styles.topFiveCard}>
              <div style={styles.topFiveCardTitle}>{cat.title}</div>
              <ol style={styles.topFiveList}>
                {cat.items.map((label, i) => (
                  <li key={label} style={styles.topFiveItem}>
                    <span style={styles.topFiveNum}>{i + 1}</span>{label}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactLabel}>◉ REC — SIDE B</div>
        <h2 style={styles.contactTitle}>Let's press record.</h2>
        <p style={styles.contactSub}>Tell me about the brief — I reply within a day, usually with questions.</p>
        <div style={{ marginBottom: 28 }}>
          <a href="mailto:darrough@gmail.com" style={styles.contactEmailBtn}>darrough@gmail.com ↗</a>
        </div>
        <div style={styles.contactSocialRow}>
          <a href="https://linkedin.com/in/darroughw" target="_blank" rel="noopener" style={styles.contactSocialLink}>LinkedIn</a>
          <a href="https://github.com/darroughw" target="_blank" rel="noopener" style={styles.contactSocialLink}>GitHub</a>
          <a href="https://open.spotify.com/user/darrough?si=0c7cd65c69b347c2" style={styles.contactSocialLink}>Spotify</a>
        </div>
        <div style={styles.footerRow}>
          <span style={styles.footerText}>© 2026 Darrough West</span>
          <span style={styles.footerText}>Recorded on planet Earth</span>
        </div>
      </section>

      <nav style={styles.bottomNav}>
        <a href="#work" style={styles.pill}>01 — Work</a>
        <a href="#about" style={styles.pill}>02 — About</a>
        <a href="#skills" style={styles.pill}>03 — Skills</a>
        <a href="#topfives" style={styles.pill}>04 — Off duty</a>
        <a href="#contact" style={styles.pill}>05 — Contact</a>
      </nav>
    </div>
  );
}

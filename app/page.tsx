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
    index: "01",
    title: "Onboarding revamp",
    desc: "Redesigned client intake for a 40-person agency, cutting kickoff time from two weeks to three days.",
    tags: ["UX", "Onboarding"],
    accent: PALETTE.red,
    href: "#",
    placeholderNote: "[ drop project screenshot here ]",
  },
  {
    index: "02",
    title: "Campaign builder",
    desc: "Internal tool letting marketing teams assemble landing pages from a component library, no engineering needed.",
    tags: ["Design system"],
    accent: PALETTE.teal,
    href: "#",
    placeholderNote: "[ drop project screenshot here ]",
  },
  {
    index: "03",
    title: "Dashboard motion refresh",
    desc: "Purposeful motion and micro-interactions across a data-heavy analytics dashboard.",
    tags: ["Motion", "UI"],
    accent: PALETTE.orange,
    href: "#",
    placeholderNote: "[ drop project screenshot here ]",
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
  },
  shellRow: { display: "flex", alignItems: "flex-start" },
  sidebar: {
    width: 280,
    flexShrink: 0,
    position: "sticky",
    top: 0,
    height: "100vh",
    background: ink,
    color: cream,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px 20px",
    borderRight: `2px solid ${ink}`,
  },
  sidebarTop: { display: "flex", flexDirection: "column", gap: 18 },
  logoMark: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: cream,
    color: ink,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: `700 13px ${monoFont}`,
  },
  sidebarName: { font: `900 30px/1.05 ${headFont}` },
  sidebarRole: { font: `600 13px/1.4 ${monoFont}`, letterSpacing: "0.03em", opacity: 0.7 },
  navCol: { display: "flex", flexDirection: "column", gap: 4 },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    color: cream,
    font: `700 17px ${paperFont}`,
    padding: "10px 0",
    minHeight: 44,
  },
  navItemNum: { font: `600 11px ${monoFont}`, opacity: 0.5 },
  sidebarBottom: { display: "flex", flexDirection: "column", gap: 14 },
  sidebarCta: {
    textDecoration: "none",
    textAlign: "center",
    font: `700 13px ${paperFont}`,
    color: ink,
    background: PALETTE.mustard,
    padding: "13px 16px",
    borderRadius: 100,
    minHeight: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: { flex: 1, minWidth: 0 },
  masthead: { padding: "clamp(40px,10vw,80px) clamp(20px,6vw,72px) clamp(32px,6vw,56px)", maxWidth: 980 },
  mastheadEyebrow: { font: `700 13px ${monoFont}`, letterSpacing: "0.08em", color: PALETTE.red, marginBottom: 22 },
  mastheadTitle: {
    font: `900 clamp(36px,9vw,88px)/1.05 ${headFont}`,
    margin: "0 0 24px",
    letterSpacing: "-0.01em",
  },
  mastheadTitleAccent: { color: PALETTE.red },
  mastheadSub: {
    font: `500 clamp(16px,3vw,19px)/1.6 ${paperFont}`,
    maxWidth: 520,
    color: "oklch(0.22 0.02 55 / 0.78)",
    margin: "0 0 32px",
  },
  mastheadStripeRow: { display: "flex", gap: 6, height: 14, maxWidth: 420 },
  sectionLabelRow: { display: "flex", alignItems: "center", gap: 16, padding: "0 clamp(20px,6vw,72px)" },
  sectionTag: { font: `700 13px ${monoFont}`, letterSpacing: "0.1em", color: PALETTE.red, whiteSpace: "nowrap" },
  sectionRule: { flex: 1, height: 2, background: ink, opacity: 0.15 },
  sectionTagLight: { font: `700 13px ${monoFont}`, letterSpacing: "0.1em", color: cream, whiteSpace: "nowrap" },
  sectionRuleLight: { flex: 1, height: 2, background: cream, opacity: 0.25 },
  workSection: { padding: "48px 0 72px" },
  workNote: { font: `600 14px ${monoFont}`, color: "oklch(0.22 0.02 55 / 0.5)", margin: "18px 0 0", padding: "0 clamp(20px,6vw,72px)" },
  shelf: { display: "flex", gap: 18, overflowX: "auto", padding: "28px clamp(20px,6vw,72px) 20px", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" },
  spine: {
    flexShrink: 0,
    scrollSnapAlign: "start",
    width: 210,
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    color: ink,
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 12px 28px oklch(0.22 0.02 55 / 0.14)",
    minHeight: 280,
  },
  spineIndex: { font: `700 11px ${monoFont}`, letterSpacing: "0.05em", opacity: 0.85 },
  spineVerticalTitle: {
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    font: `800 22px ${headFont}`,
    letterSpacing: "0.01em",
  },
  spineFace: { background: cream, padding: "20px 16px", display: "flex", flexDirection: "column", gap: 12, flex: 1 },
  spineFaceThumb: {
    font: `600 11px ${monoFont}`,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "oklch(0.22 0.02 55 / 0.4)",
    background: creamDark,
    borderRadius: 6,
    padding: "16px 10px",
    textAlign: "center",
  },
  spineDesc: { font: `400 13px/1.55 ${paperFont}`, color: "oklch(0.22 0.02 55 / 0.72)", margin: 0 },
  spineTagRow: { display: "flex", flexWrap: "wrap", gap: 6 },
  spineTag: { font: `600 10.5px ${monoFont}`, padding: "4px 9px", borderRadius: 100, background: creamDark },
  spineArrow: { font: `700 12px ${paperFont}`, color: PALETTE.red, marginTop: "auto" },
  aboutSection: { padding: "clamp(48px,10vw,88px) clamp(20px,6vw,72px) clamp(40px,8vw,64px)", maxWidth: 1080 },
  aboutGrid: { display: "grid", gap: 40, marginTop: 32, alignItems: "start" },
  aboutLead: { font: `400 clamp(17px,2.5vw,20px)/1.65 ${paperFont}`, color: "oklch(0.22 0.02 55 / 0.85)", margin: 0 },
  dropCap: { font: `900 64px ${headFont}`, float: "left", lineHeight: 0.8, margin: "6px 8px 0 0", color: PALETTE.red },
  pullQuote: { borderLeft: `3px solid ${PALETTE.red}`, paddingLeft: 20 },
  pullQuoteText: { font: `700 22px/1.4 ${headFont}`, margin: "0 0 12px" },
  pullQuoteRule: { width: 36, height: 3, background: PALETTE.mustard },
  specSheet: { display: "flex", flexDirection: "column", marginTop: 48, borderTop: `1.5px solid ${ink}`, maxWidth: 520 },
  specRow: { display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: `1.5px solid ${ink}` },
  specKey: { font: `600 13px ${monoFont}`, letterSpacing: "0.03em", textTransform: "uppercase", opacity: 0.65 },
  specVal: { font: `800 16px ${paperFont}` },
  skillsSection: { background: ink, color: cream, padding: "clamp(48px,10vw,88px) clamp(20px,6vw,72px) clamp(56px,10vw,96px)" },
  skillTable: { display: "flex", flexDirection: "column", marginTop: 36, maxWidth: 820 },
  skillTableRow: {
    display: "grid",
    gap: 10,
    padding: "20px 0",
    borderBottom: "1px solid oklch(0.95 0.018 80 / 0.14)",
    alignItems: "start",
  },
  skillTableLabel: { font: `700 14px ${paperFont}` },
  skillTagRow: { display: "flex", flexWrap: "wrap", gap: 8 },
  skillTag: { font: `600 12px ${monoFont}`, padding: "7px 12px", borderRadius: 100, background: cream, color: ink },
  topFivesSection: { padding: "clamp(48px,10vw,88px) 0 clamp(56px,10vw,88px)" },
  topFivesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 20,
    padding: "0 clamp(20px,6vw,72px)",
    marginTop: 32,
  },
  topFiveCard: { background: creamDark, borderRadius: 12, padding: 24 },
  topFiveCardTitle: { font: `800 15px ${headFont}`, letterSpacing: "0.01em", marginBottom: 16 },
  topFiveList: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 },
  topFiveItem: { display: "flex", alignItems: "baseline", gap: 12, font: `500 14px/1.4 ${paperFont}` },
  topFiveNum: { font: `700 12px ${monoFont}`, color: PALETTE.red, minWidth: 16 },
  contactSection: { background: PALETTE.red, color: cream, padding: "clamp(48px,10vw,88px) clamp(20px,6vw,72px) 40px" },
  contactLabel: { font: `700 13px ${monoFont}`, letterSpacing: "0.08em", opacity: 0.85, marginBottom: 20 },
  contactTitle: { font: `900 clamp(36px,8vw,80px)/1.0 ${headFont}`, margin: "0 0 22px" },
  contactSub: { font: `500 clamp(16px,3vw,18px)/1.5 ${paperFont}`, maxWidth: 460, opacity: 0.9, margin: "0 0 32px" },
  contactRow: { marginBottom: 36 },
  contactEmailBtn: {
    display: "inline-flex",
    font: `700 16px ${paperFont}`,
    textDecoration: "none",
    color: ink,
    background: cream,
    padding: "16px 26px",
    borderRadius: 100,
    minHeight: 44,
    alignItems: "center",
  },
  contactSocialRow: { display: "flex", gap: 26, marginBottom: 48, flexWrap: "wrap" },
  contactSocialLink: { font: `600 14px ${paperFont}`, textDecoration: "none", color: cream, opacity: 0.85, display: "inline-flex", alignItems: "center", minHeight: 44, minWidth: 44, padding: "8px 12px" },
  footerRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
    paddingTop: 22,
    borderTop: "1.5px solid oklch(0.95 0.018 80 / 0.3)",
  },
  footerText: { font: `600 12px ${monoFont}`, opacity: 0.75 },
};

export default function Page() {
  return (
    <div style={styles.page}>
      <div className="dw-shell" style={styles.shellRow}>
        <aside className="dw-sidebar" style={styles.sidebar}>
          <div className="dw-sidebar-top" style={styles.sidebarTop}>
            <div style={styles.logoMark}>DW</div>
            <div style={styles.sidebarName}>
              Darrough
              <br />
              West
            </div>
            <div className="dw-sidebar-role" style={styles.sidebarRole}>
              UX Design
              <br />+ Frontend Eng.
            </div>
          </div>

          <nav className="dw-nav" style={styles.navCol}>
            <a href="#work" className="dw-nav-item" style={styles.navItem}>
              <span style={styles.navItemNum}>01</span>Work
            </a>
            <a href="#about" className="dw-nav-item" style={styles.navItem}>
              <span style={styles.navItemNum}>02</span>About
            </a>
            <a href="#skills" className="dw-nav-item" style={styles.navItem}>
              <span style={styles.navItemNum}>03</span>Skills
            </a>
            <a href="#topfives" className="dw-nav-item" style={styles.navItem}>
              <span style={styles.navItemNum}>04</span>Off duty
            </a>
            <a href="#contact" className="dw-nav-item" style={styles.navItem}>
              <span style={styles.navItemNum}>05</span>Contact
            </a>
          </nav>

          <div className="dw-sidebar-bottom" style={styles.sidebarBottom}>
            <a href="#contact" style={styles.sidebarCta}>
              Start a project ↗
            </a>
          </div>
        </aside>

        <main style={styles.main}>
          <section style={styles.masthead}>
            <div style={styles.mastheadEyebrow}>◉ REC — SIDE A</div>
            <h1 style={styles.mastheadTitle}>
              Interfaces for
              <br />
              agencies who
              <br />
              <span style={styles.mastheadTitleAccent}>ship fast.</span>
            </h1>
            <p style={styles.mastheadSub}>
              I embed with marketing and digital teams to take a concept from whiteboard to working product —
              wireframes Monday, React by Friday.
            </p>
            <div style={styles.mastheadStripeRow}>
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
            <p style={styles.workNote}>
              Placeholder reel — scroll the rack, swap in real case studies once client work is loaded in.
            </p>
            <div className="dw-shelf" style={styles.shelf}>
              {projects.map((proj) => (
                <a key={proj.index} href={proj.href} style={styles.spine}>
                  <div
                    style={{
                      background: proj.accent,
                      color: ink,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 0",
                      height: 150,
                    }}
                  >
                    <span style={styles.spineIndex}>{proj.index}</span>
                    <span style={styles.spineVerticalTitle}>{proj.title}</span>
                  </div>
                  <div style={styles.spineFace}>
                    <div style={styles.spineFaceThumb}>{proj.placeholderNote}</div>
                    <p style={styles.spineDesc}>{proj.desc}</p>
                    <div style={styles.spineTagRow}>
                      {proj.tags.map((t) => (
                        <span key={t} style={styles.spineTag}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <span style={styles.spineArrow}>View case study ↗</span>
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
            <div className="dw-about-grid" style={styles.aboutGrid}>
              <p style={styles.aboutLead}>
                <span style={styles.dropCap}>T</span>en-plus years bouncing between Figma and VS Code taught me that
                the best interfaces come from people who can prototype the interaction, not just describe it. I've
                spent most of that time inside agencies — pulled in mid-sprint to unstick a flow, or brought on from
                kickoff to own design and build end to end.
              </p>
              <aside style={styles.pullQuote}>
                <p style={styles.pullQuoteText}>"Designers who ship code make better decisions in the room."</p>
                <div style={styles.pullQuoteRule} />
              </aside>
            </div>
            <div style={styles.specSheet}>
              <div style={styles.specRow}>
                <span style={styles.specKey}>Projects shipped</span>
                <span style={styles.specVal}>40+</span>
              </div>
              <div style={styles.specRow}>
                <span style={styles.specKey}>Agency partners</span>
                <span style={styles.specVal}>12</span>
              </div>
              <div style={styles.specRow}>
                <span style={styles.specKey}>Team size</span>
                <span style={styles.specVal}>1, full stack</span>
              </div>
            </div>
          </section>

          <section id="skills" style={styles.skillsSection}>
            <div style={styles.sectionLabelRow}>
              <span style={styles.sectionTagLight}>03 — SKILLS</span>
              <span style={styles.sectionRuleLight} />
            </div>
            <div style={styles.skillTable}>
              {skillGroups.map((group) => (
                <div key={group.title} className="dw-skill-row" style={styles.skillTableRow}>
                  <span style={styles.skillTableLabel}>{group.title}</span>
                  <div style={styles.skillTagRow}>
                    {group.tags.map((tag) => (
                      <span key={tag} style={styles.skillTag}>
                        {tag}
                      </span>
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
                        <span style={styles.topFiveNum}>{i + 1}</span>
                        {label}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" style={styles.contactSection}>
            <div style={styles.contactLabel}>◉ REC — SIDE B</div>
            <h2 style={styles.contactTitle}>
              Let's press
              <br />
              record.
            </h2>
            <p style={styles.contactSub}>Tell me about the brief — I reply within a day, usually with questions.</p>
            <div style={styles.contactRow}>
              <a href="mailto:darrough@gmail.com" style={styles.contactEmailBtn}>
                darrough@gmail.com ↗
              </a>
            </div>
            <div style={styles.contactSocialRow}>
              <a href="#" style={styles.contactSocialLink}>
                Dribbble
              </a>
              <a href="#" style={styles.contactSocialLink}>
                LinkedIn
              </a>
              <a href="#" style={styles.contactSocialLink}>
                GitHub
              </a>
              <a href="https://open.spotify.com/user/darrough?si=0c7cd65c69b347c2" style={styles.contactSocialLink}>
                Spotify
              </a>
            </div>
            <div style={styles.footerRow}>
              <span style={styles.footerText}>© 2026 Darrough West</span>
              <span style={styles.footerText}>Recorded on planet Earth</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

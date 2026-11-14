"use client";
import Link from "next/link";
import { caseStudies } from "./data/case-studies";
import SiteHeader from "./components/SiteHeader";
import NavPills, { NAV_ITEMS } from "./components/NavPills";
import WorkCard, { type WorkCardShape, type WorkCardTone } from "./components/WorkCard";
import ContactCTA from "./components/ContactCTA";
import DotSpotlight from "./components/DotSpotlight";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useScrollReveal } from "./hooks/useScrollReveal";

const SECTIONS = NAV_ITEMS.map((item) => item.id);

const skillGroups = [
  { title: "Design", tone: "red", tags: ["Figma", "Design systems", "Prototyping", "User research", "Wireframing", "Content strategy"] },
  { title: "Engineering", tone: "periwinkle", tags: ["React", "TypeScript", "CSS/Motion", "Accessibility", "Design tokens", "SEO/AIO", "AI/Agent UX"] },
  { title: "Agency fit", tone: "orange", tags: ["Client workshops", "Sprint embeds", "Handoff docs", "QA passes", "Design Thinking"] },
];

const topFives = [
  { title: "Food", tone: "orange", items: ["Birria Tacos", "Sushi", "Curry", "Rare Burgers", "Neapolitan Pizza"] },
  { title: "Video games", tone: "periwinkle", items: ["Assassin's Creed", "Sneaky Sasquatch", "Far Cry", "Crimson Desert", "Fallout"] },
  { title: "Activities", tone: "ink", items: ["Kayaking", "Travel", "Live Music", "Photography", "Birding"] },
];

// Sourced from a Chrome bookmarks folder I add to as I come across things
// worth reading — not wired into the nav/scroll-spy on purpose.
const readingLinks = [
  { title: "UX Planet", domain: "uxplanet.org", url: "https://uxplanet.org/", desc: "Curated UX articles and case studies" },
  { title: "Nielsen Norman Group", domain: "nngroup.com", url: "https://www.nngroup.com/", desc: "UX research, training, and consulting" },
  { title: "Designlab", domain: "designlab.com", url: "https://designlab.com/", desc: "Online UI/UX and product design courses" },
  { title: "Marvel Blog", domain: "marvelapp.com", url: "https://marvelapp.com/blog/", desc: "Ideas on UX, design, and collaboration" },
  { title: "TOOOLS.design", domain: "toools.design", url: "https://www.toools.design/", desc: "Design resources and tools" },
  { title: "Academy UX", domain: "blog.academyux.com", url: "https://blog.academyux.com/", desc: "UX learning resources" },
  { title: "UX Collective", domain: "uxdesign.cc", url: "https://uxdesign.cc/", desc: "Widely-read UX publication" },
  { title: "Nicely Done", domain: "nicelydone.club", url: "https://nicelydone.club/apps", desc: "SaaS UX design inspiration library" },
  { title: "Mobbin", domain: "mobbin.com", url: "https://mobbin.com/", desc: "UI/UX design inspiration for mobile and web apps" },
];

// Featuring the newest case study leads with the strongest, most current
// work instead of chronological item 001 — no separate "featured" flag to
// keep in sync, just "last added" read off the existing array order.
const featuredStudy = caseStudies[caseStudies.length - 1];
const gridStudies = caseStudies.slice(0, -1);

// Bento layout for the 9 non-featured tiles, in grid order. `span` is
// columns x rows on the 12-column desktop grid; the featured tile is always
// 7x3 and sits first. Rows add up to 12 columns so nothing leaves a gap:
//   rows 1–3: featured 7x3 | 5x2 over 5x1
//   rows 4–5: 4 + 4 + 4
//   rows 6–7: 5 + 4 + 3
//   row  8:   12x1 banner
// Tones alternate so no two neighbouring tiles share a color. If a case
// study is added beyond this list, it falls back to a 4x2 cream tile.
const BENTO_LAYOUT: { span: string; shape: WorkCardShape; tone: WorkCardTone }[] = [
  { span: "span-5x2", shape: "tall", tone: "red" },
  { span: "span-5x1", shape: "row", tone: "orange" },
  { span: "span-4x2", shape: "tall", tone: "periwinkle" },
  { span: "span-4x2", shape: "tall", tone: "cream" },
  { span: "span-4x2", shape: "tall", tone: "ink" },
  { span: "span-5x2", shape: "tall", tone: "orange" },
  { span: "span-4x2", shape: "tall", tone: "red" },
  { span: "span-3x2", shape: "tall", tone: "periwinkle" },
  { span: "span-12x1", shape: "row", tone: "ink" },
];
const BENTO_FALLBACK = { span: "span-4x2", shape: "tall", tone: "cream" } as const;

export default function Page() {
  const activeSection = useScrollSpy(SECTIONS, "work");
  useScrollReveal();

  return (
    <div className="page">
      {/* Jakob's Law: users expect this to work like every other site. It does. That's the joke. */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <SiteHeader nav={<NavPills activeSection={activeSection} />} />

      <main id="main-content">
        <section className="masthead">
          <DotSpotlight />
          <div className="masthead-inner">
            <h1 className="masthead-title">
              Interfaces that <span className="masthead-accent">ship</span>.
            </h1>
            <p className="masthead-sub">
              I work with teams full-time or on a project basis, taking a concept from whiteboard to working product. No agency overhead, no bench. Wireframes Monday, React by Friday.
            </p>
          </div>
        </section>

        <section id="work" className="work-section" data-reveal>
          <div className="section-label-row">
            <h2 className="section-tag">SELECTED WORK</h2>
            <span className="section-rule" />
          </div>
          <p className="work-note">A few recent case studies, from behavioral UX research to enterprise design systems.</p>
          <div className="bento">
            <WorkCard study={featuredStudy} featured tone="cream" shape="tall" className="span-7x3" />
            {gridStudies.map((proj, i) => {
              const tile = BENTO_LAYOUT[i] ?? BENTO_FALLBACK;
              return (
                <WorkCard key={proj.num} study={proj} tone={tile.tone} shape={tile.shape} className={tile.span} />
              );
            })}
          </div>
        </section>

        <section id="about" className="about-section" data-reveal>
          <div className="section-label-row">
            <h2 className="section-tag">ABOUT</h2>
            <span className="section-rule" />
          </div>
          <div className="bento bento--about">
            <div className="bento-tile tone-cream span-7x2 about-story">
              <span className="tile-label">The short version</span>
              <p className="about-lead">
                <span className="drop-cap">T</span>
                en-plus years bouncing between Figma and VS Code taught me that the best interfaces come from people who can prototype the interaction, 
                not just describe it. I've spent most of that time inside agencies and enterprise teams: pulled in mid-sprint to unstick a flow, 
                brought on from kickoff to own design and build end to end, or embedded full-time on a product that needed someone who could do both.
              </p>
            </div>
            <blockquote className="bento-tile tone-periwinkle span-5x1 pull-quote">
              <span className="tile-label">Philosophy</span>
              <p className="pull-quote-text">"Designers who ship code make better decisions in the room."</p>
              <div className="pull-quote-rule" />
            </blockquote>
            <div className="bento-tile tone-orange span-5x1 about-status">
              <span className="tile-label"><span className="status-dot" aria-hidden="true" />Available now</span>
              <p className="about-tile-big">Currently open to full-time roles and select project work.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section" data-reveal>
          <div className="section-label-row">
            <h2 className="section-tag-light">SKILLS</h2>
            <span className="section-rule-light" />
          </div>
          <div className="bento bento--skills">
            {skillGroups.map((group, i) => (
              <div key={group.title} className={`bento-tile tone-${group.tone} span-4x1 skill-tile`}>
                <span className="tile-label">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="skill-tile-title">{group.title}</h3>
                <div className="skill-tag-row">
                  {group.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="topfives" className="outside-work-section" data-reveal>
          <div className="section-label-row">
            <h2 className="section-tag">OFF DUTY</h2>
            <span className="section-rule" />
          </div>
          <p className="work-note">A few top 5s, because a well-rounded life makes for better design instincts.</p>
          <div className="bento bento--offduty">
            {topFives.map((cat) => (
              <div key={cat.title} className={`bento-tile tone-${cat.tone} span-4x1 top-five-card`}>
                <span className="tile-label">Top 5</span>
                <h3 className="top-five-title">{cat.title}</h3>
                <ol className="top-five-list">
                  {cat.items.map((label, i) => (
                    <li key={label} className="top-five-item">
                      <span className="top-five-num">{i + 1}</span>{label}
                    </li>
                  ))}
                </ol>
              </div>
            ))}

            <div id="reading" className="bento-tile tone-cream span-12x1 reading-tile">
              <span className="tile-label">Reading</span>
              <h3 className="top-five-title">Bookmarked along the way</h3>
              <p className="outside-work-reading-note">Added to as I come across things worth reading.</p>
              <div className="reading-list">
                {readingLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                    className="reading-item"
                  >
                    <span className="reading-item-title">
                      {link.title}
                      <span className="visually-hidden"> (opens in new tab)</span>
                    </span>
                    <span className="reading-item-desc">{link.desc}</span>
                    <span className="reading-item-domain">{link.domain}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section contact-section--with-nav" data-reveal>
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
      </main>

    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "./data/case-studies";
import SiteHeader from "./components/SiteHeader";
import NavPills, { NAV_ITEMS } from "./components/NavPills";
import WorkCard from "./components/WorkCard";
import ContactCTA from "./components/ContactCTA";
import ThemeToggle from "./components/ThemeToggle";

const stripeColors = ["red", "orange", "mustard", "teal", "plum", "ink"];

const SECTIONS = NAV_ITEMS.map((item) => item.id);

const skillGroups = [
  { title: "Design", tags: ["Figma", "Design systems", "Prototyping", "User research", "Wireframing", "Content strategy"] },
  { title: "Engineering", tags: ["React", "TypeScript", "CSS/Motion", "Accessibility", "Design tokens", "SEO/AIO", "AI/Agent UX"] },
  { title: "Agency fit", tags: ["Client workshops", "Sprint embeds", "Handoff docs", "QA passes", "Design Thinking"] },
];

const topFives = [
  { title: "Food", items: ["Birria Tacos", "Sushi", "Curry", "Rare Burgers", "Neapolitan Pizza"] },
  { title: "Video games", items: ["Assassin's Creed", "Sneaky Sasquatch", "Far Cry", "Crimson Desert", "Fallout"] },
  { title: "Activities", items: ["Kayaking", "Travel", "Live Music", "Photography", "Birding"] },
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

export default function Page() {
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const intersecting = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersecting.set(entry.target.id, entry.isIntersecting);
        });
        const current = SECTIONS.find((id) => intersecting.get(id));
        if (current) setActiveSection(current);
      },
      { rootMargin: "-10% 0px -80% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScrollEnd = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) setActiveSection(SECTIONS[SECTIONS.length - 1]);
    };
    window.addEventListener("scroll", handleScrollEnd, { passive: true });
    handleScrollEnd();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollEnd);
    };
  }, []);

  return (
    <div className="page">
      {/* Jakob's Law: users expect this to work like every other site. It does. That's the joke. */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <SiteHeader />

      <main id="main-content">
        <section className="masthead">
          <div className="masthead-eyebrow">◉ SIDE A</div>
          <h1 className="masthead-title">
            Where we're going,
            <br />
            <span className="masthead-accent">
              we don't need
              <br />
              roads.
            </span>
          </h1>
          <p className="masthead-sub">
            I work with teams full-time or on a project basis, taking a concept from whiteboard to working product. No agency overhead, no bench. Wireframes Monday, React by Friday.
          </p>
          <div className="stripe-row">
            {stripeColors.map((c, i) => (
              <div key={i} className={`stripe-segment stripe-segment--${c}`} />
            ))}
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-label-row">
            <h2 className="section-tag">01 · SELECTED WORK</h2>
            <span className="section-rule" />
          </div>
          <p className="work-note">A few recent case studies, from behavioral UX research to enterprise design systems.</p>
          <div className="shelf">
            {caseStudies.map((proj) => (
              <WorkCard key={proj.num} study={proj} />
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="section-label-row">
            <h2 className="section-tag">02 · ABOUT</h2>
            <span className="section-rule" />
          </div>
          <p className="about-lead">
            <span className="drop-cap">T</span>
            en-plus years bouncing between Figma and VS Code taught me that the best interfaces come from people who can prototype the interaction, 
            not just describe it. I've spent most of that time inside agencies and enterprise teams: pulled in mid-sprint to unstick a flow, 
            brought on from kickoff to own design and build end to end, or embedded full-time on a product that needed someone who could do both. 
            Currently open to full-time roles and select project work.
          </p>
          <blockquote className="pull-quote">
            <p className="pull-quote-text">"Designers who ship code make better decisions in the room."</p>
            <div className="pull-quote-rule" />
          </blockquote>
        </section>

        <section id="skills" className="skills-section">
          <div className="section-label-row">
            <h2 className="section-tag-light">03 · SKILLS</h2>
            <span className="section-rule-light" />
          </div>
          <div className="skill-table">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-row">
                <h3 className="skill-label">{group.title}</h3>
                <div className="skill-tag-row">
                  {group.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="topfives" className="top-fives-section">
          <div className="section-label-row">
            <h2 className="section-tag">04 · OFF DUTY</h2>
            <span className="section-rule" />
          </div>
          <p className="work-note">A few top 5s, because a well-rounded life makes for better design instincts.</p>
          <div className="top-fives-grid">
            {topFives.map((cat) => (
              <div key={cat.title} className="top-five-card">
                <h3 className="top-five-card-title">{cat.title}</h3>
                <ol className="top-five-list">
                  {cat.items.map((label, i) => (
                    <li key={label} className="top-five-item">
                      <span className="top-five-num">{i + 1}</span>{label}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section id="reading" className="reading-section">
          <div className="section-label-row">
            <h2 className="section-tag">05 · READING</h2>
            <span className="section-rule" />
          </div>
          <p className="work-note">Links I've bookmarked along the way, added to as I come across things worth reading.</p>
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
        </section>

        <section id="contact" className="contact-section contact-section--with-nav">
          <div className="contact-grid">
            <div className="contact-main">
              <div className="contact-label">◉ SIDE B</div>
              <ContactCTA />
              <div className="contact-social-row">
                <a href="https://linkedin.com/in/darroughw" target="_blank" rel="noopener" className="contact-social-link">
                  LinkedIn<span className="visually-hidden"> (opens in new tab)</span>
                </a>
                <a href="https://github.com/darroughw" target="_blank" rel="noopener" className="contact-social-link">
                  GitHub<span className="visually-hidden"> (opens in new tab)</span>
                </a>
                <a href="https://open.spotify.com/user/darrough?si=0c7cd65c69b347c2" className="contact-social-link">Spotify</a>
              </div>
            </div>
            <div className="crt-photo" aria-hidden="true">
              <Image src="/images/darrough-portrait.jpg" alt="" fill sizes="(max-width: 640px) 220px, 280px" className="crt-photo-img" />
              <div className="crt-photo-fringe crt-photo-fringe--red" />
              <div className="crt-photo-fringe crt-photo-fringe--cyan" />
              <div className="crt-scanlines" />
              <div className="crt-vignette" />
            </div>
          </div>
          <div className="footer-row">
            <span className="footer-text">© 2026 Darrough West</span>
            <div className="footer-links">
              <a href="https://namedrop.io/darroughwest" target="_blank" rel="noopener" className="footer-text footer-link">
                Pronounce my name ↗<span className="visually-hidden"> (opens in new tab)</span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener" className="footer-text footer-link">
                Resume ↗<span className="visually-hidden"> (opens in new tab)</span>
              </a>
              <Link href="/feedback" className="footer-text footer-link">Feedback</Link>
              <a href="/storybook" target="_blank" rel="noopener" className="footer-text footer-link">
                Design System ↗<span className="visually-hidden"> (opens in new tab)</span>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </section>
      </main>

      <NavPills activeSection={activeSection} />
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "./data/case-studies";

const stripeColors = ["red", "orange", "mustard", "teal", "plum", "ink"];

const SECTIONS = ["work", "about", "skills", "topfives", "contact"];

// The "How I Work" section is temporarily hidden pending a design pass —
// see howSteps below and the "how" section/pill/SCSS still in place to
// make it easy to bring back.

const howSteps = [
  {
    title: "Discovery call",
    desc: "A short call to talk through the brief, constraints, and timeline. No proposal decks, just a conversation about what you actually need.",
  },
  {
    title: "Scoped sprint",
    desc: "That turns into a tight scope with a clear timeline. I move fast from there: wireframes and prototypes early, tight feedback loops throughout.",
  },
  {
    title: "Build & handoff",
    desc: "Depending on the engagement, I ship production-ready code myself or hand off clean, documented designs your team can build from.",
  },
];

const skillGroups = [
  { title: "Design", tags: ["Figma", "Design systems", "Prototyping", "User research", "Wireframing"] },
  { title: "Engineering", tags: ["React", "TypeScript", "CSS/Motion", "Accessibility", "Design tokens"] },
  { title: "Agency fit", tags: ["Client workshops", "Sprint embeds", "Handoff docs", "QA passes", "Design Thinking"] },
];

const topFives = [
  { title: "Food", items: ["Birria Tacos", "Sushi", "Curry", "Rare Burgers", "Neapolitan Pizza"] },
  { title: "Video games", items: ["Assassin's Creed", "Sneaky Sasquatch", "Far Cry", "Crimson Desert", "Fallout"] },
  { title: "Activities", items: ["Kayaking", "Travel", "Live Music", "Photography", "Birding"] },
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

  const pillClass = (id: string) => `pill${activeSection === id ? " is-active" : ""}`;

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="header">
        <div className="logo-mark">DW</div>
        <div className="header-name">Darrough West</div>
        <a href="mailto:darrough@gmail.com" className="header-cta">Open to work ↗</a>
      </header>

      <main id="main-content">
        <section className="masthead">
          <div className="masthead-eyebrow">◉ REC · SIDE A</div>
          <h1 className="masthead-title">
            Interfaces for
            <br />
            agencies who ship fast.
            <br />
            <span className="masthead-accent">ship fast.</span>
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
              <Link key={proj.num} href={`/work/${proj.slug}`} className="shelf-card card">
                <div className="card-img-wrap">
                  <Image
                    src={proj.imgSrc}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 220px"
                    className="card-img"
                  />
                  <span className="card-num">{proj.num}</span>
                </div>
                <div className="card-face">
                  <h3 className="card-title">{proj.title}</h3>
                  <p className="card-desc">{proj.desc}</p>
                  <div className="card-meta">{proj.role} · {proj.year}</div>
                  <div className="card-tag-row">
                    {proj.tags.map((t) => (
                      <span key={t} className="card-tag">{t}</span>
                    ))}
                  </div>
                  <span className="card-arrow">View case study ↗</span>
                </div>
              </Link>
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
          <div className="spec-sheet">
            <div className="spec-row"><span className="spec-key">Projects shipped</span><span className="spec-val">40+</span></div>
            <div className="spec-row"><span className="spec-key">Agency partners</span><span className="spec-val">12</span></div>
            <div className="spec-row"><span className="spec-key">Team size</span><span className="spec-val">1, full stack</span></div>
          </div>
        </section>

        {/* "How I Work" section hidden pending a design pass — see TODO.md */}

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

        <section id="contact" className="contact-section">
          <div className="contact-label">◉ REC · SIDE B</div>
          <h2 className="contact-title">Let's press record.</h2>
          <p className="contact-sub">Tell me about the brief. I reply within a day, usually with questions.</p>
          <div className="contact-email-wrap">
            <a href="mailto:darrough@gmail.com" className="contact-email-btn">darrough@gmail.com ↗</a>
          </div>
          <div className="contact-social-row">
            <a href="https://linkedin.com/in/darroughw" target="_blank" rel="noopener" className="contact-social-link">
              LinkedIn<span className="visually-hidden"> (opens in new tab)</span>
            </a>
            <a href="https://github.com/darroughw" target="_blank" rel="noopener" className="contact-social-link">
              GitHub<span className="visually-hidden"> (opens in new tab)</span>
            </a>
            <a href="https://open.spotify.com/user/darrough?si=0c7cd65c69b347c2" className="contact-social-link">Spotify</a>
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
            </div>
          </div>
        </section>
      </main>

      <nav className="bottom-nav" aria-label="Section navigation">
        <a href="#work" className={pillClass("work")} aria-current={activeSection === "work" ? "true" : undefined}>Work</a>
        <a href="#about" className={pillClass("about")} aria-current={activeSection === "about" ? "true" : undefined}>About</a>
        <a href="#skills" className={pillClass("skills")} aria-current={activeSection === "skills" ? "true" : undefined}>Skills</a>
        <a href="#topfives" className={pillClass("topfives")} aria-current={activeSection === "topfives" ? "true" : undefined}>Off duty</a>
        <a href="#contact" className={pillClass("contact")} aria-current={activeSection === "contact" ? "true" : undefined}>Contact</a>
      </nav>
    </div>
  );
}

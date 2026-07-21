import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies, CaseStudyBlock } from "../../data/case-studies";
import { SITE_URL, SITE_NAME } from "../../site-config";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};
  const url = `${SITE_URL}/work/${study.slug}`;
  return {
    title: `${study.title} — Darrough West`,
    description: study.desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

function Block({ block }: { block: CaseStudyBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="case-paragraph" dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "subheading":
      return <h3 className="case-subheading">{block.text}</h3>;
    case "bullets":
      return (
        <ul className="case-bullets">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="case-table-wrap">
          <table className="case-table">
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "stat":
      return (
        <div className="case-stat-row">
          {block.items.map((s) => (
            <div key={s.label} className="case-stat">
              <div className="case-stat-value">{s.value}</div>
              <div className="case-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      );
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  const url = `${SITE_URL}/work/${study.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      headline: study.title,
      description: study.desc,
      url,
      image: `${SITE_URL}${study.imgSrc}`,
      keywords: study.tags.join(", "),
      author: {
        "@type": "Person",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/#work` },
        { "@type": "ListItem", position: 3, name: study.title, item: url },
      ],
    },
  ];

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="header">
        <Link href="/" className="logo-mark">DW</Link>
        <div className="header-name">Darrough West</div>
        <a href="mailto:darrough@gmail.com" className="header-cta">Open to work ↗</a>
      </header>

      <main id="main-content">
        <div className="case-hero">
          <Image
            src={study.imgSrc}
            alt={study.title}
            fill
            priority
            sizes="100vw"
            className="case-hero-img"
          />
          <div className="case-hero-content">
            <Link href="/#work" className="case-back">← Back to work</Link>
            <p className="case-hero-eyebrow">Case Study · {study.year}</p>
            <h1 className="case-hero-title">{study.title}</h1>
            <div className="case-meta">
              <span>Role: {study.role}</span>
              <span>Year: {study.year}</span>
              {study.tools && <span>Tools: {study.tools}</span>}
            </div>
          </div>
        </div>

        <div className="case-body">
          <div className="case-tags">
            {study.tags.map((t) => (
              <span key={t} className="card-tag">{t}</span>
            ))}
          </div>

          {study.sections.map((section) => (
            <section key={section.heading} className="case-section">
              <h2 className="case-heading">{section.heading}</h2>
              {section.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </section>
          ))}
        </div>

        <section className="contact-section">
          <h2 className="contact-title">Let's press record.</h2>
          <p className="contact-sub">Tell me about the brief — I reply within a day, usually with questions.</p>
          <div className="contact-email-wrap">
            <a href="mailto:darrough@gmail.com" className="contact-email-btn">darrough@gmail.com ↗</a>
          </div>
        </section>
      </main>
    </div>
  );
}

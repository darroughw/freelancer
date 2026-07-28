import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies } from "../../data/case-studies";
import { SITE_URL, SITE_NAME } from "../../site-config";
import SiteHeader from "../../components/SiteHeader";
import CaseStudyBlock from "../../components/CaseStudyBlock";
import CasePager from "../../components/CasePager";
import ContactCTA from "../../components/ContactCTA";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};
  const url = `${SITE_URL}/work/${study.slug}`;
  return {
    title: `${study.title} · Darrough West`,
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

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const index = caseStudies.findIndex((s) => s.slug === params.slug);
  const study = caseStudies[index];
  if (!study) notFound();

  const prevStudy = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const nextStudy = caseStudies[(index + 1) % caseStudies.length];

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

      <SiteHeader />

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
                <CaseStudyBlock key={i} block={block} />
              ))}
            </section>
          ))}
        </div>

        <CasePager prev={prevStudy} next={nextStudy} />

        <section className="contact-section">
          <ContactCTA />
        </section>
      </main>
    </div>
  );
}

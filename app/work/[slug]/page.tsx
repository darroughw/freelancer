import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies } from "../../data/case-studies";
import { extractFeaturedStat, slugifyHeading } from "../../data/case-study-helpers";
import { SITE_URL, SITE_NAME } from "../../site-config";
import SiteHeader from "../../components/SiteHeader";
import ScrollReveal from "../../components/ScrollReveal";
import CaseStudyBlock from "../../components/CaseStudyBlock";
import CaseStudyNav from "../../components/CaseStudyNav";
import CasePager from "../../components/CasePager";
import SiteFooter from "../../components/SiteFooter";

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
      siteName: SITE_NAME,
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
  const featuredStat = extractFeaturedStat(study.sections);

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

      <SiteHeader
        nav={
          <nav className="bottom-nav" aria-label="Site">
            <Link href="/#work" className="pill">All work</Link>
            <Link href="#contact" className="pill">Contact</Link>
          </nav>
        }
      />

      <main id="main-content">
        <section className="case-hero">
          <div className="bento bento--case-hero">
            <div className="bento-tile tone-cream span-7x2 case-title-tile">
              <Link href="/#work" className="case-back">← Back to work</Link>
              <p className="tile-label case-hero-eyebrow">Case study · {study.year}</p>
              <h1 className="case-hero-title">{study.title}</h1>
              <p className="case-hero-desc">{study.desc}</p>
            </div>

            <div className="bento-card span-5x2 case-cover">
              <Image
                src={study.imgSrc}
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 100vw, 40vw"
                className="case-cover-img"
              />
              <span className="card-num">{study.num}</span>
            </div>

            <div className="bento-tile tone-orange span-4x1">
              <span className="tile-label">Role</span>
              <p className="case-meta-value">{study.role}</p>
            </div>
            <div className="bento-tile tone-ink span-4x1">
              <span className="tile-label">{study.tools ? "Tools" : "Year"}</span>
              <p className="case-meta-value">{study.tools || study.year}</p>
            </div>
            <div className="bento-tile tone-cream span-4x1 case-focus">
              <span className="tile-label">Focus</span>
              <div className="case-tags">
                {study.tags.map((t) => (
                  <span key={t} className="card-tag">{t}</span>
                ))}
              </div>
            </div>

            {featuredStat && (
              <div className="bento-tile tone-ink span-12x1 case-results-strip">
                <span className="tile-label case-results-label">At a glance</span>
                <CaseStudyBlock block={featuredStat.block} />
              </div>
            )}
          </div>
        </section>

        <div className="case-body">
          <CaseStudyNav headings={study.sections.map((s) => s.heading)} />

          <div className="case-sections-col">
            {study.sections.map((section) => (
              <section key={section.heading} id={slugifyHeading(section.heading)} className="case-section" data-reveal>
                <h2 className="case-heading">{section.heading}</h2>
                {section.body.map((block, i) => {
                  const isPromotedStat =
                    featuredStat &&
                    section.heading === featuredStat.sectionHeading &&
                    i === featuredStat.blockIndex;
                  if (isPromotedStat) return null;
                  return <CaseStudyBlock key={i} block={block} />;
                })}
              </section>
            ))}
          </div>
        </div>

        <CasePager prev={prevStudy} next={nextStudy} />

        <SiteFooter withBottomNav />

        <ScrollReveal />
      </main>
    </div>
  );
}

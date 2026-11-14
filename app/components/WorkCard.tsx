import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "../data/case-studies";

export type WorkCardTone = "cream" | "red" | "orange" | "periwinkle" | "ink";
export type WorkCardShape = "tall" | "row";

type WorkCardProps = {
  study: CaseStudy;
  featured?: boolean;
  /** Tile background from the palette. Text color follows the tone. */
  tone?: WorkCardTone;
  /** "tall": image on top, text below. "row": short tile, thumbnail beside the text. */
  shape?: WorkCardShape;
  /** Extra classes, e.g. the bento grid's span class. */
  className?: string;
};

export default function WorkCard({
  study,
  featured = false,
  tone = "cream",
  shape = "tall",
  className = "",
}: WorkCardProps) {
  const classes = [
    "card",
    "bento-card",
    `bento-card--${shape}`,
    `tone-${tone}`,
    featured ? "card--featured" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={`/work/${study.slug}`} className={classes}>
      <div className="card-img-wrap">
        <Image
          src={study.imgSrc}
          alt={study.title}
          fill
          sizes={featured ? "(max-width: 640px) 100vw, 800px" : "(max-width: 640px) 100vw, 480px"}
          className="card-img"
        />
        <span className="card-num">{study.num}</span>
      </div>
      <div className="card-face">
        {featured && <span className="card-eyebrow">Featured · {study.year}</span>}
        <h3 className="card-title">{study.title}</h3>
        <p className="card-desc">{study.desc}</p>
        <div className="card-meta">{study.role} · {study.year}</div>
        <div className="card-tag-row">
          {study.tags.map((t) => (
            <span key={t} className="card-tag">{t}</span>
          ))}
        </div>
        {/* Fitts's Law: made this whole card the click target so users can't miss it. They still missed it. */}
        <span className="card-arrow">View case study ↗</span>
      </div>
    </Link>
  );
}

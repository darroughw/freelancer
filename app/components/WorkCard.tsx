import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "../data/case-studies";

export default function WorkCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.slug}`} className="shelf-card card">
      <div className="card-img-wrap">
        <Image
          src={study.imgSrc}
          alt={study.title}
          fill
          sizes="(max-width: 640px) 100vw, 220px"
          className="card-img"
        />
        <span className="card-num">{study.num}</span>
      </div>
      <div className="card-face">
        <h3 className="card-title">{study.title}</h3>
        <p className="card-desc">{study.desc}</p>
        <div className="card-meta">{study.role} · {study.year}</div>
        <div className="card-tag-row">
          {study.tags.map((t) => (
            <span key={t} className="card-tag">{t}</span>
          ))}
        </div>
        <span className="card-arrow">View case study ↗</span>
      </div>
    </Link>
  );
}

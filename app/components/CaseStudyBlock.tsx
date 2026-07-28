import Image from "next/image";
import type { CaseStudyBlock as CaseStudyBlockData } from "../data/case-studies";

export default function CaseStudyBlock({ block }: { block: CaseStudyBlockData }) {
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
    case "images":
      return (
        <figure className="case-images">
          <div className="case-images-grid">
            {block.items.map((img) => (
              <div
                key={img.src}
                className="case-images-item"
                style={{ aspectRatio: `${img.width} / ${img.height}` }}
              >
                <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 640px) 90vw, 45vw" />
              </div>
            ))}
          </div>
          {block.caption && <figcaption className="case-images-caption">{block.caption}</figcaption>}
        </figure>
      );
  }
}

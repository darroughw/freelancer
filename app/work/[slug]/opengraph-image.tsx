import { ImageResponse } from "next/og";
import { caseStudies } from "../../data/case-studies";
import { ogColors } from "../../og-theme";
import KingfisherMark from "../../components/KingfisherMark";

export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  const title = study?.title ?? "Case Study";
  const year = study?.year ?? "";
  const role = study?.role ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: ogColors.ink,
          color: ogColors.cream,
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", marginRight: 20 }}>
            <KingfisherMark size={56} background={ogColors.cream} foreground={ogColors.ink} />
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>Darrough West</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 2,
              color: ogColors.mustard,
              marginBottom: 20,
              fontFamily: "monospace",
            }}
          >
            {`CASE STUDY · ${year}`}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 26, opacity: 0.8 }}>{role}</div>
        </div>

        <div style={{ display: "flex", height: 12, width: "100%" }}>
          {[ogColors.red, ogColors.orange, ogColors.mustard, ogColors.teal, ogColors.plum, ogColors.cream].map(
            (color) => (
              <div key={color} style={{ display: "flex", flex: 1, background: color }} />
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}

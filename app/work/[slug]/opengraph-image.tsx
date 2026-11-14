import { ImageResponse } from "next/og";
import { caseStudies } from "../../data/case-studies";
import { ogColors } from "../../og-theme";
import { loadOgFonts, OgMark, OgName, OgStrip } from "../../og-shared";

export const alt = "Case study by Darrough West";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

// A compact site header on top, then the study as a big cream bento tile on
// the periwinkle hero background, then the orange strip.
export default async function Image({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  const title = study?.title ?? "Case Study";
  const year = study?.year ?? "";
  const role = study?.role ?? "";
  const num = study?.num ?? "";

  // Long titles step down so they stay within three lines.
  const titleSize = title.length > 70 ? 46 : title.length > 45 ? 54 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: ogColors.cream,
          color: ogColors.ink,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "28px 64px",
            borderBottom: `6px solid ${ogColors.ink}`,
          }}
        >
          <OgMark size={72} />
          <div style={{ display: "flex", marginLeft: 22 }}>
            <OgName size={58} steps={6} />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            background: `linear-gradient(160deg, ${ogColors.periwinkle} 0%, ${ogColors.periwinkleDeep} 100%)`,
            padding: "36px 64px",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: ogColors.cream,
              border: `4px solid ${ogColors.ink}`,
              borderRadius: 26,
              padding: "30px 38px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  fontFamily: "JetBrains Mono",
                  fontWeight: 700,
                  fontSize: 20,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                {`Case study · ${year}`}
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "JetBrains Mono",
                  fontWeight: 700,
                  fontSize: 20,
                  border: `3px solid ${ogColors.ink}`,
                  borderRadius: 999,
                  padding: "4px 16px",
                }}
              >
                {num}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Archivo Black",
                fontSize: titleSize,
                lineHeight: 1.08,
                letterSpacing: -1,
              }}
            >
              {title}
            </div>
            <div style={{ display: "flex", fontFamily: "Archivo", fontWeight: 500, fontSize: 24 }}>{role}</div>
          </div>
        </div>

        <OgStrip left="UX Designer + Front-End Engineer" right="dwest.foo" />
      </div>
    ),
    { ...size, fonts: await loadOgFonts() }
  );
}

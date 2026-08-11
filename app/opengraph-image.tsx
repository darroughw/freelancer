import { ImageResponse } from "next/og";
import { ogColors } from "./og-theme";
import KingfisherMark from "./components/KingfisherMark";

export const alt = "Darrough West · Freelance Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: ogColors.cream,
          color: ogColors.ink,
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", marginRight: 20 }}>
            <KingfisherMark size={56} background={ogColors.ink} foreground={ogColors.cream} />
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
              color: ogColors.red,
              marginBottom: 20,
              fontFamily: "monospace",
            }}
          >
            REC · SIDE A
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 980,
            }}
          >
            Design. Code. Ship.
          </div>
        </div>

        <div style={{ display: "flex", height: 12, width: "100%" }}>
          {[ogColors.red, ogColors.orange, ogColors.mustard, ogColors.teal, ogColors.plum, ogColors.ink].map(
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

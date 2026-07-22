import { ImageResponse } from "next/og";
import { ogColors } from "./og-theme";

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
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: ogColors.ink,
              color: ogColors.cream,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              marginRight: 20,
            }}
          >
            DW
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
            Interfaces for agencies who ship fast.
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

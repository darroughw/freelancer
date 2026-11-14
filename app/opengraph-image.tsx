import { ImageResponse } from "next/og";
import { ogColors } from "./og-theme";
import { loadOgFonts, OgBadge, OgMark, OgName, OgStrip } from "./og-shared";

export const alt = "Darrough West · UX Designer + Front-End Engineer · Open to work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The site header, scaled up to fill a share card: square kingfisher mark,
// extruded red name, the "42 / Open to work" badge, and the orange role strip.
export default async function Image() {
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
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <OgMark size={150} />
            <div style={{ display: "flex", marginLeft: 36 }}>
              <OgName size={118} steps={12} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 56,
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Archivo Black",
                fontSize: 60,
                lineHeight: 1,
                textTransform: "uppercase",
                letterSpacing: -1,
              }}
            >
              Interfaces that ship.
            </div>
            <OgBadge />
          </div>
        </div>

        <OgStrip left="UX Designer + Front-End Engineer" right="dwest.foo" />
      </div>
    ),
    { ...size, fonts: await loadOgFonts() }
  );
}

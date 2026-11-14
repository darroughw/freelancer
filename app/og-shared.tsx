import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ogColors } from "./og-theme";
import KingfisherMark from "./components/KingfisherMark";

// Shared pieces for the Open Graph images (app/opengraph-image.tsx and
// app/work/[slug]/opengraph-image.tsx), so both match the site header.
//
// next/og (satori) only renders fonts it's handed as static TTF/OTF data —
// it can't use the site's Google Fonts stylesheet (woff2) — so the same
// families are vendored in assets/fonts/ and read at build time. Both image
// routes are prerendered, so this runs during `next build`, not per request.

const FONT_DIR = join(process.cwd(), "assets/fonts");

const FONT_FILES = [
  { name: "Kanit", file: "Kanit-Black.ttf", weight: 900 },
  { name: "Archivo Black", file: "ArchivoBlack-Regular.ttf", weight: 400 },
  { name: "Archivo", file: "Archivo-Medium.ttf", weight: 500 },
  { name: "Barlow Condensed", file: "BarlowCondensed-ExtraBold.ttf", weight: 800 },
  { name: "Barlow Condensed", file: "BarlowCondensed-Black.ttf", weight: 900 },
  { name: "JetBrains Mono", file: "JetBrainsMono-Bold.ttf", weight: 700 },
] as const;

export async function loadOgFonts() {
  return Promise.all(
    FONT_FILES.map(async ({ name, file, weight }) => ({
      name,
      data: await readFile(join(FONT_DIR, file)),
      weight,
      style: "normal" as const,
    }))
  );
}

// Stepped hard shadow, down and to the left — the same extrusion as
// extrude-shadow() in app/styles/_header.scss.
export function extrude(steps: number, color: string = ogColors.ink) {
  return Array.from({ length: steps }, (_, i) => `${-(i + 1)}px ${i + 1}px 0 ${color}`).join(", ");
}

/** Red outlined, extruded Kanit name — the site header's lettering. */
export function OgName({ size, steps }: { size: number; steps: number }) {
  return (
    <div
      style={{
        display: "flex",
        fontFamily: "Kanit",
        fontWeight: 900,
        fontSize: size,
        lineHeight: 1,
        color: ogColors.red,
        WebkitTextStroke: `${Math.max(2, Math.round(size / 40))}px ${ogColors.ink}`,
        textShadow: extrude(steps),
        paddingLeft: steps,
      }}
    >
      Darrough West
    </div>
  );
}

/** The header's white pill status badge: big red number + "Open to work". */
export function OgBadge({ scale = 1 }: { scale?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
        border: `${3 * scale}px solid ${ogColors.ink}`,
        borderRadius: 999,
        padding: `${12 * scale}px ${30 * scale}px`,
      }}
    >
      <div
        style={{
          display: "flex",
          fontFamily: "Barlow Condensed",
          fontWeight: 900,
          fontSize: 60 * scale,
          lineHeight: 1,
          color: ogColors.red,
        }}
      >
        42
      </div>
      <div
        style={{
          display: "flex",
          width: 0,
          height: 54 * scale,
          borderLeft: `${3 * scale}px dashed ${ogColors.ink}`,
          margin: `0 ${18 * scale}px`,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontFamily: "Barlow Condensed",
            fontWeight: 800,
            fontSize: 38 * scale,
            lineHeight: 1,
            color: ogColors.ink,
            textTransform: "uppercase",
          }}
        >
          Open to work
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "JetBrains Mono",
            fontWeight: 700,
            fontSize: 15 * scale,
            letterSpacing: 1,
            color: ogColors.ink,
            marginTop: 6 * scale,
          }}
        >
          full-time · projects
        </div>
      </div>
    </div>
  );
}

/** Square ink kingfisher tile, reversed (cream bird), as in the header. */
export function OgMark({ size }: { size: number }) {
  return (
    <div style={{ display: "flex", border: `3px solid ${ogColors.ink}` }}>
      <KingfisherMark shape="square" size={size} background={ogColors.ink} foreground={ogColors.cream} />
    </div>
  );
}

/** The sticky orange strip under the header: role on the left, domain on the right. */
export function OgStrip({ left, right }: { left: string; right: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: ogColors.orange,
        borderTop: `8px solid ${ogColors.ink}`,
        padding: "0 64px",
        height: 84,
        fontFamily: "JetBrains Mono",
        fontWeight: 700,
        fontSize: 24,
        letterSpacing: 3,
        color: ogColors.ink,
        textTransform: "uppercase",
      }}
    >
      <div style={{ display: "flex" }}>{left}</div>
      <div style={{ display: "flex" }}>{right}</div>
    </div>
  );
}

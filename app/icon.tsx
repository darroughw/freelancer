import { ImageResponse } from "next/og";
import { ogColors } from "./og-theme";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: ogColors.cream,
          color: ogColors.ink,
          fontSize: 26,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        DW
      </div>
    ),
    { ...size }
  );
}

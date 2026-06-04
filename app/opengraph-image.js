import { ImageResponse } from "next/og";

// Edge runtime avoids the Node fileURLToPath font-loading bug in @vercel/og.
export const runtime = "edge";

// Auto-applied as both the Open Graph and Twitter preview image (1200x630),
// generated at request time so no static asset file is needed.
export const alt = "True Capital & Advisory — Fast Loan. Trusted Solution.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0F",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 104, fontWeight: 800, letterSpacing: -3 }}>
          <span style={{ color: "#FFFFFF" }}>TRUE</span>
          <span style={{ color: "#4F8BFF" }}>&nbsp;CAPITAL</span>
        </div>
        <div style={{ display: "flex", marginTop: 18, fontSize: 38, color: "#A4A7B8" }}>
          Fast Loan. Trusted Solution.
        </div>
        <div style={{ display: "flex", marginTop: 44, fontSize: 25, color: "#4F8BFF" }}>
          Loans · DSA · Insurance · Advisory — across India
        </div>
      </div>
    ),
    { ...size }
  );
}

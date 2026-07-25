import { ImageResponse } from "next/og";

export const alt = "JezeroX — AI Automation, AI Agents & Full-Stack Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #08070C 0%, #14101E 55%, #1C0E1B 100%)",
          color: "#F3F0F9",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(120deg, #4B4ACF, #C42F86, #FFD34E)",
              }}
            />
            <div style={{ fontSize: "30px", fontWeight: 700, letterSpacing: "0.14em" }}>JEZEROX</div>
          </div>
          <div style={{ fontSize: "20px", color: "#A9A2BD", letterSpacing: "0.14em" }}>
            AI · AUTOMATION · FULL-STACK
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "96px", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.03em" }}>
            Build faster.
          </div>
          <div style={{ display: "flex", fontSize: "96px", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.03em" }}>
            <span>Scale&nbsp;</span>
            <span
              style={{
                background: "linear-gradient(100deg, #8A3AA6, #C42F86, #FFD34E)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              smarter.
            </span>
          </div>
          <div style={{ marginTop: "24px", fontSize: "30px", color: "#C6BFD8", maxWidth: "820px" }}>
            AI automation, AI agents & full-stack products — MVP to enterprise.
          </div>
        </div>

        {/* bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "22px", color: "#A9A2BD" }}>Top Rated on Upwork</div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ fontSize: "22px", color: "#C6BFD8" }}>100% Job Success · 25 projects</div>
            <div
              style={{
                width: "180px",
                height: "6px",
                borderRadius: "9999px",
                background: "linear-gradient(100deg, #4B4ACF, #C42F86, #FFD34E)",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

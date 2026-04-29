import { A } from "./shared.jsx";

export default function PhoneFrame({ src, alt, width = 280, label, frame = "light" }) {
  const ratio = 800 / 368;
  const height = width * ratio;
  const radius = Math.round(width * 0.13);
  const innerRadius = Math.round(width * 0.105);
  const bezel = Math.round(width * 0.025);
  const isDark = frame === "dark";
  const frameStroke = isDark ? "#0B0E14" : A.ink;
  const frameFill = isDark ? "#0B0E14" : A.bg;
  const innerLine = isDark ? "rgba(255,255,255,0.06)" : A.line;

  return (
    <div style={{ width, position: "relative", display: "inline-block" }}>
      <div
        style={{
          width,
          height,
          borderRadius: radius,
          background: frameFill,
          border: `1.4px solid ${frameStroke}`,
          padding: bezel,
          boxShadow: isDark
            ? "0 30px 60px -20px rgba(0,0,0,0.55), 0 12px 24px -16px rgba(0,0,0,0.5)"
            : "0 30px 60px -20px rgba(26,22,18,0.35), 0 12px 24px -16px rgba(26,22,18,0.25)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: innerRadius,
            background: frameFill,
            overflow: "hidden",
            border: `0.5px solid ${innerLine}`,
            position: "relative",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
            }}
          />
        </div>
      </div>
      {label && (
        <div
          className="mono"
          style={{
            position: "absolute",
            bottom: -22,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: 9,
            color: A.ink3,
            letterSpacing: "0.18em",
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}

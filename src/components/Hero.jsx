import { A, btnPrimary, btnGhost } from "./shared.jsx";
import AirspaceMap from "./AirspaceMap.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

export default function Hero({ layout = "split" }) {
  const narrow = useIsNarrow();
  if (layout === "stacked") {
    return (
      <section style={{ padding: "80px 48px 60px", borderBottom: `1px solid ${A.line}` }}>
        <div className="mono" style={{ fontSize: 11, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
          ✱ EST. 2026 · NEW YORK SECTIONAL · 56TH EDITION
        </div>
        <h1
          className="serif"
          style={{
            fontSize: 96,
            fontWeight: 500,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: A.ink,
            margin: "0 0 32px",
            maxWidth: 1100,
          }}
        >
          The workforce<br />for the <em style={{ color: A.mag, fontStyle: "italic" }}>sky</em>.
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
          <p className="serif" style={{ fontSize: 22, lineHeight: 1.45, color: A.ink2, margin: 0, maxWidth: 620 }}>
            400,000+ FAA-certified Part 107 pilots. Zero dominant platform. Avairy is the marketplace and operating system that connects them with the businesses that need drone work, backed by the only FAA-grade airspace infrastructure built into a workforce app.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <button className="sans" style={btnPrimary}>Post a job →</button>
            <button className="sans" style={btnGhost}>Join as a pilot</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1.25fr", borderBottom: `1px solid ${A.line}`, minHeight: narrow ? 0 : 620 }}>
      <div style={{ padding: narrow ? "48px 24px 40px" : "72px 48px 64px", borderRight: narrow ? "none" : `1px solid ${A.line}`, borderBottom: narrow ? `1px solid ${A.line}` : "none", position: "relative" }}>
        <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
          ✱ AVAIRY / SHEET 01 / WORKFORCE FOR THE SKY
        </div>
        <h1
          className="serif"
          style={{
            fontSize: narrow ? 56 : 78,
            fontWeight: 500,
            lineHeight: 0.96,
            letterSpacing: "-0.02em",
            color: A.ink,
            margin: "0 0 24px",
          }}
        >
          Uber for the<br /><em style={{ color: A.mag, fontStyle: "italic" }}>sky</em>.
        </h1>
        <p className="serif" style={{ fontSize: narrow ? 17 : 19, lineHeight: 1.5, color: A.ink2, margin: "0 0 32px", maxWidth: 480 }}>
          The marketplace for 400,000+ FAA Part 107 pilots, built on the LAANC airspace rails so every flight is legal before it takes off.
        </p>
        <div style={{ display: "flex", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
          <a href="#contact" className="sans" style={{ ...btnPrimary, display: "inline-block" }}>Post a job →</a>
          <a href="#contact" className="sans" style={{ ...btnGhost, display: "inline-block" }}>Join as a pilot</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr 1fr", gap: 0, borderTop: `1px solid ${A.line}` }}>
          {[
            ["400,000+", "Part 107 pilots"],
            ["60+", "On the platform"],
            ["LAANC USS", "Pending FAA designation"],
          ].map(([n, l], i, arr) => (
            <div
              key={i}
              style={{
                padding: narrow ? "16px 0" : "20px 0",
                borderRight: !narrow && i < arr.length - 1 ? `1px solid ${A.line}` : "none",
                borderBottom: narrow && i < arr.length - 1 ? `1px solid ${A.line}` : "none",
                paddingRight: !narrow && i < arr.length - 1 ? 16 : 0,
                paddingLeft: !narrow && i > 0 ? 16 : 0,
              }}
            >
              <div className="serif" style={{ fontSize: narrow ? 26 : 30, color: A.ink, lineHeight: 1 }}>{n}</div>
              <div className="mono" style={{ fontSize: 9, color: A.ink3, letterSpacing: "0.14em", marginTop: 8, textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "relative", background: A.bg2, minHeight: narrow ? 320 : 0 }}>
        <AirspaceMap />
        <div className="mono" style={{ position: "absolute", top: 16, left: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
          ✱ LIVE · NYC METRO · 412 PILOTS ONLINE · 47 OPEN JOBS
        </div>
        {!narrow && (
          <div className="mono" style={{ position: "absolute", top: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
            DISPATCH GRID · v0.9
          </div>
        )}
      </div>
    </section>
  );
}

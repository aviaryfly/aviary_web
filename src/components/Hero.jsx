import { A, btnPrimary, btnGhost } from "./shared.jsx";
import AirspaceMap from "./AirspaceMap.jsx";

export default function Hero({ layout = "split" }) {
  if (layout === "stacked") {
    return (
      <section style={{ padding: "80px 48px 60px", borderBottom: `1px solid ${A.line}` }}>
        <div className="mono" style={{ fontSize: 11, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
          ✱ EST. 2026 — NEW YORK SECTIONAL — 56TH EDITION
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
            400,000+ FAA-certified Part 107 pilots. Zero dominant platform. Avairy is the marketplace and operating system that connects them with the businesses that need drone work — backed by the only FAA-grade airspace infrastructure built into a workforce app.
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
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: `1px solid ${A.line}` }}>
      <div style={{ padding: "72px 48px 64px", borderRight: `1px solid ${A.line}`, position: "relative" }}>
        <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
          ✱ AVAIRY / SHEET 01 / WORKFORCE FOR THE SKY
        </div>
        <h1
          className="serif"
          style={{
            fontSize: 78,
            fontWeight: 500,
            lineHeight: 0.96,
            letterSpacing: "-0.02em",
            color: A.ink,
            margin: "0 0 24px",
          }}
        >
          Uber for the<br /><em style={{ color: A.mag, fontStyle: "italic" }}>sky</em>.
        </h1>
        <p className="serif" style={{ fontSize: 19, lineHeight: 1.5, color: A.ink2, margin: "0 0 36px", maxWidth: 480 }}>
          The first marketplace for the 400,000+ FAA Part 107 pilots in the U.S. — built on the LAANC airspace authorization rails, so every flight is legal before it takes off.
        </p>
        <div style={{ display: "flex", gap: 10, marginBottom: 56, flexWrap: "wrap" }}>
          <a href="#contact" className="sans" style={{ ...btnPrimary, display: "inline-block" }}>Post a job →</a>
          <a href="#contact" className="sans" style={{ ...btnGhost, display: "inline-block" }}>Join as a pilot</a>
          <a href="#products" className="sans" style={{ ...btnGhost, display: "inline-block" }}>iOS app</a>
          <a href="#products" className="sans" style={{ ...btnGhost, display: "inline-block" }}>Academy</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 0, borderTop: `1px solid ${A.line}` }}>
          {[
            ["400,000+", "Part 107 pilots"],
            ["60+", "Pilots already on platform"],
            ["LAANC", "USS — pending"],
            ["Hours", "not days"],
          ].map(([n, l], i, arr) => (
            <div
              key={i}
              style={{
                padding: "20px 0",
                borderRight: i < arr.length - 1 ? `1px solid ${A.line}` : "none",
                paddingRight: i < arr.length - 1 ? 12 : 0,
                paddingLeft: i > 0 ? 12 : 0,
              }}
            >
              <div className="serif" style={{ fontSize: 28, color: A.ink, lineHeight: 1 }}>{n}</div>
              <div className="mono" style={{ fontSize: 9, color: A.ink3, letterSpacing: "0.14em", marginTop: 8, textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "relative", background: A.bg2 }}>
        <AirspaceMap />
        <div className="mono" style={{ position: "absolute", top: 16, left: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
          ✱ LIVE — KJFK MODE C VEIL — 5 JOBS WITHIN 30 NM
        </div>
        <div className="mono" style={{ position: "absolute", bottom: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
          1:250,000 — VFR
        </div>
      </div>
    </section>
  );
}

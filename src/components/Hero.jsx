import { A, btnPrimary, btnGhost } from "./shared.jsx";
import AirspaceMap from "./AirspaceMap.jsx";
import PhoneFrame from "./PhoneFrame.jsx";
import { useIsNarrow, useIsTablet } from "../hooks/useMediaQuery.js";

export default function Hero({ layout = "split" }) {
  const narrow = useIsNarrow();
  const compact = useIsTablet();
  const phoneGap = narrow ? 8 : compact ? 12 : 24;
  const mapPhoneWidth = narrow ? 150 : compact ? 160 : 220;
  const detailPhoneWidth = narrow ? 178 : compact ? 195 : 260;
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
            Aviary connects businesses with FAA-certified Part 107 pilots and gives each job a dispatch workflow that starts with airspace, equipment, availability, and delivery requirements.
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
          ✱ AVIARY / SHEET 01 / WORKFORCE FOR THE SKY
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
          The workforce<br />for the <em style={{ color: A.mag, fontStyle: "italic" }}>sky</em>.
        </h1>
        <p className="serif" style={{ fontSize: narrow ? 17 : 19, lineHeight: 1.5, color: A.ink2, margin: "0 0 32px", maxWidth: 480 }}>
          A marketplace for 492,000+ FAA remote pilots, with LAANC-aware dispatch built into the first job request.
        </p>
        <div style={{ display: "flex", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
          <a href="#contact" className="sans" style={{ ...btnPrimary, display: "inline-block" }}>Post a job →</a>
          <a href="#contact" className="sans" style={{ ...btnGhost, display: "inline-block" }}>Join as a pilot</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr 1fr", gap: 0, borderTop: `1px solid ${A.line}` }}>
          {[
            ["492,000+", "FAA remote pilots, U.S."],
            ["60 / 100", "Charter seats filled"],
            ["LAANC USS", "Pending FAA designation"],
          ].map(([n, l], i, arr) => (
            <div
              key={i}
              style={{
                paddingTop: narrow ? 16 : 20,
                paddingBottom: narrow ? 16 : 20,
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
      <div style={{ position: "relative", background: A.bg2, minHeight: narrow ? 420 : 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.55 }}>
          <AirspaceMap />
        </div>
        <div className="mono" style={{ position: "absolute", top: 16, left: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", zIndex: 3 }}>
          BERKELEY · 37.87°N 122.27°W · 8 OPEN / 10 NM
        </div>
        {!narrow && (
          <div className="mono" style={{ position: "absolute", top: 16, right: 16, fontSize: 9, color: A.mag, letterSpacing: "0.14em", zIndex: 3 }}>
            ● iOS v0.6 · SIMULATOR CAPTURE
          </div>
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            padding: narrow ? "48px 8px" : compact ? "48px 28px" : "48px",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              gap: phoneGap,
              alignItems: "center",
              transform: narrow ? "scale(0.9)" : "none",
              transformOrigin: "center",
            }}
          >
            <div
              style={{
                transform: narrow ? "translateY(14px) rotate(-2deg)" : "translateY(20px) rotate(-2.4deg)",
                filter: "saturate(0.95)",
              }}
            >
              <PhoneFrame
                src="/screens/pilot-map.jpg"
                alt="Aviary nearby gigs map"
                width={mapPhoneWidth}
              />
            </div>
            <div
              style={{
                transform: narrow ? "translateY(-12px) rotate(1.2deg)" : "translateY(-18px) rotate(1.8deg)",
              }}
            >
              <PhoneFrame
                src="/screens/pilot-gig-detail.jpg"
                alt="Aviary gig detail, real MapKit"
                width={detailPhoneWidth}
              />
            </div>
          </div>
        </div>
        {!narrow && (
          <div className="mono" style={{ position: "absolute", bottom: 16, left: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", zIndex: 3 }}>
            FIG. 01 · DISPATCH + GIG DETAIL
          </div>
        )}
        {!narrow && (
          <div className="mono" style={{ position: "absolute", bottom: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", zIndex: 3 }}>
            ALT 0 AGL · CLASS G · UTC −08:00
          </div>
        )}
      </div>
    </section>
  );
}

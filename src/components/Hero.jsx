import { useEffect, useState } from "react";
import { A, btnPrimary, btnGhost } from "./shared.jsx";
import AirspaceMap from "./AirspaceMap.jsx";
import PhoneFrame from "./PhoneFrame.jsx";
import EarlyAccessModal from "./EarlyAccessModal.jsx";
import { useIsNarrow, useIsTablet } from "../hooks/useMediaQuery.js";

// Word-level fade for "The workforce / for the sky." with magenta italic on "sky".
function HeroHeadline({ size }) {
  const lines = [
    [{ text: "The", d: 0 }, { text: "workforce", d: 90 }],
    [{ text: "for", d: 220 }, { text: "the", d: 290 }, { text: "sky.", d: 380, accent: true }],
  ];
  return (
    <h1
      className="serif"
      style={{
        fontSize: size,
        fontWeight: 500,
        lineHeight: 0.96,
        letterSpacing: "-0.02em",
        color: A.ink,
        margin: "0 0 24px",
      }}
    >
      {lines.map((words, lineIdx) => (
        <span key={lineIdx} style={{ display: "block" }}>
          {words.map((t, i) => (
            <span
              key={i}
              className="hero-headline-word"
              style={{
                "--d": `${260 + t.d}ms`,
                color: t.accent ? A.mag : A.ink,
                fontStyle: t.accent ? "italic" : "normal",
                marginRight: i < words.length - 1 ? "0.28em" : 0,
              }}
            >
              {t.text}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export default function Hero({ layout = "split" }) {
  const narrow = useIsNarrow();
  const compact = useIsTablet();
  const [entered, setEntered] = useState(false);
  const [modalRole, setModalRole] = useState(null);

  useEffect(() => {
    const t = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const phoneGap = narrow ? 8 : compact ? 12 : 24;
  const mapPhoneWidth = narrow ? 150 : compact ? 160 : 220;
  const detailPhoneWidth = narrow ? 178 : compact ? 195 : 260;

  const heroClass = entered ? "hero-enter" : "";

  if (layout === "stacked") {
    return (
      <section className={heroClass} style={{ padding: "80px 48px 60px", borderBottom: `1px solid ${A.line}` }}>
        <div className="mono hero-step" style={{ "--d": "60ms", fontSize: 11, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
          ✱ EST. 2026 · NEW YORK SECTIONAL · 56TH EDITION
        </div>
        <HeroHeadline size={96} />
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
          <p className="serif hero-step" style={{ "--d": "780ms", fontSize: 22, lineHeight: 1.45, color: A.ink2, margin: 0, maxWidth: 620 }}>
            Aviary connects businesses with FAA-certified Part 107 pilots and gives each job a dispatch workflow that starts with airspace, equipment, availability, and delivery requirements.
          </p>
          <div className="hero-step" style={{ "--d": "920ms", display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <button type="button" className="sans" style={btnPrimary} onClick={() => setModalRole("CUSTOMER")}>Need a pilot →</button>
            <button type="button" className="sans" style={btnGhost} onClick={() => setModalRole("PILOT")}>Join as a pilot</button>
          </div>
        </div>
        <EarlyAccessModal role={modalRole} onClose={() => setModalRole(null)} />
      </section>
    );
  }

  return (
    <section
      className={heroClass}
      style={{
        display: "grid",
        gridTemplateColumns: narrow ? "1fr" : "1fr 1.25fr",
        borderBottom: `1px solid ${A.line}`,
        minHeight: narrow ? 0 : 620,
      }}
    >
      <div
        style={{
          padding: narrow ? "48px 24px 40px" : "72px 48px 64px",
          borderRight: narrow ? "none" : `1px solid ${A.line}`,
          borderBottom: narrow ? `1px solid ${A.line}` : "none",
          position: "relative",
        }}
      >
        <div
          className="mono hero-step"
          style={{ "--d": "40ms", fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}
        >
          ✱ AVIARY / SHEET 01 / WORKFORCE FOR THE SKY
        </div>

        <HeroHeadline size={narrow ? 56 : 78} />

        <p
          className="serif hero-step"
          style={{
            "--d": "820ms",
            fontSize: narrow ? 17 : 19,
            lineHeight: 1.5,
            color: A.ink2,
            margin: "0 0 32px",
            maxWidth: 480,
          }}
        >
          The workforce platform for the U.S. commercial drone industry. A marketplace for the 492,000+ FAA Part 107 pilots, with airspace authorization built into the first job request.
        </p>

        <div className="hero-step" style={{ "--d": "980ms", display: "flex", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
          <button type="button" className="sans" style={{ ...btnPrimary, display: "inline-block" }} onClick={() => setModalRole("CUSTOMER")}>Need a pilot →</button>
          <button type="button" className="sans" style={{ ...btnGhost, display: "inline-block" }} onClick={() => setModalRole("PILOT")}>Join as a pilot</button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: narrow ? "1fr" : "1fr 1fr 1fr",
            gap: 0,
            borderTop: `1px solid ${A.line}`,
          }}
        >
          {[
            ["492,000+", "FAA remote pilots, U.S."],
            ["iOS v0.6", "Current build · in test"],
            ["LAANC USS", "Designation in progress"],
          ].map(([n, l], i, arr) => (
            <div
              key={i}
              className="hero-step hero-stat-cell"
              style={{
                "--d": `${1100 + i * 110}ms`,
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
        <div className="hero-map" style={{ position: "absolute", inset: 0 }}>
          <AirspaceMap />
        </div>

        <div
          className="mono hero-step"
          style={{ "--d": "640ms", position: "absolute", top: 16, left: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", zIndex: 3 }}
        >
          BERKELEY · 37.87°N 122.27°W · 8 OPEN / 10 NM
        </div>
        {!narrow && (
          <div
            className="mono hero-step"
            style={{ "--d": "720ms", position: "absolute", top: 16, right: 16, fontSize: 9, color: A.mag, letterSpacing: "0.14em", zIndex: 3 }}
          >
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
              className="hero-phone"
              style={{
                "--d": "520ms",
                "--phone-rest": narrow
                  ? "translateY(14px) rotate(-2deg) scale(1)"
                  : "translateY(20px) rotate(-2.4deg) scale(1)",
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
              className="hero-phone"
              style={{
                "--d": "700ms",
                "--phone-rest": narrow
                  ? "translateY(-12px) rotate(1.2deg) scale(1)"
                  : "translateY(-18px) rotate(1.8deg) scale(1)",
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
          <div
            className="mono hero-step"
            style={{ "--d": "1000ms", position: "absolute", bottom: 16, left: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", zIndex: 3 }}
          >
            FIG. 01 · DISPATCH + GIG DETAIL
          </div>
        )}
        {!narrow && (
          <div
            className="mono hero-step"
            style={{ "--d": "1080ms", position: "absolute", bottom: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", zIndex: 3 }}
          >
            ALT 0 AGL · CLASS G · UTC −08:00
          </div>
        )}
      </div>
      <EarlyAccessModal role={modalRole} onClose={() => setModalRole(null)} />
    </section>
  );
}

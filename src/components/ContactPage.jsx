import { A, Link } from "./shared.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Reveal from "./Reveal.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const FOUNDER_EMAIL = "xinyu@aviaryfly.com";
const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/xinyufang/";

function LinkedInIcon({ size = 18, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color || "currentColor"} aria-hidden="true" style={{ display: "block" }}>
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.4 1 3.4 3.66Z" />
    </svg>
  );
}

function Card() {
  return (
    <svg viewBox="0 0 360 220" style={{ width: "100%", height: "100%", maxHeight: 260, display: "block" }} aria-hidden="true">
      <rect x="20" y="20" width="320" height="180" fill={A.bg} stroke={A.ink} strokeWidth="1.4" transform="rotate(-1.2 180 110)" />
      <g transform="rotate(-1.2 180 110)">
        <rect x="20" y="20" width="320" height="40" fill={A.ink} />
        <text x="36" y="46" fontFamily="Times New Roman, serif" fontSize="13" fontWeight="600" fill={A.bg} letterSpacing="0.06em">AVIARY · CORRESPONDENCE</text>
        <text x="324" y="46" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#a89e8a" letterSpacing="0.18em">FORM 04-C</text>

        <text x="36" y="86" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.18em">ADDRESSED TO</text>
        <text x="36" y="108" fontFamily="Times New Roman, serif" fontSize="18" fontWeight="500" fill={A.ink}>Xinyu Fang</text>
        <text x="36" y="124" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={A.ink2} letterSpacing="0.14em">FOUNDER · AVIARY</text>

        <line x1="36" y1="142" x2="324" y2="142" stroke={A.line} strokeWidth="0.5" />

        <text x="36" y="162" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.18em">CHANNEL</text>
        <text x="324" y="162" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={A.mag} letterSpacing="0.10em">{FOUNDER_EMAIL}</text>

        <text x="36" y="184" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.18em">REPLY TIME</text>
        <text x="324" y="184" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={A.ink2} letterSpacing="0.14em">≤ 48 HRS</text>
      </g>
    </svg>
  );
}

export default function ContactPage() {
  const narrow = useIsNarrow();
  const subject = encodeURIComponent("Aviary — inquiry");
  const mailto = `mailto:${FOUNDER_EMAIL}?subject=${subject}`;

  return (
    <div style={{ background: A.bg, color: A.ink, minHeight: "100%", fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Nav name="AVIARY" />

      <div className="mono" style={{ padding: narrow ? "14px 24px" : "14px 48px", fontSize: 10, color: A.ink3, letterSpacing: "0.18em", borderBottom: `1px solid ${A.line2}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>
          <Link href="/" style={{ color: A.ink3 }}>← INDEX</Link>
          <span style={{ margin: "0 12px", color: A.line }}>/</span>
          <span style={{ color: A.ink2 }}>SHEET 04 · CONTACT</span>
        </span>
        <span style={{ color: A.mag }}>● CHANNEL OPEN</span>
      </div>

      <section style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.1fr 1fr", borderBottom: `1px solid ${A.line}`, minHeight: narrow ? 0 : 640 }}>
        <div style={{ padding: narrow ? "48px 24px 56px" : "92px 48px 72px", borderRight: narrow ? "none" : `1px solid ${A.line}`, borderBottom: narrow ? `1px solid ${A.line}` : "none", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
              ✱ AVIARY / SHEET 04 / CONTACT
            </div>
            <h1 className="serif" style={{ fontSize: narrow ? 56 : 88, fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.02em", color: A.ink, margin: "0 0 26px" }}>
              Get in <em style={{ color: A.mag, fontStyle: "italic" }}>touch</em>.
            </h1>
            <p className="serif" style={{ fontSize: narrow ? 17 : 19, lineHeight: 1.55, color: A.ink2, margin: "0 0 28px", maxWidth: 540 }}>
              For pilots, customers, investors, press — or anyone curious about Aviary. Send a note directly to the founder. Every message is read and answered personally, usually within forty-eight hours.
            </p>

            <div style={{ marginTop: 8, marginBottom: 40 }}>
              <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 12 }}>
                ✱ DIRECT LINE
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <a
                  href={mailto}
                  className="serif"
                  style={{
                    fontSize: narrow ? 22 : 30,
                    color: A.ink,
                    textDecoration: "underline",
                    textDecorationColor: A.mag,
                    textUnderlineOffset: 6,
                    textDecorationThickness: 2,
                    fontStyle: "italic",
                  }}
                >
                  {FOUNDER_EMAIL}
                </a>
                <a
                  href={FOUNDER_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn — Xinyu Fang"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 38,
                    height: 38,
                    border: `1px solid ${A.ink}`,
                    color: A.ink,
                    background: "transparent",
                    textDecoration: "none",
                  }}
                >
                  <LinkedInIcon size={18} color={A.ink} />
                </a>
              </div>
              <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.14em", marginTop: 10 }}>
                XINYU FANG · FOUNDER
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={mailto}
                className="sans"
                style={{ fontSize: 13, background: A.ink, color: A.bg, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500, textDecoration: "none" }}
              >
                Compose a message →
              </a>
              <Link
                href="/"
                className="sans"
                style={{ fontSize: 13, background: "transparent", color: A.ink, border: `1px solid ${A.ink}`, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500 }}
              >
                Back to index
              </Link>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr 1fr" : "1fr 1fr 1fr", borderTop: `1px solid ${A.line}`, marginTop: 56 }}>
            {[
              ["Pilots", "Apply or ask"],
              ["Customers", "Book a flight"],
              ["Investors", "Request a deck"],
            ].map(([n, l], i, arr) => (
              <div
                key={i}
                style={{
                  paddingTop: narrow ? 16 : 20,
                  paddingRight: narrow ? 0 : 16,
                  paddingBottom: narrow ? 16 : 4,
                  borderRight: !narrow && i < arr.length - 1 ? `1px solid ${A.line}` : "none",
                  borderBottom: narrow && i < arr.length - 1 ? `1px solid ${A.line}` : "none",
                  paddingLeft: !narrow && i > 0 ? 16 : 0,
                }}
              >
                <div className="serif" style={{ fontSize: narrow ? 22 : 26, color: A.ink, lineHeight: 1 }}>{n}</div>
                <div className="mono" style={{ fontSize: 9, color: A.ink3, letterSpacing: "0.14em", marginTop: 8, textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", background: A.bg2, padding: narrow ? "32px 24px 56px" : "60px 48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="mono" style={{ position: "absolute", top: 16, left: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
            ✱ CORRESPONDENCE · FORM 04-C
          </div>
          <div className="mono" style={{ position: "absolute", top: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
            CHANNEL OPEN
          </div>
          <a
            href={mailto}
            aria-label={`Email ${FOUNDER_EMAIL}`}
            style={{ width: "100%", maxWidth: 460, display: "block", textDecoration: "none", color: "inherit" }}
          >
            <Card />
          </a>
          <div className="mono" style={{ position: "absolute", bottom: 16, left: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", display: "flex", justifyContent: "space-between" }}>
            <span>NEW YORK · N40°44.5′ W74°00.2′</span>
            <span>FIG. 04-C</span>
          </div>
        </div>
      </section>

      <Reveal><Footer sectionNumber="02" /></Reveal>
    </div>
  );
}

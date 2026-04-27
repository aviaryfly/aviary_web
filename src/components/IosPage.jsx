import { A, Link } from "./shared.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Reveal from "./Reveal.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const manifest = [
  ["Live job feed with airspace classification", "SHIPPED"],
  ["Dispatch chat (pilot · customer · ops)", "SHIPPED"],
  ["One-tap LAANC submission", "IN BUILD"],
  ["In-flight check-ins via LiveKit", "IN BUILD"],
  ["Pre-flight NOTAM + weather brief", "DRAFT"],
  ["Equipment + certification vault", "DRAFT"],
  ["Same-day payouts (Stripe Treasury)", "DRAFT"],
  ["Earnings & flight-hour dashboard", "DRAFT"],
];

const stColor = (s) => (s === "SHIPPED" ? A.ink : s === "IN BUILD" ? A.mag : A.ink3);

function Phone() {
  return (
    <svg viewBox="0 0 280 580" style={{ width: "100%", height: "100%", maxHeight: 620, display: "block" }} aria-hidden="true">
      <defs>
        <pattern id="ph-grid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <path d="M14 0H0V14" fill="none" stroke={A.line} strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect x="14" y="14" width="252" height="552" rx="34" fill={A.bg} stroke={A.ink} strokeWidth="1.4" />
      <rect x="22" y="22" width="236" height="536" rx="28" fill={A.bg2} stroke={A.line} strokeWidth="0.5" />
      <rect x="106" y="22" width="68" height="22" rx="11" fill={A.ink} />

      <text x="36" y="68" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={A.ink2} letterSpacing="0.1em">9:41</text>
      <g stroke={A.ink2} strokeWidth="1" fill="none">
        <rect x="218" y="60" width="22" height="11" rx="2" />
        <rect x="221" y="63" width="14" height="5" fill={A.ink2} stroke="none" />
        <line x1="208" y1="64" x2="212" y2="64" />
        <line x1="206" y1="68" x2="214" y2="68" />
      </g>

      <text x="36" y="100" fontFamily="Times New Roman, serif" fontSize="14" fill={A.ink} fontWeight="600" letterSpacing="0.04em">AVIARY</text>
      <text x="76" y="100" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.18em">DISPATCH · v0.6</text>
      <line x1="36" y1="112" x2="244" y2="112" stroke={A.line} strokeWidth="1" />

      <text x="36" y="134" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.mag} letterSpacing="0.18em">✱ NEAREST · 0.9 NM</text>

      <g>
        <rect x="36" y="146" width="208" height="92" fill={A.bg} stroke={A.ink} strokeWidth="1" />
        <text x="44" y="166" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={A.ink2} letterSpacing="0.14em">AVR-7194 · BROOKLYN</text>
        <text x="44" y="190" fontFamily="Times New Roman, serif" fontSize="14" fontStyle="italic" fill={A.ink}>Listing aerials, 4-unit</text>
        <text x="44" y="210" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={A.ink3} letterSpacing="0.12em">CLASS G · 38 MIN · $480</text>
        <line x1="44" y1="220" x2="236" y2="220" stroke={A.line} strokeWidth="0.5" />
        <text x="44" y="232" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.14em">DUE 14:30 · WEATHER OK</text>
      </g>

      <g>
        <rect x="36" y="252" width="208" height="160" fill="url(#ph-grid)" />
        <rect x="36" y="252" width="208" height="160" fill="none" stroke={A.line} strokeWidth="0.8" />
        <circle cx="140" cy="332" r="44" fill="none" stroke={A.ink2} strokeWidth="0.8" strokeDasharray="2,3" />
        <circle cx="140" cy="332" r="3.5" fill={A.mag} />
        <circle cx="92" cy="298" r="2" fill={A.ink2} />
        <circle cx="186" cy="356" r="2" fill={A.ink2} />
        <circle cx="172" cy="288" r="2" fill={A.ink2} />
        <text x="44" y="268" fontFamily="JetBrains Mono, monospace" fontSize="7" fill={A.ink3} letterSpacing="0.16em">SECTIONAL · NYC METRO</text>
        <text x="184" y="404" fontFamily="JetBrains Mono, monospace" fontSize="7" fill={A.ink3} letterSpacing="0.14em">N40.66 W74.00</text>
      </g>

      <g>
        <line x1="36" y1="430" x2="244" y2="430" stroke={A.line} strokeWidth="0.5" />
        <text x="36" y="446" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.14em">LAANC</text>
        <text x="244" y="446" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink} letterSpacing="0.14em">AUTO-CLEARED</text>
        <line x1="36" y1="456" x2="244" y2="456" stroke={A.line} strokeWidth="0.5" />
        <text x="36" y="472" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.14em">PAYOUT</text>
        <text x="244" y="472" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink} letterSpacing="0.14em">SAME DAY</text>
        <line x1="36" y1="482" x2="244" y2="482" stroke={A.line} strokeWidth="0.5" />
      </g>

      <rect x="36" y="500" width="208" height="44" fill={A.mag} />
      <text x="140" y="528" textAnchor="middle" fontFamily="Helvetica, sans-serif" fontSize="13" fill={A.bg} letterSpacing="0.18em">ACCEPT FLIGHT →</text>

      <line x1="118" y1="558" x2="162" y2="558" stroke={A.ink2} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function IosPage() {
  const narrow = useIsNarrow();
  return (
    <div style={{ background: A.bg, color: A.ink, minHeight: "100%", fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Nav name="AVIARY" />

      <div className="mono" style={{ padding: narrow ? "14px 24px" : "14px 48px", fontSize: 10, color: A.ink3, letterSpacing: "0.18em", borderBottom: `1px solid ${A.line2}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>
          <Link href="/" style={{ color: A.ink3 }}>← INDEX</Link>
          <span style={{ margin: "0 12px", color: A.line }}>/</span>
          <span style={{ color: A.ink2 }}>SHEET 02 · iOS DISPATCH</span>
        </span>
        <span style={{ color: A.mag }}>● BUILD v0.6 · ACTIVE</span>
      </div>

      <section style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1.05fr", borderBottom: `1px solid ${A.line}`, minHeight: narrow ? 0 : 680 }}>
        <div style={{ padding: narrow ? "48px 24px 56px" : "88px 48px 72px", borderRight: narrow ? "none" : `1px solid ${A.line}`, borderBottom: narrow ? `1px solid ${A.line}` : "none", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
              ✱ AVIARY / SHEET 02 / iOS · DISPATCH
            </div>
            <h1 className="serif" style={{ fontSize: narrow ? 56 : 88, fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.02em", color: A.ink, margin: "0 0 26px" }}>
              The <em style={{ color: A.mag, fontStyle: "italic" }}>pilot's</em><br />cockpit.
            </h1>
            <p className="serif" style={{ fontSize: narrow ? 17 : 19, lineHeight: 1.5, color: A.ink2, margin: "0 0 28px", maxWidth: 480 }}>
              The iOS app for the 400,000+ FAA Part 107 pilots who fly America's airspace. Live job feed, one-tap LAANC clearance, in-flight check-ins, same-day payouts. Built on the rails, not on top of them.
            </p>
            <div style={{ display: "flex", gap: 10, marginBottom: 56, flexWrap: "wrap" }}>
              <Link href="/#contact" className="sans" style={{ fontSize: 13, background: A.ink, color: A.bg, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500 }}>
                Join TestFlight →
              </Link>
              <Link href="/#contact" className="sans" style={{ fontSize: 13, background: "transparent", color: A.ink, border: `1px solid ${A.ink}`, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500 }}>
                Become a charter pilot
              </Link>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr 1fr", borderTop: `1px solid ${A.line}` }}>
            {[
              ["Q3 2026", "Public TestFlight"],
              ["iOS 17+", "Min runtime"],
              ["v0.6", "In active build"],
            ].map(([n, l], i, arr) => (
              <div
                key={i}
                style={{
                  padding: narrow ? "16px 0" : "20px 16px 4px 0",
                  borderRight: !narrow && i < arr.length - 1 ? `1px solid ${A.line}` : "none",
                  borderBottom: narrow && i < arr.length - 1 ? `1px solid ${A.line}` : "none",
                  paddingLeft: !narrow && i > 0 ? 16 : 0,
                }}
              >
                <div className="serif" style={{ fontSize: narrow ? 26 : 30, color: A.ink, lineHeight: 1 }}>{n}</div>
                <div className="mono" style={{ fontSize: 9, color: A.ink3, letterSpacing: "0.14em", marginTop: 8, textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", background: A.bg2, padding: narrow ? "32px 24px 48px" : "60px 48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="mono" style={{ position: "absolute", top: 16, left: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
            ✱ DISPATCH SCREEN · v0.6
          </div>
          <div className="mono" style={{ position: "absolute", top: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
            FRAME 14 / 47
          </div>
          <div style={{ width: "100%", maxWidth: 320 }}>
            <Phone />
          </div>
          <div className="mono" style={{ position: "absolute", bottom: 16, left: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", display: "flex", justifyContent: "space-between" }}>
            <span>RENDERED FROM PRODUCTION BUILD</span>
            <span>FIG. 02-A</span>
          </div>
        </div>
      </section>

      <Reveal>
        <section style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 96px", borderBottom: `1px solid ${A.line}` }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
            ✱ §02 · BUILD MANIFEST
          </div>
          <h2 className="serif" style={{ fontSize: narrow ? 40 : 56, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 900 }}>
            What's shipping, what's in the hangar.
          </h2>
          <p className="serif" style={{ fontSize: narrow ? 16 : 19, lineHeight: 1.5, color: A.ink2, margin: "20px 0 0", maxWidth: 720 }}>
            Read live from the build log. Updated every Friday.
          </p>

          <div className="mono" style={{ marginTop: narrow ? 40 : 56, fontSize: 9, color: A.ink3, letterSpacing: "0.16em", display: "grid", gridTemplateColumns: narrow ? "12px 1fr 96px" : "32px 1fr 128px", padding: "12px 0", borderTop: `1px solid ${A.line}`, borderBottom: `1px solid ${A.line2}` }}>
            <span>#</span>
            <span>FEATURE</span>
            <span style={{ textAlign: "right" }}>STATUS</span>
          </div>

          {manifest.map(([f, s], i) => (
            <div key={i} className="mono" style={{ display: "grid", gridTemplateColumns: narrow ? "12px 1fr 96px" : "32px 1fr 128px", padding: narrow ? "16px 0" : "20px 0", fontSize: 13, color: A.ink, borderBottom: `1px solid ${A.line2}`, alignItems: "baseline" }}>
              <span style={{ color: A.ink3, fontSize: 10, letterSpacing: "0.14em" }}>{String(i + 1).padStart(2, "0")}</span>
              <span className="serif" style={{ fontSize: narrow ? 17 : 20, fontStyle: "italic", color: A.ink, paddingRight: 24 }}>{f}</span>
              <span style={{ textAlign: "right", color: stColor(s), letterSpacing: "0.16em", fontSize: 10 }}>
                {s === "IN BUILD" && <span style={{ marginRight: 6 }}>●</span>}
                {s}
              </span>
            </div>
          ))}

          <div className="mono" style={{ marginTop: 28, fontSize: 10, color: A.ink3, letterSpacing: "0.16em", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span>
              {(() => {
                const counts = manifest.reduce((a, [, s]) => ({ ...a, [s]: (a[s] || 0) + 1 }), {});
                return `${counts.SHIPPED || 0} SHIPPED · ${counts["IN BUILD"] || 0} IN BUILD · ${counts.DRAFT || 0} DRAFT`;
              })()}
            </span>
            <span>NEXT CUT · 2026.05.30</span>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ padding: narrow ? "64px 24px" : "96px 48px", borderBottom: `1px solid ${A.line}`, background: A.bg2 }}>
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.2fr 1fr", gap: narrow ? 32 : 64, alignItems: "end" }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: A.mag, letterSpacing: "0.16em", marginBottom: 18 }}>
                ✱ §03 · CHARTER PILOTS · 60 / 100 SEATS
              </div>
              <h3 className="serif" style={{ fontSize: narrow ? 32 : 44, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 640 }}>
                The first hundred Part 107 pilots on Aviary fly the rest of the network in.
              </h3>
              <p className="serif" style={{ fontSize: narrow ? 16 : 18, color: A.ink2, lineHeight: 1.55, margin: "18px 0 0", maxWidth: 540 }}>
                Charter pilots get TestFlight access, founder-direct support, a 0% take rate for the first six months, and the right to shape the dispatch surface before the rest of the workforce sees it.
              </p>
            </div>
            <div className="mono" style={{ borderTop: `1px solid ${A.line}` }}>
              {[
                ["TAKE RATE", "0% / 6 MO"],
                ["BUILD ACCESS", "TESTFLIGHT"],
                ["SUPPORT", "FOUNDER-DIRECT"],
                ["SEATS LEFT", "40"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: `1px solid ${A.line}`, fontSize: 11, letterSpacing: "0.14em" }}>
                  <span style={{ color: A.ink3 }}>{k}</span>
                  <span style={{ color: A.ink }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal><Footer /></Reveal>
    </div>
  );
}

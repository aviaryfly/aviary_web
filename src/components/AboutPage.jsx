import { A, Link } from "./shared.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Reveal, { Stagger } from "./Reveal.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const FOUNDER_EMAIL = "xinyu@aviaryfly.com";
const ratings = ["PhD · Cornell", "Part 107", "PPL · in training", "FAA Part 108 commenter"];

function EnrouteChart() {
  const wpts = [
    { x: 50, y: 408, n: "01", t: "CORNELL", sub: "PHD · UAS CTRL" },
    { x: 102, y: 340, n: "02", t: "PART 107", sub: "CERTIFIED" },
    { x: 156, y: 272, n: "03", t: "SWIM/SCDS", sub: "NOTAM PIPELINE" },
    { x: 210, y: 204, n: "04", t: "LAANC USS", sub: "IN PROGRESS" },
  ];
  const cur = { x: 272, y: 132 };
  return (
    <svg viewBox="0 0 360 540" style={{ width: "100%", height: "100%", maxHeight: 540, display: "block" }} aria-hidden="true">
      <defs>
        <pattern id="ap-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="0" cy="0" r="0.5" fill={A.line2} />
        </pattern>
      </defs>

      <rect x="20" y="20" width="320" height="48" fill={A.ink} />
      <text x="36" y="42" fontFamily="Times New Roman, serif" fontSize="15" fontWeight="600" fill={A.bg} letterSpacing="0.06em">AVIARY · ENROUTE</text>
      <text x="36" y="60" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#a89e8a" letterSpacing="0.18em">FOUNDER ROUTE · LIVE</text>
      <text x="324" y="42" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#a89e8a" letterSpacing="0.18em">CHART 05-A</text>
      <text x="324" y="60" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#a89e8a" letterSpacing="0.18em">EFFECTIVE 2026</text>

      <rect x="20" y="68" width="320" height="392" fill={A.bg} stroke={A.ink} strokeWidth="1" />
      <rect x="20" y="68" width="320" height="392" fill="url(#ap-grid)" />

      <text x="36" y="88" fontFamily="JetBrains Mono, monospace" fontSize="7" fill={A.ink3} letterSpacing="0.20em">◇ WAYPOINT     ◆ CURRENT POSITION</text>

      <g transform="translate(310 432)">
        <circle r="14" fill={A.bg} stroke={A.ink} strokeWidth="0.5" />
        <line x1="0" y1="-14" x2="0" y2="14" stroke={A.ink2} strokeWidth="0.4" />
        <line x1="-14" y1="0" x2="14" y2="0" stroke={A.ink2} strokeWidth="0.4" />
        <polygon points="0,-13 -2.5,-7 2.5,-7" fill={A.ink} />
        <text x="0" y="-17" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="6" fill={A.ink} letterSpacing="0.18em">N</text>
      </g>

      <path
        d={`M ${wpts[0].x} ${wpts[0].y} L ${wpts[1].x} ${wpts[1].y} L ${wpts[2].x} ${wpts[2].y} L ${wpts[3].x} ${wpts[3].y} L ${cur.x} ${cur.y}`}
        fill="none"
        stroke={A.mag}
        strokeWidth="1.4"
        strokeDasharray="5 3"
      />

      {wpts.map((w) => (
        <g key={w.n}>
          <polygon points={`${w.x},${w.y - 5.5} ${w.x - 4.5},${w.y} ${w.x},${w.y + 5.5} ${w.x + 4.5},${w.y}`} fill={A.bg} stroke={A.ink} strokeWidth="1.1" />
          <text x={w.x + 11} y={w.y - 3} fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink} letterSpacing="0.12em" fontWeight="600">WPT {w.n} · {w.t}</text>
          <text x={w.x + 11} y={w.y + 8} fontFamily="JetBrains Mono, monospace" fontSize="7" fill={A.ink3} letterSpacing="0.14em">{w.sub}</text>
        </g>
      ))}

      <g>
        <circle cx={cur.x} cy={cur.y} r="22" fill="none" stroke={A.mag} strokeWidth="0.4" opacity="0.25" />
        <circle cx={cur.x} cy={cur.y} r="14" fill="none" stroke={A.mag} strokeWidth="0.7" opacity="0.5" />
        <polygon points={`${cur.x},${cur.y - 7} ${cur.x - 7},${cur.y} ${cur.x},${cur.y + 7} ${cur.x + 7},${cur.y}`} fill={A.mag} />
        <line x1={cur.x - 8} y1={cur.y} x2={cur.x - 36} y2={cur.y} stroke={A.mag} strokeWidth="0.6" strokeDasharray="2 2" />
        <text x={cur.x - 40} y={cur.y - 3} textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={A.mag} letterSpacing="0.16em" fontWeight="700">WPT 05 · RAISING</text>
        <text x={cur.x - 40} y={cur.y + 10} textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.mag} letterSpacing="0.14em">2026 · CURRENT</text>
      </g>

      <line x1="20" y1="476" x2="340" y2="476" stroke={A.line} strokeWidth="0.5" />
      <g fontFamily="JetBrains Mono, monospace" letterSpacing="0.14em">
        <text x="36" y="494" fontSize="7" fill={A.ink3}>BRG</text>
        <text x="36" y="508" fontSize="9" fill={A.ink}>045°T</text>
        <text x="118" y="494" fontSize="7" fill={A.ink3}>ALT</text>
        <text x="118" y="508" fontSize="9" fill={A.ink}>FL410</text>
        <text x="200" y="494" fontSize="7" fill={A.ink3}>SQUAWK</text>
        <text x="200" y="508" fontSize="9" fill={A.ink}>0492K</text>
        <text x="282" y="494" fontSize="7" fill={A.ink3}>NEXT FIX</text>
        <text x="282" y="508" fontSize="9" fill={A.mag}>FUNDED</text>
      </g>
    </svg>
  );
}

export default function AboutPage() {
  const narrow = useIsNarrow();
  const investorMailto = `mailto:${FOUNDER_EMAIL}?subject=${encodeURIComponent("Aviary — investor inquiry")}`;

  return (
    <div style={{ background: A.bg, color: A.ink, minHeight: "100%", fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Nav name="AVIARY" />

      <div className="mono" style={{ padding: narrow ? "14px 24px" : "14px 48px", fontSize: 10, color: A.ink3, letterSpacing: "0.18em", borderBottom: `1px solid ${A.line2}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>
          <Link href="/" style={{ color: A.ink3 }}>← INDEX</Link>
          <span style={{ margin: "0 12px", color: A.line }}>/</span>
          <span style={{ color: A.ink2 }}>SHEET 05 · ABOUT</span>
        </span>
        <span style={{ color: A.mag }}>● RAISING · 2026</span>
      </div>

      <section style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.05fr 1fr", borderBottom: `1px solid ${A.line}`, minHeight: narrow ? 0 : 700 }}>
        <div style={{ padding: narrow ? "48px 24px 56px" : "92px 48px 72px", borderRight: narrow ? "none" : `1px solid ${A.line}`, borderBottom: narrow ? `1px solid ${A.line}` : "none", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
              ✱ AVIARY / SHEET 05 / ABOUT
            </div>
            <h1 className="serif" style={{ fontSize: narrow ? 56 : 88, fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.02em", color: A.ink, margin: "0 0 26px" }}>
              Built by the engineer flying the airspace they're <em style={{ color: A.mag, fontStyle: "italic" }}>regulating</em>.
            </h1>
            <p className="serif" style={{ fontSize: narrow ? 17 : 19, lineHeight: 1.55, color: A.ink2, margin: "0 0 28px", maxWidth: 540 }}>
              Aviary is the workforce platform for the 492,000+ FAA remote pilots — and the first to build the FAA infrastructure underneath it. One founder, deep in the regulation, shipping every layer of the stack.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={investorMailto}
                className="sans"
                style={{ fontSize: 13, background: A.ink, color: A.bg, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500, textDecoration: "none" }}
              >
                Request investor deck →
              </a>
              <Link href="/contact" className="sans" style={{ fontSize: 13, background: "transparent", color: A.ink, border: `1px solid ${A.ink}`, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500 }}>
                Contact the founder
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", background: A.bg2, padding: narrow ? "32px 24px 56px" : "60px 48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="mono" style={{ position: "absolute", top: 16, left: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
            ✱ ENROUTE · CHART 05-A
          </div>
          <div className="mono" style={{ position: "absolute", top: 16, right: 16, fontSize: 9, color: A.mag, letterSpacing: "0.14em" }}>
            ● TRACK LIVE
          </div>
          <div style={{ width: "100%", maxWidth: 460 }}>
            <EnrouteChart />
          </div>
          <div className="mono" style={{ position: "absolute", bottom: 16, left: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", display: "flex", justifyContent: "space-between" }}>
            <span>FOUNDER ROUTE · 5 FIXES</span>
            <span>NEXT FIX · FUNDED</span>
          </div>
        </div>
      </section>

      <Reveal>
        <section id="founder" style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 96px", borderBottom: `1px solid ${A.line}` }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
            ✱ §02 · FOUNDER
          </div>
          <h2 className="serif" style={{ fontSize: narrow ? 40 : 56, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 900 }}>
            One founder. <em style={{ color: A.mag, fontStyle: "italic" }}>Every layer.</em>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "240px 1fr", gap: narrow ? 24 : 56, marginTop: 48, maxWidth: 1000, alignItems: "start" }}>
            <div>
              <h3 className="serif" style={{ fontSize: 28, color: A.ink, fontWeight: 500, margin: "0 0 6px" }}>Xinyu Fang</h3>
              <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Founder · FAA Infrastructure
              </div>
            </div>
            <div>
              <p className="serif" style={{ fontSize: 17, color: A.ink2, lineHeight: 1.55, margin: "0 0 20px", maxWidth: 620 }}>
                Cornell PhD in flight control for unmanned aircraft. Authored Aviary's Part 107 Auto-Approval technical report and filed formal comments on the FAA's Part 108 BVLOS rule. Built the LAANC USS infrastructure end-to-end: SWIM/SCDS NOTAM pipeline, airspace classification engine, and the iOS workforce app.
              </p>
              <Stagger step={70} threshold={0.3} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {ratings.map((r) => (
                  <span key={r} className="mono" style={{ fontSize: 9, padding: "5px 9px", border: `1px solid ${A.line}`, color: A.ink2, letterSpacing: "0.12em", textTransform: "uppercase" }}>{r}</span>
                ))}
              </Stagger>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="raising" style={{ padding: narrow ? "64px 24px" : "96px 48px", borderBottom: `1px solid ${A.line}`, background: A.bg2 }}>
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.2fr 1fr", gap: narrow ? 32 : 64, alignItems: "end" }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: A.mag, letterSpacing: "0.16em", marginBottom: 18 }}>
                ✱ §03 · FUNDRAISING
              </div>
              <h3 className="serif" style={{ fontSize: narrow ? 32 : 48, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 720 }}>
                Aviary is <em style={{ color: A.mag, fontStyle: "italic" }}>currently raising</em> to expand.
              </h3>
              <p className="serif" style={{ fontSize: narrow ? 16 : 18, color: A.ink2, lineHeight: 1.55, margin: "20px 0 0", maxWidth: 600 }}>
                The product is shipped, the LAANC USS application is in motion, and pilot demand is real. We're now raising to expand the team, accelerate USS certification, and onboard the first wave of paying customers across real estate, construction, and infrastructure. Investors who care about regulated, infrastructure-grade markets — we'd like to talk.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
                <a
                  href={investorMailto}
                  className="sans"
                  style={{ fontSize: 13, background: A.ink, color: A.bg, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500, textDecoration: "none" }}
                >
                  Request the deck →
                </a>
                <Link href="/contact" className="sans" style={{ fontSize: 13, background: "transparent", color: A.ink, border: `1px solid ${A.ink}`, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500 }}>
                  Contact us
                </Link>
              </div>
            </div>
            <div className="mono" style={{ borderTop: `1px solid ${A.line}` }}>
              {[
                ["STAGE", "EARLY · OPEN"],
                ["USE OF FUNDS", "USS · TEAM · GTM"],
                ["TRACTION", "iOS v0.6 TESTFLIGHT"],
                ["CHANNEL", "FOUNDER-DIRECT"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: `1px solid ${A.line}`, fontSize: 11, letterSpacing: "0.14em", gap: 16 }}>
                  <span style={{ color: A.ink3 }}>{k}</span>
                  <span style={{ color: A.ink, textAlign: "right" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal><Footer sectionNumber="04" /></Reveal>
    </div>
  );
}

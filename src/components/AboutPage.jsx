import { A, Link } from "./shared.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Reveal, { Stagger } from "./Reveal.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const FOUNDER_EMAIL = "xinyu@aviaryfly.com";
const ratings = ["PhD · Cornell", "PPL · in training"];

function EnrouteChart() {
  const RWY_X = 210;
  const RWY_TOP = 210;
  const RWY_BOTTOM = 360;
  const DW_X = 118;
  const PAT_TOP = 150;
  const PAT_BOTTOM = 410;
  const wpts = [
    { x: RWY_X, y: 180, n: "01", t: "CORNELL", sub: "DEPARTURE · 360°", lx: RWY_X + 13, ly: 180, anchor: "start" },
    { x: 164, y: PAT_TOP, n: "02", t: "PART 107", sub: "CROSSWIND · 270°", lx: 164, ly: 130, anchor: "middle" },
    { x: DW_X, y: 280, n: "03", t: "SWIM/SCDS", sub: "DOWNWIND · 180°", lx: DW_X - 8, ly: 280, anchor: "end" },
    { x: 164, y: PAT_BOTTOM, n: "04", t: "LAANC USS", sub: "BASE · 090°", lx: 164, ly: 432, anchor: "middle" },
  ];
  const cur = { x: RWY_X, y: 388 };
  return (
    <svg viewBox="0 0 360 540" style={{ width: "100%", height: "100%", maxHeight: 540, display: "block" }} aria-hidden="true">
      <defs>
        <pattern id="ap-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="0" cy="0" r="0.5" fill={A.line2} />
        </pattern>
      </defs>

      <rect x="20" y="20" width="320" height="48" fill={A.ink} />
      <text x="36" y="42" fontFamily="Times New Roman, serif" fontSize="13" fontWeight="600" fill={A.bg} letterSpacing="0.04em">AVIARY · TRAFFIC PATTERN</text>
      <text x="36" y="60" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#a89e8a" letterSpacing="0.18em">FOUNDER ROUTE · LIVE</text>
      <text x="324" y="42" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#a89e8a" letterSpacing="0.18em">CHART 05-A</text>
      <text x="324" y="60" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#a89e8a" letterSpacing="0.18em">RWY 36 · LEFT</text>

      <rect x="20" y="68" width="320" height="392" fill={A.bg} stroke={A.ink} strokeWidth="1" />
      <rect x="20" y="68" width="320" height="392" fill="url(#ap-grid)" />

      <text x="36" y="88" fontFamily="JetBrains Mono, monospace" fontSize="7" fill={A.ink3} letterSpacing="0.20em">◇ WAYPOINT     ◆ ON FINAL</text>

      <g transform="translate(312 432)">
        <circle r="14" fill={A.bg} stroke={A.ink} strokeWidth="0.5" />
        <line x1="0" y1="-14" x2="0" y2="14" stroke={A.ink2} strokeWidth="0.4" />
        <line x1="-14" y1="0" x2="14" y2="0" stroke={A.ink2} strokeWidth="0.4" />
        <polygon points="0,-13 -2.5,-7 2.5,-7" fill={A.ink} />
        <text x="0" y="-17" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="6" fill={A.ink} letterSpacing="0.18em">N</text>
      </g>

      <g>
        <rect x={RWY_X - 9} y={RWY_TOP} width="18" height={RWY_BOTTOM - RWY_TOP} fill={A.ink} />
        <line x1={RWY_X - 8} y1={RWY_TOP + 4} x2={RWY_X + 8} y2={RWY_TOP + 4} stroke={A.bg} strokeWidth="0.8" />
        <line x1={RWY_X - 8} y1={RWY_BOTTOM - 4} x2={RWY_X + 8} y2={RWY_BOTTOM - 4} stroke={A.bg} strokeWidth="0.8" />
        <line x1={RWY_X} y1={RWY_TOP + 16} x2={RWY_X} y2={RWY_BOTTOM - 16} stroke={A.bg} strokeWidth="0.5" strokeDasharray="6 6" />
        <text x={RWY_X} y={RWY_BOTTOM - 12} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill={A.bg} letterSpacing="0.12em">36</text>
        <text x={RWY_X} y={RWY_TOP + 18} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill={A.bg} letterSpacing="0.12em">18</text>
      </g>

      <path
        d={`M ${RWY_X} ${RWY_TOP}
            L ${RWY_X} ${PAT_TOP + 8}
            Q ${RWY_X} ${PAT_TOP} ${RWY_X - 8} ${PAT_TOP}
            L ${DW_X + 8} ${PAT_TOP}
            Q ${DW_X} ${PAT_TOP} ${DW_X} ${PAT_TOP + 8}
            L ${DW_X} ${PAT_BOTTOM - 8}
            Q ${DW_X} ${PAT_BOTTOM} ${DW_X + 8} ${PAT_BOTTOM}
            L ${RWY_X - 8} ${PAT_BOTTOM}
            Q ${RWY_X} ${PAT_BOTTOM} ${RWY_X} ${PAT_BOTTOM - 8}
            L ${RWY_X} ${RWY_BOTTOM}`}
        fill="none"
        stroke={A.mag}
        strokeWidth="1.4"
        strokeDasharray="5 3"
      />

      <polygon points={`${RWY_X},172 ${RWY_X - 3},180 ${RWY_X + 3},180`} fill={A.mag} />
      <polygon points={`140,${PAT_TOP} 147,${PAT_TOP - 4} 147,${PAT_TOP + 4}`} fill={A.mag} />
      <polygon points={`${DW_X},300 ${DW_X - 3},293 ${DW_X + 3},293`} fill={A.mag} />
      <polygon points={`186,${PAT_BOTTOM} 179,${PAT_BOTTOM - 4} 179,${PAT_BOTTOM + 4}`} fill={A.mag} />

      {wpts.map((w) => (
        <g key={w.n}>
          <polygon points={`${w.x},${w.y - 5.5} ${w.x - 4.5},${w.y} ${w.x},${w.y + 5.5} ${w.x + 4.5},${w.y}`} fill={A.bg} stroke={A.ink} strokeWidth="1.1" />
          <text x={w.lx} y={w.ly - 3} textAnchor={w.anchor} fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink} letterSpacing="0.10em" fontWeight="600">{w.n} · {w.t}</text>
          <text x={w.lx} y={w.ly + 8} textAnchor={w.anchor} fontFamily="JetBrains Mono, monospace" fontSize="7" fill={A.ink3} letterSpacing="0.12em">{w.sub}</text>
        </g>
      ))}

      <g>
        <circle cx={cur.x} cy={cur.y} r="22" fill="none" stroke={A.mag} strokeWidth="0.4" opacity="0.25" />
        <circle cx={cur.x} cy={cur.y} r="14" fill="none" stroke={A.mag} strokeWidth="0.7" opacity="0.5" />
        <polygon points={`${cur.x},${cur.y - 7} ${cur.x - 7},${cur.y} ${cur.x},${cur.y + 7} ${cur.x + 7},${cur.y}`} fill={A.mag} />
        <line x1={cur.x + 8} y1={cur.y} x2={cur.x + 28} y2={cur.y} stroke={A.mag} strokeWidth="0.6" strokeDasharray="2 2" />
        <text x={cur.x + 32} y={cur.y - 3} fontFamily="JetBrains Mono, monospace" fontSize="9" fill={A.mag} letterSpacing="0.12em" fontWeight="700">05 · RAISING</text>
        <text x={cur.x + 32} y={cur.y + 9} fontFamily="JetBrains Mono, monospace" fontSize="7" fill={A.mag} letterSpacing="0.12em">FINAL · 2026</text>
      </g>

      <line x1="20" y1="476" x2="340" y2="476" stroke={A.line} strokeWidth="0.5" />
      <g fontFamily="JetBrains Mono, monospace" letterSpacing="0.12em">
        <text x="36" y="494" fontSize="7" fill={A.ink3}>RUNWAY</text>
        <text x="36" y="508" fontSize="9" fill={A.ink}>RWY 36</text>
        <text x="150" y="494" fontSize="7" fill={A.ink3}>PATTERN</text>
        <text x="150" y="508" fontSize="9" fill={A.ink}>LEFT TRAFFIC</text>
        <text x="324" y="494" textAnchor="end" fontSize="7" fill={A.ink3}>STATUS</text>
        <text x="324" y="508" textAnchor="end" fontSize="9" fill={A.mag}>ON FINAL</text>
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
              Aviary is the workforce platform for the U.S. commercial drone industry — a marketplace for the 492,000+ FAA Part 107 pilots, with airspace authorization being built into the core flow. One founder, deep in the regulation, shipping every layer of the stack.
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
            ✱ TRAFFIC PATTERN · CHART 05-A
          </div>
          <div className="mono" style={{ position: "absolute", top: 16, right: 16, fontSize: 9, color: A.mag, letterSpacing: "0.14em" }}>
            ● ON FINAL
          </div>
          <div style={{ width: "100%", maxWidth: 460 }}>
            <EnrouteChart />
          </div>
          <div className="mono" style={{ position: "absolute", bottom: 16, left: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", display: "flex", justifyContent: "space-between" }}>
            <span>RWY 36 · LEFT TRAFFIC</span>
            <span>CLEARED TO LAND</span>
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
                Founder
              </div>
            </div>
            <div>
              <p className="serif" style={{ fontSize: 17, color: A.ink2, lineHeight: 1.55, margin: "0 0 20px", maxWidth: 620 }}>
                Cornell PhD in bio-inspired and bio-mimetic sensing, planning, and control for flapping-wing micro aerial vehicles. Robotics Engineer. FAA Student Pilot (PPL).
              </p>

              {/* TODO_FILL: rewrite this paragraph in your own voice (mirror of Founders.jsx).
                  Shape: domain origin → moment of insight → personal commitment. 4 sentences max. */}
              <p className="serif" style={{ fontSize: 17, color: A.ink2, lineHeight: 1.6, margin: "0 0 24px", maxWidth: 620, fontStyle: "italic" }}>
                I spent years at Cornell building autonomous flapping-wing aircraft. The deeper I went into autonomy, the clearer it became that the bottleneck for commercial drones isn't the aircraft — it's who is licensed to fly them, where, and under whose airspace authorization. I know the FAA regulations and the aviation safety frame they enforce, and I started my PPL because I want to build the rails, not another camera-drone app. There's a clear gap in the market right now between the pilots ready to fly and the customers who need them — Aviary is the company that has to exist to fill it.
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
                The iOS v0.6 build is complete and in internal testing, the LAANC USS designation work is underway, and the charter pilot program is opening. We're raising to expand the team, accelerate USS certification, and onboard the first wave of paying customers across real estate, construction, and infrastructure. Investors who care about regulated, infrastructure-grade markets — we'd like to talk.
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
                ["STAGE", "PRE-SEED · OPEN"],
                ["USE OF FUNDS", "USS · TEAM · GTM"],
                ["BUILD STATUS", "iOS v0.6 · IN TEST"],
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

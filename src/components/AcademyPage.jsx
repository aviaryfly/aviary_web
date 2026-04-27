import { A, Link } from "./shared.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Reveal from "./Reveal.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const modules = [
  { n: "01", t: "Fundamentals", hrs: 4, units: 6, topics: "Aircraft systems · weather basics · FAR/AIM intro · radio phraseology" },
  { n: "02", t: "Airspace & LAANC", hrs: 6, units: 9, topics: "Class B/C/D/E/G · NOTAMs · sectional charts · Mode C veil · TFRs" },
  { n: "03", t: "Part 107 exam prep", hrs: 8, units: 12, topics: "UAS regulations · ops planning · loading & performance · mock exam" },
  { n: "04", t: "Ops & business", hrs: 4, units: 5, topics: "Job intake · deliverables · pricing · invoicing · taxes" },
];

function Sheet() {
  return (
    <svg viewBox="0 0 360 480" style={{ width: "100%", height: "100%", maxHeight: 540, display: "block" }} aria-hidden="true">
      <defs>
        <pattern id="ac-rule" x="0" y="0" width="360" height="22" patternUnits="userSpaceOnUse">
          <line x1="32" y1="22" x2="328" y2="22" stroke={A.line} strokeWidth="0.4" />
        </pattern>
      </defs>

      <rect x="20" y="20" width="320" height="440" fill={A.bg} stroke={A.ink} strokeWidth="1.4" transform="rotate(-1.4 180 240)" />

      <g transform="rotate(-1.4 180 240)">
        <rect x="20" y="20" width="320" height="64" fill={A.ink} />
        <text x="36" y="46" fontFamily="Times New Roman, serif" fontSize="16" fontWeight="600" fill={A.bg} letterSpacing="0.06em">AVIARY ACADEMY</text>
        <text x="36" y="64" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#a89e8a" letterSpacing="0.18em">STUDENT SHEET · COHORT 01 · 2026</text>
        <text x="324" y="46" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#a89e8a" letterSpacing="0.18em">FORM 03-A</text>
        <text x="324" y="64" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#a89e8a" letterSpacing="0.18em">N40°44.5′ W74°00.2′</text>

        <text x="36" y="106" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.18em">STUDENT</text>
        <line x1="100" y1="108" x2="324" y2="108" stroke={A.ink2} strokeWidth="0.6" />
        <text x="36" y="130" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.18em">LICENSE №</text>
        <line x1="100" y1="132" x2="324" y2="132" stroke={A.ink2} strokeWidth="0.6" />

        <line x1="36" y1="148" x2="324" y2="148" stroke={A.line} strokeWidth="0.5" />
        <text x="36" y="166" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.18em">CURRICULUM · 22 HRS</text>

        <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill={A.ink} letterSpacing="0.06em">
          <rect x="36" y="184" width="12" height="12" fill="none" stroke={A.ink} strokeWidth="1" />
          <text x="58" y="194">MOD 01 · FUNDAMENTALS</text>
          <text x="324" y="194" textAnchor="end" fill={A.ink2}>4 HRS</text>

          <rect x="36" y="210" width="12" height="12" fill="none" stroke={A.ink} strokeWidth="1" />
          <path d="M37.5 216 L41.5 220 L46.5 211" fill="none" stroke={A.mag} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="58" y="220">MOD 02 · AIRSPACE & LAANC</text>
          <text x="324" y="220" textAnchor="end" fill={A.ink2}>6 HRS</text>

          <rect x="36" y="236" width="12" height="12" fill="none" stroke={A.ink} strokeWidth="1" />
          <text x="58" y="246">MOD 03 · PART 107 EXAM PREP</text>
          <text x="324" y="246" textAnchor="end" fill={A.ink2}>8 HRS</text>

          <rect x="36" y="262" width="12" height="12" fill="none" stroke={A.ink} strokeWidth="1" />
          <text x="58" y="272">MOD 04 · OPS & BUSINESS</text>
          <text x="324" y="272" textAnchor="end" fill={A.ink2}>4 HRS</text>
        </g>

        <line x1="36" y1="290" x2="324" y2="290" stroke={A.line} strokeWidth="0.5" />
        <text x="36" y="308" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.18em">CHECKRIDE · FAA PART 107</text>
        <text x="324" y="308" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink2} letterSpacing="0.14em">SCHEDULED</text>

        <line x1="36" y1="320" x2="324" y2="320" stroke={A.line} strokeWidth="0.5" />
        <text x="36" y="338" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.18em">FIRST JOB ON AVIARY</text>
        <text x="324" y="338" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink2} letterSpacing="0.14em">GUARANTEED</text>

        <line x1="36" y1="350" x2="324" y2="350" stroke={A.line} strokeWidth="0.5" />

        <g transform="translate(252 380) rotate(-6)">
          <circle cx="0" cy="0" r="42" fill="none" stroke={A.mag} strokeWidth="2" />
          <circle cx="0" cy="0" r="34" fill="none" stroke={A.mag} strokeWidth="0.6" />
          <text textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill={A.mag} letterSpacing="0.24em" y="-6">PILOT</text>
          <text textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill={A.mag} letterSpacing="0.24em" y="6">IN</text>
          <text textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill={A.mag} letterSpacing="0.24em" y="18">TRAINING</text>
        </g>

        <text x="36" y="392" fontFamily="Times New Roman, serif" fontSize="13" fontStyle="italic" fill={A.ink}>Tuition</text>
        <text x="36" y="416" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={A.ink} letterSpacing="0.06em">$0 · CHARTER COHORT</text>
        <text x="36" y="436" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={A.ink3} letterSpacing="0.14em">FIRST 100 SEATS</text>
      </g>
    </svg>
  );
}

export default function AcademyPage() {
  const narrow = useIsNarrow();
  const totalHrs = modules.reduce((s, m) => s + m.hrs, 0);
  const totalUnits = modules.reduce((s, m) => s + m.units, 0);

  return (
    <div style={{ background: A.bg, color: A.ink, minHeight: "100%", fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Nav name="AVIARY" />

      <div className="mono" style={{ padding: narrow ? "14px 24px" : "14px 48px", fontSize: 10, color: A.ink3, letterSpacing: "0.18em", borderBottom: `1px solid ${A.line2}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>
          <Link href="/" style={{ color: A.ink3 }}>← INDEX</Link>
          <span style={{ margin: "0 12px", color: A.line }}>/</span>
          <span style={{ color: A.ink2 }}>SHEET 03 · ACADEMY</span>
        </span>
        <span style={{ color: A.mag }}>● COHORT 01 · ENROLLING</span>
      </div>

      <section style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.05fr 1fr", borderBottom: `1px solid ${A.line}`, minHeight: narrow ? 0 : 700 }}>
        <div style={{ padding: narrow ? "48px 24px 56px" : "92px 48px 72px", borderRight: narrow ? "none" : `1px solid ${A.line}`, borderBottom: narrow ? `1px solid ${A.line}` : "none", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
              ✱ AVIARY / SHEET 03 / ACADEMY · COHORT 01
            </div>
            <h1 className="serif" style={{ fontSize: narrow ? 56 : 88, fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.02em", color: A.ink, margin: "0 0 26px" }}>
              Flight school<br />for the <em style={{ color: A.mag, fontStyle: "italic" }}>sky</em>.
            </h1>
            <p className="serif" style={{ fontSize: narrow ? 17 : 19, lineHeight: 1.5, color: A.ink2, margin: "0 0 28px", maxWidth: 520 }}>
              Twenty-two hours from "interested in drones" to "FAA Part 107 certified, working on Aviary." A self-paced curriculum written by the engineer who filed formal comments on the FAA's Part 108 BVLOS rule.
            </p>
            <div style={{ display: "flex", gap: 10, marginBottom: 56, flexWrap: "wrap" }}>
              <Link href="/#contact" className="sans" style={{ fontSize: 13, background: A.ink, color: A.bg, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500 }}>
                Reserve a seat →
              </Link>
              <Link href="/#contact" className="sans" style={{ fontSize: 13, background: "transparent", color: A.ink, border: `1px solid ${A.ink}`, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500 }}>
                Apply as instructor
              </Link>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr 1fr" : "1fr 1fr 1fr", borderTop: `1px solid ${A.line}` }}>
            {[
              ["22 hrs", "End-to-end"],
              ["$0", "Charter cohort"],
              ["100 seats", "Cohort 01"],
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

        <div style={{ position: "relative", background: A.bg2, padding: narrow ? "32px 24px 56px" : "60px 48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="mono" style={{ position: "absolute", top: 16, left: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
            ✱ STUDENT SHEET · FORM 03-A
          </div>
          <div className="mono" style={{ position: "absolute", top: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
            CHECKRIDE PENDING
          </div>
          <div style={{ width: "100%", maxWidth: 440 }}>
            <Sheet />
          </div>
          <div className="mono" style={{ position: "absolute", bottom: 16, left: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", display: "flex", justifyContent: "space-between" }}>
            <span>SAMPLE · NOT YET ISSUED</span>
            <span>FIG. 03-A</span>
          </div>
        </div>
      </section>

      <Reveal>
        <section id="curriculum" style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 96px", borderBottom: `1px solid ${A.line}` }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
            ✱ §02 · CURRICULUM
          </div>
          <h2 className="serif" style={{ fontSize: narrow ? 40 : 56, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 900 }}>
            Four modules. <em style={{ color: A.mag, fontStyle: "italic" }}>Twenty-two hours.</em>
          </h2>
          <p className="serif" style={{ fontSize: narrow ? 16 : 19, lineHeight: 1.5, color: A.ink2, margin: "20px 0 0", maxWidth: 720 }}>
            Self-paced, with weekly office hours by the founder. Designed to take you from zero to a working pilot on the Aviary platform.
          </p>

          <div style={{ marginTop: narrow ? 40 : 56, borderTop: `1px solid ${A.line}` }}>
            {modules.map((m, i) => (
              <div
                key={m.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: narrow ? "auto 1fr 64px" : "92px 1.5fr 2fr 96px",
                  alignItems: "baseline",
                  padding: narrow ? "22px 0" : "28px 0",
                  borderBottom: `1px solid ${A.line}`,
                  gap: narrow ? 12 : 0,
                }}
              >
                <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.16em" }}>
                  ✱ MOD {m.n}
                </div>
                <h3 className="serif" style={{ fontSize: narrow ? 22 : 30, fontWeight: 500, color: A.ink, margin: 0, lineHeight: 1.05 }}>
                  {m.t}
                </h3>
                {!narrow && (
                  <p className="serif" style={{ fontSize: 16, color: A.ink2, lineHeight: 1.5, margin: 0, fontStyle: "italic", paddingRight: 24 }}>
                    {m.topics}
                  </p>
                )}
                <div className="mono" style={{ fontSize: 11, color: A.ink2, letterSpacing: "0.14em", textAlign: narrow ? "right" : "right" }}>
                  {m.hrs} HRS
                  <div style={{ fontSize: 9, color: A.ink3, marginTop: 4 }}>{m.units} UNITS</div>
                </div>
                {narrow && (
                  <p className="serif" style={{ gridColumn: "1 / -1", fontSize: 15, color: A.ink2, lineHeight: 1.5, margin: "8px 0 0", fontStyle: "italic" }}>
                    {m.topics}
                  </p>
                )}
              </div>
            ))}
            <div className="mono" style={{ display: "grid", gridTemplateColumns: narrow ? "1fr auto" : "92px 1fr 96px", padding: narrow ? "20px 0" : "24px 0", fontSize: 11, color: A.ink, letterSpacing: "0.16em" }}>
              <span style={{ color: A.ink3 }}>TOTAL</span>
              {!narrow && <span></span>}
              <span style={{ textAlign: "right" }}>{totalHrs} HRS · {totalUnits} UNITS</span>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ padding: narrow ? "64px 24px" : "96px 48px", borderBottom: `1px solid ${A.line}`, background: A.bg2 }}>
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.2fr 1fr", gap: narrow ? 32 : 64, alignItems: "end" }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: A.mag, letterSpacing: "0.16em", marginBottom: 18 }}>
                ✱ §03 · GRADUATION
              </div>
              <h3 className="serif" style={{ fontSize: narrow ? 32 : 44, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 640 }}>
                Graduation is your <em style={{ color: A.mag, fontStyle: "italic" }}>first job</em> on Aviary.
              </h3>
              <p className="serif" style={{ fontSize: narrow ? 16 : 18, color: A.ink2, lineHeight: 1.55, margin: "18px 0 0", maxWidth: 560 }}>
                Pass the Part 107 checkride and Aviary places your first paid flight inside thirty days. Charter cohort students keep 100% of every job for the first six months.
              </p>
            </div>
            <div className="mono" style={{ borderTop: `1px solid ${A.line}` }}>
              {[
                ["TUITION", "$0 / CHARTER"],
                ["FORMAT", "SELF-PACED + OH"],
                ["INSTRUCTOR", "FOUNDER-LED"],
                ["FIRST JOB", "≤ 30 DAYS"],
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

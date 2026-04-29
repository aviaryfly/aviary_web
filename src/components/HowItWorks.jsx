import { A, SectionHead } from "./shared.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const oldWay = [
  ["Find the pilot", "Search local operators, text contractors, verify Part 107 status, equipment, insurance, and availability by hand."],
  ["Coordinate the job", "Endless calls to settle time, location, airspace constraints, weather, shot list, number of pilots, and site access."],
  ["Move the files", "Footage, edits, invoices, and approvals bounce across email, cloud links, chat threads, and delayed payment cycles."],
];

const enterprisePain = [
  "Direct-managed pilot benches are expensive to recruit, supervise, schedule, insure, and keep utilized.",
  "Retail delivery, telecom inspection, construction, and insurance teams need surge capacity without owning every local operator relationship.",
  "Aviary gives them a qualified labor layer they can use on demand.",
];

const steps = [
  { n: "01", t: "Job is posted", d: "Customer posts the mission once: coordinates, deliverables, deadline, site access, required equipment, and pilot count." },
  { n: "02", t: "Pilot is matched", d: "Aviary matches the nearest qualified Part 107 pilot by airspace history, equipment, prior work, and real-time availability." },
  { n: "03", t: "Airspace cleared", d: "The workflow checks LAANC, NOTAMs, weather, and mission constraints before the pilot is dispatched." },
  { n: "04", t: "Flown and delivered", d: "Pilot flies in-app. Footage, edit notes, approvals, invoices, and payout stay attached to the job record." },
];

export function HowItWorks() {
  const narrow = useIsNarrow();
  return (
    <section id="how" style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 96px", borderBottom: `1px solid ${A.line}` }}>
      <SectionHead
        num="03"
        label="OPERATING PROCEDURE"
        title="The current workflow is all manual coordination."
        subtitle="Today, finding a drone pilot is a service business run through phone calls. Aviary turns it into a dispatch workflow."
      />

      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.05fr 0.95fr", gap: narrow ? 36 : 64, marginTop: narrow ? 40 : 56, alignItems: "start" }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.16em", marginBottom: 18 }}>
            ✱ TRADITIONAL WAY
          </div>
          <div style={{ borderTop: `1px solid ${A.line}` }}>
            {oldWay.map(([title, body], i) => (
              <div key={title} style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "132px 1fr", gap: narrow ? 8 : 24, padding: "20px 0", borderBottom: `1px solid ${A.line}` }}>
                <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  {String(i + 1).padStart(2, "0")} · {title}
                </div>
                <p className="serif" style={{ fontSize: 16, color: A.ink2, lineHeight: 1.5, margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: A.bg2, borderTop: `1px solid ${A.line}`, borderBottom: `1px solid ${A.line}`, padding: narrow ? "24px 0" : "28px 32px" }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.16em", marginBottom: 16 }}>
            ✱ ENTERPRISE PAIN
          </div>
          <h3 className="serif" style={{ fontSize: narrow ? 30 : 40, fontWeight: 500, lineHeight: 1.05, color: A.ink, margin: "0 0 18px", maxWidth: 520 }}>
            A managed pilot fleet is costly when demand is local, seasonal, and uneven.
          </h3>
          {enterprisePain.map((item, i) => (
            <p key={item} className="serif" style={{ fontSize: 16, color: A.ink2, lineHeight: 1.52, margin: i === enterprisePain.length - 1 ? 0 : "0 0 12px", maxWidth: 520 }}>
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="mono" style={{ fontSize: 10, color: A.mag, letterSpacing: "0.16em", marginTop: narrow ? 44 : 64, marginBottom: 18 }}>
        ✱ AVIARY WAY
      </div>
      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.4fr 1fr 1fr 1fr", borderTop: `1px solid ${A.line}` }}>
        {steps.map((s, i) => (
          <div
            key={s.n}
            style={{
              padding: narrow ? "24px 0" : i === 0 ? "32px 32px 40px 0" : "32px 24px 40px",
              borderRight: !narrow && i < 3 ? `1px solid ${A.line}` : "none",
              borderBottom: narrow && i < 3 ? `1px solid ${A.line}` : "none",
              background: !narrow && i === 0 ? A.bg2 : A.bg,
            }}
          >
            <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.16em", marginBottom: 14 }}>
              ✱ STEP {s.n}
            </div>
            <h3 className="serif" style={{ fontSize: narrow ? 22 : i === 0 ? 30 : 22, color: A.ink, margin: "0 0 12px", fontWeight: 500, lineHeight: 1.1 }}>
              {s.t}
            </h3>
            <p className="serif" style={{ fontSize: narrow ? 15 : i === 0 ? 16 : 14, color: A.ink2, lineHeight: 1.55, margin: 0, maxWidth: 360 }}>
              {s.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

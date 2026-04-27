import { A, SectionHead } from "./shared.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

export function HowItWorks() {
  const narrow = useIsNarrow();
  const steps = [
    { n: "01", t: "Job is posted", d: "A dealership, GC, or insurance adjuster posts the shoot, inspection, or flyover. Coordinates, deliverables, deadline." },
    { n: "02", t: "Pilot is matched", d: "Aviary matches the nearest qualified Part 107 pilot by LAANC authorization history, equipment, prior work, and real-time availability." },
    { n: "03", t: "Airspace cleared", d: "Our LAANC USS submits the authorization, parses NOTAMs, and confirms weather. Every flight is legal before wheels-up." },
    { n: "04", t: "Flown and paid", d: "Pilot dispatches in-app via LiveKit. Footage uploads automatically. Pilot is paid the same day; Aviary takes 15%." },
  ];
  return (
    <section id="how" style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 96px", borderBottom: `1px solid ${A.line}` }}>
      <SectionHead num="02" label="OPERATING PROCEDURE" title="From posted to paid." subtitle="Four steps. Hours, not days." />
      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.4fr 1fr 1fr 1fr", marginTop: narrow ? 40 : 64, borderTop: `1px solid ${A.line}` }}>
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

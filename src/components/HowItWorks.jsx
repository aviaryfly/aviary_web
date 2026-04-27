import { A, SectionHead } from "./shared.jsx";

export function Sectors() {
  const items = ["REAL ESTATE", "CONSTRUCTION", "INFRASTRUCTURE", "AGRICULTURE", "PUBLIC SAFETY", "INSURANCE"];
  return (
    <section style={{ borderBottom: `1px solid ${A.line}`, padding: "20px 48px", background: A.bg2 }}>
      <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.16em", display: "flex", gap: 28, justifyContent: "space-between" }}>
        <span>SECTORS HIRING DRONE WORK →</span>
        {items.map((it) => <span key={it}>{it}</span>)}
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: "01", t: "Job is posted", d: "A dealership, GC, or insurance adjuster posts the shoot, inspection, or flyover. Coordinates, deliverables, deadline." },
    { n: "02", t: "Pilot is matched", d: "Avairy matches the nearest qualified Part 107 pilot — Class B/C/D LAANC authorization history, equipment, prior work, real-time availability." },
    { n: "03", t: "Airspace cleared", d: "Our LAANC USS submits the authorization, parses NOTAMs, and confirms wx. Every flight is legal before wheels-up." },
    { n: "04", t: "Flown & paid", d: "Pilot dispatches in-app via LiveKit. Footage uploads automatically. Pilot is paid the same day. Avairy takes 15%." },
  ];
  return (
    <section id="how" style={{ padding: "96px 48px", borderBottom: `1px solid ${A.line}` }}>
      <SectionHead num="03" label="OPERATING PROCEDURE" title="How a flight goes from posted to paid" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginTop: 56, borderTop: `1px solid ${A.line}` }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{ padding: "24px 24px 32px 0", paddingLeft: i === 0 ? 0 : 24, borderRight: i < 3 ? `1px solid ${A.line}` : "none" }}>
            <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.16em", marginBottom: 16 }}>✱ {s.n}</div>
            <h3 className="serif" style={{ fontSize: 24, color: A.ink, margin: "0 0 12px", fontWeight: 500 }}>{s.t}</h3>
            <p className="serif" style={{ fontSize: 15, color: A.ink2, lineHeight: 1.5, margin: 0 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

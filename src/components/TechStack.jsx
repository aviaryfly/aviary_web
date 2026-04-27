import { A } from "./shared.jsx";

const stack = [
  ["iOS", "Swift / Xcode"],
  ["Web", "React + Vite on Vercel"],
  ["Data", "Supabase / PostGIS"],
  ["Voice", "LiveKit"],
  ["NOTAMs", "Solace JMS · SWIM/SCDS"],
  ["Airspace", "FAA charts · Notamify"],
  ["Weather", "National Weather Service"],
];

export default function TechStack() {
  return (
    <section style={{ padding: "56px 48px", borderBottom: `1px solid ${A.line}`, background: A.bg }}>
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 48, alignItems: "start" }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 10 }}>
            ✱ BUILT ON
          </div>
          <p className="serif" style={{ fontSize: 15, color: A.ink2, lineHeight: 1.5, margin: 0 }}>
            Real engineering. Real APIs. Shipped, not shimmed.
          </p>
          <p className="mono" style={{ fontSize: 9, color: A.ink3, letterSpacing: "0.14em", marginTop: 14, lineHeight: 1.6 }}>
            DEV WORKFLOW: ANTHROPIC CLAUDE · CODEX · CURSOR · CLAUDE CODE
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", borderTop: `1px solid ${A.line}` }}>
          {stack.map(([k, v], i) => (
            <div
              key={k}
              style={{
                padding: "18px 14px 18px 0",
                paddingLeft: i === 0 ? 0 : 14,
                borderRight: i < stack.length - 1 ? `1px solid ${A.line}` : "none",
              }}
            >
              <div className="mono" style={{ fontSize: 10, color: A.mag, letterSpacing: "0.14em", marginBottom: 8 }}>
                {k.toUpperCase()}
              </div>
              <div className="serif" style={{ fontSize: 14, color: A.ink, lineHeight: 1.35 }}>
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { A } from "./shared.jsx";

export default function Part108() {
  return (
    <section style={{ padding: "120px 48px", borderBottom: `1px solid ${A.line}` }}>
      <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
        ✱ §08 — THE PART 108 FUTURE
      </div>
      <h2 className="serif" style={{ fontSize: 96, fontWeight: 500, lineHeight: 0.98, letterSpacing: "-0.02em", color: A.ink, margin: 0, maxWidth: 1200 }}>
        A marketplace today.{" "}
        <em style={{ color: A.mag, fontStyle: "italic" }}>Critical infrastructure</em> tomorrow.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, marginTop: 64, borderTop: `1px solid ${A.line}`, paddingTop: 32 }}>
        {[
          ["Today", "Visual line-of-sight commercial work — real estate, inspections, agriculture. The Part 107 marketplace."],
          ["~2027", "Part 108 finalizes. BVLOS opens. Drone delivery, autonomous inspection, at-scale commercial flight."],
          ["The bet", "Avairy is the regulatory backbone others plug into. Workforce + airspace infrastructure compound into a category-defining moat."],
        ].map(([t, d]) => (
          <div key={t}>
            <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.16em", marginBottom: 14 }}>{t.toUpperCase()}</div>
            <p className="serif" style={{ fontSize: 17, color: A.ink2, lineHeight: 1.5, margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

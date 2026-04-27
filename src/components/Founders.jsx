import { A, SectionHead } from "./shared.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

export default function Founders() {
  const narrow = useIsNarrow();
  const ratings = ["PhD · Cornell", "Part 107", "PPL · in training", "FAA Part 108 commenter"];
  return (
    <section id="about" style={{ padding: narrow ? "56px 24px" : "80px 48px", borderBottom: `1px solid ${A.line}` }}>
      <SectionHead num="05" label="FOUNDER" title="Built by the engineer flying the airspace they're regulating." />
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
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {ratings.map((r) => (
              <span key={r} className="mono" style={{ fontSize: 9, padding: "5px 9px", border: `1px solid ${A.line}`, color: A.ink2, letterSpacing: "0.12em", textTransform: "uppercase" }}>{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

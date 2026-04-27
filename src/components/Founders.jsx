import { A, SectionHead } from "./shared.jsx";

export default function Founders() {
  const founders = [
    {
      name: "Xinyu Fang",
      role: "Founder · Engineering / FAA Infrastructure",
      bio: "Cornell PhD in flight control for unmanned aircraft. Authored Avairy's Part 107 Auto-Approval technical report filed with the FAA, and filed formal comments on the FAA's Part 108 BVLOS rule. Built Avairy's LAANC USS infrastructure end-to-end — the SWIM/SCDS NOTAM pipeline, airspace classification engine, and the iOS workforce app. Working toward a Private Pilot License at the local airport — living the airspace system as both the engineer building it and the pilot flying in it.",
      ratings: ["PhD — Cornell", "Part 107", "PPL — in training", "FAA Part 108 commenter"],
    },
  ];
  return (
    <section id="about" style={{ padding: "96px 48px", borderBottom: `1px solid ${A.line}`, background: A.bg2 }}>
      <SectionHead num="06" label="FOUNDER" title="Built by someone who flies the airspace they're regulating." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, marginTop: 56, maxWidth: 880 }}>
        {founders.map((f, i) => (
          <div key={i} style={{ borderTop: `1px solid ${A.line}`, paddingTop: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 24 }}>
              <div style={{ width: 120, height: 150, background: A.bg, border: `1px solid ${A.line}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="mono" style={{ fontSize: 9, color: A.ink3, letterSpacing: "0.14em", textAlign: "center" }}>
                  ✱ FOUNDER<br />PORTRAIT
                </span>
              </div>
              <div>
                <h3 className="serif" style={{ fontSize: 24, color: A.ink, fontWeight: 500, margin: "0 0 4px" }}>{f.name}</h3>
                <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.14em", marginBottom: 14, textTransform: "uppercase" }}>{f.role}</div>
                <p className="serif" style={{ fontSize: 14, color: A.ink2, lineHeight: 1.55, margin: "0 0 16px" }}>{f.bio}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {f.ratings.map((r) => (
                    <span key={r} className="mono" style={{ fontSize: 9, padding: "4px 8px", border: `1px solid ${A.line}`, color: A.ink2, letterSpacing: "0.12em", textTransform: "uppercase" }}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

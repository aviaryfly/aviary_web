import { A, SectionHead } from "./shared.jsx";
import { Stagger } from "./Reveal.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

export default function Founders() {
  const narrow = useIsNarrow();
  const ratings = ["PhD · Cornell", "Part 107", "PPL · in training", "FAA Part 108 commenter"];
  return (
    <section id="about" style={{ padding: narrow ? "56px 24px" : "80px 48px", borderBottom: `1px solid ${A.line}` }}>
      <SectionHead num="07" label="FOUNDER" title="Built by the engineer flying the airspace they're regulating." />
      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "240px 1fr", gap: narrow ? 24 : 56, marginTop: 48, maxWidth: 1000, alignItems: "start" }}>
        <div>
          <h3 className="serif" style={{ fontSize: 28, color: A.ink, fontWeight: 500, margin: "0 0 6px" }}>Xinyu Fang</h3>
          <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Founder · FAA Infrastructure
          </div>
        </div>
        <div>
          <p className="serif" style={{ fontSize: 17, color: A.ink2, lineHeight: 1.55, margin: "0 0 20px", maxWidth: 620 }}>
            Cornell PhD in bio-inspired and bio-mimetic sensing, planning, and control for flapping-wing micro aerial vehicles. Robotics Engineer. FAA Student Pilot (PPL).
          </p>

          {/* TODO_FILL: rewrite this paragraph in your own voice — it is the single
              highest-impact YC signal on the site. Shape: domain origin → moment of
              insight → personal commitment (Part 107, PPL, FAA filing). 4 sentences max.
              The placeholder below is a scaffold, not a script. Make it specific to you. */}
          <p className="serif" style={{ fontSize: 17, color: A.ink2, lineHeight: 1.6, margin: "0 0 24px", maxWidth: 620, fontStyle: "italic" }}>
            I spent years at Cornell building autonomous flapping-wing aircraft. The deeper I went into autonomy, the clearer it became that the bottleneck for commercial drones isn't the aircraft — it's who is licensed to fly them, where, and under whose airspace authorization. I got my Part 107, started my PPL, and engaged with the FAA on Part 108 because I want to build the rails, not another camera-drone app. Aviary is the company I needed to exist when I started flying.
          </p>

          <Stagger step={70} threshold={0.3} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {ratings.map((r) => (
              <span key={r} className="mono" style={{ fontSize: 9, padding: "5px 9px", border: `1px solid ${A.line}`, color: A.ink2, letterSpacing: "0.12em", textTransform: "uppercase" }}>{r}</span>
            ))}
          </Stagger>

          {/* TODO_FILL: if you can sign even one advisor before YC submission,
              add them below — even a single ex-Skyward / ex-Aloft / drone-services-CEO
              advisor materially changes risk perception. If no advisor by deadline,
              keep this hiring line: it signals "solo today, not solo by design." */}
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.14em", marginTop: 28, paddingTop: 18, borderTop: `1px solid ${A.line}`, lineHeight: 1.6 }}>
            <div style={{ color: A.mag, marginBottom: 8 }}>✱ HIRING POST-FUNDING</div>
            Founding engineer (iOS · Swift · MapKit) and GTM lead (drone services or marketplace operations). If that's you, write to <a href="mailto:xinyu@aviaryfly.com" style={{ color: A.ink, textDecoration: "underline", textUnderlineOffset: 3 }}>xinyu@aviaryfly.com</a>.
          </div>
        </div>
      </div>
    </section>
  );
}

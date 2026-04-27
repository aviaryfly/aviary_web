import { A } from "./shared.jsx";

export default function OriginStory() {
  return (
    <section id="why" style={{ padding: "96px 48px", borderBottom: `1px solid ${A.line}` }}>
      <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
        ✱ §02 — WHY NOW
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        <h2
          className="serif"
          style={{
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.02,
            letterSpacing: "-0.015em",
            color: A.ink,
            margin: 0,
            maxWidth: 560,
          }}
        >
          Uber and Lyft solved this exact shape of problem for the road. <em style={{ color: A.mag, fontStyle: "italic" }}>No one has solved it for the sky.</em>
        </h2>
        <div style={{ display: "grid", gap: 28 }}>
          <p className="serif" style={{ fontSize: 18, lineHeight: 1.55, color: A.ink2, margin: 0 }}>
            We talked to car dealerships hiring drone pilots for vehicle ad shoots. They described a broken process: phone calls to find a drone company, the company sub-contracts to an actual pilot, days pass, the shoot finally happens. Pilots described the mirror image — irregular work routed through middlemen who take a cut.
          </p>
          <p className="serif" style={{ fontSize: 18, lineHeight: 1.55, color: A.ink2, margin: 0 }}>
            And then there's the airspace itself. Part 107 pilots told us they're <em style={{ color: A.mag, fontStyle: "italic" }}>scared</em> of it. Class B vs. C vs. D. When LAANC applies. The penalties: lost certificate, FAA fines, in serious cases criminal liability. Most pilots admit they don't fully understand the rules they're operating under.
          </p>
          <p className="serif" style={{ fontSize: 18, lineHeight: 1.55, color: A.ink2, margin: 0 }}>
            Avairy solves both problems in one flow. The customer posts the job. We match a qualified pilot. Our LAANC USS clears the airspace before takeoff. The pilot gets paid work without the regulatory anxiety. The customer gets the shoot done <em style={{ color: A.mag, fontStyle: "italic" }}>in hours, not days</em>.
          </p>
        </div>
      </div>
    </section>
  );
}

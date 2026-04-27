import { A, SectionHead } from "./shared.jsx";

export default function Laanc() {
  return (
    <section id="airspace" style={{ padding: "96px 48px", borderBottom: `1px solid ${A.line}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        <div>
          <SectionHead num="06" label="REGULATORY MOAT" title="The rails, not just the app."
            subtitle="Every commercial drone flight needs FAA airspace authorization. Avairy is becoming a LAANC USS — the rails the FAA actually trusts. Authorizations happen inside our platform, not a third party's. That is a moat no other workforce app has even started building." />
        </div>
        <div>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.16em", marginBottom: 20 }}>
            ✱ INFRASTRUCTURE STACK
          </div>
          <div style={{ borderTop: `1px solid ${A.line}` }}>
            {[
              ["LAANC USS", "FAA Low Altitude Authorization & Notification — pending designation"],
              ["SWIM / SCDS", "NOTAM pipeline, Solace JMS → Supabase / PostGIS"],
              ["Airspace Engine", "Class B/C/D/E/G classification + Mode C veil + TFRs"],
              ["Part 107 Auto-Approval", "Internal technical report, filed"],
              ["Part 108 Comments", "Formal FAA rulemaking participation"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: "200px 1fr", padding: "20px 0", borderBottom: `1px solid ${A.line}`, alignItems: "baseline" }}>
                <div className="mono" style={{ fontSize: 12, color: A.ink, letterSpacing: "0.04em", textTransform: "uppercase" }}>{k}</div>
                <div className="serif" style={{ fontSize: 16, color: A.ink2, lineHeight: 1.45 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

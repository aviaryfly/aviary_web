import { A, SectionHead } from "./shared.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const stack = [
  ["LAANC USS", "FAA Low Altitude Authorization. Pending designation."],
  ["SWIM / SCDS", "Live NOTAM pipeline. Solace JMS to Supabase / PostGIS."],
  ["Airspace Engine", "Class B/C/D/E/G classification. Mode C veil. TFRs."],
  ["Part 107 Auto-Approval", "Internal technical report, filed with FAA."],
];

export default function Moat() {
  const narrow = useIsNarrow();
  return (
    <section id="airspace" style={{ padding: narrow ? "72px 24px 64px" : "120px 48px 104px", borderBottom: `1px solid ${A.line}`, background: A.bg2 }}>
      <SectionHead
        num="06"
        label="REGULATORY MOAT"
        title="The rails, not just the app."
        subtitle="Every commercial drone flight needs FAA airspace authorization. Aviary is becoming a LAANC USS, so authorizations happen inside our platform. No other workforce app has even started building this."
      />

      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.15fr 1fr", gap: narrow ? 48 : 80, marginTop: narrow ? 40 : 64 }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.16em", marginBottom: 20 }}>
            ✱ INFRASTRUCTURE STACK
          </div>
          <div style={{ borderTop: `1px solid ${A.line}` }}>
            {stack.map(([k, v]) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "180px 1fr", gap: narrow ? 6 : 0, padding: "18px 0", borderBottom: `1px solid ${A.line}`, alignItems: "baseline" }}>
                <div className="mono" style={{ fontSize: 12, color: A.ink, letterSpacing: "0.04em", textTransform: "uppercase" }}>{k}</div>
                <div className="serif" style={{ fontSize: 16, color: A.ink2, lineHeight: 1.45 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.16em", marginBottom: 20 }}>
            ✱ THE PART 108 BET
          </div>
          <h3 className="serif" style={{ fontSize: 38, fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.015em", color: A.ink, margin: "0 0 18px", maxWidth: 460 }}>
            A marketplace today. <em style={{ color: A.mag, fontStyle: "italic" }}>Critical infrastructure</em> tomorrow.
          </h3>
          <p className="serif" style={{ fontSize: 17, color: A.ink2, lineHeight: 1.55, margin: "0 0 24px", maxWidth: 480 }}>
            When the FAA finalizes Part 108, beyond-visual-line-of-sight commercial flight opens up: drone delivery, autonomous inspection, at-scale operations. The workforce platform with the regulatory rails wins. Aviary has filed formal comments on the rule and is architecting for it.
          </p>
          <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.14em", paddingTop: 16, borderTop: `1px solid ${A.line}` }}>
            ETA ~2027 · BVLOS · DELIVERY · AUTONOMOUS INSPECTION
          </div>
        </div>
      </div>
    </section>
  );
}

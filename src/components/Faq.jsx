import { useState } from "react";
import { A, SectionHead } from "./shared.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

export default function Faq() {
  const narrow = useIsNarrow();
  const [open, setOpen] = useState(0);
  const items = [
    ["Is this really a new market?", "Yes. 400,000+ FAA-certified Part 107 pilots in the U.S., a workforce larger than commercial airline pilots, and no dominant marketplace. Work today is fragmented across one-off contracts, local operators, and DIY job boards."],
    ["What's the moat?", "Becoming an FAA LAANC USS. Authorizations happen inside our platform, not a third party's. No other workforce app has built this."],
    ["Who pays you?", "Customers in real estate, construction, infrastructure, agriculture, public safety, and insurance. Avairy takes 15% of every job."],
    ["What are the unit economics?", "1% of Part 107 pilots × 2 jobs/month × $600 × 15% take ≈ $8.6M ARR. 1% adoption is achievable in 24 months given there is no incumbent."],
    ["What about Part 108?", "When BVLOS rules finalize, the workforce platform with the regulatory rails wins. Avairy has filed formal comments on the FAA's Part 108 rule and is architecting for it."],
  ];
  return (
    <section style={{ padding: narrow ? "64px 24px 72px" : "88px 48px 96px", borderBottom: `1px solid ${A.line}`, background: A.bg2 }}>
      <SectionHead num="06" label="FREQUENTLY ASKED" title="FAQ." />
      <div style={{ marginTop: 48, borderTop: `1px solid ${A.line}` }}>
        {items.map(([q, a], i) => (
          <div key={i} style={{ borderBottom: `1px solid ${A.line}` }}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              style={{ width: "100%", padding: "24px 0", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}
            >
              <span className="serif" style={{ fontSize: narrow ? 18 : 22, color: A.ink, fontWeight: 500 }}>
                <span className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.16em", marginRight: 16 }}>
                  Q.{String(i + 1).padStart(2, "0")}
                </span>
                {q}
              </span>
              <span className="mono" style={{ fontSize: 18, color: A.ink2 }}>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <p className="serif" style={{ fontSize: 17, color: A.ink2, lineHeight: 1.55, margin: "0 0 28px", maxWidth: 880 }}>{a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

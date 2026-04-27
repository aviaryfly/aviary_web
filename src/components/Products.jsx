import { A, SectionHead } from "./shared.jsx";

const products = [
  {
    code: "P-01",
    name: "Pilot iOS App",
    body: "The pilot's home base. Find work, check airspace, file authorizations, coordinate dispatch via LiveKit voice. Built in Swift.",
    cta: "Download on iOS",
    href: "#",
    note: "TestFlight — coming soon",
  },
  {
    code: "P-02",
    name: "Customer iOS App",
    body: "Post a job in 60 seconds — coordinates, deliverables, deadline. Watch the matched pilot dispatch and the footage land.",
    cta: "Download on iOS",
    href: "#",
    note: "TestFlight — coming soon",
  },
  {
    code: "P-03",
    name: "Avairy Academy",
    body: "Part 107 prep, airspace fundamentals, LAANC walkthroughs, and continuing-education modules. The fastest path from interested to certified.",
    cta: "Visit Academy",
    href: "#",
    note: "Public launch — coming soon",
  },
  {
    code: "P-04",
    name: "Operations Portal",
    body: "Internal cockpit for managing pilots, customers, jobs, and academy courses. The control tower behind every Avairy flight.",
    cta: null,
    href: null,
    note: "Internal only",
  },
];

export default function Products() {
  return (
    <section id="products" style={{ padding: "96px 48px", borderBottom: `1px solid ${A.line}` }}>
      <SectionHead num="05" label="IN FLIGHT" title="Four products. Already shipped." subtitle="The platform isn't a deck. It's running. 60+ pilots already use Avairy to check weather, airspace, NOTAMs, and METARs before they fly." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, marginTop: 56, borderTop: `1px solid ${A.line}` }}>
        {products.map((p, i) => (
          <div
            key={p.code}
            style={{
              padding: "32px 32px 32px 0",
              paddingLeft: i % 2 === 1 ? 32 : 0,
              borderRight: i % 2 === 0 ? `1px solid ${A.line}` : "none",
              borderBottom: i < 2 ? `1px solid ${A.line}` : "none",
            }}
          >
            <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.16em", marginBottom: 14 }}>
              ✱ {p.code}
            </div>
            <h3 className="serif" style={{ fontSize: 26, color: A.ink, margin: "0 0 12px", fontWeight: 500 }}>
              {p.name}
            </h3>
            <p className="serif" style={{ fontSize: 16, color: A.ink2, lineHeight: 1.55, margin: "0 0 20px", maxWidth: 460 }}>
              {p.body}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              {p.cta && (
                <a
                  href={p.href}
                  className="sans"
                  style={{
                    display: "inline-block",
                    fontSize: 13,
                    background: A.ink,
                    color: A.bg,
                    padding: "10px 16px",
                    letterSpacing: "0.04em",
                    fontWeight: 500,
                  }}
                >
                  {p.cta} →
                </a>
              )}
              <span className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                {p.note}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

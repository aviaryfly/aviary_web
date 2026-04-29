import { A, Link } from "./shared.jsx";
import PhoneFrame from "./PhoneFrame.jsx";
import { Stagger } from "./Reveal.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const previews = [
  { src: "/screens/pilot-home.jpg", label: "01 · DISPATCH", angle: -1.5, lift: 12 },
  { src: "/screens/pilot-gig-detail.jpg", label: "02 · GIG DETAIL", angle: 0.6, lift: -10 },
  { src: "/screens/pilot-map.jpg", label: "03 · NEARBY MAP", angle: -0.6, lift: 10 },
  { src: "/screens/pilot-inflight.jpg", label: "04 · IN-FLIGHT HUD", angle: 1.4, lift: -8, frame: "dark" },
];

export default function IosPreview() {
  const narrow = useIsNarrow();
  return (
    <section
      style={{
        padding: narrow ? "72px 24px 64px" : "120px 48px 96px",
        borderBottom: `1px solid ${A.line}`,
        background: A.bg,
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1.4fr", gap: narrow ? 32 : 56, alignItems: "start" }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
            ✱ §05 · iOS BUILD · v0.6
          </div>
          <h2
            className="serif"
            style={{
              fontSize: narrow ? 40 : 56,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: A.ink,
              margin: 0,
              maxWidth: 560,
            }}
          >
            The iOS build is in <em style={{ color: A.mag, fontStyle: "italic" }}>pilot</em> testing.
          </h2>
          <p
            className="serif"
            style={{
              fontSize: narrow ? 16 : 19,
              lineHeight: 1.5,
              color: A.ink2,
              margin: "20px 0 28px",
              maxWidth: 520,
            }}
          >
            The current build covers pilot home, gig feed, accept flow, map view, in-flight tools, delivery hand-off, chat, profile, and customer posting. These captures come from the simulator build we are using with charter pilot feedback.
          </p>

          <div className="mono" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 10, color: A.ink3, letterSpacing: "0.14em", marginBottom: 28, maxWidth: 420 }}>
            {[
              ["9 SCREENS", "current build"],
              ["2 IN BUILD", "LAANC · payouts"],
              ["iOS 17+", "minimum OS"],
              ["Q3 2026", "public TestFlight"],
            ].map(([n, l], i) => (
              <div key={i} style={{ borderTop: `1px solid ${A.line}`, padding: "14px 0" }}>
                <div className="serif" style={{ fontSize: 22, color: A.ink, lineHeight: 1, fontStyle: "italic", letterSpacing: "-0.01em" }}>{n}</div>
                <div style={{ marginTop: 6, textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link
              href="/ios"
              className="sans"
              style={{
                fontSize: 13,
                background: A.ink,
                color: A.bg,
                padding: "12px 20px",
                letterSpacing: "0.04em",
                fontWeight: 500,
                display: "inline-block",
              }}
            >
              See the full build →
            </Link>
            <Link
              href="/#contact"
              className="sans"
              style={{
                fontSize: 13,
                background: "transparent",
                color: A.ink,
                border: `1px solid ${A.ink}`,
                padding: "12px 20px",
                letterSpacing: "0.04em",
                fontWeight: 500,
                display: "inline-block",
              }}
            >
              Join TestFlight
            </Link>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            background: A.bg2,
            border: `1px solid ${A.line}`,
            padding: narrow ? "40px 12px 56px" : "56px 24px 72px",
            overflow: "hidden",
          }}
        >
          <div className="mono" style={{ position: "absolute", top: 12, left: 14, fontSize: 9, color: A.ink3, letterSpacing: "0.18em" }}>
            CONTACT SHEET / 4 OF 12
          </div>
          <div className="mono" style={{ position: "absolute", top: 12, right: 14, fontSize: 9, color: A.mag, letterSpacing: "0.18em", display: narrow ? "none" : "block" }}>
            ● SIMULATOR CAPTURE
          </div>

          <Stagger
            step={140}
            threshold={0.22}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: narrow ? "36px 8px" : 18,
              flexWrap: narrow ? "wrap" : "nowrap",
            }}
          >
            {previews.map((p, i) => (
              <div
                key={i}
                style={{
                  transform: `translateY(${p.lift}px) rotate(${p.angle}deg)`,
                  filter: i % 2 === 0 ? "saturate(0.95)" : "none",
                  transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <PhoneFrame
                  src={p.src}
                  alt={p.label}
                  width={narrow ? 130 : 170}
                  label={p.label}
                  frame={p.frame}
                />
              </div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

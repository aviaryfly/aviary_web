import { A, Link } from "./shared.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

export default function AndroidPage() {
  const narrow = useIsNarrow();
  return (
    <div style={{ background: A.bg, color: A.ink, minHeight: "100%", fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Nav name="AVIARY" />

      <div className="mono" style={{ padding: narrow ? "14px 24px" : "14px 48px", fontSize: 10, color: A.ink3, letterSpacing: "0.18em", borderBottom: `1px solid ${A.line2}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>
          <Link href="/" style={{ color: A.ink3 }}>← INDEX</Link>
          <span style={{ margin: "0 12px", color: A.line }}>/</span>
          <span style={{ color: A.ink2 }}>SHEET 03 · ANDROID</span>
        </span>
        <span style={{ color: A.mag }}>● PRE-FLIGHT · NOT YET CLEARED</span>
      </div>

      <section
        style={{
          minHeight: narrow ? "60vh" : "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: narrow ? "80px 24px" : "120px 48px",
          borderBottom: `1px solid ${A.line}`,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
            ✱ AVIARY / SHEET 03 / ANDROID
          </div>
          <h1
            className="serif"
            style={{
              fontSize: narrow ? 64 : 112,
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: A.ink,
              margin: "0 0 24px",
            }}
          >
            Coming soon.
          </h1>
          <p
            className="serif"
            style={{
              fontSize: narrow ? 17 : 20,
              lineHeight: 1.5,
              color: A.ink2,
              margin: "0 auto 36px",
              maxWidth: 560,
            }}
          >
            The Android build is on the runway. Until then, fly with us on iOS.
          </p>
          <div style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/ios"
              className="sans"
              style={{
                fontSize: 13,
                background: A.ink,
                color: A.bg,
                border: "none",
                padding: "12px 20px",
                letterSpacing: "0.04em",
                fontWeight: 500,
              }}
            >
              See iOS →
            </Link>
            <Link
              href="/contact"
              className="sans"
              style={{
                fontSize: 13,
                background: "transparent",
                color: A.ink,
                border: `1px solid ${A.ink}`,
                padding: "12px 20px",
                letterSpacing: "0.04em",
                fontWeight: 500,
              }}
            >
              Get notified
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

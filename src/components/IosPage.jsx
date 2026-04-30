import { A, Link } from "./shared.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Reveal from "./Reveal.jsx";
import PhoneFrame from "./PhoneFrame.jsx";
import AppScenes from "./AppScenes.jsx";
import DemoReels from "./DemoReels.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const manifest = [
  ["Live gig marketplace, ranked by pay, distance, and time", "SHIPPED"],
  ["15-second accept flow for high-fit jobs", "SHIPPED"],
  ["MapKit nearby-gigs map with priced pins", "SHIPPED"],
  ["Customer job posting for real estate, inspection, event, and mapping", "SHIPPED"],
  ["Dispatch chat with job context pinned", "SHIPPED"],
  ["Pre-flight checklist and in-flight HUD", "SHIPPED"],
  ["Deliverables handoff with Wi-Fi upload", "SHIPPED"],
  ["Pilot vault for certifications, equipment, insurance, and payouts", "SHIPPED"],
  ["Automated cert verification during onboarding", "SHIPPED"],
  ["Pre-flight METAR + TAF briefing for current location and next mission", "SHIPPED"],
  ["LAANC submission in the pilot accept flow", "IN BUILD"],
  ["Same-day payouts (Stripe Treasury)", "IN BUILD"],
  ["Pre-flight NOTAM overlay", "DRAFT"],
];

const stColor = (s) => (s === "SHIPPED" ? A.ink : s === "IN BUILD" ? A.mag : A.ink3);


export default function IosPage() {
  const narrow = useIsNarrow();
  return (
    <div style={{ background: A.bg, color: A.ink, minHeight: "100%", fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Nav name="AVIARY" />

      <div className="mono" style={{ padding: narrow ? "14px 24px" : "14px 48px", fontSize: 10, color: A.ink3, letterSpacing: "0.18em", borderBottom: `1px solid ${A.line2}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>
          <Link href="/" style={{ color: A.ink3 }}>← INDEX</Link>
          <span style={{ margin: "0 12px", color: A.line }}>/</span>
          <span style={{ color: A.ink2 }}>SHEET 02 · iOS DISPATCH</span>
        </span>
        <span style={{ color: A.mag }}>● BUILD v0.6 · IN TEST</span>
      </div>

      <section style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1.05fr", borderBottom: `1px solid ${A.line}`, minHeight: narrow ? 0 : 680 }}>
        <div style={{ padding: narrow ? "48px 24px 56px" : "88px 48px 72px", borderRight: narrow ? "none" : `1px solid ${A.line}`, borderBottom: narrow ? `1px solid ${A.line}` : "none", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
              ✱ AVIARY / SHEET 02 / iOS · DISPATCH
            </div>
            <h1 className="serif" style={{ fontSize: narrow ? 56 : 88, fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.02em", color: A.ink, margin: "0 0 26px" }}>
              The <em style={{ color: A.mag, fontStyle: "italic" }}>pilot's</em><br />cockpit.
            </h1>
            <p className="serif" style={{ fontSize: narrow ? 17 : 19, lineHeight: 1.5, color: A.ink2, margin: "0 0 28px", maxWidth: 480 }}>
              Built for the 492,000+ FAA remote pilots in U.S. airspace, the app handles the work around each flight: nearby jobs, map-first details, accept flow, pre-flight checks, METAR & TAF briefings for here and the next mission, in-flight context, deliverables, and payout controls. The current build is in internal testing; LAANC submission and same-day payouts are wiring into the native flow next.
            </p>
            <div style={{ display: "flex", gap: 10, marginBottom: 56, flexWrap: "wrap" }}>
              <Link href="/#contact" className="sans" style={{ fontSize: 13, background: A.ink, color: A.bg, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500 }}>
                Join TestFlight →
              </Link>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr 1fr", borderTop: `1px solid ${A.line}` }}>
            {[
              ["Available now", "Public TestFlight"],
              ["iOS 26+", "Minimum OS"],
              ["v0.6", "Current build"],
            ].map(([n, l], i, arr) => (
              <div
                key={i}
                style={{
                  paddingTop: narrow ? 16 : 20,
                  paddingRight: narrow ? 0 : 16,
                  paddingBottom: narrow ? 16 : 4,
                  borderRight: !narrow && i < arr.length - 1 ? `1px solid ${A.line}` : "none",
                  borderBottom: narrow && i < arr.length - 1 ? `1px solid ${A.line}` : "none",
                  paddingLeft: !narrow && i > 0 ? 16 : 0,
                }}
              >
                <div className="serif" style={{ fontSize: narrow ? 26 : 30, color: A.ink, lineHeight: 1 }}>{n}</div>
                <div className="mono" style={{ fontSize: 9, color: A.ink3, letterSpacing: "0.14em", marginTop: 8, textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", background: A.bg2, padding: narrow ? "40px 24px 64px" : "72px 48px 88px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="mono" style={{ position: "absolute", top: 16, left: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>
            ✱ GIG DETAIL · iOS v0.6
          </div>
          <div className="mono" style={{ position: "absolute", top: 16, right: 16, fontSize: 9, color: A.mag, letterSpacing: "0.14em" }}>
            ● SIMULATOR CAPTURE · MAPKIT
          </div>
          <PhoneFrame
            src="/screens/pilot-gig-detail.jpg"
            alt="Aviary iOS gig detail with real MapKit"
            width={narrow ? 260 : 320}
          />
          <div className="mono" style={{ position: "absolute", bottom: 16, left: 16, right: 16, fontSize: 9, color: A.ink3, letterSpacing: "0.14em", display: "flex", justifyContent: "space-between" }}>
            <span>CURRENT BUILD CAPTURE</span>
            <span>FIG. 02-A</span>
          </div>
        </div>
      </section>

      <Reveal><DemoReels /></Reveal>

      <Reveal><AppScenes /></Reveal>

      <Reveal>
        <section style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 96px", borderBottom: `1px solid ${A.line}` }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
            ✱ §05 · BUILD MANIFEST
          </div>
          <h2 className="serif" style={{ fontSize: narrow ? 40 : 56, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 900 }}>
            What's shipping, what's in the hangar.
          </h2>
          <p className="serif" style={{ fontSize: narrow ? 16 : 19, lineHeight: 1.5, color: A.ink2, margin: "20px 0 0", maxWidth: 720 }}>
            A plain list of what is in the current app and what is still being wired in.
          </p>

          <div className="mono" style={{ marginTop: narrow ? 40 : 56, fontSize: 9, color: A.ink3, letterSpacing: "0.16em", display: "grid", gridTemplateColumns: narrow ? "12px 1fr 96px" : "32px 1fr 128px", padding: "12px 0", borderTop: `1px solid ${A.line}`, borderBottom: `1px solid ${A.line2}` }}>
            <span>#</span>
            <span>FEATURE</span>
            <span style={{ textAlign: "right" }}>STATUS</span>
          </div>

          {manifest.map(([f, s], i) => (
            <div key={i} className="mono" style={{ display: "grid", gridTemplateColumns: narrow ? "12px 1fr 96px" : "32px 1fr 128px", padding: narrow ? "16px 0" : "20px 0", fontSize: 13, color: A.ink, borderBottom: `1px solid ${A.line2}`, alignItems: "baseline" }}>
              <span style={{ color: A.ink3, fontSize: 10, letterSpacing: "0.14em" }}>{String(i + 1).padStart(2, "0")}</span>
              <span className="serif" style={{ fontSize: narrow ? 17 : 20, fontStyle: "italic", color: A.ink, paddingRight: 24 }}>{f}</span>
              <span style={{ textAlign: "right", color: stColor(s), letterSpacing: "0.16em", fontSize: 10 }}>
                {s === "IN BUILD" && <span style={{ marginRight: 6 }}>●</span>}
                {s}
              </span>
            </div>
          ))}

          <div className="mono" style={{ marginTop: 28, fontSize: 10, color: A.ink3, letterSpacing: "0.16em", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span>
              {(() => {
                const counts = manifest.reduce((a, [, s]) => ({ ...a, [s]: (a[s] || 0) + 1 }), {});
                return `${counts.SHIPPED || 0} SHIPPED · ${counts["IN BUILD"] || 0} IN BUILD · ${counts.DRAFT || 0} DRAFT`;
              })()}
            </span>
            <span>NEXT CUT · 2026.05.30</span>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ padding: narrow ? "64px 24px" : "96px 48px", borderBottom: `1px solid ${A.line}`, background: A.bg2 }}>
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.2fr 1fr", gap: narrow ? 32 : 64, alignItems: "end" }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: A.mag, letterSpacing: "0.16em", marginBottom: 18 }}>
                ✱ §06 · CHARTER PROGRAM · APPLICATIONS OPEN
              </div>
              <h3 className="serif" style={{ fontSize: narrow ? 32 : 44, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 640 }}>
                The first hundred Part 107 pilots shape the network before launch.
              </h3>
              <p className="serif" style={{ fontSize: narrow ? 16 : 18, color: A.ink2, lineHeight: 1.55, margin: "18px 0 0", maxWidth: 540 }}>
                Charter pilots get early TestFlight access, direct founder support, a 0% take rate for the first six months, and a say in the dispatch flow before broader rollout.
              </p>
            </div>
            <div className="mono" style={{ borderTop: `1px solid ${A.line}` }}>
              {[
                ["TAKE RATE", "0% / 6 MO"],
                ["BUILD ACCESS", "EARLY TESTFLIGHT"],
                ["SUPPORT", "FOUNDER-DIRECT"],
                ["STATUS", "APPLICATIONS OPEN"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: `1px solid ${A.line}`, fontSize: 11, letterSpacing: "0.14em" }}>
                  <span style={{ color: A.ink3 }}>{k}</span>
                  <span style={{ color: A.ink }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal><Footer sectionNumber="07" /></Reveal>
    </div>
  );
}

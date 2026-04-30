import { A, Link } from "./shared.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Reveal, { Stagger } from "./Reveal.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const FOUNDER_EMAIL = "xinyu@aviaryfly.com";

// TODO_FILL: confirm or update each value below before sharing this URL with investors.
// These are the numbers a YC partner or VC will ask about in the first 30 seconds of a meeting.
const ASK = {
  stage: "Pre-seed",                     // TODO_FILL: Pre-seed | Seed
  instrument: "SAFE · post-money cap",   // TODO_FILL: SAFE | priced round | convertible note
  size: "$1.5M – $2.5M",                 // TODO_FILL: target round size
  cap: "TODO_FILL — e.g. $12M post",     // TODO_FILL: valuation cap or pre-money
  runway: "18 months",                   // TODO_FILL: months of runway this round buys
  minCheck: "$25K",                      // TODO_FILL: minimum check size accepted
  leadCheck: "$500K – $1M",              // TODO_FILL: target lead check size
};

// TODO_FILL: replace with your actual use-of-funds breakdown.
const USE_OF_FUNDS = [
  ["55%", "Engineering", "iOS hardening · LAANC USS integration · airspace engine · payouts"],
  ["20%", "Regulatory & legal", "LAANC USS designation · Part 108 engagement · counsel · insurance"],
  ["15%", "GTM hire", "First pilot-supply / customer-demand operator (drone-services or marketplace background)"],
  ["10%", "Operations", "Stripe Treasury reserves · cloud · tooling · contingency"],
];

// TODO_FILL: milestones to next round. Be specific — these are what the next investor underwrites.
const MILESTONES = [
  ["M01", "iOS public TestFlight, charter pilot program populated in two metros"],
  ["M02", "First $X in real GMV through the platform across N completed jobs"],
  ["M03", "LAANC USS designation filed with FAA and acknowledged"],
  ["M04", "First three enterprise design-partner contracts (real estate, inspection, telecom or construction)"],
  ["M05", "Founding engineer + GTM lead hired"],
  ["M06", "Series A-readiness: monthly GMV growth, retention cohorts, named ICP"],
];

// TODO_FILL: replace with your real verifiable status. If a row is aspirational, mark it that way.
const CURRENT_STATE = [
  ["iOS BUILD", "v0.6 · feature-complete for charter test"],
  ["TESTFLIGHT", "Public · available now"],
  ["USERS", "Pre-launch — charter program applications opening"],
  ["GMV", "Pre-launch — first jobs scheduled after charter program kickoff"],
  ["LAANC USS", "Designation in progress · application in preparation"],
  ["PART 108", "Engaged in FAA rulemaking process"],
  ["TEAM", "1 founder · founding engineer + GTM lead post-funding"],
  ["LEGAL", "TODO_VERIFY: Delaware C-corp · 83(b) filed · YC SAFE template ready"],
];

// TODO_FILL: only list advisors who have actually signed. Do not list aspirational or "in conversation"
// names — that is exactly the kind of overclaim a YC partner will catch and downgrade for.
const ADVISORS = [
  // ["Name", "Affiliation · expertise"],
  // Example:
  // ["Jane Doe", "Ex-Skyward · LAANC USS operations"],
];

const SOURCES = [
  ["FAA Civil Airmen Statistics, 2025", "https://www.faa.gov/data_research/aviation_data_statistics/civil_airmen_statistics"],
  // TODO_FILL: if your Part 108 comment is on regulations.gov, add the public URL here.
  // ["Aviary Part 108 comment, regulations.gov", "https://www.regulations.gov/comment/FAA-..."],
];

export default function InvestorsPage() {
  const narrow = useIsNarrow();
  const subject = encodeURIComponent("Aviary — investor inquiry");
  const mailto = `mailto:${FOUNDER_EMAIL}?subject=${subject}`;

  return (
    <div style={{ background: A.bg, color: A.ink, minHeight: "100%", fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Nav name="AVIARY" />

      <div className="mono" style={{ padding: narrow ? "14px 24px" : "14px 48px", fontSize: 10, color: A.ink3, letterSpacing: "0.18em", borderBottom: `1px solid ${A.line2}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>
          <Link href="/" style={{ color: A.ink3 }}>← INDEX</Link>
          <span style={{ margin: "0 12px", color: A.line }}>/</span>
          <span style={{ color: A.ink2 }}>SHEET 06 · INVESTOR PACKET</span>
        </span>
        <span style={{ color: A.mag }}>● {ASK.stage.toUpperCase()} · OPEN</span>
      </div>

      {/* HERO ──────────────────────────────────────────────────────────── */}
      <section style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.05fr 1fr", borderBottom: `1px solid ${A.line}`, minHeight: narrow ? 0 : 620 }}>
        <div style={{ padding: narrow ? "48px 24px 48px" : "92px 48px 72px", borderRight: narrow ? "none" : `1px solid ${A.line}`, borderBottom: narrow ? `1px solid ${A.line}` : "none" }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 28 }}>
            ✱ AVIARY / SHEET 06 / INVESTOR PACKET
          </div>
          <h1 className="serif" style={{ fontSize: narrow ? 52 : 80, fontWeight: 500, lineHeight: 0.96, letterSpacing: "-0.02em", color: A.ink, margin: "0 0 26px" }}>
            The honest <em style={{ color: A.mag, fontStyle: "italic" }}>read</em>.
          </h1>
          <p className="serif" style={{ fontSize: narrow ? 17 : 19, lineHeight: 1.55, color: A.ink2, margin: "0 0 28px", maxWidth: 540 }}>
            Aviary is the workforce platform for the U.S. commercial drone industry — a marketplace for the 492,000+ FAA Part 107 pilots with airspace authorization being built into the core flow. This page is the candid version of where we are, what we are raising, and what we will use it for.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href={mailto}
              className="sans"
              style={{ fontSize: 13, background: A.ink, color: A.bg, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500, textDecoration: "none" }}
            >
              Request the deck →
            </a>
            <Link
              href="/about"
              className="sans"
              style={{ fontSize: 13, background: "transparent", color: A.ink, border: `1px solid ${A.ink}`, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500 }}
            >
              Founder bio
            </Link>
          </div>
        </div>

        <div style={{ position: "relative", background: A.bg2, padding: narrow ? "32px 24px 48px" : "72px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="mono" style={{ fontSize: 10, color: A.mag, letterSpacing: "0.18em", marginBottom: 18 }}>
            ✱ THE ASK
          </div>
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr 1fr" : "1fr 1fr", gap: 0, borderTop: `1px solid ${A.line}` }}>
            {[
              ["STAGE", ASK.stage],
              ["INSTRUMENT", ASK.instrument],
              ["ROUND SIZE", ASK.size],
              ["VALUATION", ASK.cap],
              ["RUNWAY", ASK.runway],
              ["MIN CHECK", ASK.minCheck],
              ["LEAD CHECK", ASK.leadCheck],
              ["CHANNEL", "FOUNDER-DIRECT"],
            ].map(([k, v], i, arr) => (
              <div key={k} style={{ padding: "14px 0", borderBottom: `1px solid ${A.line}`, paddingRight: i % 2 === 0 ? 16 : 0, paddingLeft: i % 2 === 1 ? 16 : 0 }}>
                <div className="mono" style={{ fontSize: 9, color: A.ink3, letterSpacing: "0.14em" }}>{k}</div>
                <div className="serif" style={{ fontSize: 17, color: A.ink, marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
          <div className="mono" style={{ fontSize: 9, color: A.ink3, letterSpacing: "0.14em", marginTop: 18, lineHeight: 1.6 }}>
            FIG. 06-A · TERMS SUBJECT TO NEGOTIATION
          </div>
        </div>
      </section>

      {/* CURRENT STATE ─────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 96px", borderBottom: `1px solid ${A.line}` }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
            ✱ §01 · STATE OF THE COMPANY
          </div>
          <h2 className="serif" style={{ fontSize: narrow ? 40 : 56, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 900 }}>
            Where we actually are.
          </h2>
          <p className="serif" style={{ fontSize: narrow ? 16 : 19, lineHeight: 1.5, color: A.ink2, margin: "20px 0 0", maxWidth: 720 }}>
            Pre-launch, pre-revenue, build-complete. Every status below is the version we share with founders we trust — same as we'll share with you.
          </p>

          <div style={{ marginTop: narrow ? 36 : 56, borderTop: `1px solid ${A.line}` }}>
            {CURRENT_STATE.map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: narrow ? "1fr" : "200px 1fr",
                  gap: narrow ? 4 : 0,
                  padding: "18px 0",
                  borderBottom: `1px solid ${A.line}`,
                  alignItems: "baseline",
                }}
              >
                <div className="mono" style={{ fontSize: 12, color: A.ink, letterSpacing: "0.04em", textTransform: "uppercase" }}>{k}</div>
                <div className="serif" style={{ fontSize: 16, color: A.ink2, lineHeight: 1.45 }}>{v}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* MOAT TIERS ────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 96px", borderBottom: `1px solid ${A.line}`, background: A.bg2 }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
            ✱ §02 · MOAT · THREE TIERS
          </div>
          <h2 className="serif" style={{ fontSize: narrow ? 40 : 56, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 900 }}>
            The rails, <em style={{ color: A.mag, fontStyle: "italic" }}>not just</em> the app.
          </h2>

          <div style={{ marginTop: narrow ? 36 : 56, display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr 1fr", gap: narrow ? 24 : 32 }}>
            {[
              {
                t: "TIER 01 · TODAY",
                h: "Workforce app",
                b: "Marketplace dispatch, MapKit nearby gigs, accept flow, in-flight HUD, deliverables hand-off, Stripe payouts, METAR / TAF briefings.",
                s: "iOS v0.6 · in test",
              },
              {
                t: "TIER 02 · 12 MO",
                h: "LAANC USS",
                b: "FAA airspace authorizations issued natively in the pilot accept flow. No marketplace competitor has filed for designation.",
                s: "Application in preparation",
              },
              {
                t: "TIER 03 · 24–36 MO",
                h: "Part 108 BVLOS rails",
                b: "When the FAA finalizes Part 108, beyond-visual-line-of-sight commercial flight opens up. The platform with the regulatory rails wins.",
                s: "Engaged in FAA rulemaking",
              },
            ].map((tier) => (
              <div key={tier.t} style={{ background: A.bg, border: `1px solid ${A.line}`, padding: narrow ? "20px" : "28px 24px" }}>
                <div className="mono" style={{ fontSize: 9, color: A.mag, letterSpacing: "0.18em", marginBottom: 12 }}>{tier.t}</div>
                <h3 className="serif" style={{ fontSize: narrow ? 24 : 28, color: A.ink, fontWeight: 500, lineHeight: 1.1, margin: "0 0 12px", fontStyle: "italic" }}>{tier.h}</h3>
                <p className="serif" style={{ fontSize: 15, color: A.ink2, lineHeight: 1.55, margin: "0 0 16px" }}>{tier.b}</p>
                <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.14em", paddingTop: 12, borderTop: `1px solid ${A.line2}` }}>
                  STATUS · {tier.s.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* USE OF FUNDS ──────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 96px", borderBottom: `1px solid ${A.line}` }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
            ✱ §03 · USE OF FUNDS
          </div>
          <h2 className="serif" style={{ fontSize: narrow ? 40 : 56, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 900 }}>
            Where the money goes.
          </h2>

          <Stagger step={110} threshold={0.2} style={{ marginTop: narrow ? 36 : 56, borderTop: `1px solid ${A.line}` }}>
            {USE_OF_FUNDS.map(([pct, head, body]) => (
              <div
                key={head}
                style={{
                  display: "grid",
                  gridTemplateColumns: narrow ? "1fr" : "100px 220px 1fr",
                  gap: narrow ? 6 : 24,
                  padding: "20px 0",
                  borderBottom: `1px solid ${A.line}`,
                  alignItems: "baseline",
                }}
              >
                <div className="serif" style={{ fontSize: 26, color: A.mag, lineHeight: 1, fontStyle: "italic" }}>{pct}</div>
                <div className="mono" style={{ fontSize: 12, color: A.ink, letterSpacing: "0.04em", textTransform: "uppercase" }}>{head}</div>
                <p className="serif" style={{ fontSize: 16, color: A.ink2, lineHeight: 1.55, margin: 0 }}>{body}</p>
              </div>
            ))}
          </Stagger>
        </section>
      </Reveal>

      {/* MILESTONES ────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 96px", borderBottom: `1px solid ${A.line}`, background: A.bg2 }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
            ✱ §04 · MILESTONES TO NEXT ROUND
          </div>
          <h2 className="serif" style={{ fontSize: narrow ? 40 : 56, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 900 }}>
            What this round buys.
          </h2>
          <p className="serif" style={{ fontSize: narrow ? 16 : 19, lineHeight: 1.5, color: A.ink2, margin: "20px 0 0", maxWidth: 720 }}>
            Specific, dated, and the things the next investor will underwrite. Edit any of these you want sharper before sharing.
          </p>

          <div style={{ marginTop: narrow ? 36 : 56, borderTop: `1px solid ${A.line}` }}>
            {MILESTONES.map(([n, body]) => (
              <div key={n} style={{ display: "grid", gridTemplateColumns: narrow ? "60px 1fr" : "100px 1fr", gap: 16, padding: "18px 0", borderBottom: `1px solid ${A.line}`, alignItems: "baseline" }}>
                <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.16em" }}>{n}</div>
                <p className="serif" style={{ fontSize: 16, color: A.ink2, lineHeight: 1.55, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* TEAM + ADVISORS ───────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 96px", borderBottom: `1px solid ${A.line}` }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
            ✱ §05 · TEAM
          </div>
          <h2 className="serif" style={{ fontSize: narrow ? 40 : 56, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 900 }}>
            One founder. <em style={{ color: A.mag, fontStyle: "italic" }}>Hiring next.</em>
          </h2>

          <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: narrow ? "1fr" : "240px 1fr", gap: narrow ? 24 : 56, alignItems: "start" }}>
            <div>
              <h3 className="serif" style={{ fontSize: 26, color: A.ink, fontWeight: 500, margin: "0 0 6px" }}>Xinyu Fang</h3>
              <div className="mono" style={{ fontSize: 11, color: A.mag, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Founder · FAA Infrastructure
              </div>
            </div>
            <p className="serif" style={{ fontSize: 17, color: A.ink2, lineHeight: 1.55, margin: 0, maxWidth: 620 }}>
              Cornell PhD in bio-inspired and bio-mimetic sensing, planning, and control for flapping-wing micro aerial vehicles. Robotics engineer. FAA Part 107 certified, PPL in training. Engaged with the FAA on Part 108 rulemaking. Sole engineer and architect on the iOS build, the airspace engine, and the LAANC USS application.
            </p>
          </div>

          {ADVISORS.length > 0 ? (
            <div style={{ marginTop: 56 }}>
              <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
                ✱ ADVISORS
              </div>
              <div style={{ borderTop: `1px solid ${A.line}` }}>
                {ADVISORS.map(([name, aff]) => (
                  <div key={name} style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "240px 1fr", gap: narrow ? 4 : 24, padding: "16px 0", borderBottom: `1px solid ${A.line}`, alignItems: "baseline" }}>
                    <div className="serif" style={{ fontSize: 18, color: A.ink, fontWeight: 500 }}>{name}</div>
                    <div className="mono" style={{ fontSize: 11, color: A.ink2, letterSpacing: "0.06em", textTransform: "uppercase" }}>{aff}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mono" style={{ marginTop: 40, fontSize: 11, color: A.ink3, letterSpacing: "0.14em", lineHeight: 1.7, paddingTop: 18, borderTop: `1px solid ${A.line}`, maxWidth: 720 }}>
              ✱ ADVISORS — TO BE NAMED
              <br />
              Actively recruiting one ex-Skyward / ex-Aloft / ex-AirMap operator on the LAANC USS path, one marketplace operations advisor, and one drone-services-company founder. Introductions welcome at <a href={mailto} style={{ color: A.ink, textDecoration: "underline", textUnderlineOffset: 3 }}>{FOUNDER_EMAIL}</a>.
            </div>
          )}

          <div className="mono" style={{ marginTop: 40, fontSize: 11, color: A.ink3, letterSpacing: "0.14em", lineHeight: 1.7, paddingTop: 18, borderTop: `1px solid ${A.line}`, maxWidth: 720 }}>
            <span style={{ color: A.mag }}>✱ HIRING POST-FUNDING</span>
            <br />
            Founding engineer (iOS · Swift · MapKit), and GTM lead with drone-services or marketplace-operations background.
          </div>
        </section>
      </Reveal>

      {/* SOURCES ───────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ padding: narrow ? "56px 24px 40px" : "80px 48px 56px", borderBottom: `1px solid ${A.line}` }}>
          <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
            ✱ §06 · SOURCES & CITATIONS
          </div>
          <p className="serif" style={{ fontSize: 16, color: A.ink2, lineHeight: 1.55, margin: "0 0 20px", maxWidth: 720 }}>
            Every external claim on this page should be traceable. Add references here as you ship them.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: `1px solid ${A.line2}` }}>
            {SOURCES.map(([label, href]) => (
              <li key={label} style={{ padding: "12px 0", borderBottom: `1px solid ${A.line2}` }}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="mono"
                  style={{ fontSize: 11, color: A.ink2, letterSpacing: "0.08em", textDecoration: "underline", textUnderlineOffset: 4 }}
                >
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* CTA ───────────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ padding: narrow ? "72px 24px 96px" : "120px 48px 140px", background: A.bg2 }}>
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.2fr 1fr", gap: narrow ? 32 : 64, alignItems: "end" }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: A.mag, letterSpacing: "0.16em", marginBottom: 18 }}>
                ✱ §07 · NEXT STEP
              </div>
              <h3 className="serif" style={{ fontSize: narrow ? 36 : 56, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.015em", color: A.ink, margin: 0, maxWidth: 720 }}>
                Take the <em style={{ color: A.mag, fontStyle: "italic" }}>meeting</em>.
              </h3>
              <p className="serif" style={{ fontSize: narrow ? 16 : 18, color: A.ink2, lineHeight: 1.55, margin: "20px 0 0", maxWidth: 540 }}>
                Reply directly to the founder. Expect a response within 48 hours, with the deck and a 30-minute slot.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
                <a
                  href={mailto}
                  className="sans"
                  style={{ fontSize: 13, background: A.ink, color: A.bg, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500, textDecoration: "none" }}
                >
                  Email Xinyu →
                </a>
                <Link href="/" className="sans" style={{ fontSize: 13, background: "transparent", color: A.ink, border: `1px solid ${A.ink}`, padding: "12px 20px", letterSpacing: "0.04em", fontWeight: 500 }}>
                  Back to index
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer sectionNumber="08" />
    </div>
  );
}

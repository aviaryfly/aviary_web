import { A } from "./shared.jsx";
import PhoneFrame from "./PhoneFrame.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const PILOT_SCENES = [
  {
    src: "/screens/pilot-home.jpg",
    frame: "FIG. A · DAILY DISPATCH",
    title: "Start with the next flight.",
    caption:
      "Earnings, accept rate, weather, and the next available gig sit on the home screen, so the pilot can decide whether to fly now or stand down.",
    chips: ["EARNINGS", "WEATHER", "QUEUE"],
  },
  {
    src: "/screens/pilot-gigs.jpg",
    frame: "FIG. B · MARKETPLACE",
    title: "Eight nearby gigs, sorted.",
    caption:
      "The feed ranks work by payout, distance, and start time: construction at $485, a wedding at $780, a vineyard mapping run at $1,250.",
    chips: ["8 OPEN", "BERKELEY", "SORTED BY $"],
  },
  {
    src: "/screens/pilot-gig-detail.jpg",
    frame: "FIG. C · GIG DETAIL",
    title: "Map, airspace, deliverables.",
    caption:
      "The listing opens on a MapKit view with the payout pin, flight window, airspace class, and shot list in one place.",
    chips: ["CLASS G ✓", "MAPKIT", "$340"],
  },
  {
    src: "/screens/pilot-hero-ping.jpg",
    frame: "FIG. D · ACCEPT-PING",
    title: "A fast yes or no.",
    caption:
      "When a high-fit job comes in, the pilot sees price, distance, airspace, and client rating before choosing accept or pass.",
    chips: ["NEW PING", "CLASS G", "$340"],
  },
  {
    src: "/screens/pilot-map.jpg",
    frame: "FIG. E · NEARBY MAP",
    title: "Nearby work on the map.",
    caption:
      "Open jobs show as priced pins, with the active opportunity highlighted so the pilot can compare distance and payout quickly.",
    chips: ["LIVE", "5 PINS", "ACTIVE GIG"],
  },
  {
    src: "/screens/pilot-fly.jpg",
    frame: "FIG. F · MISSION TOOLS",
    title: "Ready before takeoff.",
    caption:
      "The mission screen keeps pre-flight checks, upload hand-off, completion, and rating close to the flight itself.",
    chips: ["EN ROUTE", "PRE-FLIGHT", "LAANC ✓"],
  },
  {
    src: "/screens/pilot-weather-brief.jpg",
    frame: "FIG. G · WEATHER · CURRENT",
    title: "METAR for where you stand.",
    caption:
      "Live METAR from the nearest reporting station: flight category, wind, visibility, ceiling, temp, altimeter, cloud layers, and the raw text — pulled from aviationweather.gov.",
    chips: ["VFR", "WIND 150°/7", "0352Z"],
  },
  {
    src: "/screens/pilot-weather-mission.jpg",
    frame: "FIG. H · WEATHER · NEXT MISSION",
    title: "And for where you're going.",
    caption:
      "A second briefing for the active gig's destination. METAR, TAF, and the same flight-category read at the job site, so a pilot can call go or no-go before launch.",
    chips: ["VFR", "KOAK", "TAF + METAR"],
  },
  {
    src: "/screens/pilot-inflight.jpg",
    frame: "FIG. I · IN-FLIGHT HUD",
    title: "Flight context in hand.",
    caption:
      "Altitude, speed, distance, battery, and shot list stay visible while capture is underway.",
    chips: ["REC 04:32", "4K · 60 FPS", "78%"],
    frameStyle: "dark",
  },
  {
    src: "/screens/pilot-profile.jpg",
    frame: "FIG. J · PILOT VAULT",
    title: "The pilot record.",
    caption:
      "Certifications, aircraft, insurance, reviews, and payout details live together so trust checks do not sit in a separate workflow.",
    chips: ["★ 4.92", "137 GIGS", "$2,148.50 / WK"],
  },
];

const CUSTOMER_SCENES = [
  {
    src: "/screens/customer-home.jpg",
    frame: "FIG. K · CUSTOMER HOME",
    title: "A clear place to start.",
    caption:
      "Spend, active jobs, recent pilots, and current status are visible when a customer opens the app.",
    chips: ["2 ACTIVE", "$3,420", "5 PILOTS"],
  },
  {
    src: "/screens/customer-post-job.jpg",
    frame: "FIG. L · POST A JOB",
    title: "Post the job by type.",
    caption:
      "Real estate, inspection, event, or mapping templates set the right fields first; the customer fills location, schedule, deliverables, and payout.",
    chips: ["4 TYPES", "≈4 MIN", "$320–$880"],
  },
  {
    src: "/screens/customer-my-jobs.jpg",
    frame: "FIG. M · MY JOBS",
    title: "Track work without chasing it.",
    caption:
      "Open and completed jobs are grouped by status, from accepted to in flight to delivered.",
    chips: ["OPEN · 3", "ACCEPTED", "IN FLIGHT"],
  },
  {
    src: "/screens/customer-messages.jpg",
    frame: "FIG. N · DISPATCH CHAT",
    title: "Messages stay with the job.",
    caption:
      "The chat keeps address, payout, and time pinned at the top so both sides are talking about the same flight.",
    chips: ["PINNED CTX", "ONLINE", "✓✓"],
  },
];

export default function AppScenes() {
  const narrow = useIsNarrow();
  return (
    <section
      style={{
        background: A.bg,
        borderBottom: `1px solid ${A.line}`,
        padding: narrow ? "72px 0 96px" : "120px 0 140px",
      }}
    >
      <div style={{ padding: narrow ? "0 24px" : "0 48px", marginBottom: narrow ? 40 : 56 }}>
        <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 18 }}>
          ✱ §04 · CONTACT SHEET · iOS v0.6 · SIMULATOR CAPTURE
        </div>
        <h2
          className="serif"
          style={{
            fontSize: narrow ? 40 : 64,
            fontWeight: 500,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: A.ink,
            margin: 0,
            maxWidth: 1100,
          }}
        >
          The <em style={{ color: A.mag, fontStyle: "italic" }}>pilot</em> side.
        </h2>
        <p
          className="serif"
          style={{
            fontSize: narrow ? 16 : 19,
            lineHeight: 1.5,
            color: A.ink2,
            margin: "20px 0 0",
            maxWidth: 720,
          }}
        >
          Ten pilot screens from the current iOS build — home to marketplace, job detail, mission tools, METAR & TAF briefings, and payout profile. These captures come from the simulator build used for charter pilot feedback.
        </p>
      </div>

      <SceneRow scenes={PILOT_SCENES} narrow={narrow} />

      <div style={{ padding: narrow ? "56px 24px 40px" : "96px 48px 56px" }}>
        <h2
          className="serif"
          style={{
            fontSize: narrow ? 40 : 64,
            fontWeight: 500,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: A.ink,
            margin: 0,
            maxWidth: 1100,
          }}
        >
          The <em style={{ color: A.mag, fontStyle: "italic" }}>customer</em> side.
        </h2>
        <p
          className="serif"
          style={{
            fontSize: narrow ? 16 : 19,
            lineHeight: 1.5,
            color: A.ink2,
            margin: "20px 0 0",
            maxWidth: 720,
          }}
        >
          For customers, the app is stripped down to posting, tracking, and messaging. The job type sets the fields; the thread keeps the work moving after a pilot accepts.
        </p>
      </div>

      <SceneRow scenes={CUSTOMER_SCENES} narrow={narrow} />
    </section>
  );
}

function SceneRow({ scenes, narrow }) {
  const gap = narrow ? 28 : 56;
  const fadeWidth = narrow ? 40 : 80;
  const secondsPerCard = narrow ? 5 : 6;
  const duration = Math.max(24, scenes.length * secondsPerCard);
  const loop = [...scenes, ...scenes];

  return (
    <div style={{ position: "relative" }}>
      <div
        className="scene-marquee-viewport"
        style={{ padding: narrow ? "16px 0 64px" : "24px 0 96px" }}
      >
        <div
          className="scene-marquee-track"
          style={{ "--marquee-duration": `${duration}s` }}
        >
          {loop.map((s, i) => {
            const isDup = i >= scenes.length;
            return (
              <div
                key={i}
                className="scene-marquee-item"
                style={{ marginRight: gap }}
                aria-hidden={isDup ? "true" : undefined}
              >
                <SceneCard
                  scene={s}
                  index={i % scenes.length}
                  total={scenes.length}
                  narrow={narrow}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: fadeWidth,
          pointerEvents: "none",
          background: `linear-gradient(to right, ${A.bg}, transparent)`,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: fadeWidth,
          pointerEvents: "none",
          background: `linear-gradient(to right, transparent, ${A.bg})`,
        }}
      />
      <div
        className="mono"
        style={{
          position: "absolute",
          right: narrow ? 24 : 48,
          bottom: narrow ? 24 : 36,
          fontSize: 9,
          color: A.ink3,
          letterSpacing: "0.18em",
          pointerEvents: "none",
        }}
      >
        ◄ AUTO
      </div>
    </div>
  );
}

function SceneCard({ scene, index, total, narrow }) {
  const phoneWidth = narrow ? 240 : 280;
  return (
    <figure
      style={{
        flex: "0 0 auto",
        width: narrow ? 280 : 360,
        scrollSnapAlign: "start",
        margin: 0,
      }}
    >
      <div
        className="mono"
        style={{
          fontSize: 9,
          color: A.ink3,
          letterSpacing: "0.18em",
          marginBottom: 18,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: A.mag }}>{scene.frame}</span>
        <span>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div
        style={{
          background: A.bg2,
          padding: narrow ? "32px 20px 56px" : "40px 32px 64px",
          border: `1px solid ${A.line}`,
          display: "flex",
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        <PhoneFrame src={scene.src} alt={scene.title} width={phoneWidth} frame={scene.frameStyle} />
      </div>

      <h3
        className="serif"
        style={{
          fontSize: narrow ? 22 : 26,
          fontWeight: 500,
          lineHeight: 1.15,
          letterSpacing: "-0.015em",
          color: A.ink,
          margin: "0 0 10px",
          fontStyle: "italic",
        }}
      >
        {scene.title}
      </h3>
      <p
        className="serif"
        style={{
          fontSize: 14,
          lineHeight: 1.55,
          color: A.ink2,
          margin: "0 0 14px",
        }}
      >
        {scene.caption}
      </p>
      <div className="mono" style={{ display: "flex", gap: 8, flexWrap: "wrap", fontSize: 9, letterSpacing: "0.16em", color: A.ink3 }}>
        {scene.chips.map((chip, i) => (
          <span
            key={i}
            style={{
              padding: "4px 10px",
              border: `1px solid ${A.line}`,
              background: A.bg,
            }}
          >
            {chip}
          </span>
        ))}
      </div>
    </figure>
  );
}

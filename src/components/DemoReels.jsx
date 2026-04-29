import { useRef, useState } from "react";
import { A } from "./shared.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const REELS = [
  {
    src: "/videos/pilot-demo.mp4",
    poster: "/videos/pilot-poster.jpg",
    fig: "FIG. 02-B",
    label: "PILOT-SIDE DEMO",
    eyebrow: "✱ THE PILOT REEL",
    title: "The pilot's cockpit.",
    cap:
      "Sixty seconds, end to end: gig feed, gig detail with map and airspace, mission tools, METAR & TAF for here and the next mission, in-flight HUD, deliverables hand-off, dispatch chat, and weekly payout — straight from the iOS v0.6 build.",
    chips: ["10 SCREENS", "0:59", "iOS v0.6"],
    side: "left",
    beats: [
      ["00:03", "Gig feed · ranked by pay, distance, time"],
      ["00:14", "Gig detail · MapKit, airspace, deliverables"],
      ["00:24", "Mission tools · pre-flight + LAANC"],
      ["00:32", "Weather brief · METAR + TAF"],
      ["00:40", "In-flight HUD · 4K · 60 fps"],
      ["00:48", "Hand-off · auto-upload · dispatch chat"],
      ["00:55", "Earnings · $2,148.50 / week"],
    ],
  },
  {
    src: "/videos/customer-demo.mp4",
    poster: "/videos/customer-poster.jpg",
    fig: "FIG. 02-C",
    label: "CUSTOMER-SIDE DEMO",
    eyebrow: "✱ THE CUSTOMER REEL",
    title: "The customer side.",
    cap:
      "Forty seconds, end to end: post a job by type, watch a charter pilot accept inside four minutes, follow live status, message in context, then rate the deliverable on completion. Real estate template, $340 payout.",
    chips: ["8 STEPS", "0:39", "iOS v0.6"],
    side: "right",
    beats: [
      ["00:03", "Customer home · spend, jobs, pilots"],
      ["00:09", "Post a job · 4 templates"],
      ["00:17", "Pilot accepted · Casey Park · ~22 min"],
      ["00:23", "Live status · accepted → en route → on site"],
      ["00:28", "Dispatch chat · context pinned"],
      ["00:33", "Job complete · rate the pilot"],
    ],
  },
];

export default function DemoReels() {
  const narrow = useIsNarrow();
  return (
    <section
      style={{
        background: A.bg2,
        borderBottom: `1px solid ${A.line}`,
        padding: narrow ? "72px 0 96px" : "120px 0 140px",
      }}
    >
      <div
        style={{
          padding: narrow ? "0 24px" : "0 48px",
          marginBottom: narrow ? 48 : 80,
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: 10,
            color: A.ink3,
            letterSpacing: "0.18em",
            marginBottom: 18,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>✱ §03 · MOTION CAPTURE · BUILD v0.6</span>
          <span style={{ color: A.mag }}>● TWO REELS · iOS DISPATCH</span>
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
          The product, <em style={{ color: A.mag, fontStyle: "italic" }}>in motion</em>.
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
          Two short walkthroughs of the iOS v0.6 build, one for each side of the marketplace —
          captured straight from the simulator used for charter pilot feedback. Editorial chrome,
          FIG callouts, and a magenta progress hairline added in post.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: narrow ? 64 : 120,
          padding: narrow ? "0 24px" : "0 48px",
        }}
      >
        {REELS.map((r, i) => (
          <Reel key={i} reel={r} narrow={narrow} index={i} />
        ))}
      </div>

      <div
        className="mono"
        style={{
          marginTop: narrow ? 56 : 96,
          padding: narrow ? "0 24px" : "0 48px",
          fontSize: 9,
          color: A.ink3,
          letterSpacing: "0.18em",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span>RECORDED · iOS SIMULATOR · 2026.04.29</span>
        <span>NEXT CUT · 2026.05.30</span>
      </div>
    </section>
  );
}

function Reel({ reel, narrow, index }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
    setStarted(true);
  };

  const reelOnLeft = reel.side === "left";
  const cols = narrow ? "1fr" : "minmax(0, 0.95fr) minmax(0, 1.05fr)";

  const VideoBlock = (
    <div>
      <div
        className="mono"
        style={{
          fontSize: 9,
          color: A.ink3,
          letterSpacing: "0.18em",
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span style={{ color: A.mag }}>{reel.fig}</span>
        <span>{reel.label}</span>
      </div>

      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{
          position: "relative",
          background: A.bg,
          border: `1px solid ${A.line}`,
          padding: narrow ? 12 : 18,
          transition: "border-color 320ms var(--ease-out-quart)",
          borderColor: hovering ? A.ink3 : A.line,
          width: "100%",
          maxWidth: narrow ? 280 : 300,
          marginLeft: !narrow && !reelOnLeft ? "auto" : 0,
        }}
      >
        <span
          aria-hidden="true"
          className="mono"
          style={{
            position: "absolute",
            top: 6,
            left: 12,
            fontSize: 8,
            color: A.ink3,
          }}
        >
          ◣
        </span>
        <span
          aria-hidden="true"
          className="mono"
          style={{
            position: "absolute",
            top: 6,
            right: 12,
            fontSize: 8,
            color: A.ink3,
          }}
        >
          ◢
        </span>

        <video
          ref={videoRef}
          src={reel.src}
          poster={reel.poster}
          controls={started}
          muted
          playsInline
          preload="metadata"
          onEnded={() => setStarted(false)}
          style={{
            width: "100%",
            display: "block",
            aspectRatio: "720 / 1760",
            background: A.bg,
          }}
        />

        {!started && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`Play ${reel.label.toLowerCase()}`}
            className="sans"
            style={{
              position: "absolute",
              inset: narrow ? 12 : 18,
              border: "none",
              background:
                "radial-gradient(circle at center, rgba(244, 237, 224, 0) 0%, rgba(26, 22, 18, 0.22) 70%)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <span
              style={{
                width: narrow ? 84 : 108,
                height: narrow ? 84 : 108,
                borderRadius: "50%",
                background: A.mag,
                color: A.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: narrow ? 28 : 36,
                paddingLeft: narrow ? 6 : 8,
                boxShadow: "0 14px 36px -10px rgba(26, 22, 18, 0.5)",
                transform: hovering ? "scale(1.06)" : "scale(1)",
                transition: "transform 280ms var(--ease-out-quint)",
                lineHeight: 1,
              }}
            >
              ▶
            </span>
            <span
              className="mono"
              style={{
                position: "absolute",
                bottom: narrow ? 18 : 26,
                left: 0,
                right: 0,
                textAlign: "center",
                fontSize: 10,
                color: A.bg,
                letterSpacing: "0.22em",
                textShadow: "0 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              PRESS PLAY · {reel.chips[1]}
            </span>
          </button>
        )}
      </div>

      <div
        className="mono"
        style={{
          marginTop: 14,
          fontSize: 9,
          color: A.ink3,
          letterSpacing: "0.16em",
          display: "flex",
          justifyContent: "space-between",
          maxWidth: narrow ? 280 : 300,
          marginLeft: !narrow && !reelOnLeft ? "auto" : 0,
        }}
      >
        <span>{reel.eyebrow}</span>
        <span>{reel.chips[0]} · {reel.chips[1]} · {reel.chips[2]}</span>
      </div>
    </div>
  );

  const TextBlock = (
    <div
      style={{
        padding: narrow ? "0" : reelOnLeft ? "16px 0 0 32px" : "16px 32px 0 0",
      }}
    >
      <div
        className="mono"
        style={{
          fontSize: 10,
          color: A.mag,
          letterSpacing: "0.18em",
          marginBottom: 18,
        }}
      >
        REEL · {String(index + 1).padStart(2, "0")} / 02
      </div>
      <h3
        className="serif"
        style={{
          fontSize: narrow ? 32 : 44,
          fontWeight: 500,
          lineHeight: 1.04,
          letterSpacing: "-0.02em",
          color: A.ink,
          margin: "0 0 16px",
          fontStyle: "italic",
        }}
      >
        {reel.title}
      </h3>
      <p
        className="serif"
        style={{
          fontSize: narrow ? 16 : 18,
          lineHeight: 1.55,
          color: A.ink2,
          margin: "0 0 28px",
          maxWidth: 540,
        }}
      >
        {reel.cap}
      </p>

      <div
        className="mono"
        style={{
          fontSize: 9,
          color: A.ink3,
          letterSpacing: "0.18em",
          marginBottom: 12,
        }}
      >
        SHOT LIST
      </div>

      <ol
        className="mono"
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          borderTop: `1px solid ${A.line2}`,
          maxWidth: 540,
        }}
      >
        {reel.beats.map(([t, label], i) => (
          <li
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "70px 18px 1fr",
              alignItems: "baseline",
              padding: "12px 0",
              borderBottom: `1px solid ${A.line2}`,
              fontSize: 11,
              letterSpacing: "0.06em",
            }}
          >
            <span style={{ color: A.mag, letterSpacing: "0.12em" }}>{t}</span>
            <span style={{ color: A.ink3 }}>·</span>
            <span style={{ color: A.ink, letterSpacing: "0.04em" }}>{label}</span>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <figure
      style={{
        margin: 0,
        display: "grid",
        gridTemplateColumns: cols,
        gap: narrow ? 32 : 56,
        alignItems: "start",
      }}
    >
      {narrow || reelOnLeft ? (
        <>
          {VideoBlock}
          {TextBlock}
        </>
      ) : (
        <>
          {TextBlock}
          {VideoBlock}
        </>
      )}
    </figure>
  );
}

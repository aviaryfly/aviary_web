import { A } from "./shared.jsx";

function Pilot({ x, y, online }) {
  return (
    <polygon
      transform={`translate(${x},${y})`}
      points="0,-3.4 2.9,2.2 -2.9,2.2"
      fill={online ? A.ink : A.ink3}
      stroke={A.bg}
      strokeWidth="0.5"
    />
  );
}

function JobPin({ x, y, status, label }) {
  if (status === "active") {
    return (
      <g transform={`translate(${x},${y})`}>
        <circle r="14" fill="none" stroke={A.mag} strokeWidth="1" opacity="0.5">
          <animate attributeName="r" from="8" to="28" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.6" to="0" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle r="9" fill={A.bg} stroke={A.mag} strokeWidth="1.4" />
        <circle r="3.6" fill={A.mag} />
        {label && (
          <text x="13" y="3.5" className="mono" fontSize="8" fill={A.ink2} letterSpacing="0.5">
            {label}
          </text>
        )}
      </g>
    );
  }
  const c = status === "match" ? A.ink : A.ink2;
  return (
    <g transform={`translate(${x},${y})`}>
      <circle r="6" fill={A.bg} stroke={c} strokeWidth="1" />
      <circle r="2.4" fill={c} />
      {label && (
        <text x="10" y="3" className="mono" fontSize="8" fill={A.ink3} letterSpacing="0.5">
          {label}
        </text>
      )}
    </g>
  );
}

function DispatchLine({ x1, y1, x2, y2, delay = 0 }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={A.mag}
      strokeWidth="0.9"
      strokeDasharray="3 4"
      opacity="0.6"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-21"
        dur="1.2s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </line>
  );
}

const pilots = [
  [70, 90, true], [150, 60, false], [220, 100, true], [110, 170, false],
  [60, 220, true], [80, 320, false], [140, 380, true], [222, 358, false],
  [180, 280, true], [250, 200, false], [310, 70, false], [340, 140, true],
  [360, 230, false], [330, 318, true], [402, 380, false], [430, 280, true],
  [470, 180, false], [500, 100, true], [540, 240, false], [560, 360, true],
  [50, 410, false], [430, 100, false], [488, 420, false], [280, 430, true],
  [260, 130, false], [380, 50, true], [100, 250, false], [555, 150, false],
];

const activeJob = { x: 200, y: 240 };
const matched = [
  { x: 220, y: 100 },
  { x: 110, y: 170 },
  { x: 180, y: 280 },
  { x: 250, y: 200 },
];

export default function AirspaceMap() {
  return (
    <svg viewBox="0 0 600 480" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <pattern id="paper" width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill={A.bg} />
          <circle cx="1.5" cy="1.5" r="0.3" fill={A.line} opacity="0.5" />
        </pattern>
      </defs>
      <rect width="600" height="480" fill="url(#paper)" />

      {/* LAANC airspace whisper — infrastructure, not the headline */}
      <g opacity="0.18">
        <circle cx="200" cy="240" r="180" fill="none" stroke={A.mag} strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="200" cy="240" r="110" fill="none" stroke={A.mag} strokeWidth="1" strokeDasharray="2 4" />
      </g>

      {/* faint city grid */}
      <g opacity="0.22" stroke={A.line} strokeWidth="0.5" fill="none">
        <line x1="0" y1="160" x2="600" y2="160" />
        <line x1="0" y1="320" x2="600" y2="320" />
        <line x1="180" y1="0" x2="180" y2="480" />
        <line x1="380" y1="0" x2="380" y2="480" />
      </g>

      {/* the workforce */}
      <g>
        {pilots.map(([x, y, on], i) => (
          <Pilot key={i} x={x} y={y} online={on} />
        ))}
      </g>

      {/* dispatch broadcast from active job → nearby pilots */}
      <g>
        {matched.map((p, i) => (
          <DispatchLine
            key={i}
            x1={activeJob.x}
            y1={activeJob.y}
            x2={p.x}
            y2={p.y}
            delay={i * 0.2}
          />
        ))}
      </g>

      {/* matched-pilot ring — pulses to show acceptance */}
      <g>
        {matched.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="7"
            fill="none"
            stroke={A.mag}
            strokeWidth="1.1"
            opacity="0.85"
          >
            <animate
              attributeName="r"
              values="6;9.5;6"
              dur="1.8s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.95;0.4"
              dur="1.8s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>

      {/* jobs */}
      <JobPin x={activeJob.x} y={activeJob.y} status="active" label="ROOF · $180" />
      <JobPin x={418} y={140} status="open" label="MAPPING" />
      <JobPin x={478} y={342} status="match" label="INSPECT" />
      <JobPin x={528} y={210} status="open" label="DELIVERY" />

      {/* featured-match card */}
      <g transform="translate(24, 350)">
        <rect width="232" height="100" fill={A.bg} stroke={A.ink} strokeWidth="0.9" />
        <text x="14" y="22" className="mono" fontSize="9" fill={A.ink3} letterSpacing="1.2">
          ✱ DISPATCH · 02:14:33Z
        </text>
        <line x1="14" y1="30" x2="218" y2="30" stroke={A.line} />
        <text x="14" y="50" className="serif" fontSize="16" fill={A.ink}>
          Roof inspection
        </text>
        <text x="14" y="68" className="mono" fontSize="9" fill={A.ink2} letterSpacing="0.6">
          BROOKLYN HEIGHTS · 1.8 MI · $180
        </text>
        <text x="14" y="88" className="mono" fontSize="10" fill={A.mag} letterSpacing="0.6">
          4 PILOTS MATCHED · 47s
        </text>
      </g>

      {/* legend */}
      <g className="mono" fontSize="8" fill={A.ink3} letterSpacing="0.6">
        <g transform="translate(290, 462)">
          <circle r="3" fill={A.mag} />
          <text x="8" y="3">JOB</text>
        </g>
        <g transform="translate(345, 462)">
          <polygon points="0,-3.2 2.8,2 -2.8,2" fill={A.ink} />
          <text x="8" y="3">PILOT</text>
        </g>
        <g transform="translate(405, 462)">
          <line x1="0" y1="0" x2="14" y2="0" stroke={A.mag} strokeDasharray="2 2" strokeWidth="0.9" />
          <text x="20" y="3">DISPATCH</text>
        </g>
      </g>

      {/* registration ticks — keep editorial feel */}
      {Array.from({ length: 30 }).map((_, i) => (
        <line key={`tx${i}`} x1={i * 20} y1="0" x2={i * 20} y2="3" stroke={A.ink3} strokeWidth="0.4" />
      ))}
      {Array.from({ length: 24 }).map((_, i) => (
        <line key={`ty${i}`} x1="0" y1={i * 20} x2="3" y2={i * 20} stroke={A.ink3} strokeWidth="0.4" />
      ))}
    </svg>
  );
}

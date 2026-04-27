import { A } from "./shared.jsx";

function JobPin({ x, y, status }) {
  const colors = { active: A.mag, match: A.ink, open: A.ink2 };
  const c = colors[status];
  return (
    <g transform={`translate(${x},${y})`}>
      {status === "active" && (
        <circle r="14" fill="none" stroke={A.mag} strokeWidth="1" opacity="0.4">
          <animate attributeName="r" from="6" to="22" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
        </circle>
      )}
      <circle r="4" fill={c} />
      <circle r="6" fill="none" stroke={c} strokeWidth="0.8" />
    </g>
  );
}

export default function AirspaceMap() {
  return (
    <svg viewBox="0 0 600 480" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <pattern id="paper" width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill={A.bg} />
          <circle cx="1.5" cy="1.5" r="0.3" fill={A.line} opacity="0.5" />
        </pattern>
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke={A.mag} strokeWidth="0.6" opacity="0.25" />
        </pattern>
      </defs>
      <rect width="600" height="480" fill="url(#paper)" />

      <circle cx="300" cy="240" r="180" fill="url(#hatch)" stroke={A.mag} strokeWidth="1.6" />
      <circle cx="300" cy="240" r="120" fill="none" stroke={A.mag} strokeWidth="1.6" />
      <circle cx="300" cy="240" r="70" fill="none" stroke={A.mag} strokeWidth="1.6" />

      <g className="mono" fontSize="9" fill={A.mag}>
        <text x="300" y="80" textAnchor="middle">100</text>
        <text x="300" y="92" textAnchor="middle">SFC</text>
        <text x="395" y="240" textAnchor="middle">100</text>
        <text x="395" y="252" textAnchor="middle">30</text>
      </g>

      <g transform="translate(300,240)">
        <circle r="6" fill={A.mag} />
        <circle r="10" fill="none" stroke={A.mag} strokeWidth="1" />
        <line x1="-9" y1="0" x2="9" y2="0" stroke={A.bg} strokeWidth="2" />
        <line x1="0" y1="-9" x2="0" y2="9" stroke={A.bg} strokeWidth="2" />
      </g>
      <text x="316" y="244" className="mono" fontSize="9" fill={A.ink}>KJFK</text>
      <text x="316" y="256" className="mono" fontSize="8" fill={A.ink3}>116.9 ATIS</text>

      <circle cx="135" cy="120" r="42" fill="none" stroke={A.ink2} strokeWidth="1" strokeDasharray="3 3" />
      <text x="135" y="122" className="mono" fontSize="8" fill={A.ink2} textAnchor="middle">KTEB</text>
      <text x="135" y="134" className="mono" fontSize="7" fill={A.ink3} textAnchor="middle">[20]</text>

      <circle cx="475" cy="115" r="36" fill="none" stroke={A.ink2} strokeWidth="1" strokeDasharray="3 3" />
      <text x="475" y="117" className="mono" fontSize="8" fill={A.ink2} textAnchor="middle">KLGA</text>

      <g transform="translate(70,400)">
        <circle r="36" fill="none" stroke={A.ink2} strokeWidth="0.6" />
        <circle r="28" fill="none" stroke={A.ink2} strokeWidth="0.4" />
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i * 10 * Math.PI) / 180;
          const long = i % 3 === 0;
          return (
            <line
              key={i}
              x1={Math.sin(a) * 28}
              y1={-Math.cos(a) * 28}
              x2={Math.sin(a) * (long ? 36 : 32)}
              y2={-Math.cos(a) * (long ? 36 : 32)}
              stroke={A.ink2}
              strokeWidth="0.5"
            />
          );
        })}
        <text y="-22" className="mono" fontSize="8" fill={A.ink} textAnchor="middle">N</text>
        <line x1="0" y1="-28" x2="0" y2="-15" stroke={A.mag} strokeWidth="1.5" />
      </g>

      <g transform="translate(500,380)">
        <polygon points="0,-10 9,5 -9,5" fill="none" stroke={A.ink2} strokeWidth="1" />
        <text y="20" className="mono" fontSize="8" fill={A.ink2} textAnchor="middle">DPK 117.7</text>
      </g>

      <g>
        <JobPin x={210} y={180} status="active" />
        <JobPin x={380} y={310} status="match" />
        <JobPin x={150} y={300} status="open" />
        <JobPin x={440} y={200} status="open" />
        <JobPin x={260} y={380} status="active" />
      </g>

      <g className="mono" fontSize="8" fill={A.ink3}>
        <text x="12" y="20">40°45′N</text>
        <text x="12" y="475">40°35′N</text>
        <text x="540" y="20">73°50′W</text>
      </g>

      {Array.from({ length: 30 }).map((_, i) => (
        <line key={`tx${i}`} x1={i * 20} y1="0" x2={i * 20} y2="4" stroke={A.ink3} strokeWidth="0.5" />
      ))}
      {Array.from({ length: 24 }).map((_, i) => (
        <line key={`ty${i}`} x1="0" y1={i * 20} x2="4" y2={i * 20} stroke={A.ink3} strokeWidth="0.5" />
      ))}
    </svg>
  );
}

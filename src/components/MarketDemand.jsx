import { A, SectionHead } from "./shared.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const remotePilotData = [
  { year: 2016, pilots: 20362 },
  { year: 2017, pilots: 69166 },
  { year: 2018, pilots: 106321 },
  { year: 2019, pilots: 160302 },
  { year: 2020, pilots: 206322 },
  { year: 2021, pilots: 254587 },
  { year: 2022, pilots: 304256 },
  { year: 2023, pilots: 368633 },
  { year: 2024, pilots: 427598 },
  { year: 2025, pilots: 492311 },
];

const marketStats = [
  ["24.2x", "remote-pilot certificate growth since 2016"],
  ["492,311", "FAA remote pilots in 2025"],
  ["+471,949", "net new remote pilots"],
  ["42%", "nine-year CAGR"],
];

const thesis = [
  "Capital is moving into U.S.-made drones, delivery aircraft, inspection hardware, and autonomy.",
  "The human operating layer is still fragmented: local operators, one-off contractors, spreadsheets, and direct-managed pilot benches.",
  "Aviary turns that workforce into a qualified, dispatchable network with scheduling, airspace, footage delivery, and payment in one flow.",
];

const sourceHref = "https://www.faa.gov/data_research/aviation_data_statistics/civil_airmen_statistics";

function formatNumber(value) {
  return value.toLocaleString("en-US");
}

function RemotePilotChart({ narrow }) {
  const width = 760;
  const height = 360;
  const padding = { top: 34, right: 28, bottom: 54, left: 66 };
  const max = 500000;
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const xFor = (index) => padding.left + (index / (remotePilotData.length - 1)) * plotWidth;
  const yFor = (value) => padding.top + (1 - value / max) * plotHeight;
  const points = remotePilotData.map((d, i) => `${xFor(i)},${yFor(d.pilots)}`).join(" ");
  const areaPoints = `${padding.left},${padding.top + plotHeight} ${points} ${padding.left + plotWidth},${padding.top + plotHeight}`;
  const yTicks = [0, 100000, 200000, 300000, 400000, 500000];
  const labelYears = narrow ? new Set([2016, 2019, 2022, 2025]) : new Set(remotePilotData.map((d) => d.year));

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-labelledby="remote-pilot-chart-title remote-pilot-chart-desc"
      style={{ display: "block", width: "100%", height: "auto", overflow: "visible" }}
    >
      <title id="remote-pilot-chart-title">FAA remote pilot certificates from 2016 to 2025</title>
      <desc id="remote-pilot-chart-desc">Remote pilots increased from 20,362 in 2016 to 492,311 in 2025.</desc>
      <rect x="0" y="0" width={width} height={height} fill={A.bg} />
      {yTicks.map((tick) => {
        const y = yFor(tick);
        return (
          <g key={tick}>
            <line x1={padding.left} x2={padding.left + plotWidth} y1={y} y2={y} stroke={A.line2} strokeWidth="1" />
            <text x={padding.left - 14} y={y + 4} textAnchor="end" className="mono" fontSize="10" fill={A.ink3}>
              {tick === 0 ? "0" : `${tick / 1000}k`}
            </text>
          </g>
        );
      })}
      <polygon points={areaPoints} fill={A.mag} opacity="0.08" />
      <polyline points={points} fill="none" stroke={A.mag} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {remotePilotData.map((d, i) => {
        const x = xFor(i);
        const y = yFor(d.pilots);
        return (
          <g key={d.year}>
            <circle cx={x} cy={y} r="5" fill={A.bg} stroke={A.mag} strokeWidth="3" />
            {labelYears.has(d.year) && (
              <text x={x} y={padding.top + plotHeight + 28} textAnchor="middle" className="mono" fontSize="10" fill={A.ink3}>
                {d.year}
              </text>
            )}
          </g>
        );
      })}
      <line x1={padding.left} x2={padding.left + plotWidth} y1={padding.top + plotHeight} y2={padding.top + plotHeight} stroke={A.line} strokeWidth="1.5" />
      <line x1={padding.left} x2={padding.left} y1={padding.top} y2={padding.top + plotHeight} stroke={A.line} strokeWidth="1.5" />
      <g>
        <line x1={padding.left} x2={padding.left + plotWidth} y1={yFor(492311)} y2={yFor(492311)} stroke={A.ink} strokeWidth="1" strokeDasharray="4 6" opacity="0.45" />
        <text x={padding.left + plotWidth} y={yFor(492311) - 12} textAnchor="end" className="mono" fontSize="11" fill={A.ink}>
          2025: {formatNumber(492311)}
        </text>
      </g>
      <g>
        <text x={padding.left} y={padding.top - 12} className="mono" fontSize="10" fill={A.ink3} letterSpacing="2">
          FAA REMOTE PILOT CERTIFICATES
        </text>
      </g>
    </svg>
  );
}

export default function MarketDemand() {
  const narrow = useIsNarrow();

  return (
    <section style={{ padding: narrow ? "72px 24px 64px" : "112px 48px 104px", borderBottom: `1px solid ${A.line}`, background: A.bg }}>
      <SectionHead
        num="02"
        label="MARKET DEMAND"
        title="The drone workforce already exists. It is not organized."
        subtitle="FAA remote-pilot certificates grew from 20,362 in 2016 to 492,311 in 2025. The next bottleneck is not only aircraft manufacturing. It is who can dispatch, qualify, schedule, and pay the pilots behind the work."
      />

      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1.35fr", gap: narrow ? 40 : 64, marginTop: narrow ? 40 : 60, alignItems: "start" }}>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr 1fr" : "1fr", gap: 0, borderTop: `1px solid ${A.line}` }}>
            {marketStats.map(([n, l], i) => (
              <div
                key={l}
                style={{
                  paddingTop: narrow ? 18 : 20,
                  paddingRight: narrow ? 12 : 0,
                  paddingBottom: narrow ? 18 : 20,
                  paddingLeft: narrow && i % 2 === 1 ? 12 : 0,
                  borderBottom: `1px solid ${A.line}`,
                  borderRight: narrow && i % 2 === 0 ? `1px solid ${A.line}` : "none",
                }}
              >
                <div className="serif" style={{ fontSize: narrow ? 30 : 42, color: A.ink, lineHeight: 1 }}>
                  {n}
                </div>
                <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.14em", lineHeight: 1.4, marginTop: 8, textTransform: "uppercase" }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
          <p className="serif" style={{ fontSize: 17, color: A.ink2, lineHeight: 1.55, margin: "24px 0 0", maxWidth: 480 }}>
            Hardware investment creates flight demand, but every inspection, delivery route, construction scan, and insurance claim still needs a qualified operator when autonomy is not approved or not economical.
          </p>
        </div>

        <div style={{ border: `1px solid ${A.line}`, background: A.bg, padding: narrow ? "18px 10px 16px" : "24px 24px 20px" }}>
          <RemotePilotChart narrow={narrow} />
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.2fr 1fr", gap: narrow ? 20 : 36, paddingTop: 18, borderTop: `1px solid ${A.line2}` }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: A.mag, letterSpacing: "0.16em", marginBottom: 10 }}>
                ✱ WHY THIS MATTERS
              </div>
              <p className="serif" style={{ fontSize: 17, color: A.ink2, lineHeight: 1.48, margin: 0 }}>
                Aviary is the workforce layer for the domestic drone buildout: a national pool of certified pilots that can be matched to enterprise work without each company maintaining its own high-touch pilot operation.
              </p>
            </div>
            <div style={{ borderTop: narrow ? `1px solid ${A.line2}` : "none", paddingTop: narrow ? 18 : 0 }}>
              {thesis.map((item, i) => (
                <div key={item} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 10, padding: i === 0 ? "0 0 12px" : "12px 0", borderTop: i === 0 ? "none" : `1px solid ${A.line2}` }}>
                  <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.12em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="serif" style={{ fontSize: 15, color: A.ink2, lineHeight: 1.45 }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a
            href={sourceHref}
            target="_blank"
            rel="noreferrer"
            className="mono"
            style={{ display: "inline-block", fontSize: 9, color: A.ink3, letterSpacing: "0.14em", lineHeight: 1.5, marginTop: 18, textTransform: "uppercase", textDecoration: "underline", textUnderlineOffset: 4 }}
          >
            Source: FAA Civil Airmen Statistics, 2025 Active Civil Airmen Statistics
          </a>
        </div>
      </div>
    </section>
  );
}

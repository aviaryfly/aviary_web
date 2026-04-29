import { useEffect, useState } from "react";
import { A, SectionHead, Stat } from "./shared.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

export default function LiveFeed() {
  const narrow = useIsNarrow();
  const initial = [
    { t: 13, id: "AVR-7194", loc: "Brooklyn, NY", task: "Listing aerials, 4-unit", fee: 480, cls: "G", st: "open" },
    { t: 9, id: "AVR-7193", loc: "Newark, NJ", task: "Bridge inspection, 600 ft span", fee: 1850, cls: "D", st: "matched" },
    { t: 6, id: "AVR-7192", loc: "Stamford, CT", task: "Solar farm thermal", fee: 1200, cls: "G", st: "flying" },
    { t: 3, id: "AVR-7191", loc: "Queens, NY", task: "Auto dealer, F-150 lineup", fee: 620, cls: "B", st: "matched" },
    { t: 1, id: "AVR-7190", loc: "Yonkers, NY", task: "Insurance roof claim", fee: 320, cls: "G", st: "complete" },
  ];
  const [jobs, setJobs] = useState(initial);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    if (tick === 0) return;
    setJobs((prev) => {
      const next = [...prev];
      const order = ["open", "matched", "flying", "complete"];
      const idx = Math.floor(Math.random() * next.length);
      const cur = order.indexOf(next[idx].st);
      if (cur < order.length - 1) next[idx] = { ...next[idx], st: order[cur + 1] };
      return next;
    });
  }, [tick]);

  const stColors = { open: A.ink3, matched: A.ink, flying: A.mag, complete: A.ink2 };

  return (
    <section style={{ borderBottom: `1px solid ${A.line}`, background: A.bg2 }}>
      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1.4fr" }}>
        <div style={{ padding: narrow ? "56px 24px 40px" : "80px 48px", borderRight: narrow ? "none" : `1px solid ${A.line}`, borderBottom: narrow ? `1px solid ${A.line}` : "none" }}>
          <SectionHead num="04" label="MARKETPLACE" title="A real-time market for sky-work."
            subtitle="Jobs go from posted to flown in hours, not days. Pilots watch a live feed of qualified work in their airspace and accept with one tap." />
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Stat n="60+" l="Pilots on platform" />
            <Stat n="$10.6M" l="ARR at 1% adoption" />
            <Stat n="15%" l="take rate" />
            <Stat n="2 jobs" l="avg / pilot / mo" />
          </div>
        </div>
        <div style={{ padding: "32px 0", background: A.bg, overflowX: narrow ? "auto" : "visible" }}>
          <div style={{ minWidth: narrow ? 560 : "auto" }}>
            <div className="mono" style={{ padding: "0 32px 16px", fontSize: 10, letterSpacing: "0.18em", color: A.ink3, display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${A.line}`, paddingBottom: 14 }}>
              <span>✱ LIVE JOB FEED · NY METRO</span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 6, background: A.mag, display: "inline-block" }} />
                5 JOBS / 30 NM
              </span>
            </div>
            <div className="mono" style={{ display: "grid", gridTemplateColumns: "44px 88px 1fr 80px 70px 90px", padding: "12px 32px", fontSize: 9, color: A.ink3, letterSpacing: "0.14em", borderBottom: `1px solid ${A.line2}` }}>
              <span>T-MIN</span><span>JOB ID</span><span>TASK / LOCATION</span><span>CLASS</span><span>FEE</span><span>STATUS</span>
            </div>
            {jobs.map((j) => (
              <div key={j.id} className="mono" style={{ display: "grid", gridTemplateColumns: "44px 88px 1fr 80px 70px 90px", padding: "16px 32px", fontSize: 12, color: A.ink, borderBottom: `1px solid ${A.line2}`, alignItems: "center" }}>
                <span style={{ color: A.ink3 }}>−{String(j.t).padStart(2, "0")}m</span>
                <span style={{ color: A.ink2 }}>{j.id}</span>
                <span>
                  <span className="serif" style={{ fontStyle: "italic", marginRight: 10 }}>{j.task}</span>
                  <span style={{ color: A.ink3 }}>{j.loc}</span>
                </span>
                <span>{j.cls}</span>
                <span>${j.fee}</span>
                <span style={{ color: stColors[j.st], textTransform: "uppercase", letterSpacing: "0.14em", fontSize: 10 }}>
                  {j.st === "flying" && <span style={{ marginRight: 6 }}>●</span>}
                  {j.st}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

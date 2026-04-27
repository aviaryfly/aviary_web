import { A, Logo } from "./shared.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

export default function Nav({ name = "AVIARY" }) {
  const narrow = useIsNarrow();
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: narrow ? "16px 20px" : "20px 48px",
        borderBottom: `1px solid ${A.line}`,
        background: A.bg,
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo size={22} />
          <span className="serif" style={{ fontSize: 20, fontWeight: 600, letterSpacing: "0.04em", color: A.ink }}>
            {name}
          </span>
          {!narrow && (
            <span className="mono" style={{ fontSize: 9, color: A.ink3, letterSpacing: "0.18em", marginLeft: 4 }}>
              ✱ N40°44.5′ W74°00.2′
            </span>
          )}
        </div>
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: narrow ? 14 : 24 }}>
        {!narrow &&
          [
            ["How", "#how"],
            ["Airspace", "#airspace"],
            ["Founder", "#about"],
            ["iOS", "#contact"],
            ["Academy", "#contact"],
          ].map(([l, href]) => (
            <a key={l} href={href} className="sans" style={{ fontSize: 13, color: A.ink2, letterSpacing: "0.02em" }}>
              {l}
            </a>
          ))}
        <a
          href="#contact"
          className="sans"
          style={{
            fontSize: 13,
            background: A.ink,
            color: A.bg,
            border: "none",
            padding: narrow ? "9px 14px" : "10px 18px",
            borderRadius: 0,
            letterSpacing: "0.04em",
          }}
        >
          Post a job →
        </a>
      </nav>
    </header>
  );
}

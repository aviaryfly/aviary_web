export const A = {
  bg: "#f4ede0",
  bg2: "#ebe2d1",
  ink: "#1a1612",
  ink2: "#4a4238",
  ink3: "#8a8275",
  line: "#c9bea8",
  line2: "#ddd2bb",
  mag: "#c8156c",
};

export const btnPrimary = {
  fontSize: 13,
  background: A.ink,
  color: A.bg,
  border: "none",
  padding: "12px 20px",
  letterSpacing: "0.04em",
  fontWeight: 500,
};

export const btnGhost = {
  fontSize: 13,
  background: "transparent",
  color: A.ink,
  border: `1px solid ${A.ink}`,
  padding: "12px 20px",
  letterSpacing: "0.04em",
  fontWeight: 500,
};

export function SectionHead({ num, label, title, subtitle }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 16 }}>
        ✱ §{num} · {label}
      </div>
      <h2
        className="serif"
        style={{
          fontSize: 56,
          fontWeight: 500,
          lineHeight: 1.02,
          letterSpacing: "-0.015em",
          color: A.ink,
          margin: 0,
          maxWidth: 900,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="serif" style={{ fontSize: 19, lineHeight: 1.5, color: A.ink2, margin: "20px 0 0", maxWidth: 720 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Stat({ n, l }) {
  return (
    <div>
      <div className="serif" style={{ fontSize: 38, color: A.ink, lineHeight: 1 }}>{n}</div>
      <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.14em", marginTop: 6, textTransform: "uppercase" }}>{l}</div>
    </div>
  );
}

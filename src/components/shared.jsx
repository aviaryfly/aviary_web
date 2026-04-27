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

export function navigate(path) {
  if (typeof window === "undefined") return;
  const cur = window.location.pathname + window.location.hash;
  if (path.startsWith("#")) {
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/" + path);
      window.dispatchEvent(new PopStateEvent("popstate"));
    } else {
      window.location.hash = path;
    }
    return;
  }
  if (path === cur) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function Link({ href, children, style, className, onClick }) {
  const handle = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(href);
  };
  return (
    <a href={href} onClick={handle} className={className} style={style}>
      {children}
    </a>
  );
}

export function Logo({ size = 22, bg = A.bg, ink = A.ink, mag = A.mag, style }) {
  const stroke = Math.max(2, (size / 64) * 3);
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" style={{ display: "block", ...style }} aria-hidden="true">
      <rect width="64" height="64" fill={bg} />
      <g fill="none" stroke={ink} strokeWidth={stroke} strokeLinecap="round">
        <line x1="14" y1="14" x2="50" y2="50" />
        <line x1="50" y1="14" x2="14" y2="50" />
        <circle cx="14" cy="14" r="6" />
        <circle cx="50" cy="14" r="6" />
        <circle cx="14" cy="50" r="6" />
        <circle cx="50" cy="50" r="6" />
      </g>
      <rect x="26" y="26" width="12" height="12" fill={bg} stroke={ink} strokeWidth={stroke} />
      <circle cx="32" cy="32" r="3" fill={mag} />
    </svg>
  );
}

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

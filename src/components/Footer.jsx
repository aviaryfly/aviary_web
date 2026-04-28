import { useState } from "react";
import { A, Logo } from "./shared.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";

const CONTACT_EMAIL = "xinyu@aviaryfly.com";

export default function Footer() {
  const narrow = useIsNarrow();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("PILOT");

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Aviary waitlist (${role})`);
    const body = encodeURIComponent(`Email: ${email}\nRole: ${role}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" style={{ background: A.ink, color: A.bg, padding: narrow ? "56px 24px 28px" : "80px 48px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.4fr 1fr", gap: narrow ? 40 : 80, marginBottom: 56 }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color: "#a89e8a", letterSpacing: "0.18em", marginBottom: 24 }}>
            ✱ §07 · JOIN THE EARLIEST FLIGHT
          </div>
          <h2 className="serif" style={{ fontSize: narrow ? 44 : 64, fontWeight: 500, lineHeight: 0.98, letterSpacing: "-0.02em", margin: 0 }}>
            Get a tail number.
          </h2>
          <p className="serif" style={{ fontSize: narrow ? 16 : 18, color: "#cdc3ad", margin: "20px 0 0", maxWidth: 480 }}>
            We're onboarding a closed group of pilots and customers. Tell us who you are and we'll be in touch as access opens.
          </p>
        </div>
        <form onSubmit={submit}>
          <div style={{ display: "flex", borderBottom: `1px solid #5a5040` }}>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={CONTACT_EMAIL}
              className="serif"
              style={{ flex: 1, background: "transparent", border: "none", color: A.bg, padding: "14px 0", fontSize: 18, outline: "none", fontStyle: "italic" }}
            />
            <button type="submit" className="sans" style={{ background: A.mag, color: A.bg, border: "none", padding: "0 24px", fontSize: 13, letterSpacing: "0.04em", cursor: "pointer" }}>
              Request access →
            </button>
          </div>
          <div className="mono" style={{ fontSize: 10, color: "#a89e8a", letterSpacing: "0.14em", marginTop: 14, display: "flex", justifyContent: "space-between" }}>
            <span>I am a…</span>
            <span style={{ display: "flex", gap: 16 }}>
              {["PILOT", "CUSTOMER", "INVESTOR"].map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => setRole(r)}
                  className="mono"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: role === r ? A.mag : "#a89e8a",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  {role === r ? "●" : "○"} {r}
                </button>
              ))}
            </span>
          </div>
        </form>
      </div>
      <div style={{ display: "flex", gap: narrow ? 16 : 24, flexWrap: "wrap", paddingTop: 28, borderTop: `1px solid #2c2620`, marginBottom: 24 }}>
        <a href="#" className="mono" style={{ fontSize: 10, color: A.bg, letterSpacing: "0.18em", textDecoration: "underline", textUnderlineOffset: 4 }}>
          ↓ AVIARY iOS APP
        </a>
        <a href="#" className="mono" style={{ fontSize: 10, color: A.bg, letterSpacing: "0.18em", textDecoration: "underline", textUnderlineOffset: 4 }}>
          → AVIARY ACADEMY
        </a>
      </div>
      <div className="mono" style={{ fontSize: 10, color: "#a89e8a", letterSpacing: "0.16em", display: "flex", flexDirection: narrow ? "column" : "row", gap: narrow ? 8 : 0, justifyContent: "space-between", paddingTop: 16, borderTop: `1px solid #2c2620`, alignItems: narrow ? "flex-start" : "center" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <Logo size={16} bg={A.ink} ink={A.bg} />
          AVIARY © 2026
        </span>
        <span>NEW YORK · N40°44.5′ W74°00.2′</span>
        <span>EARLY ACCESS · CLOSED BETA</span>
      </div>
    </footer>
  );
}

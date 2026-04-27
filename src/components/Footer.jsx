import { useState } from "react";
import { A } from "./shared.jsx";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("PILOT");

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Avairy waitlist — ${role}`);
    const body = encodeURIComponent(`Email: ${email}\nRole: ${role}`);
    window.location.href = `mailto:hello@avairy.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" style={{ background: A.ink, color: A.bg, padding: "80px 48px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, marginBottom: 80 }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color: "#a89e8a", letterSpacing: "0.18em", marginBottom: 24 }}>
            ✱ §08 — JOIN THE EARLIEST FLIGHT
          </div>
          <h2 className="serif" style={{ fontSize: 64, fontWeight: 500, lineHeight: 0.98, letterSpacing: "-0.02em", margin: 0 }}>
            Get a tail number.
          </h2>
          <p className="serif" style={{ fontSize: 18, color: "#cdc3ad", margin: "20px 0 0", maxWidth: 480 }}>
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
              placeholder="you@example.com"
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
      <div className="mono" style={{ fontSize: 10, color: "#a89e8a", letterSpacing: "0.16em", display: "flex", justifyContent: "space-between", paddingTop: 24, borderTop: `1px solid #2c2620` }}>
        <span>AVAIRY © 2026</span>
        <span>NEW YORK, NY — N40°44.5′ W74°00.2′</span>
        <span>BUILT FOR THE PART 108 FUTURE</span>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { A, Link, Logo } from "./shared.jsx";
import { useIsNarrow } from "../hooks/useMediaQuery.js";
import { supabase } from "../lib/supabase.js";

export default function Footer({ sectionNumber = "07" }) {
  const narrow = useIsNarrow();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const canSubmit = email && role && status.state !== "submitting";

  const submit = async (e) => {
    e.preventDefault();
    if (!role) {
      setStatus({ state: "error", message: "Select a role to continue." });
      return;
    }
    if (!supabase) {
      setStatus({ state: "error", message: "Submission unavailable. Try again shortly." });
      return;
    }
    setStatus({ state: "submitting", message: "" });
    const { error } = await supabase.from("early_access").insert({ email, role });
    if (error) {
      setStatus({ state: "error", message: "Could not submit. Please try again." });
      return;
    }
    setStatus({ state: "success", message: "Thanks — we'll be in touch as TestFlight opens." });
    setEmail("");
    setRole("");
  };

  const statusColor =
    status.state === "success" ? A.bg : status.state === "error" ? A.mag : "#a89e8a";

  return (
    <footer id="contact" style={{ background: A.ink, color: A.bg, padding: narrow ? "56px 24px 28px" : "80px 48px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.4fr 1fr", gap: narrow ? 40 : 80, marginBottom: 56 }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color: "#a89e8a", letterSpacing: "0.18em", marginBottom: 24 }}>
            ✱ §{sectionNumber} · JOIN THE EARLIEST FLIGHT
          </div>
          <h2 className="serif" style={{ fontSize: narrow ? 44 : 64, fontWeight: 500, lineHeight: 0.98, letterSpacing: "-0.02em", margin: 0 }}>
            Get a tail number.
          </h2>
          <p className="serif" style={{ fontSize: narrow ? 16 : 18, color: "#cdc3ad", margin: "20px 0 0", maxWidth: 480 }}>
            We're onboarding a closed group of pilots and customers. Send us your email to request early access to TestFlight.
          </p>
        </div>
        <form onSubmit={submit} className="footer-form">
          <div style={{ display: "flex", borderBottom: `1px solid #5a5040`, opacity: status.state === "submitting" ? 0.6 : 1 }}>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Here"
              className="serif"
              style={{ flex: 1, background: "transparent", border: "none", color: A.bg, padding: "14px 0", fontSize: 18, outline: "none", fontStyle: "italic" }}
              disabled={status.state === "submitting"}
            />
            <button
              type="submit"
              className="sans"
              disabled={!canSubmit}
              style={{
                background: A.mag,
                color: A.bg,
                border: "none",
                padding: "0 24px",
                fontSize: 13,
                letterSpacing: "0.04em",
                cursor: canSubmit ? "pointer" : "not-allowed",
                opacity: canSubmit ? 1 : 0.55,
              }}
            >
              {status.state === "submitting" ? "Submitting…" : "Request access →"}
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
          {status.message && (
            <div
              className="mono"
              role="status"
              aria-live="polite"
              style={{ fontSize: 10, color: statusColor, letterSpacing: "0.14em", marginTop: 12 }}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
      <div style={{ display: "flex", gap: narrow ? 16 : 24, flexWrap: "wrap", paddingTop: 28, borderTop: `1px solid #2c2620`, marginBottom: 24 }}>
        <Link
          href="/ios"
          className="mono"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontSize: 10, color: A.bg, letterSpacing: "0.18em", textDecoration: "underline", textUnderlineOffset: 4 }}
        >
          ↓ AVIARY iOS APP
        </Link>
      </div>
      <div className="mono" style={{ fontSize: 10, color: "#a89e8a", letterSpacing: "0.16em", display: "flex", flexDirection: narrow ? "column" : "row", gap: narrow ? 8 : 0, justifyContent: "space-between", paddingTop: 16, borderTop: `1px solid #2c2620`, alignItems: narrow ? "flex-start" : "center" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <Logo size={16} bg={A.ink} ink={A.bg} />
          AVIARY © 2026
        </span>
        <span>NEW YORK · N40°44.5′ W74°00.2′</span>
        <span>EARLY ACCESS</span>
      </div>
      <div className="mono" style={{ fontSize: 9, color: "#7a715f", letterSpacing: "0.14em", lineHeight: 1.6, paddingTop: 14, marginTop: 14, borderTop: `1px solid #2c2620`, maxWidth: 720 }}>
        PRE-LAUNCH. PRODUCT IMAGERY REFLECTS THE iOS v0.6 SIMULATOR BUILD. ALL UNIT-ECONOMIC AND MARKET-SIZING FIGURES ARE ILLUSTRATIVE REFERENCE MATH, NOT FORECASTS. FAA-RELATED STATUSES (LAANC USS, PART 107 AUTO-APPROVAL, PART 108 ENGAGEMENT) REFLECT WORK IN PROGRESS UNLESS A FILING DATE IS STATED.
      </div>
    </footer>
  );
}

import { useEffect, useRef, useState } from "react";
import { A } from "./shared.jsx";
import { supabase } from "../lib/supabase.js";

const ROLE_COPY = {
  CUSTOMER: {
    eyebrow: "✱ EARLY ACCESS · CUSTOMER",
    title: "Need a pilot.",
    blurb: "Tell us who you are. We'll reach out as we open up the customer side of Aviary.",
    cta: "Request a pilot →",
    success: "Thanks — we'll be in touch as we open the customer queue.",
  },
  PILOT: {
    eyebrow: "✱ EARLY ACCESS · PILOT",
    title: "Join as a pilot.",
    blurb: "Tell us who you are. We'll send you a TestFlight invite as we onboard the next group of pilots.",
    cta: "Request access →",
    success: "Thanks — we'll be in touch as TestFlight opens.",
  },
};

export default function EarlyAccessModal({ role, onClose }) {
  const open = Boolean(role);
  const copy = role ? ROLE_COPY[role] : null;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    setStatus({ state: "idle", message: "" });
    setFirstName("");
    setLastName("");
    setEmail("");
    const t = requestAnimationFrame(() => firstFieldRef.current?.focus());
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const submitting = status.state === "submitting";
  const canSubmit = firstName.trim() && lastName.trim() && email.trim() && !submitting;

  const submit = async (e) => {
    e.preventDefault();
    if (!supabase) {
      setStatus({ state: "error", message: "Submission unavailable. Try again shortly." });
      return;
    }
    setStatus({ state: "submitting", message: "" });
    const { error } = await supabase.from("early_access").insert({
      email: email.trim(),
      role,
      first_name: firstName.trim(),
      last_name: lastName.trim(),
    });
    if (error) {
      setStatus({ state: "error", message: "Could not submit. Please try again." });
      return;
    }
    setStatus({ state: "success", message: copy.success });
  };

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${A.line}`,
    color: A.ink,
    padding: "12px 0",
    fontSize: 16,
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    fontSize: 10,
    color: A.ink3,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    marginBottom: 6,
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="early-access-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(26, 22, 18, 0.55)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: 20,
      }}
    >
      <div
        style={{
          background: A.bg,
          color: A.ink,
          width: "100%",
          maxWidth: 480,
          border: `1px solid ${A.line}`,
          padding: "32px 28px 28px",
          position: "relative",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="mono"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "transparent",
            border: "none",
            color: A.ink3,
            fontSize: 18,
            lineHeight: 1,
            padding: 6,
            letterSpacing: "0.1em",
          }}
        >
          ×
        </button>

        <div className="mono" style={{ fontSize: 10, color: A.ink3, letterSpacing: "0.18em", marginBottom: 14 }}>
          {copy.eyebrow}
        </div>
        <h2
          id="early-access-title"
          className="serif"
          style={{ fontSize: 38, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.02em", margin: "0 0 12px" }}
        >
          {copy.title}
        </h2>
        <p className="serif" style={{ fontSize: 15, lineHeight: 1.5, color: A.ink2, margin: "0 0 24px" }}>
          {copy.blurb}
        </p>

        {status.state === "success" ? (
          <div>
            <div
              className="mono"
              style={{ fontSize: 11, color: A.mag, letterSpacing: "0.16em", marginBottom: 14 }}
            >
              ● SUBMITTED
            </div>
            <p className="serif" style={{ fontSize: 16, color: A.ink, margin: "0 0 24px" }}>
              {status.message}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="sans"
              style={{
                fontSize: 13,
                background: A.ink,
                color: A.bg,
                border: "none",
                padding: "12px 20px",
                letterSpacing: "0.04em",
                fontWeight: 500,
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
              <div>
                <label className="mono" htmlFor="ea-first" style={labelStyle}>First name</label>
                <input
                  id="ea-first"
                  ref={firstFieldRef}
                  type="text"
                  required
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="serif"
                  style={inputStyle}
                  disabled={submitting}
                />
              </div>
              <div>
                <label className="mono" htmlFor="ea-last" style={labelStyle}>Last name</label>
                <input
                  id="ea-last"
                  type="text"
                  required
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="serif"
                  style={inputStyle}
                  disabled={submitting}
                />
              </div>
            </div>
            <div style={{ marginBottom: 22 }}>
              <label className="mono" htmlFor="ea-email" style={labelStyle}>Email</label>
              <input
                id="ea-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="serif"
                style={inputStyle}
                disabled={submitting}
              />
            </div>
            <button
              type="submit"
              disabled={!canSubmit}
              className="sans"
              style={{
                fontSize: 13,
                background: A.ink,
                color: A.bg,
                border: "none",
                padding: "12px 22px",
                letterSpacing: "0.04em",
                fontWeight: 500,
                opacity: canSubmit ? 1 : 0.55,
                cursor: canSubmit ? "pointer" : "not-allowed",
              }}
            >
              {submitting ? "Submitting…" : copy.cta}
            </button>
            {status.message && status.state === "error" && (
              <div
                className="mono"
                role="status"
                aria-live="polite"
                style={{ fontSize: 10, color: A.mag, letterSpacing: "0.14em", marginTop: 14 }}
              >
                {status.message}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

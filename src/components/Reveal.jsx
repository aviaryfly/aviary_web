import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, blur = 14, fade = 0.25 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08, rootMargin: "-8% 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <div
      ref={ref}
      style={{
        filter: visible ? "blur(0px)" : `blur(${blur}px)`,
        opacity: visible ? 1 : fade,
        transition:
          "filter 720ms cubic-bezier(0.22, 1, 0.36, 1), opacity 720ms cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "filter, opacity",
      }}
    >
      {children}
    </div>
  );
}

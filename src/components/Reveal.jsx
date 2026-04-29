import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";

function useInView(once = true, threshold = 0.12, rootMargin = "-6% 0px -6% 0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}

export default function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  threshold = 0.12,
  rootMargin = "-6% 0px -6% 0px",
  style,
  className,
  ...rest
}) {
  const { ref, inView } = useInView(true, threshold, rootMargin);
  const dataValue = direction === "up" ? (inView ? "in" : "out") : direction;

  return (
    <Tag
      ref={ref}
      data-reveal={dataValue}
      data-reveal-state={inView ? "in" : "out"}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Wrap N children with auto-incrementing --i style for staggered entrance.
export function Stagger({
  children,
  as: Tag = "div",
  step = 90,
  threshold = 0.18,
  rootMargin = "-6% 0px -6% 0px",
  className,
  style,
}) {
  const { ref, inView } = useInView(true, threshold, rootMargin);
  const items = Children.toArray(children);

  return (
    <Tag
      ref={ref}
      data-reveal-stagger={inView ? "in" : "out"}
      className={className}
      style={{ "--stagger": `${step}ms`, ...style }}
    >
      {items.map((child, i) => {
        if (!isValidElement(child)) return child;
        const childStyle = { ...(child.props.style || {}), "--i": i };
        return cloneElement(child, { key: child.key ?? i, style: childStyle });
      })}
    </Tag>
  );
}

export { useInView };

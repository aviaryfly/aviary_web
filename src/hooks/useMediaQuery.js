import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const get = () => (typeof window !== "undefined" ? window.matchMedia(query).matches : false);
  const [matches, setMatches] = useState(get);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const sync = () => setMatches(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, [query]);
  return matches;
}

export const useIsNarrow = () => useMediaQuery("(max-width: 760px)");
export const useIsTablet = () => useMediaQuery("(max-width: 1024px)");

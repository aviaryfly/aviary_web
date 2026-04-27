import { useEffect, useState } from "react";
import DirectionA from "./components/DirectionA.jsx";
import IosPage from "./components/IosPage.jsx";
import AcademyPage from "./components/AcademyPage.jsx";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname);
      const hash = window.location.hash;
      if (hash) {
        requestAnimationFrame(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  if (path === "/ios") return <IosPage />;
  if (path === "/academy") return <AcademyPage />;
  return <DirectionA name="AVIARY" heroLayout="split" />;
}

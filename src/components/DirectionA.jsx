import { A } from "./shared.jsx";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import { HowItWorks } from "./HowItWorks.jsx";
import LiveFeed from "./LiveFeed.jsx";
import IosPreview from "./IosPreview.jsx";
import Moat from "./Moat.jsx";
import Founders from "./Founders.jsx";
import Faq from "./Faq.jsx";
import Footer from "./Footer.jsx";
import Reveal from "./Reveal.jsx";

export default function DirectionA({ heroLayout = "split", name = "AVIARY" }) {
  return (
    <div style={{ background: A.bg, color: A.ink, minHeight: "100%", fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Nav name={name} />
      <Hero layout={heroLayout} />
      <Reveal><HowItWorks /></Reveal>
      <Reveal><LiveFeed /></Reveal>
      <Reveal><IosPreview /></Reveal>
      <Reveal><Moat /></Reveal>
      <Reveal><Founders /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><Footer sectionNumber="08" /></Reveal>
    </div>
  );
}

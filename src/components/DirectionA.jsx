import { A } from "./shared.jsx";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import { Sectors, HowItWorks } from "./HowItWorks.jsx";
import OriginStory from "./OriginStory.jsx";
import LiveFeed from "./LiveFeed.jsx";
import Products from "./Products.jsx";
import Laanc from "./Laanc.jsx";
import TechStack from "./TechStack.jsx";
import Founders from "./Founders.jsx";
import Part108 from "./Part108.jsx";
import Faq from "./Faq.jsx";
import Footer from "./Footer.jsx";
import Reveal from "./Reveal.jsx";

export default function DirectionA({ heroLayout = "split", name = "AVAIRY" }) {
  return (
    <div style={{ background: A.bg, color: A.ink, minHeight: "100%", fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Nav name={name} />
      <Hero layout={heroLayout} />
      <Reveal blur={6} fade={0.4}><Sectors /></Reveal>
      <Reveal><OriginStory /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><LiveFeed /></Reveal>
      <Reveal><Products /></Reveal>
      <Reveal><Laanc /></Reveal>
      <Reveal blur={8} fade={0.4}><TechStack /></Reveal>
      <Reveal><Founders /></Reveal>
      <Reveal><Part108 /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  );
}

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import Hero from "./components/Hero/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import AI from "./components/AI/index.jsx";
import Work from "./components/Work/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Skills from "./components/Skills/index.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "./components/Marquee";
import logo1 from "./assests/logos/logo1.png";
import logo2 from "./assests/logos/logo2.png";
import logo3 from "./assests/logos/logo3.png";
import Features from "./components/Features/index.jsx";
gsap.registerPlugin(ScrollTrigger);


function App() {
  useEffect(() => {
    const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 500)
})

gsap.ticker.lagSmoothing(0)
  }, []);

  const logos = [
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3
  ]
  return (
    <main className="App font-NohemiL bg-dark">
      <Hero />
      <Features />
      <Work />
      <Skills />
      <AboutUs />
      <AI />
      <Marquee ArrayData={logos} direction={"left"} speed={0.5} />
      <Footer />
    </main>
  );
}

export default App;

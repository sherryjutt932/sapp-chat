import React, { useLayoutEffect, useRef } from "react";

import Decentralized from "../../assests/images/Decentralized.png";
import Built from "../../assests/images/Built.png";
import Superior from "../../assests/images/Superior.png";
import ScrollerItem from "./ScrollerItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../Heading";
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const aboutRef = useRef();
  const aboutSec = useRef();
  const stericRef = useRef();

  useLayoutEffect(() => {
    // GSAP animation for the steric rotation
    gsap.to(stericRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "linear",
    });

    //GSAP animation for the horizontal scrolling
    gsap.timeline( {
      scrollTrigger: {
        trigger: aboutSec.current,
        start: "top top",
        end: () => "+=" + aboutSec.current.offsetWidth * 1.5,
        scrub: true,
        pin: true,
        anticipatePin:1,
      }
    }).to(
      aboutRef.current,
      {
        x: -(aboutRef.current.offsetWidth - (window.innerWidth/2)),
        ease: "none",
      },"a"
    );
  }, []);

  return (
    <section ref={aboutSec} 
    className="w-full h-screen overflow-hidden bg-dark text-white">
      <div className=" heroSection h-screen w-full relative px-16 2xl:px-32 py-12 flex flex-col justify-between">
        
        {/* heading */}
        <Heading text={"Enabled Technology"}/>

        {/* horizontal scroller */}
        <div
          ref={aboutRef}
          className="w-fit flex flex-nowrap flex-grow items-center"
        >
          <div>
            <div className="flex flex-nowrap mt-4 2xl:mt-8 gap-10">
              <ScrollerItem
                text="Decentralized"
                imageSrc={Decentralized}
                detail="Sappchat platform is decentralized through blockchain technology. Attacks on your sensitive data are impossible."
              />
              <ScrollerItem
                text="Built on Multi-Chains"
                imageSrc={Built}
                detail="The Sappchat is built on multi-chains technology smart contracts enable users to manage all their variety of digital assets securely in one place."
              />
              <ScrollerItem
                text="Superior end-to-end encryption"
                imageSrc={Superior}
                detail="Our security protocol developed on genuine end-to-end encryption and blockchain based authentication."
              />
              <ScrollerItem
                text="Decentralized"
                imageSrc={Decentralized}
                detail="Sappchat platform is decentralized through blockchain technology. Attacks on your sensitive data are impossible."
              />
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}

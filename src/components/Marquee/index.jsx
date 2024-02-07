import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import "./Marquee.css"
import { gsap } from "gsap";

export default function Marquee({ ArrayData, direction, speed, ...props }) {
  const marquee = useRef();
  const [mounted, setMounted] = useState(true);
  const first = useRef();
  const second = useRef();
  let xPercent = 0;


  const rightAnimation = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.to([first.current, second.current], { xPercent: xPercent, duration: 0 });
    requestAnimationFrame(rightAnimation);
    xPercent += speed / 10;
  };

  const leftAnimation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.to([first.current, second.current], { xPercent: xPercent, duration: 0 });
    requestAnimationFrame(leftAnimation);
    xPercent -= speed / 10;
  };

  useEffect(() => {
    const resizeHandler = () => {
      setMounted(!mounted);
    };

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };

  }, []);
  
 useLayoutEffect(() => {
  console.log("aaa");
    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }

  }, [direction, mounted, leftAnimation,rightAnimation ]);


  
  return (
    <section className="marqueeSec bg-black">
      <div ref={marquee} className="marqueeCon">
        <div
          className="marqueeDiv"
          ref={first}
        >
          {
            ArrayData.map((item, index) => (
              <div key={index}>
                <img src={item} alt="" />
              </div>
            ))
          }
        </div>
        <div
          ref={second}
          className="marqueeDiv2"
        >
          {ArrayData.map((item, index) => (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

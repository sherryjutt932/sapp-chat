import React, { forwardRef } from "react";
import Marquee from "./Marquee";
import clsx from "clsx";
import Underline from "../Underline";
import IconBtn from "../Buttons/IconBtn";
import ScrollDown from "../ScrollDown/index.jsx"

import playstore from "../../assests/icons/playstore.svg";
import applestore from "../../assests/icons/applestore.svg";
import playstoreL from "../../assests/icons/playstoreL.svg";
import applestoreL from "../../assests/icons/applestoreL.svg";

const Head = forwardRef(({ theme, z }, ref) => {
  return (
    <div className=" h-[calc(100vh-6rem)] leading-none flex flex-col py-16 justify-between ">
      {/* main heading */}
      <div className="font-libre font-normal text-[6.2vw] leading-tight tracking-wide">
        The world’s first <br />
        <Underline z={z} text={"Decentralized"} /> Messaging <br />
        App meets{" "}
        <Marquee direction={"left"} speed={1}>
          Decentralized *
        </Marquee>
        <br />
        Banking
        <span
          ref={ref}
          className={clsx(
            theme === "dark" ? "bg-main" : "bg-sec",
            "w-[2vw] h-[2vw] aspect-square inline-block rounded-full align-baseline"
          )}
        ></span>{" "}
        <span className="inline-flex gap-12 px-6 leading-none align-middle">
          <IconBtn
            theme={theme}
            icon={theme === "dark" ? playstoreL : playstore}
            label1={"get it on"}
            label2={"Google play"}
          />
          <IconBtn
            theme={theme}
            icon={theme === "dark" ? applestoreL : applestore}
            label1={"get it on"}
            label2={"Apple play"}
          />
        </span>
      </div>
      <p className="font-normalF font-normal text-[2vw] leading-[1.1]">
        Be a part of the future of decentralized Communication
      </p>

      <ScrollDown theme={theme}/>
    </div>
  );
});

export default Head;

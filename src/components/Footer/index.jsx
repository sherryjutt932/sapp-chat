import React from "react";
import logoicon from "../../assests/images/logoicon.png";
import appstore from "../../assests/images/appstore.png";
import googleplay from "../../assests/images/googleplay.png";
import { footerLink, googleplayLink, appstoreLink } from "../../Constants/links";

export default function Footer() {
 
  return (
    <div className="bg-dark flex flex-col items-center py-32 sm:py-44 px-5 sm:px-16 gap-12">
      <a href="/">
        <img className="w-32 sm:w-40" src={logoicon} alt="" />
      </a>
      <div className="flex gap-10">
        <a href={googleplayLink} target="_blank">
          <img src={googleplay} alt="" />
        </a>
        <a href={appstoreLink} target="_blank">
          <img src={appstore} alt="" />
        </a>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        {footerLink.map(({ label, src }, index) => {
          return (
            <a
            key={index}
              className="basis-[40%] sm:basis-[10%] no-underline text-white text-center text-xl sm:text-2xl font-normalF whitespace-nowrap"
              href={src}
              target="_blank"
            >
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

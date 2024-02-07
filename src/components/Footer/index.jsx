import React from "react";
import logoicon from "../../assests/images/logoicon.png";
import appstore from "../../assests/images/appstore.png";
import googleplay from "../../assests/images/googleplay.png";

export default function Footer() {
    const data = [
        {
            label:"Terms of Use",
            src:"/"
        },
        {
            label:"Privacy Policy",
            src:"/"
        },
        {
            label:"AML & KYC Policy",
            src:"/"
        },
        {
            label:"Terms and Conditions",
            src:"/"
        },
    ]
  return (
    <div className="bg-dark flex flex-col items-center py-44 px-16 gap-12">
      <a href="/">
      <img className="w-40" src={logoicon} alt="" />
      </a>
      <div className="flex gap-10">
        <a href="/">
        <img src={googleplay} alt="" />
        </a>
        <a href="/">
        <img src={appstore} alt="" />
        </a>
      </div>
      <div className="flex gap-10">
        {
            data.map(({label, src})=>{
                return(
                    <a className="no-underline text-white text-2xl font-normalF" href={src}>
        {label}
        </a>
                )
            })
        }
      </div>
    </div>
  );
}

// ScrollerItem.js
import React from "react";

const ScrollerItem = ({ text, imageSrc, detail }) => (
  <div className="sm:w-[500px] flex flex-col gap-6 shrink-0 rounded-2xl border border-[#ffffff30] font-normalF px-8 py-12"  style={{background:`linear-gradient(135deg, #00000080 , #00000000)`}}>
    <img src={imageSrc} alt={text} className="block w-32" />
    <h1 className="text-4xl">{text}</h1>
    <p className="text-xl opacity-50 leading-loose font-light w-[90%]">{detail}</p>
  </div>
);

export default ScrollerItem;

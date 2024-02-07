import React, { useState } from "react";
import Icon from "./Icon";
import logo from "../../assests/images/logo.png";

export default function Navbar({ theme }) {
  const [isActive, setisActive] = useState(0);
  const navArray = ["Home", "Features", "Company", "Docs", "App Token", "Stake App"];

  const setActive = (index) => {
    setisActive(index);
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "text-white" : "text-black "
      } w-full relative top-0 left-0 overflow-hidden flex items-center h-fit py-8 justify-between font-Satoshi whitespace-nowrap`}
    >
      <div>
        <a href="/">
        <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex-1 gap-8 flex justify-end items-center">
        {navArray.map((item, index) => {
          return (
            <Icon
              theme={theme}
              key={index}
              index={index}
              isActive={isActive}
              setActive={setActive}
            >
              {item}
            </Icon>
          );
        })}
      </div>
      
      <span
        className={`${
          theme === "dark" ? "" : ""
        } border-gray-c5 absolute bottom-0 rounded-full left-1/2 -translate-x-1/2 border-b w-full`}
      ></span>
    </nav>
  );
}

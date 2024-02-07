import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function Popup({ handleMenuClick, isMenu, navArray }) {
  return (
    <div className="relative">
        <div onClick={handleMenuClick} className="w-8 h-8 relative z-50">
            <div className={`absolute left-1/2 -translate-x-1/2 -translate-y-[50%] h-[3px] bg-black transition-all duration-500 ease rounded-lg ${isMenu? 'rotate-45 top-[50%] w-6' : 'top-[35%] w-8'}`}></div>
            <div className={`absolute left-1/2 -translate-x-1/2 -translate-y-[50%] h-[3px] bg-black transition-all duration-500 ease rounded-lg ${isMenu? '-rotate-45 top-[50%] w-6' : 'top-[65%] w-8'}`}></div>
        </div>

      <div className={`absolute shadow-2xl bg-white rounded-2xl z-40 overflow-hidden transition-all duration-1000 ease top-0 right-0 ${!isMenu?'m-2 w-[0px] h-[0px]':'-m-2 w-[300px] h-[360px]'}`}>
        <div className="flex flex-col justify-end items-start p-4 gap-2 h-full">
        {navArray.map((item, index) => {
          return (
            <a
              key={index}
              href="/"
              className={` ${!isMenu?'scale-0':'scale-100'} origin-bottom-left transition-all duration-1000 ease font-normalF text-2xl text-black w-full active:bg-gray-200 hover:bg-gray-200 text-left rounded-md px-2 py-1`}
            >
              {item}
            </a>
          );
        })}
        </div>
      </div>
    </div>
  );
}

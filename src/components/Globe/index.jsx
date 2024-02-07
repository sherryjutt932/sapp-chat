import React from "react";
import logoBig from "../../assests/images/logoBig.png";

import avatar1 from "../../assests/images/avatar1.png";
import avatar2 from "../../assests/images/avatar2.png";
import avatar3 from "../../assests/images/avatar3.png";
import avatar4 from "../../assests/images/avatar4.png";

import arrowUp from "../../assests/icons/arrowUp.svg";
import arrowDown from "../../assests/icons/arrowDown.svg";
import "./style.css";

function Avatar({img, pos, stroke = "#ffffff", size = "big", duration=20}) {
  return (
    <div className={`absolute aspect-square ${pos} z-50`}>
      <img src={img} alt="" className="block w-[70%] aspect-square rounded-full absolute absCenter z-50" />
      <div className={`absolute aspect-square bg-dark absCenter rounded-full z-20 ${size === "big"? 'w-[85%]':'w-[90%]'}`}></div>
      <div className="absolute w-[100%] rotateCenter aspect-square rounded-full z-10" style={{background:`linear-gradient(to bottom, ${stroke}, ${stroke}50 40%, ${stroke}00 80%)` , animationDuration:`${duration}s`}}></div>
      <div className="absolute w-[100%] rotateCenter aspect-square rounded-full z-0 blur-xl" style={{background:`linear-gradient(to bottom, ${stroke}, ${stroke}50 40%, ${stroke}00 80%)`, animationDuration:`${duration}s`}}></div>
    </div>
  )
}

function WaveButton({img , pos}) {
  return (
    <div className={`w-16 rounded-full flex justify-center items-center absolute aspect-square ${pos}`}>
      <div className="relative z-50">
        <img src={img} alt="" />
      </div>
      <div className="w-full h-full rounded-full absolute absCenter z-30" style={{background:"linear-gradient(-45deg, #0057FF, #009FFF)"}}></div>
      <div className="w-full h-full bg-[#0085D750] rounded-full absolute waveCenter z-20" style={{animationDelay:"2s"}}></div>
      <div className="w-full h-full bg-[#0085D750] rounded-full absolute waveCenter z-10"></div>
    </div>
  )
}


export default function Globe({theme}) {
  const circleClass =
    "rounded-full border aspect-square flex items-center justify-center relative";

  return (
    <div className={`py-32 relative ${theme==="light" && 'opacity-0'}`}>
      <div className="h-1/3 w-full z-10 absolute top-24 left-0 flex flex-col items-center gap-6 pt-40 text-center" style={{background:`linear-gradient(to bottom, #181618 50%, #18161800)`}}>
        <h1 className="text-3xl font-normalF font-semibold">What is Sappchat?</h1>
        <p className="text-xl font-normalF w-3/5 font-light">Sappchat will help to establish a new era of secure communication and easy peer-to-peer transfer of money and cryptocurrencies to everyone you know around the world</p>
      </div>
      <div className="h-1/3 w-full z-10 absolute bottom-0 left-0" style={{background:`linear-gradient(to top, #181618 , #18161800)`}}></div>

      <div className="w-full h-full flex items-center justify-center">
        <div className={`p-[10vw] border-[#ffffff30] ${circleClass}`}>

          <div className={`p-[5vw] border-[#ffffff00] ${circleClass}`}>
            <div className="w-full h-full absolute rotateCenter border border-[#ffffff50] rounded-full" style={{animationDuration:"50s"}}>
              <div className="w-3 h-3 bg-white absolute right-[20%] top-[90%] -translate-y-1/2 translate-x-1/2 z-10 rounded-full"></div>
              <div className="w-3 h-3 bg-white absolute left-[20%] top-[90%] -translate-y-1/2 -translate-x-1/2 z-10 rounded-full"></div>
            </div>
            <div className="absolute aspect-square left-[50%] bottom-[-1%] translate-y-1/2 -translate-x-1/2 z-50">
                <h1 className="text-5xl font-normalF font-bold" style={{textShadow:"1px 2px 20px #ffffff80"}}>180+</h1>
                <p className="text-xl font-normalF w-3/5 font-light uppercase">Languages</p>
              </div>
              <WaveButton pos={"left-[14%] top-[84%] -translate-y-1/2 -translate-x-1/2"} img={arrowUp}/>
              <WaveButton pos={"right-[0%] top-[55%] -translate-y-1/2 translate-x-1/2"} img={arrowDown}/>

            <div className={`p-[10vw] border-[#ffffff00] ${circleClass}`}>

              <div className="w-full h-full absolute rotateCenter border border-[#ffffff70] rounded-full" style={{animationDuration:"40s"}}>
                <div className="w-3 h-3 bg-white absolute right-[10%] top-[20%] -translate-y-1/2 translate-x-1/2 z-10 rounded-full"></div>
              </div>
              <div className={`p-[8vw] border-[#ffffff00] ${circleClass}`}>
                <div className="w-full h-full absolute rotateCenter border border-[#ffffff90] rounded-full" style={{animationDuration:"50s"}}>
                  <div className="w-3 h-3 bg-white absolute left-[4%] top-[30%] -translate-y-1/2 -translate-x-1/2 z-10 rounded-full"></div>
                  <div className="w-3 h-3 bg-white absolute left-[20%] top-[90%] -translate-y-1/2 -translate-x-1/2 z-10 rounded-full"></div>
                </div>
                <Avatar pos={"w-[9vw] left-[30%] top-[5%] -translate-y-1/2 -translate-x-1/2"} img={avatar1} stroke="#ffffff"/>
                <Avatar pos={"w-[10vw] right-[4%] top-[40%] -translate-y-1/2 translate-x-1/2"} img={avatar2} stroke="#00AB5E" duration={15}/>
                <img src={logoBig} alt="" />
              </div>

              <div className="absolute aspect-square left-[2%] top-[35%] -translate-y-1/2 -translate-x-1/2  z-50">
                <h1 className="text-5xl font-normalF font-bold" style={{textShadow:"1px 2px 20px #ffffff80"}}>50+</h1>
                <p className="text-xl font-normalF w-3/5 font-light uppercase">Tokens</p>
              </div>
              <Avatar pos={"w-[8.5vw] left-[2%] top-[58%] -translate-y-1/2 -translate-x-1/2"} img={avatar4} stroke="#0085D7" size={"small"}/>
              <Avatar pos={"w-[8vw] right-[18%] top-[88%] -translate-y-1/2 translate-x-1/2"} img={avatar3} stroke="#FFE600" duration={10}/>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

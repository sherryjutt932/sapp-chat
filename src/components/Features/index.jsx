import React from 'react'
import features1 from "../../assests/features/features1.png";
import features2 from "../../assests/features/features2.png";
import features3 from "../../assests/features/features3.png";
import features4 from "../../assests/features/features4.png";

export default function Features() {
  return (
    <div className='flex flex-col items-center py-32 text-white font-normalF text-3xl font-semibold px-5 sm:px-16'>
        <h1 className='frombelowanim'>As featured in</h1>
        <div className='frombelowanim w-full flex flex-wrap sm:flex-nowrap justify-center items-center py-12 gap-16'>
                <img className='w-[30%] sm:w-[15%] block max-h-[60px] object-contain' src={features1} alt="" />
                <img className='w-[30%] sm:w-[15%] block max-h-[60px] object-contain' src={features2} alt="" />
                <img className='w-[30%] sm:w-[15%] block max-h-[60px] object-contain' src={features3} alt="" />
                <img className='w-[30%] sm:w-[15%] block max-h-[60px] object-contain' src={features4} alt="" />
        </div>
    </div>
  )
}

import React from 'react'
import Heading from '../Heading'
import AICard from './AICard'
import bitcoin from "../../assests/images/bitcoin.png";

export default function AI() {
  return (
    <div className='bg-dark px-16 py-64 text-white flex flex-col items-center gap-5' >
        <Heading text={"Artificial Intelligence"}/>
        <p className='text-2xl font-normalF leading-normal w-3/5 text-center'>
        Sappchat’s AI allows you to use your voice to take action. Search for exchange partners, surf your contact and manage your wallet without touching the device.
        </p>

        <div className='w-full flex mt-8 gap-6 flex-wrap'>
        <AICard img={bitcoin} price={"1 EUR = 261 USD"} arrive={"30 min"} id={"...04efa56865ff123"} />
        <AICard img={bitcoin} price={"1 EUR = 261 USD"} arrive={"30 min"} id={"...04efa56865ff123"} />
        <AICard img={bitcoin} price={"1 EUR = 261 USD"} arrive={"30 min"} id={"...04efa56865ff123"} />
        </div>
    </div>
  )
}

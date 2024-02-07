import React from 'react'

export default function Heading({text}) {
  return (
    <div className="font-libre text-[3vw] text-center">
          {text}
          <span className="inline-block w-6 h-6 rounded-full bg-sec ml-2"></span>
        </div>
  )
}

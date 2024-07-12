import Image from "next/image";
import React from "react";

import leftb from '@/public/brackets/left-bracket.svg'
import rightb from '@/public/brackets/right-bracket.svg'



const TextInBrackets = ({ text="", className="" }) => {
  return (
    <span className={`flex justify-center items-center gap-[1%] ${className}`}>
        <Image src={leftb} alt="leftb" className="w-[30%] " />
        {text}
        <Image src={rightb} alt="rightb" className="w-[30%]" />
    </span>
  )
}

export default TextInBrackets

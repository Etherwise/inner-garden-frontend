import Image from "next/image";
import React from "react";
import leftb from '@/public/brackets/left-bracket.svg'
import rightb from '@/public/brackets/right-bracket.svg'



const BracketsWithText = ({bracketsData}) => {
  return (
    <h1 className={`flex justify-center items-center lg:h-fit h-full`}>
    <span className={`${bracketsData?.leftText?.properties} md:mx-1 mx-[2px] `}>{bracketsData?.leftText?.text}</span>
    <Image src={leftb} alt="leftb" className={`${bracketsData?.brackets.properties} h-[80%]`} />
    <span className={`${bracketsData?.middleText?.properties} md:mx-1 mx-[2px] `}>{bracketsData?.middleText?.text}</span>
    <Image src={rightb} alt="rightb" className={`${bracketsData?.brackets.properties} h-[80%]`} />
    <span className={`${bracketsData?.rightText?.properties} md:mx-1 mx-[2px] `}>{bracketsData?.rightText?.text}</span>
  </h1>
  )
}

export default BracketsWithText

import Image from "next/image";
import React from "react";
import leftb from '@/public/brackets/left-bracket.svg'
import rightb from '@/public/brackets/right-bracket.svg'



const TextWithBrackets = ({ bracketsData, className }) => {
  return (
    <p className={`flex justify-center items-center lg:h-fit ${className}`}>
      {
        bracketsData.leftText
        ? 
        <span className={`${bracketsData.leftText.properties} md:mx-1 mx-[2px] `}>{bracketsData.leftText.text}</span>
        :
        <></>
      }
      
      <Image src={leftb} alt="leftb" className={`${bracketsData?.brackets?.properties}`} />
      <span className={`${bracketsData?.middleText?.properties} md:mx-1 mx-[2px] `}>{bracketsData.middleText.text}</span>
      <Image src={rightb} alt="rightb" className={`${bracketsData?.brackets?.properties}`} />

      {
        bracketsData.rightText
        ? 
        <span className={`${bracketsData.rightText.properties} md:mx-1 mx-[2px] `}>{bracketsData.rightText.text}</span>
        :
        <></>
      }
    </p>
  )
}

export default TextWithBrackets

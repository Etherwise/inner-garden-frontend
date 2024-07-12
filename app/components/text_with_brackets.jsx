/* eslint-disable react/display-name */
'use client'
import Image from "next/image";
  import React , {forwardRef} from "react";
  import leftb from '@/public/brackets/left-bracket.svg'
  import rightb from '@/public/brackets/right-bracket.svg'

  const TextWithBrackets = forwardRef(({ bracketsData, className }, ref) => {
    return (
      <p className={`flex justify-center items-center lg:h-fit ${className}`} ref={ref}>
        {bracketsData.leftText ? (
          <span className={`${bracketsData.leftText.properties} md:mx-1 mx-[2px] `}>
            {bracketsData.leftText.text}
          </span>
        ) : null}
        
        <Image src={leftb} alt="left bracket" className={`${bracketsData?.brackets?.properties}`} />
        <span className={`${bracketsData?.middleText?.properties} md:mx-1 mx-[2px] `}>
          {bracketsData.middleText.text}
        </span>
        <Image src={rightb} alt="right bracket" className={`${bracketsData?.brackets?.properties}`} />
        
        {bracketsData.rightText ? (
          <span className={`${bracketsData.rightText.properties} md:mx-1 mx-[2px] `}>
            {bracketsData.rightText.text}
          </span>
        ) : null}
      </p>
    );
  });
  
  export default TextWithBrackets;
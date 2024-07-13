'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import womanImage from '@/public/assets/banner/banner.png'
import useClipBuilder from '@/app/_hooks/clip_path_calculations';

const SquareCard = ({cardImage , children , upperAngle=5,lowerAngle=7, className = ""}) => {

  const elementRef = useRef(null);
  const {squareClip} = useClipBuilder()

  useEffect(() => {
    // shapeRef, upperAnglePercent = 20 , lowerAnglePercent = 12, pseudo = false
    squareClip(elementRef , upperAngle , lowerAngle, true);
  }, [])
  
  return (
    <div ref={elementRef} className={`
    relative grid place-items-center px-9
    before:content-[""] before:absolute before:w-full before:h-full before:-z-10 before:bg-white
    before:bg-[url(/assets/banner/banner.png)] before:bg-no-repeat before:bg-[length:100%_40%] before:bg-top
    pseduo-clip-path
    ${className}`}>
      {children}
    </div>

  )
}

export default SquareCard
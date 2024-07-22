'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import womanImage from '@/public/assets/cards/butterfly.png'
import useClipBuilder from '@/app/_hooks/clip_path_calculations';

const SquareCard = ({cardImage , children , upperAngle=5,lowerAngle=7, className = {main : "" , image : "" , text : ""}}) => {

  const imageTextRef = useRef(null);
  const {squareClip} = useClipBuilder()

  useEffect(() => {
  // shapeRef, upperAnglePercent = 20 , lowerAnglePercent = 12, pseudo = false
  squareClip(imageTextRef , upperAngle , lowerAngle )
  }, [squareClip,upperAngle,lowerAngle])
  
  return (
    <div className={`relative w-fit h-fit ${className.main}`}>
      <section className={`image-text min-w-[350px] h-[350px] `} ref={imageTextRef}>
      <Image src={cardImage ? cardImage : womanImage} alt='womanImage' className={`h-[40%] w-[100%] object-cover ${className.image}`}/>
        <p className={`bg-white w-full min-h-[60%] h-fit px-8 py-6 font-bold 
          text-lg text-left text-purple-inner-octagon ${className.text}`}>Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden. Around the world, a new </p>
      </section>
          {children}
    </div>

  )
}

export default SquareCard
'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import womanImage from '/public/banner/banner.png'
import useClipBuilder from '@/app/_hooks/clip_path_calculations';

const SquareCard = ({cardImage , children , upperAngle=5,lowerAngle=7, className = {main : "" , image : "" , text : ""}}) => {

  const imageTextRef = useRef(null);
  const {squareClip} = useClipBuilder()

  useEffect(() => {
  // shapeRef, upperAnglePercent = 20 , lowerAnglePercent = 12, pseudo = false
  squareClip(imageTextRef , upperAngle , lowerAngle )
  }, [squareClip,upperAngle,lowerAngle])
  
  return (
    <div className={`relative w-[350px] h-[350px] ${className.main}`}>
      <section className={`image-text w-full h-full`} ref={imageTextRef}>
        <Image src={cardImage ? cardImage : womanImage} alt='womanImage' className={`min-h-[40%] w-[100%] ${className.image}`}/>
        <p className={`bg-white w-full min-h-[60%] px-8 py-6 font-bold text-lg text-left ${className.text}`}>motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our</p>
      </section>
          {children}
    </div>

  )
}

export default SquareCard
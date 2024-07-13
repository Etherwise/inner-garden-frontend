'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import womanImage from '@/public/assets/banner/banner.png'
import useClipBuilder from '@/app/_hooks/clip_path_calculations';

const RectangleCard = ({cardImage , children,upperAngle=5,lowerAngle=7,className = {main : "" , image : "" , text : ""}}) => {

  const imageTextRef = useRef(null);
  const {rectClip} = useClipBuilder()

  useEffect(() => {
  // shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false
  rectClip(imageTextRef , upperAngle , lowerAngle )
  }, [rectClip , upperAngle , lowerAngle])
  
  return (
    <div className={`relative w-[350px] h-fit ${className.main}`}>
      <section className={`image-text w-full h-full`} ref={imageTextRef}>
        <Image src={cardImage ? cardImage : womanImage} alt='womanImage' className={`h-[45%] w-[100%] ${className.image}`}/>
        <p className={`bg-white w-full min-h-[180px] px-8 py-8 font-bold text-lg text-left ${className.text}`}>motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our</p>
      </section>
          {children}
    </div>

  )
}

export default RectangleCard
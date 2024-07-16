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
    <div className={`relative h-full w-full`}>
      <section className={`image-text h-full bg-white ${className.main}`} ref={imageTextRef}>
        <Image src={cardImage ? cardImage : womanImage} alt='womanImage' className={`h-[45%] w-[100%] object-cover ${className.image}`}/>
        <p className={`w-full h-fit p-8 font-semibold text-lg text-left text-purple-inner-octagon ${className.text}`}>
        motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can</p>
      </section>
          {children}
    </div>

  )
}

export default RectangleCard
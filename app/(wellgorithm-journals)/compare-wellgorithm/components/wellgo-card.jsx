'use client'
import useClipBuilder from '@/app/hooks/clip_path_calculations'
import React, { useEffect, useRef } from 'react'

const WelgoCard = ({text,tags}) => {

    const wellgoRef = useRef(null)
    const octaRef = useRef(null)
    const textRef = useRef(null)
    const textRef1 = useRef(null)
    const textRef2 = useRef(null)
    const textRef3 = useRef(null)
    const {arrowClip,octagonClip} = useClipBuilder()

    useEffect(() => {
      
        octaRef.current.style.top = `${(wellgoRef.current.clientHeight - octaRef.current.clientHeight) / 2}px`;
        octaRef.current.style.right = `${-(octaRef.current.clientWidth / 2)}px`;
        textRef.current.style.bottom = `${-(textRef.current.clientHeight / 2)}px`

        arrowClip(wellgoRef , 50 , "left");
        arrowClip(textRef1 , 10 , "left");
        arrowClip(textRef2 , 10 , "left");
        arrowClip(textRef3 , 10 , "left");
        octagonClip(octaRef);

    }, [])
    
  return (
    <section
    className="relative h-fit w-fit mb-10 min-h-[232px]">
    <p className="h-full font-extrabold text-purple-text w-[450px] bg-white pl-28 pr-20 py-20" ref={wellgoRef}>
      {text}
    </p>
    <span
      className="test-octa bg-orange-dark absolute h-12 w-12 flex items-center justify-center text-white"
      ref={octaRef}
    >
     20
    </span>
    <section className='absolute flex gap-0 left-[50%] translate-x-[-50%]' ref={textRef}>
     <span ref={textRef1} className='bg-orange-mid py-2 px-5 -mx-1 text-xs font-bold text-white'>{tags ? tags.tag1 : "love"}</span>
     <span ref={textRef2} className='bg-purple-inner-octagon py-2 px-5 -mx-1 text-xs font-bold text-white'>{tags ? tags.tag2 : "peace"}</span>
     <span ref={textRef3} className='bg-orange-mid py-2 px-5 -mx-1 text-xs font-bold text-white'>{tags ? tags.tag3 : "kindness"}</span>
    </section>
  </section>
  )
}

export default WelgoCard
'use client'
import React, { useEffect, useRef } from 'react'
import useClipBuilder from '../hooks/clip_path_calculations';

const Page = () => {


    const shapeRef = useRef(null);
    const {hexagonClip} = useClipBuilder();

    useEffect(() => {
    
        hexagonClip(80,shapeRef)
    
    }, [])
    

  return (
    <div className='h-[100vh] p-[20%] px-[35%]'>

      <div className='w-[700px] h-[350px] bg-black' ref={shapeRef}>



      </div>

    </div>
  )
}

export default Page
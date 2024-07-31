import React, { useEffect, useRef } from 'react'
import ComponentContainer from './componentContainer'
import useClipBuilder from '@/app/_hooks/clip_path_calculations'

const XbtButton = ({className}) => {
  
  const octaRef1 = useRef(null)
  const octaRef2 = useRef(null)
  const containerRef = useRef(null);
  
  const { octagonClip } = useClipBuilder();

  useEffect(() => {
      octagonClip(octaRef1,25)
      octagonClip(octaRef2,25)
      if (containerRef.current) {
        containerRef.current.style.clipPath = 'polygon(0% 0, 90% 0, 100% 10%, 100% 90%, 90 100%,0 100%)' 
      }
  }, []);


  

  

  return (
    <ComponentContainer className={`bg-[url('/assets/banner/banner.png')] bg-no-repeat bg-cover ${className}`} ref={containerRef}>
        
            <div ref={octaRef1} className="bg-purple-bg-light w-44 h-44 absolute bottom-[-7%] p-[1%] cursor-pointer">
            <div ref={octaRef2} className="bg-[#40ad48] w-full h-full flex items-center justify-center">
              <p className="text-[#FFF579] text-center text-2xl font-extrabold">journal<br />in 3D</p>
            </div>
            </div>

        </ComponentContainer>
  )
}

export default XbtButton
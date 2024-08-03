import React, { useEffect, useRef } from 'react'
import ComponentContainer from './componentContainer'
import useClipBuilder from '@/app/_hooks/clip_path_calculations'

const XbtButton = ({className}) => {
  
  const octaRef1 = useRef(null)
  const octaRef2 = useRef(null)
  const containerRef = useRef(null);
  
  const { octagonClip } = useClipBuilder();
  const path =  'polygon(0 0, 88% 0, 100% 10%, 100% 90%, 88% 100%, 0 100%)';
  useEffect(() => {
      octagonClip(octaRef1,25)
      octagonClip(octaRef2,25)
      if (containerRef.current) {
        containerRef.current.style.setProperty('--path',path);
      }
  }, []);


  

  

  return (
    <ComponentContainer className={`overflow-visible  before:content-[""] before:bg-no-repeat before:bg-[url(/assets/banner/banner.png)] before:bg-cover 
      before:absolute before:top-0 before:left-0 before:w-full before:h-full pseudo-clip-path before:z-[-10] before:bg-purple-dark ${className}`} ref={containerRef}>
    
            <div ref={octaRef1} className="bg-purple-bg-light w-44 h-44 absolute bottom-[-7%] p-[1%] cursor-pointer">
            <div ref={octaRef2} className="bg-[#40ad48] w-full h-full flex items-center justify-center">
              <p className="text-[#FFF579] text-center text-2xl font-extrabold">journal<br />in 3D</p>
            </div>
            </div>

        </ComponentContainer>
  )
}

export default XbtButton
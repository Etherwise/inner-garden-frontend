'use client'
import useClipBuilder from "@/app/hooks/clip_path_calculations";
import React, { useEffect, useRef } from "react";

const Octagon = ({ children , className}) => {

  const octaRef = useRef(null)
  const {octagonClip} = useClipBuilder()
  useEffect(() => {
    
    octagonClip(octaRef);
    
  }, [])
  

  return (
    <div className="h-[80vh] bg-purple-bg-light flex items-center justify-center z-[0]">
      <div className="octa w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-[#ECEAF5] clip-octagon flex items-center justify-center" ref={octaRef}>
        <div className="octa w-[96%] h-[96%] bg-purple-outer-octagon clip-octagon flex items-center justify-center" ref={octaRef}>
          <div className="octa w-[83%] h-[83%] bg-white clip-octagon flex items-center justify-center" ref={octaRef}>
            <div className={`octa w-[95%] h-[95%] bg-purple-inner-octagon clip-octagon items-center justify-center flex flex-col ${className}`} ref={octaRef}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Octagon;

"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

import calculate from "@/app/_libs/position_calculation";


const TextCard = ({
  children="", angle=12, innerangle=15, className="", alignup=false
}) => {
  const elementRef = useRef();

  const { rectClipBanner } = useClipBuilder();

  useEffect(() => {
    const { leftEdge2 } = rectClipBanner(elementRef, angle, innerangle, true);
    console.log(leftEdge2)

    if (alignup) {
      elementRef.current.style.top = `${calculate(elementRef, leftEdge2, 100)}%`;
    }
  }, [angle]);

  return (
    <div ref={elementRef} className={`grid place-items-center
    before:content-[""] before:absolute before:w-full before:h-full before:-z-10 pseduo-clip-path before:bg-white
    p-12 font-semibold 
    ${className}`}>
      {children}
    </div>
  );
}

export default TextCard;
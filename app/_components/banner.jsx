"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const Banner = ({ className="", shape="rect", angle=[0,0], children="" }) => {
  const elementRef = useRef();

  const { hexagonClip, rectClip, arrowClip , rectClipBanner } = useClipBuilder();

  useEffect(() => {
    switch(shape) {
      case "hexagon":
        hexagonClip(elementRef, angle[0], true);
        break;
      case "rect":
        rectClip(elementRef, angle[0], angle[1], true);
        break;
      case "rectBanner":
        rectClipBanner(elementRef, angle[0], angle[1], true);
        break;
      case "arrow":
        arrowClip(elementRef, angle[0], "left", true);
        break;
      
      default:
        hexagonClip(elementRef, angle[0], true);
        break;
    }
    
  }, [shape, hexagonClip, rectClip, arrowClip, angle]);

  return (
    <div ref={elementRef} className={`relative
      before:content-[""] before:bg-no-repeat before:bg-[url(/assets/banner/banner.png)] before:bg-cover before:bg-center
      before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 pseduo-clip-path
      ${className}`}>
      {children}
    </div>
  );
}
export default Banner;
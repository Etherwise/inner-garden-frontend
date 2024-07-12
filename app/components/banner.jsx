"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";

const Banner = ({ className="", shape="rect", angle=0, children="" }) => {
  const elementRef = useRef();

  const { hexagonClip, rectClip, pseduoRectClip, arrowClip } = useClipBuilder();

  useEffect(() => {
    switch(shape) {
      case "hexagon":
        hexagonClip(elementRef, angle);
        break;
      case "rect":
        pseduoRectClip(elementRef, angle, angle);
        break;
      case "arrow":
        arrowClip(elementRef, angle);
        break;
      default:
        hexagonClip(elementRef, angle);
        break;
    }
    
  }, [shape, hexagonClip, pseduoRectClip, arrowClip, angle]);

  return (
    <div ref={elementRef} className={`relative
      before:content-[""] before:bg-no-repeat before:bg-[url(/banner/banner.png)] before:bg-cover before:bg-center
      before:absolute before:top-0 before:left-0 before:w-full before:h-full pseduo-clip-path
      ${className}`}>
      {children}
    </div>
  );
}
export default Banner;
"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const Banner = ({ className="", shape="rect", angle=0, children="" }) => {
  const elementRef = useRef();

  const { hexagonClip, rectClip, arrowClip, squareClip } = useClipBuilder();

  useEffect(() => {
    switch(shape) {
      case "hexagon":
        hexagonClip(elementRef, angle, true);
        break;
      case "rect":
        rectClip(elementRef, angle, angle, true);
        break;
      case "square":
        squareClip(elementRef, angle, angle, true);
        break;
      case "arrow":
        arrowClip(elementRef, angle, "left", true);
        break;
      default:
        hexagonClip(elementRef, angle, true);
        break;
    }
    
  }, [shape, hexagonClip, rectClip, arrowClip, angle]);

  return (
    <div ref={elementRef} className={`relative
      before:content-[""] before:bg-no-repeat before:bg-[url(/assets/banner/banner.png)] before:bg-[length:100%_100%] before:bg-top
      before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 pseduo-clip-path
      ${className}`}>
      {children}
    </div>
  );
}
export default Banner;
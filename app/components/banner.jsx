"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";

const Banner = ({className="", shape="rect", angle=0, children=""}) => {
  const elementRef = useRef();

  const { hexagonClip, rectClip, arrowClip } = useClipBuilder();

  useEffect(() => {
    switch(shape) {
      case "hexagon":
        hexagonClip(elementRef, angle);
        break;
      case "rect":
        rectClip(elementRef, angle, angle);
        break;
      case "arrow":
        arrowClip(elementRef, angle);
        break;
      default:
        hexagonClip(elementRef, angle);
        break;
    }
    
  }, [shape, hexagonClip, rectClip, arrowClip, angle]);

  return (
    <div ref={elementRef} className={`relative
      bg-no-repeat bg-[url(/banner/banner.png)] bg-cover bg-center
      ${className}`}>
      {children}
    </div>
  );
}
export default Banner;
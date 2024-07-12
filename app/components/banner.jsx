"use client"

import { useEffect, useRef, useState } from "react";

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
        break;
    }
    
  }, [shape, hexagonClip, rectClip, arrowClip, angle]);

  return (
    <div ref={elementRef} className={`
      bg-no-repeat bg-[url(/footer/footer_bg.png)] bg-cover bg-center
      border-solid border-2
      ${className}`}>
      {children}
    </div>
  );
}
export default Banner;
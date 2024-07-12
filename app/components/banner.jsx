"use client"

import Link from 'next/link';
import { useEffect, useRef, useState } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";

const Banner = ({className="", shape="octagon", angle=0, children=""}) => {
  const elementRef = useRef();

  const { hexagonClip, rectClip } = useClipBuilder();

  useEffect(() => {
    switch(shape) {
      case "hexagon":
        hexagonClip(elementRef, angle);
        break;
      case "octagon":
        rectClip(elementRef, angle, angle);
        break;
      default:
        break;
    }
    
  }, [shape, hexagonClip, rectClip, angle]);

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
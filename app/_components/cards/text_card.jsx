"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const TextCard = ({
  children="", angle=3, className="", alignup=false
}) => {

  const elementRef = useRef();

  const { rectClip } = useClipBuilder();

  useEffect(() => {
    const { leftEdge2 } = rectClip(elementRef, angle, angle*2);

    if (alignup) {
        const ratio = parseInt(getComputedStyle(elementRef.current).height)/parseInt(getComputedStyle(elementRef.current.parentNode).height);
        elementRef.current.style.top = `${100-ratio*leftEdge2}%`;
    }
  }, []);

  return (
    <div ref={elementRef} className={`
    bg-white p-12 font-semibold text-xl
    ${className}`}>
      {children}
    </div>
  );
}

export default TextCard;
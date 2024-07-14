"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const TextCard = ({
  children="", angle=12, innerangle=15, className="", alignup=false, setPositions=()=>{}
}) => {
  const elementRef = useRef();

  const { rectClipBanner } = useClipBuilder();

  useEffect(() => {
    const { leftEdge2 } = rectClipBanner(elementRef, angle, innerangle);

    if (alignup) {
      const ratio = parseInt(getComputedStyle(elementRef.current).height)/parseInt(getComputedStyle(elementRef.current.parentNode).height);
      const top = parseFloat((100-ratio*leftEdge2).toFixed(2));
      elementRef.current.style.top = `${top}%`;

      // only store value if it's not 0
      ratio*leftEdge2 && setPositions({textCardTop: ratio*leftEdge2});
    }
  }, [angle]);

  return (
    <div ref={elementRef} className={`
    bg-white p-12 font-semibold 
    ${className}`}>
      {children}
    </div>
  );
}

export default TextCard;
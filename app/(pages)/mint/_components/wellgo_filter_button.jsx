"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";
import useWellgorithmFilter from "@/app/_state_hooks/wellgorithm_filters";

const WellgorithmFilterBtn = ({ id=0, text="", className="", angle=15 }) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();
  const expressionFilter = useWellgorithmFilter();

  const handleClick = () => {
    expressionFilter.setActiveFilter(id, text);
  }

  useEffect(() => {
    hexagonClip(elementRef, angle);
  }, []);

  return (
    <button ref={elementRef} className={
      `${expressionFilter.activeFilter.id == id ? "text-white bg-orange-dark" : "text-white bg-transparent"}
      w-full py-1.5  lg:px-6 lg:py-2
      text-center font-bold text-[8px] md:text-sm xl:text-base 
      ${className}`}
      onClick={handleClick}
      >
      {text}
    </button>
  );
}

export default WellgorithmFilterBtn;
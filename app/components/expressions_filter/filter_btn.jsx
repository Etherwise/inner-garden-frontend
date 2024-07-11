"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";
import useExpressionsFilter from "@/app/state_hooks/expressions_filter";

const FilterBtn = ({ id=0, text="", className="", angle=15 }) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();
  const expressionFilter = useExpressionsFilter();

  const handleClick = () => {
    expressionFilter.setActiveFilter(id, text);
  }

  useEffect(() => {
    hexagonClip(angle, elementRef);
  }, [hexagonClip, angle]);

  return (
    <button ref={elementRef} className={
      `${expressionFilter.activeFilter.id == id ? "text-yellow-dark bg-purple-mid" : "text-purple-dark bg-white"}
      w-full py-1.5 px-6 xl:px-9 lg:py-2
      text-center font-bold text-sm xl:text-base
      ${className}`}
      onClick={handleClick}
      >
      {text}
    </button>
  );
}

export default FilterBtn;
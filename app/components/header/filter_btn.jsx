"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";
import useHeaderFilters from "@/app/state_hooks/header_filters";

const FilterBtn = ({ id=0, text="", className="", angle=15 }) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();
  const headerFilter = useHeaderFilters();

  const handleClick = () => {
    headerFilter.setActiveFilter(id, text);
  }

  useEffect(() => {
    hexagonClip(elementRef, angle);
  }, [hexagonClip, angle]);

  return (
    <button ref={elementRef} className={
      `${headerFilter.activeFilter.id == id ? "text-yellow-dark bg-purple-mid" : "text-slate-400"}
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
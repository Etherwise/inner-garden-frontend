"use client"

import { useEffect, useRef } from "react";

import useClipPath from "@/app/hooks/clip_path_calculations";
import useHeaderFilters from "@/app/state_hooks/header_filters";

const FilterBtn = ({id=0, text="", className=""}) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipPath();
  const headerFilter = useHeaderFilters();

  const handleClick = () => {
    headerFilter.setActiveFilter(id, text);
  }

  useEffect(() => {
    hexagonClip(9, elementRef);
  }, [hexagonClip]);

  return (
    <button ref={elementRef} className={
      `${headerFilter.activeFilter.id == id ? "text-yellow-dark bg-[var(--mid-purple-4)]" : "text-slate-400"}
      w-full py-3 px-9
      text-center font-bold ${className}`}
      onClick={handleClick}
      >
      {text}
    </button>
  );
}

const FilterBtnsSec = () => {
  

  return (
    <section className="flex gap-3">
      <FilterBtn id={1} text="Gardens" />
      <FilterBtn id={2} text="Adversities" />
      <FilterBtn id={3} text="Activities" />
    </section>
  );
}


export default FilterBtnsSec;
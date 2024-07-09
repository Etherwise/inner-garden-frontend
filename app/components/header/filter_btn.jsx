"use client"

import { useEffect, useRef } from "react";

import useClipPath from "@/app/hooks/clip_path_calculations";

const FilterBtn = ({text="", className=""}) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipPath();

  useEffect(() => {
    hexagonClip(9, elementRef);
  }, [hexagonClip]);

  return (
    <button ref={elementRef}className={`w-full py-3 px-9
    text-center font-bold ${className}`}>
        {text}
    </button>
  );
}
export default FilterBtn;
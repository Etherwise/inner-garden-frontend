"use client"

import { useEffect, useRef, useState } from "react";

import TextInBrackets from "@/app/_components/texts/text_in_brackets";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const LabelComponent = ({ text=["", ""], className="", angle=24, alignup=true, setPositions=()=>{}, positions={} }) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(elementRef, angle);

    if (alignup) {
      const height = parseInt(getComputedStyle(elementRef.current).height);
      const ratio = height/parseInt(getComputedStyle(elementRef.current.parentNode).height);
      const extrapositions = Object.values(positions).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      const top = parseFloat(100-ratio*50-extrapositions).toFixed(2);
      elementRef.current.style.top = `${top}%`;
      setPositions({labelTop: top});
    }
  }, []);

  return (
    <section ref={elementRef} className={`
      flex items-center justify-center gap-1
      text-center bg-purple-mid px-6 py-2 text-lg md:text-xl lg:text-2xl xl:text-3xl ${className}`}>
      <TextInBrackets text={text[0]} className="w-[60%] md:w-[63%] font-bold text-white fill-yellow-dark" thin={{apply: true, color: "#AF5CAA", width: 3}} />
      <span className="text-yellow-dark font-bold">{text[1]}</span>
    </section>
  );
}
export default LabelComponent;
"use client"

import { useEffect, useRef } from "react";

import TextInBrackets from "@/app/_components/texts/text_in_brackets";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

import calculate from "@/app/_libs/position_calculation";

const LabelComponent = ({ text=["", ""], className="", angle=24, alignup=true }) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(elementRef, angle);

    if (alignup) {
      elementRef.current.style.top = `${calculate(elementRef, 50, 0)}%`;
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
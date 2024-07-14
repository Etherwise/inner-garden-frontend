"use client"

import { useEffect, useRef, useState } from "react";

import TextInBrackets from "@/app/_components/texts/text_in_brackets";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const LabelComponent = ({ text="", outerText="", className="", angle=24 }) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(elementRef, angle);
  }, []);

  return (
    <section ref={elementRef} className={`
      flex items-center justify-center gap-1
      text-center bg-purple-mid p-1 ${className}`}>
      <TextInBrackets text={text} className="w-[37%] text-white text-2xl font-bold fill-yellow-dark" thin={{apply: true, color: "#AF5CAA", width: 3}} />
      <span className="text-yellow-dark text-2xl font-bold">{outerText}</span>
    </section>
  );
}
export default LabelComponent;
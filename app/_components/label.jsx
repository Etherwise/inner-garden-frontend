"use client"

import { useEffect, useRef } from "react";

import TextInBrackets from "@/app/_components/texts/text_in_brackets";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";
import calculate from "@/app/_libs/align_calculation";


const LabelComponent = ({ text=["", ""], textClasses ,
  className="", bracketClassName="", angle=24, align=false, shape = "arrow" , thin = {apply: true, color: "#AF5CAA", width: 3}}) => {
  const elementRef = useRef();

  const { hexagonClip , arrowClip } = useClipBuilder();

  useEffect(() => {
    switch (shape) {
      case "hexagon":
        hexagonClip(elementRef, angle);
        break;
      case "arrow":
        arrowClip(elementRef, angle);
        break;
      default:
        hexagonClip(elementRef, angle);
        break;
    }
    align && calculate(elementRef, align);

  }, []);

  return (
    <section ref={elementRef} className={`
      flex items-center justify-center gap-1 absolute
      text-center bg-purple-mid px-6 py-3 text-lg md:text-xl lg:text-2xl xl:text-3xl ${className}`}>
      <span className={`text-yellow-dark font-bold ${textClasses}`}>{text[2]}</span>
      <TextInBrackets text={text[0]} className={`w-full font-bold text-white fill-yellow-dark ${bracketClassName}`} thin={thin} />
      <span className={`text-yellow-dark font-bold ${textClasses}`}>{text[1]}</span>
    </section>
  );
}
export default LabelComponent;
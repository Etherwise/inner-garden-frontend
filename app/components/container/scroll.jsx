"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";

const ScrollContainer = ({
  heading="", children="",
  containerClassName="", headClassName="", bodyClassName="",
  headAngle=27, bodyAngle=4
}) => {

  const headElementRef = useRef();
  const bodyElementRef = useRef();

  const { hexagonClip, rectClip } = useClipBuilder();

  useEffect(() => {
    const { leftEdge2 } = hexagonClip(headElementRef, headAngle);
    rectClip(bodyElementRef, 0, bodyAngle);
    bodyElementRef.current.style.width = `${100-leftEdge2*2}%`;
  }, [hexagonClip, rectClip]);

  return (
    <div className={`relative w-full flex flex-col items-center ${containerClassName}`}>
      <section ref={headElementRef} className={`
        grid place-items-center gap-1
        text-4xl font-extrabold text-white
        bg-purple-inner-octagon w-full p-9 ${headClassName}`}>
        {heading}
      </section>
      <div ref={bodyElementRef} className={`relative p-9 min-h-[300px] w-[95.6%] bg-purple-soft-light ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
}

export default ScrollContainer;
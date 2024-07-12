"use client"

import { useEffect, useRef, useState } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";

const ScrollContainer = ({
  heading="", children="",
  containerClassName="", headClassName="", bodyClassName="",
  headAngle=27, bodyAngle=4
}) => {
  const [customStyle, setCustomStyle] = useState(null);

  const headElementRef = useRef();
  const bodyElementRef = useRef();

  const { hexagonClip, rectClip, arrowClip } = useClipBuilder();

  let a = "w-[94%]"
  useEffect(() => {
    hexagonClip(headElementRef, headAngle);
    const {leftEdge4} = rectClip(bodyElementRef, 0, bodyAngle);
    const width = 100 - leftEdge4 * 1.5;
    setCustomStyle(`w-[${width}%]`)
  }, []);

  return (
    <div className={`relative w-full flex flex-col items-center ${containerClassName}`}>
      <section ref={headElementRef} className={`
        grid place-items-center gap-1
        text-4xl font-extrabold text-white
        bg-purple-inner-octagon w-full p-9 ${headClassName}`}>
        {heading}
      </section>
      <div ref={bodyElementRef} className={`relative min-h-[300px] ${customStyle} bg-purple-soft-light ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
}

export default ScrollContainer;
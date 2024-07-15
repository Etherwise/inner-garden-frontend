"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const WellgorithmCard = ({
  children="", angle=7, className=""
}) => {

  const elementRef = useRef();

  const { rectClip } = useClipBuilder();

  useEffect(() => {
    rectClip(elementRef, angle, angle/2);
  }, []);

  return (
    <div ref={elementRef} className={`
    relative w-full grid place-items-center px-9 bg-white
    before:content-[""] before:absolute before:w-full before:h-[40%] before:-z-10 before:bg-white
    after:content-[""] after:absolute after:w-full after:h-[20%] after:-z-10 after:bg-white
    before:bg-[url(/assets/cards/butterfly.png)] before:bg-no-repeat before:bg-cover before:bg-center
    after:bg-[url(/assets/wellgorithm_card/wellgorithm_card_bottom.png)] after:bg-no-repeat after:bg-cover after:bg-center
    pseduo-clip-path after:top-[80%] before:top-0
    ${className}`}>
      {children}
    </div>
  );
}

export default WellgorithmCard;
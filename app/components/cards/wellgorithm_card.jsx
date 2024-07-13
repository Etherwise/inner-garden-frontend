"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";

const WellgorithmCard = ({
  children="", angle=6, className=""
}) => {

  const elementRef = useRef();

  const { rectClip } = useClipBuilder();

  useEffect(() => {
    rectClip(elementRef, angle, angle/2, true);
  }, []);

  return (
    <div ref={elementRef} className={`
    relative w-full grid place-items-center px-9
    before:content-[""] before:absolute before:w-full before:h-full before:-z-10 before:bg-white
    before:bg-[url(/assets/wellgorithm_card/wellgorithm_card_head.png),url(/assets/wellgorithm_card/wellgorithm_card_bottom.png)] before:bg-no-repeat before:bg-contain before:bg-wellgoirthm-card-custom-position
    pseduo-clip-path
    ${className}`}>
      {children}
    </div>
  );
}

export default WellgorithmCard;
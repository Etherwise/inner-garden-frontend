"use client"

import Link from 'next/link';
import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";

const LinkComp = ({text="", href="", className="", angle=0}) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(angle, elementRef);
  }, [hexagonClip, angle]);

  return (
    <Link ref={elementRef} href={href} className={`w-full
    text-center font-bold ${className}`}>
      {text}
    </Link>
  );
}
export default LinkComp;
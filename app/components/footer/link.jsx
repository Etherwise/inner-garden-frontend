"use client"

import Link from 'next/link';
import { useEffect, useRef } from "react";

import useClipPath from "@/app/hooks/clip_path_calculations";

const LinkComp = ({text="", href="", className=""}) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipPath();

  useEffect(() => {
    hexagonClip(9, elementRef);
  }, [hexagonClip]);

  return (
    <Link ref={elementRef} href={href} className={`w-full py-3 px-9 bg-orange-mid
    text-center text-white font-bold ${className}`}>
        {text}
    </Link>
  );
}
export default LinkComp;
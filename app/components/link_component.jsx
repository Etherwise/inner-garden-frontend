"use client"

import Link from 'next/link';
import { useEffect, useRef, useState } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";

const LinkComp = ({ text=null, children=null, href="", className="", angle=0 }) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(elementRef, angle);
  }, [hexagonClip, angle]);

  return (
    <Link ref={elementRef} href={href} className={`
      w-full
      text-center font-bold ${className}`}>
      {children || text}
    </Link>
  );
}
export default LinkComp;
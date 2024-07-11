"use client"

import Link from 'next/link';
import { useEffect, useRef, useState } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";

const LinkComp = ({text="", href="", className="", angle=0}) => {
  const elementRef = useRef();

  const [loaded, setLoaded] = useState(false);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(elementRef, angle);
    setLoaded(true);
  }, [hexagonClip, angle]);

  if (!loaded) return (<></>);
  return (
    <Link ref={elementRef} href={href} className={`
      w-full
      text-center font-bold ${className}`}>
      {text}
    </Link>
  );
}
export default LinkComp;
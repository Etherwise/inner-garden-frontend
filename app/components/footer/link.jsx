"use client"

import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef } from "react";

import useClipPath from "@/app/hooks/clip_path_calculations";

// #TODO update 'strong' with 'heading' tag later
export default function LinkComp({text="", href="", className=""}) {
  const elementRef = useRef();

  const { addClipPath } = useClipPath();

  useEffect(() => {
    addClipPath(9, elementRef);
  }, [addClipPath]);

  return (
    <Link ref={elementRef} href={href} className={`w-full py-3 px-9 bg-orange-mid
    text-center text-white font-bold ${className}`}>
        {text}
    </Link>
  );
}

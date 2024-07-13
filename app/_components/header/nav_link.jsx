"use client"

import Link from "next/link";

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const NavLink = ({ id=0, text="", href="", className="", active=false, angle=15 }) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(elementRef, angle);
  }, [hexagonClip, angle]);

  return (
    <Link href={href} ref={elementRef} className={
      `${active ? "text-yellow-dark bg-purple-mid" : "text-slate-400"}
      w-full py-1.5 px-6 lg:py-2
      text-center font-bold text-sm xl:text-base
      ${className}`}
      >
      {text}
    </Link>
  );
}

export default NavLink;
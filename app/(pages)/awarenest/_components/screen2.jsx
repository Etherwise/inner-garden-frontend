"use client"

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import Banner from "@/app/_components/banner";
import TextCard from "@/app/_components/cards/text_card";
import LabelComponent from "@/app/_components/label";

import LeftHandle from "@/public/assets/awarenest/left.svg";
import RightHandle from "@/public/assets/awarenest/right.svg";

import OctagonCounter from "@/app/_components/octagon_counter";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const Screen2 = () => {
  const [angle, setAngle] = useState(0);

  const controlSecRef = useRef(null);
  const activeBtnRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    setAngle(Math.floor(window.innerHeight)/(150-(window.innerHeight/window.innerWidth)));

  }, []);
  
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <p className="text-white font-bold text-2xl w-full">I&apos;m hungry to learn more</p>

        <section className="w-max flex items-center gap-3">
          <OctagonCounter className="w-full !p-2 text-xl" count={7} />

          <section className="flex items-center gap-3 w-full">
            <button>
              <Image
                src={LeftHandle}
                alt="left"
                className="w-full"
              />
            </button>
            <button >
              <Image
                src={RightHandle}
                alt="right"
                className="w-full"
              />
            </button>
          </section>
        </section>
      </div>
    </>
  );
}

export default Screen2;
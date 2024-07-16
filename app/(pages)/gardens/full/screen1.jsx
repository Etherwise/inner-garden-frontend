"use client"

import { useEffect, useRef, useState } from "react";

import Banner from "@/app/_components/banner";
import TextCard from "@/app/_components/cards/text_card";
import LabelComponent from "@/app/_components/label";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";


export const Info = () => {
    const avatarElementRef = useRef(null);
    const hexElementRef = useRef(null);
    const octaElementRef = useRef(null);

    const { hexagonClip, octagonClip } = useClipBuilder();

    useEffect(() => {
        octagonClip(avatarElementRef, 30);
        
        hexagonClip(hexElementRef, 15);
        octagonClip(octaElementRef, 30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
        <div className="absolute top-full translate-y-[-50%] flex items-center justify-between w-full px-[10%]">
            <section>
                <span ref={avatarElementRef} className="bg-[#4F81E5] p-3 lg:p-6 font-bold text-white">20</span>
            </section>
            <section className="h-full">
                <span ref={hexElementRef} className="bg-orange-dark py-1  px-3 lg:px-6 font-bold text-white mr-3">peace</span>
                <span ref={octaElementRef} className="bg-[#4F81E5] p-3 lg:p-6 font-bold text-white">20</span>
            </section>
        </div>
      </>
    );
}

const Screen1 = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    setAngle(Math.floor(window.innerHeight)/(150-(window.innerHeight/window.innerWidth)));
}, []);
  
  return (
    <>
      <Banner className="aspect-[2.3/1] md:aspect-[2.9/1] w-full" shape="rect" angle={angle} innerangle={15}>
        <TextCard angle={angle} innerangle={15} align={{do: true, value: 100}}
        className="absolute left-[calc(50%-40%)] md:left-[calc(50%-35%)] lg:left-[calc(50%-30%)]
        w-[80%] md:w-[70%] lg:w-[60%] text-xl md:text-2xl lg:text-3xl text-center
        xl:px-12 lg:px-10 md:px-8 px-6">
          <LabelComponent className="!bg-purple-inner-octagon absolute left-1/2 translate-x-[-50%] w-max z-10"
          text={["aware", "nest"]} align={"top"} shape="hexagon" thin={{color: "#8757B5"}} />
          
            Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden.
        
            <Info />
        </TextCard>
      </Banner>
    </>
  );
}

export default Screen1;
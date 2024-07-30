"use client"

import { useEffect, useState, useRef } from "react";

import Banner from "@/app/_components/banner";
import TextCard from "@/app/_components/cards/text_card";
import LabelComponent from "@/app/_components/label";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const Screen1 = () => {
  const [angle, setAngle] = useState(0);

  const controlSecRef = useRef(null);
  const activeBtnRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  const handleClick = (e) => {
    activeBtnRef.current.classList.remove("bg-purple-mid", "text-yellow-dark", "!px-9");
    activeBtnRef.current = e.target;
    activeBtnRef.current.classList.add("bg-purple-mid", "text-yellow-dark", "!px-9");

    hexagonClip(activeBtnRef, 12);
  }


  useEffect(() => {
    setAngle(Math.floor(window.innerHeight)/(150-(window.innerHeight/window.innerWidth)));

    hexagonClip(activeBtnRef, 12);
    activeBtnRef.current.classList.add("bg-purple-mid", "text-yellow-dark", "!px-9");

    hexagonClip(controlSecRef, 12);
  }, []);
  
  return (
    <>
      <Banner className="aspect-[2.3/1] md:aspect-[2.9/1] w-full" shape="rect" angle={angle} innerangle={15}>
        <section ref={controlSecRef} className="absolute top-0 translate-y-[-50%] left-1/2 translate-x-[-50%] bg-white
        font-extrabold text-purple-text md:text-lg flex
        ">
          <button ref={activeBtnRef} onClick={handleClick} className="p-1 lg:p-2 !px-6 !pl-9">All Nest</button>
          <button onClick={handleClick} className="p-1 lg:p-2 !px-6 !pr-9">My Nest</button>
        </section>

        <TextCard angle={angle} innerangle={15} align={{apply: true, value: 100}}
        className="absolute left-[calc(50%-40%)] md:left-[calc(50%-35%)] lg:left-[calc(50%-30%)]
        w-[80%] md:w-[70%] lg:w-[60%] text-xl md:text-2xl lg:text-3xl text-center
        xl:px-12 lg:px-10 md:px-8 px-6">
          <LabelComponent bracketClassName="w-[5rem] sm:w-[5.3rem] md:w-[56%] xl:w-[60%]" align={"top"} shape="hexagon"
          className="absolute !py-1 md:!py-2 left-1/2 !text-lg md:!text-xl xl:!text-2xl
            translate-x-[-50%] w-max z-10" text={["aware", "nest"]} />
          
          Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden.
        </TextCard>
      </Banner>
    </>
  );
}

export default Screen1;
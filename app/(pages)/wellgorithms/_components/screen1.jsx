"use client"

import { useEffect, useState } from "react";

import Banner from "@/app/_components/banner";
import TextCard from "@/app/_components/cards/text_card";
import LabelComponent from "@/app/_components/label";

export default function Screen1() {
  const [angle, setAngle] = useState(0);


  useEffect(() => {
    document.querySelector("body").style.background = "#DBB7FC";

    setAngle(Math.floor(window.innerHeight)/(150-(window.innerHeight/window.innerWidth)));
  }, []);
  
  return (
    <>
      <Banner className="mt-6 aspect-[2/1] md:aspect-[4/1] w-full before:bg-[url(/assets/wellgorithm_page/banner.png)]"
      shape="hexagon" angle={90}>
        {/* <TextCard angle={angle} innerangle={15} alignup={true}
        className="absolute left-[calc(50%-40%)] md:left-[calc(50%-35%)] lg:left-[calc(50%-30%)] w-[80%] md:w-[70%] lg:w-[60%] text-xl smd:text-2xl lg:text-3xl text-center">
          <LabelComponent className="absolute left-1/2 translate-x-[-50%] w-max z-10" text={["aware", "nest"]} alignup={true} />
          
          Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden.
        </TextCard> */}
      </Banner>
    </>
  );
}

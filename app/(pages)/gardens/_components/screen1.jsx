"use client"

import { useEffect, useState } from "react";

import Banner from "@/app/_components/banner";
import TextCard from "@/app/_components/cards/text_card";
import LabelComponent from "@/app/_components/label";

export default function Screen1() {
  const [angle, setAngle] = useState(0);
  const [positions, setPositions] = useState({});
  
  useEffect(() => {
    setAngle(Math.floor(window.innerHeight)/(150-(window.innerHeight/window.innerWidth)));
  }, []);
  
  return (
    <>
      <Banner className="mt-6 aspect-[2.3/1] md:aspect-[2.6/1] w-full" shape="rect" angle={angle} innerangle={15}>
        <TextCard angle={angle} innerangle={12} alignup={true} setPositions={setPositions}
        className="absolute left-[calc(50%-40%)] md:left-[calc(50%-35%)] lg:left-[calc(50%-30%)] w-[80%] md:w-[70%] lg:w-[60%] text-xl smd:text-2xl lg:text-3xl text-center">
          Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden.
        </TextCard>
        {
          // this is an experiment work around for auto update by change in state's length instead of value
          Object.keys(positions).length >= 1 ?
          <LabelComponent className="absolute left-1/2 translate-x-[-50%] w-max z-10" text={["aware", "nest"]}
          setPositions={setPositions} positions={positions} />
          :
          <></>
        }
      </Banner>
    </>
  );
}

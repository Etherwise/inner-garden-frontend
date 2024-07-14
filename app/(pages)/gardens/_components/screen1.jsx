"use client"

import { useEffect } from "react";

import Banner from "@/app/_components/banner";
import TextCard from "@/app/_components/cards/text_card";
import LabelComponent from "@/app/_components/label";

export default function Screen1() {
  // useEffect(() => {
  //   const { leftEdge2 } = hexagonClip(headElementRef, headAngle);
  //   rectClip(bodyElementRef, 0, bodyAngle);
  //   bodyElementRef.current.style.width = `${100-leftEdge2*2}%`;
  // }, [hexagonClip, rectClip]);
  
  return (
    <>
      <Banner className="mt-6 aspect-[2/1] md:aspect-[3/1] w-full" shape="square" angle={3}>
        <LabelComponent className="absolute left-[calc(50%-12.5%)] top-[100%] w-[25%] z-10" text="aware" outerText="nest" />
        <TextCard className="absolute left-[calc(50%-35%)] w-[70%]" alignup={true}>
          Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden.
        </TextCard>
      </Banner>
    </>
  );
}

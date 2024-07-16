"use client"

import { useEffect, useState } from "react";

import Banner from "@/app/_components/banner";
import TextCard from "@/app/_components/cards/text_card";
import LabelComponent from "@/app/_components/label";

export default function Screen1() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {

    setAngle(Math.floor(window.innerHeight)/(150-(window.innerHeight/window.innerWidth)));
  }, []);
  
  return (
    <>
      <Banner className="mt-6 aspect-[2.3/1] md:aspect-[2.9/1] w-full" shape="hexagon" angle={90}>
        
      </Banner>
    </>
  );
}

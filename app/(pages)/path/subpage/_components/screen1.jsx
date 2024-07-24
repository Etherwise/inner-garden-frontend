"use client"

import { useEffect, useState, useRef } from "react";

import TextInBrackets from "@/app/_components/texts/text_in_brackets";
import ScrollContainer from "@/app/_components/container/scroll";
import LabelComponent from "@/app/_components/label";

import CardImage from "@/public/assets/cards/butterfly.png";
import RectangleCard from "@/app/_components/cards/rectangle_card";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

export const Heading = () => {
  return (
    <>
      <p className="flex items-center justify-center flex-wrap gap-1 fill-white font-bold">
        Journey to the
        <TextInBrackets text="title" className="text-yellow-dark font-bold w-[3.3rem] sm:w-[18%] md:w-[19%] lg:w-[20%] xl:w-fit" thin={{apply: true, width:3, color: "#8757B5"}} />
        Garden
      </p>
    </>
  );
}


const Screen1 = () => {
  const headingRef = useRef();

  const [angle, setAngle] = useState(0);

  const { hexagonClip, octagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(headingRef, 15);

    setAngle(Math.floor(window.innerHeight)/(150-(window.innerHeight/window.innerWidth)));
  }, []);
  
  return (
    <>
      <ScrollContainer heading={<Heading />} headClassName="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pb-12" bodyClassName="flex flex-col pt-12">
        <section id="test" className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] w-max drop-shadow-clip-outline-purple">
          <p ref={headingRef} className={`font-extrabold text-sm md:text-lg xl:text-xl
          p-3 px-6 bg-white text-purple-dark`}>
            Martin Butterfly
          </p>
        </section>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-10">
          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-lg sm:text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5", width: 3}} bracketClassName="w-[6.6rem] md:w-[70%] lg:w-[69%] xl:w-[70%]"
            className="absolute !py-1 left-1/2 top-0 translate-y-[-50%] !text-sm md:!text-lg xl:!text-xl
            translate-x-[-50%] w-max z-10 !bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>
          
          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-lg sm:text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5", width: 3}} bracketClassName="w-[6.6rem] md:w-[70%] lg:w-[69%] xl:w-[70%]"
            className="absolute !py-1 left-1/2 top-0 translate-y-[-50%] !text-sm md:!text-lg xl:!text-xl
            translate-x-[-50%] w-max z-10 !bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>

          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-lg sm:text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5", width: 3}} bracketClassName="w-[6.6rem] md:w-[70%] lg:w-[69%] xl:w-[70%]"
            className="absolute !py-1 left-1/2 top-0 translate-y-[-50%] !text-sm md:!text-lg xl:!text-xl
            translate-x-[-50%] w-max z-10 !bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>
        </div>
      </ScrollContainer>
    </>
  );
}

export default Screen1;
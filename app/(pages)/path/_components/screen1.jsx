"use client"

import { useEffect, useState } from "react";

import TextInBrackets from "@/app/_components/texts/text_in_brackets";

import Banner from "@/app/_components/banner";
import ScrollContainer from "@/app/_components/container/scroll";
import LabelComponent from "@/app/_components/label";

import CardImage from "@/public/assets/cards/butterfly.png";
import RectangleCard from "@/app/_components/cards/rectangle_card";


export const Heading = () => {
  return (
    <>
      <p className="flex items-center justify-center flex-wrap gap-1 fill-white font-bold">
        <TextInBrackets text="title" className="text-yellow-dark font-bold w-[3.3rem] sm:w-[45%] md:w-[49%] lg:w-[50%] xl:w-fit" thin={{apply: true, width:3, color: "#8757B5"}} />
        Path
      </p>
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
      <ScrollContainer headClassName="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl !p-3 md:!p-6 xl:!p-9" bodyClassName="flex flex-col pt-12" heading={<Heading />} >
        <div className="flex flex-col md:flex-row gap-9">
          <Banner className="w-full" shape="rect" angle={angle} innerangle={15}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5", width: 3}} bracketClassName="!w-[4rem] md:!w-[56%] xl:!w-[59%]"
              className="absolute !py-1 left-1/2 !text-sm md:!text-lg xl:!text-xl
              translate-x-[-50%] w-max z-10 !bg-[#4F81E5]" text={["aware", "title"]} align={"top"} />
          </Banner>
          <section className="w-full">
            <p className="font-semibold ">
            Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of na- ture, and that we can cultivate them like a garden. Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of na- ture, and that we can cultivate them like a gar
            </p>
            <p className="font-semibold w-full">
            Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of na- ture, and that we can cultivate them like a garden. Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of na- ture, and that we can cultivate them like a gar
            </p>
          </section>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-20">
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
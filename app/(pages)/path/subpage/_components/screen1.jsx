"use client"

import { useEffect, useState } from "react";

import Banner from "@/app/_components/banner";
import ScrollContainer from "@/app/_components/container/scroll";
import LabelComponent from "@/app/_components/label";

import CardImage from "@/public/assets/cards/butterfly.png";
import RectangleCard from "@/app/_components/cards/rectangle_card";

const Screen1 = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {

    setAngle(Math.floor(window.innerHeight)/(150-(window.innerHeight/window.innerWidth)));
  }, []);
  
  return (
    <>
      <ScrollContainer heading="journey to the title garden" containerClassName="" bodyClassName="flex flex-col pt-12">
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5"}}
            className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10 bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>
          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5"}}
            className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10 bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>
          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5"}}
            className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10 bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>
        </div>
      </ScrollContainer>
      <ScrollContainer containerClassName="" bodyClassName="flex flex-col pt-12">
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5"}}
            className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10 bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>
          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5"}}
            className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10 bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>
          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5"}}
            className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10 bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>
        </div>
      </ScrollContainer>
      <ScrollContainer containerClassName="" bodyClassName="flex flex-col pt-12">
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5"}}
            className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10 bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>
          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5"}}
            className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10 bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>
          <RectangleCard cardImage={CardImage} className={{
              main: "",
              image: "!h-[30%]",
              text: `text-pretty text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
          }}>
            <LabelComponent shape={"hexagon"} thin={{apply:true, color: "#4F81E5"}}
            className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10 bg-[#4F81E5]" text={["compassion", "title"]} />
          </RectangleCard>
        </div>
      </ScrollContainer>
    </>
  );
}

export default Screen1;
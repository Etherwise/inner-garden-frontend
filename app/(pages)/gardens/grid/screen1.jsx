"use client"

import { useState, useEffect, useRef } from "react";

import CardImage from "@/public/assets/cards/butterfly.png";

import RectangleCard from "@/app/_components/cards/rectangle_card";
import LabelComponent from "@/app/_components/label";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

export const Info = () => {
    const avatarElementRef = useRef(null);
    const hexElementRef = useRef(null);
    const octaElementRef = useRef(null);

    const { hexagonClip, octagonClip } = useClipBuilder();

    useEffect(() => {
        hexagonClip(hexElementRef, 15);
        octagonClip(octaElementRef, 30);
        octagonClip(avatarElementRef, 30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="absolute top-full translate-y-[-50%] flex items-center justify-between w-full px-[10%]">
            <section>
                <span ref={avatarElementRef} className="bg-[#4F81E5] p-3 md:p-6 font-bold text-white">20</span>
            </section>
            <section className="flex items-center h-full">
                <p ref={hexElementRef} className="bg-orange-dark py-1 px-3 md:px-6 font-bold text-white mr-3">peace</p>
                <p ref={octaElementRef} className="bg-[#4F81E5] p-3 md:p-6 font-bold text-white">20</p>
            </section>
        </div>
    );
}

export default function Screen1() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-x-12 gap-y-24 mt-12">
        <RectangleCard cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-3 !pb-9`
        }}>
          <LabelComponent shape={"hexagon"}
          className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>

        <RectangleCard cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-3 !pb-9`
        }}>
          <LabelComponent shape={"hexagon"}
          className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>

        <RectangleCard cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-3 !pb-9`
        }}>
          <LabelComponent shape={"hexagon"}
          className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>

        <RectangleCard cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-3 !pb-9`
        }}>
          <LabelComponent shape={"hexagon"}
          className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>

        <RectangleCard cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-3 !pb-9`
        }}>
          <LabelComponent shape={"hexagon"}
          className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>

        <RectangleCard cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-3 !pb-9`
        }}>
          <LabelComponent shape={"hexagon"}
          className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>   
        
      </div>
    </>
  );
}

"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import CardImage from "@/public/assets/cards/butterfly.png";
import Avatar from '@/public/assets/avatar/avatar.svg';

import RectangleCard from "@/app/_components/cards/rectangle_card";
import LabelComponent from "@/app/_components/label";
import OctagonCounter from "@/app/_components/octagon_counter";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

export const Info = () => {
  const userNameCardInnerRef = useRef(null);
  const hexElementRef = useRef(null);
  const octaElementRef = useRef(null);

  const { hexagonClip, octagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(userNameCardInnerRef,8)
    hexagonClip(hexElementRef, 15);
    octagonClip(octaElementRef, 30);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute top-full translate-y-[-50%] flex items-center justify-between w-full px-[10%]">
      <section className='flex items-center justify-center w-fit'>
        <Image src={Avatar} alt='avatar' className='z-[2]'/>
        <span className='drop-shadow-clip-outline-purple ml-[-12%]' >
          <p className='flex items-center justify-center py-1 pl-7 pr-4 bg-white text-purple-inner-octagon text-sm font-bold text-nowrap' ref={userNameCardInnerRef}>jackie milter</p>
        </span>
      </section>
      <section className="flex items-center w-max h-full">
        <p ref={hexElementRef} className="bg-orange-dark py-1 px-3 md:px-6 font-bold text-white mr-3">peace</p>
        <OctagonCounter className="w-full !p-3" count={20} />
      </section>
    </div>
  );
}

export default function Screen1() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-x-12 gap-y-24 mt-12">
        <RectangleCard lowerAngle={5} cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-6 !pb-20`
        }}>
          <LabelComponent bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 xl:!py-2 left-1/2 !text-sm md:!text-lg xl:!text-2xl !px-2 xl:!px-4
            translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>

        <RectangleCard lowerAngle={5} cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-6 !pb-20`
        }}>
          <LabelComponent bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 xl:!py-2 left-1/2 !text-sm md:!text-lg xl:!text-2xl !px-2 xl:!px-4
            translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>

        <RectangleCard lowerAngle={5} cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-6 !pb-20`
        }}>
          <LabelComponent bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 xl:!py-2 left-1/2 !text-sm md:!text-lg xl:!text-2xl !px-2 xl:!px-4
            translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>

        <RectangleCard lowerAngle={5} cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-6 !pb-20`
        }}>
          <LabelComponent bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 xl:!py-2 left-1/2 !text-sm md:!text-lg xl:!text-2xl !px-2 xl:!px-4
            translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>

        <RectangleCard lowerAngle={5} cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-6 !pb-20`
        }}>
          <LabelComponent bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 xl:!py-2 left-1/2 !text-sm md:!text-lg xl:!text-2xl !px-2 xl:!px-4
            translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>

        <RectangleCard lowerAngle={5} cardImage={CardImage} className={{
            main: "",
            image: "!h-[15vh]",
            text: `text-balance !text-lg 3xl:!text-2xl xl:px-12 lg:px-10 md:px-20 px-12 !text-black !h-fit !py-0 !m-0 !pt-6 !pb-20`
        }}>
          <LabelComponent bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 xl:!py-2 left-1/2 !text-sm md:!text-lg xl:!text-2xl !px-2 xl:!px-4
            translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />

          <Info />
        </RectangleCard>  
        
      </div>
    </>
  );
}

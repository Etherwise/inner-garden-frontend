"use client"

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

//import CardImage from "@/public/assets/wellgorithm_card/wellgorithm_card_head.png";
import HeaderAvatar from "@/public/assets/header/header_avatar.svg";
import CardImage from "@/public/assets/cards/butterfly.png";
import LabelComponent from "@/app/_components/label";

import LeftHandle from "@/public/assets/awarenest/left.svg";
import RightHandle from "@/public/assets/awarenest/right.svg";

import OctagonCounter from "@/app/_components/octagon_counter";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

import womanImage from '@/public/assets/banner/banner.png'
import Avatar from '@/public/assets/avatar/avatar.svg'


const Card = ({ children="", text=null, cardImage=null, upperAngle = 5, lowerAngle = 7, className="", imageClassName="" }) => {

  const imageTextRef = useRef(null);
  const {rectClip} = useClipBuilder()

  useEffect(() => {
    // shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false
    rectClip(imageTextRef , upperAngle , lowerAngle);
  }, [])
  
  return (
    <div className={`relative h-fit
      ${className}`}>
      <section className={`relative h-full bg-white`} ref={imageTextRef}>
        <Image src={cardImage ? cardImage : womanImage} alt='image' className={`aspect-[3/1] w-full object-cover ${imageClassName}`}/>
        {text}
        <section className="flex gap-3 px-9 pb-6 w-full">
        <section className='flex items-center justify-center w-fit gap-3'>
                    <Image src={Avatar} alt='avatar' className='z-[2]'/>
                    <span className='h-fit z-[1] flex items-center justify-center text-purple-mid text-lg font-bold text-nowrap'>jackie milter</span>
                  </section>
        </section>
      </section>
      {children}
    </div>
  )
}

const Text = ({ className="", text="" }) => {
  return (
    <>
      <p className={className}>{"motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."}</p>
    </>
  );
}


const Screen2 = () => {
  const scrollElementRef = useRef(null);

  const handleLeftClick = () => {
    if (!scrollElementRef) return 0;

    scrollElementRef.current.scrollBy({
      left: 300, // Scroll 100 pixels to the right
      behavior: 'smooth'
    });
  }

  const handleRightClick = () => {
    if (!scrollElementRef) return 0;

    scrollElementRef.current.scrollBy({
      left: -300, // Scroll 100 pixels to the right
      behavior: 'smooth'
    });
  }
  
  return (
    <>
{/* New cards carousel */}
<div className="flex  max-md:gap-3 md:gap-10 ">

      <section className="grid place-items-center">
      <button onClick={handleRightClick }>
              <Image
                src={LeftHandle}
                alt="left"
                className="w-full"
              />
        </button>
      </section>

      <section className="flex gap-6 md:gap-9 w-full py-6 overflow-x-auto no-scrollbar h-full mt-6 snap-x" ref={scrollElementRef}>
                {/* Cards */}

                <Card cardImage={CardImage} imageClassName="!h-[30%]" className="snap-center shrink-0 w-full max-w-[450px]" text={<Text className="p-6 max-md:text-sm md:text-lg font-semibold h-[70%]" />}>
          
          <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 left-1/2 !text-sm md:!text-lg !px-2
            translate-x-[-50%] w-max z-10" text={["aware", "Nest"]} />

        </Card>

        <Card cardImage={CardImage} imageClassName="!h-[30%]" className="snap-center shrink-0 w-full max-w-[450px]" text={<Text className="p-6 max-md:text-sm md:text-lg font-semibold h-[70%]" />}>
          
          <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 left-1/2 !text-sm md:!text-lg !px-2
            translate-x-[-50%] w-max z-10" text={["aware", "Nest"]} />

        </Card>

        <Card cardImage={CardImage} imageClassName="!h-[30%]" className="snap-center shrink-0 w-full max-w-[450px]" text={<Text className="p-6 max-md:text-sm md:text-lg font-semibold h-[70%]" />}>
          
          <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 left-1/2 !text-sm md:!text-lg !px-2
            translate-x-[-50%] w-max z-10" text={["aware", "Nest"]} />

        </Card>

        <Card cardImage={CardImage} imageClassName="!h-[30%]" className="snap-center shrink-0 w-full max-w-[450px]" text={<Text className="p-6 max-md:text-sm md:text-lg font-semibold h-[70%]" />}>
          
          <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 left-1/2 !text-sm md:!text-lg !px-2
            translate-x-[-50%] w-max z-10" text={["aware", "Nest"]} />

        </Card>

        <Card cardImage={CardImage} imageClassName="!h-[30%]" className="snap-center shrink-0 w-full max-w-[450px]" text={<Text className="p-6 max-md:text-sm md:text-lg font-semibold h-[70%]" />}>
          
          <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 left-1/2 !text-sm md:!text-lg !px-2
            translate-x-[-50%] w-max z-10" text={["aware", "Nest"]} />

        </Card>

      </section>

      <section className="grid place-items-center">
      <button onClick={handleLeftClick}>
              <Image
                src={RightHandle}
                alt="right"
                className="w-full"
              />
            </button>
      </section>
      </div>

    </>
  );
}

export default Screen2;
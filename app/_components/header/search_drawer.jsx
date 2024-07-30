"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";

import HeaderAvatar from "@/public/assets/header/header_avatar.svg";
import Sun from "@/public/assets/searchdrawer/sun.svg";
import Rainbow from "@/public/assets/searchdrawer/rainbow.svg";
import Rain from "@/public/assets/searchdrawer/rain.svg";
import SunCloud from "@/public/assets/searchdrawer/sun-cloud.svg";
import Cloudy from "@/public/assets/searchdrawer/cloudy.svg";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

import TextInBrackets from "@/app/_components/texts/text_in_brackets";


import CardImage from "@/public/assets/cards/butterfly.png";
import LabelComponent from "@/app/_components/label";

import LeftHandle from "@/public/assets/awarenest/left.svg";
import RightHandle from "@/public/assets/awarenest/right.svg";

import OctagonCounter from "@/app/_components/octagon_counter";
import womanImage from '@/public/assets/banner/banner.png'

const Card = ({ children="", text=null, cardImage=null, upperAngle = 5, lowerAngle = 7, className="", imageClassName="" }) => {

  const imageTextRef = useRef(null);
  const {rectClip} = useClipBuilder()

  useEffect(() => {
    // shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false
    rectClip(imageTextRef , upperAngle , lowerAngle);
  }, [])
  
  return (
    <div className={`relative h-full
      ${className}`}>
      <section className={`relative h-full bg-white`} ref={imageTextRef}>
        <Image src={cardImage ? cardImage : womanImage} alt='image' className={`aspect-[3/1] w-full object-cover ${imageClassName}`}/>
        {text}
        <section className="flex gap-3 px-9 pb-6 w-full">
          <Image src={HeaderAvatar} alt='avatar' className="w-[15%]" />
        </section>
      </section>
      {children}
    </div>
  )
}

const Text = ({ className="", text="" }) => {
  return (
    <section className="p-6">
      <p className={"line-clamp-3 overflow-hidden "+ className}>{"motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."}</p>
    </section>
  );
}


const Screen2 = ({ heading="", octagonCounterClassname="" }) => {
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
      <div className="flex w-full items-center justify-between">
        <p className="text-yellow-dark font-bold text-2xl w-full">{heading}</p>

        <section className="w-max flex items-center gap-3">
          <OctagonCounter className={"w-full !p-2 text-xl text-yellow-dark "+octagonCounterClassname} count={7} />

          <section className="flex items-center gap-3 w-full">
            <button onClick={handleRightClick}>
              <Image
                src={LeftHandle}
                alt="left"
                className="w-full"
              />
            </button>
            <button onClick={handleLeftClick}>
              <Image
                src={RightHandle}
                alt="right"
                className="w-full"
              />
            </button>
          </section>
        </section>
      </div>

      <div ref={scrollElementRef} className="flex gap-6 md:gap-9 w-full py-6 overflow-x-auto no-scrollbar h-full mt-6 snap-x">
        <Card cardImage={CardImage} imageClassName="!h-[30%]" className="snap-center shrink-0 w-full max-w-[450px]" text={<Text className="text-lg font-semibold h-[70%]" />}>
          
          <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 left-1/2 !text-sm md:!text-lg !px-2
            translate-x-[-50%] w-max z-10" text={["aware", "Nest"]} />

        </Card>

        <Card cardImage={CardImage} imageClassName="!h-[30%]" className="snap-center shrink-0 w-full max-w-[450px]" text={<Text className="text-lg font-semibold h-[70%]" />}>
          
          <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 left-1/2 !text-sm md:!text-lg !px-2
            translate-x-[-50%] w-max z-10" text={["aware", "Nest"]} />

        </Card>

        <Card cardImage={CardImage} imageClassName="!h-[30%]" className="snap-center shrink-0 w-full max-w-[450px]" text={<Text className="text-lg font-semibold h-[70%]" />}>
          
          <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 left-1/2 !text-sm md:!text-lg !px-2
            translate-x-[-50%] w-max z-10" text={["aware", "Nest"]} />

        </Card>

        <Card cardImage={CardImage} imageClassName="!h-[30%]" className="snap-center shrink-0 w-full max-w-[450px]" text={<Text className="text-lg font-semibold h-[70%]" />}>
          
          <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%]" align={"top"} shape="hexagon" angle={15}
          className="absolute !py-0.5 left-1/2 !text-sm md:!text-lg !px-2
            translate-x-[-50%] w-max z-10" text={["aware", "Nest"]} />

        </Card>
        
      </div>
    </>
  );
}

const SearchDrawer = ({ handleSearchClick=()=>{} }) => {
    const elementRef = useRef();

    const { rectClip } = useClipBuilder();

    useEffect(() => {
        rectClip(elementRef, 0, 3, 1);
    }, []);

    console.log(1)
    return (
        <>
            <div className="absolute top-full left-0 z-50 bg-purple-dark
            min-w-[300px] w-full py-3">
                <div className="flex items-center justify-center gap-6 mb-12">
                    <section className="flex items-center gap-3">
                        <input id="search-all" type="checkbox" className="custom-checkbox-searchdrawer peer" />
                        <label for="search-all" className="font-bold peer-checked:text-yellow-dark">all</label>
                    </section>
                    <section className="flex items-center gap-3">
                        <input id="search-journals" type="checkbox" className="custom-checkbox-searchdrawer peer" />
                        <label for="search-journals" className="font-bold peer-checked:text-yellow-dark">journals</label>
                        </section>
                    <section className="flex items-center gap-3">
                        <input id="search-wellgorithms" type="checkbox" className="custom-checkbox-searchdrawer peer" />
                        <label for="search-wellgorithms" className="font-bold peer-checked:text-yellow-dark">wellgorithms</label>
                    </section>

                    <button>
                        <Image src={Sun} alt="Sun" />
                    </button>
                    <button>
                        <Image src={Rainbow} alt="Rainbow" />
                    </button>
                    <button>
                        <Image src={Rain} alt="Rain" />
                    </button>
                    <button>
                        <Image src={SunCloud} alt="SunCloud" />
                    </button>
                    <button>
                        <Image src={Cloudy} alt="Cloudy" />
                    </button>
                </div>

                <div className="bg-purple-text-light text-black py-9 responsive-container">
                    <Screen2 heading={"journals"} octagonCounterClassname="bg-purple-dark" />
                </div>

                <div className=" text-black py-9 responsive-container">
                    <Screen2 heading={"wellgorithms"} octagonCounterClassname="bg-purple-text-light" />
                </div>
            </div>
        </>
    );
}

export default SearchDrawer;
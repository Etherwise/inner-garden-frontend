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

import LeftHandle from "@/public/assets/searchdrawer/left.svg";
import RightHandle from "@/public/assets/searchdrawer/right.svg";

import OctagonCounter from "@/app/_components/octagon_counter";
import womanImage from '@/public/assets/banner/banner.png'

const Card = ({ children="", text=null, cardImage=null, upperAngle = 5, lowerAngle = 7, avatar=true,
  className="", sectionClassname="", imageClassName="" }) => {

  const imageTextRef = useRef(null);
  const {rectClip} = useClipBuilder()

  useEffect(() => {
    // shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false
    rectClip(imageTextRef , upperAngle , lowerAngle);
  }, [])
  
  return (
    <div className={`relative h-full
      ${className}`}>
      <section className={`relative h-full bg-white ${sectionClassname}`} ref={imageTextRef}>
        <Image src={cardImage ? cardImage : womanImage} alt='image' className={` w-full object-cover ${imageClassName}`}/>
        {text}
        {
          avatar && 
          <section className="flex gap-3 px-9 pb-6 w-full">
            <Image src={HeaderAvatar} alt='avatar' className="w-[15%]" />
          </section>
        }
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


const Screen2 = ({ heading="", cardClassName="", octagonCounterClassname="", textClassname="", avatar=true }) => {
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
        <p className="text-yellow-dark font-bold text-3xl w-full">{heading}</p>

        <section className="w-[180px] flex items-center gap-9">
          <OctagonCounter className={"w-full !p-2 text-xl text-yellow-dark "+octagonCounterClassname} count={7} />

          <section className="grow flex items-center gap-6 w-full">
            <button onClick={handleRightClick}>
              <svg width="22" height="44" viewBox="0 0 22 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6501 5.5288L10.1341 0L0 21.8848L10.1341 44L21.6501 38.2408L14.2799 21.8848L21.6501 5.5288Z" fill="#FFF200"/>
              </svg>
            </button>
            <button onClick={handleLeftClick}>
              <svg width="23" height="44" viewBox="0 0 23 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.875 38.4712L12.391 44L22.5251 22.1152L12.391 2.92857e-06L0.875003 5.75916L8.24527 22.1152L0.875 38.4712Z" fill="#FFF200"/>
              </svg>
            </button>
          </section>
        </section>
      </div>

      <div ref={scrollElementRef} className="flex gap-6 md:gap-9 w-full py-6 px-1 overflow-x-auto no-scrollbar h-full mt-6 snap-x">
        
        <Card cardImage={CardImage} imageClassName="!h-[30%]" sectionClassname={cardClassName}
         className={`snap-center shrink-0 w-full max-w-[440px] drop-shadow-clip-outline-white`}
         text={<Text className={"text-lg font-semibold h-[70%] "+textClassname} />} avatar={avatar}>
          
          <div className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] drop-shadow-clip-outline-white">
            
            <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%] !fill-white text-yellow-dark" shape="hexagon" angle={15}
            className="relative !py-0.5 !text-sm md:!text-lg !px-2 !bg-purple-text-light w-max z-10"
            textClasses={"!text-white"} text={["aware", "Nest"]} thin={{apply: true, color:"#8858B5", width: 3}} />
          
          </div>
        
        </Card>

        <Card cardImage={CardImage} imageClassName="!h-[30%]" sectionClassname={cardClassName}
         className={`snap-center shrink-0 w-full max-w-[440px] drop-shadow-clip-outline-white`}
         text={<Text className={"text-lg font-semibold h-[70%] "+textClassname} />} avatar={avatar}>
          
          <div className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] drop-shadow-clip-outline-white">
            
            <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%] !fill-white text-yellow-dark" shape="hexagon" angle={15}
            className="relative !py-0.5 !text-sm md:!text-lg !px-2 !bg-purple-text-light w-max z-10"
            textClasses={"!text-white"} text={["aware", "Nest"]} thin={{apply: true, color:"#8858B5", width: 3}} />
          
          </div>
        
        </Card>

        <Card cardImage={CardImage} imageClassName="!h-[30%]" sectionClassname={cardClassName}
         className={`snap-center shrink-0 w-full max-w-[440px] drop-shadow-clip-outline-white`}
         text={<Text className={"text-lg font-semibold h-[70%] "+textClassname} />} avatar={avatar}>
          
          <div className="absolute left-1/2 top-0 translate-y-[-50%] translate-x-[-50%] drop-shadow-clip-outline-white">
            
            <LabelComponent bracketClassName="!w-[4rem] md:!w-[55%] !fill-white text-yellow-dark" shape="hexagon" angle={15}
            className="relative !py-0.5 !text-sm md:!text-lg !px-2 !bg-purple-text-light w-max z-10"
            textClasses={"!text-white"} text={["aware", "Nest"]} thin={{apply: true, color:"#8858B5", width: 3}} />
          
          </div>
        
        </Card>
        
      </div>
    </>
  );
}

const SearchDrawer = ({ handleSearchClick=()=>{} }) => {
  const inputRef = useRef();
  const mailSubscribeSecRef = useRef();
  const subscribeBtnRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(inputRef, 12);
  }, [hexagonClip]);

  return (
    <>
      <div className="absolute top-full left-0 z-50 bg-purple-dark
      min-w-[300px] w-full py-3">
        <div className="relative flex items-center justify-center gap-6 pb-12 text-xl">
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

          <section ref={mailSubscribeSecRef} className="
          absolute top-full translate-y-[-50%]
          flex gap-3 justify-between
          w-full sm:w-[60%] lg:w-[45%] py-1.5 drop-shadow-clip-outline-white 
          text-black">
            <input ref={inputRef} type='text' placeholder="Search" className="px-9 py-2 lg:py-3 outline-2 w-full
            placeholder:font-extrabold bg-purple-dark text-white" />
            {/* <button ref={subscribeBtnRef} onClick={handleClick}
            className="bg-[#AF5CAA] text-white py-2 lg:py-3 px-6 sm:px-3 w-[90%] sm:w-1/3 font-bold">
              subscribe
            </button> */}
          </section>
        </div>

        <div className="bg-purple-text-light text-black py-9 responsive-container">
            <Screen2 heading={"journals"} octagonCounterClassname="bg-purple-dark" />
        </div>

        <div className=" text-black py-9 responsive-container">
            <Screen2 heading={"wellgorithms"} textClassname="text-yellow-dark text-center px-9"
            octagonCounterClassname="bg-purple-text-light" avatar={false}
            cardClassName="!bg-purple-text-light" />
        </div>
      </div>
    </>
  );
}

export default SearchDrawer;
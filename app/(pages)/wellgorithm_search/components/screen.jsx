"use client";
import Banner from "@/app/_components/banner";
import WellgorithmCard from "@/app/_components/cards/wellgorithm_card";
import React, { useEffect, useRef, useState } from "react";
import WellgoLogo from "@/public/assets/header/header_wellgorithm_active.svg"
import Image from "next/image";
import calculate from "@/app/_libs/align_calculation";
import useClipBuilder from "@/app/_hooks/clip_path_calculations";
import HexagonWithDots from "@/public/assets/icons/hexagon_with_dots.svg";
import './style.css';
import WellgorithmFilterBtn from "./wellgo_filter_button";
import useWellgorithmFilter from "@/app/_state_hooks/wellgorithm_filters";
import ExpressionFilter from "@/app/_components/expressions_filter";
import SearchIcon from "@/public/assets/icons/search-purple.svg"
import LabelComponent from "@/app/_components/label";
import RectWellgorithmCard from "@/app/_components/cards/rect_wellgorithm_card";

const Screen = () => {

const WellgoLogoRef = useRef(null);
const filterHeadingRef = useRef(null);
const filtersRef = useRef(null);
const inputRef = useRef(null);
const searchRef = useRef(null);

const {hexagonClip , halfHexagonClip} = useClipBuilder()

const expressionFilter = useWellgorithmFilter();

useEffect(() => {
  calculate(WellgoLogoRef,"top")
  hexagonClip(filterHeadingRef , 14);
  halfHexagonClip(filtersRef , 50 );
  hexagonClip(inputRef,12)
}, [])

const wellgoFilters = [
  { id: 1, name: "nest" },
  { id: 2, name: "tea" },
  { id: 3, name: "mint" },
  { id: 4, name: "RX" },
  { id: 5, name: "911" },
  { id: 6, name: "police" },
  { id: 7, name: "flower" },
  { id: 8, name: "landscape" }
]

  return (
    <>
    <ExpressionFilter />
      <Banner
        className="mt-10 lg:mt-20 aspect-[2.3/1] md:aspect-[4.5/1] w-full !before:bg-[url(/assets/cards/banner-web.svg)]"
        shape="hexagon"
        angle={50}>

{/* Top wellgorithm logo */}
        <Image src={WellgoLogo} alt="WellgoLogo" className="absolute left-1/2 translate-x-[-50%] w-[50%] lg:w-[30%]" ref={WellgoLogoRef}/>
{/* Top wellgorithm logo */}

{/* Middle section of banner */}
        <section className="absolute w-full top-[33%] lg:top-[33%] left-1/2 translate-x-[-50%] grid place-items-center gap-1 lg:gap-3 h-fit text-white">
        <div className="relative flex w-[50%] lg:w-[30%] h-full">
          <Image src={SearchIcon} alt="SearchIcon" className="absolute z-20 w-14 lg:w-24 right-[-43px] top-[-18px] lg:right-[-75px] lg:top-[-30px]" ref={searchRef}/>
    {/* <span className="text-black absolute left-16 font-semibold z-20 w-fit">|</span> */}
        <input type="text" className="w-full mx-auto text-sm lg:text-lg font-semibold text-purple-inner-octagon placeholder:text-purple-inner-octagon outline-none decoration-transparent py-1 px-6 lg:py-4 lg:px-10" placeholder="| search" ref={inputRef}/>
        </div>
        </section>
{/* Middle section of banner */}

{/* Wellgorithm filters in banner. */}
        <section className="absolute bottom-0 w-full lg:h-[26%] bg-[#FFF500] py-[2px]" ref={filtersRef}>
        <section className="w-[100%] text-xs lg:w-full lg:h-[100%] bg-[#AF5CAA] flex max-lg:gap-8 items-center justify-center px-[45%] lg:px-[20%]">
        {wellgoFilters.map((filter,i)=>
          <WellgorithmFilterBtn key={i} id={filter.id} text={filter.name} className="text-white"/>
        )}    
        </section>
        </section>
{/* Wellgorithm filters in banner. */}

      </Banner>

{/* Dots icon between banner and cards */}
       <div className="w-full mt-[4%] mb-[8%] md:mt-[2%] md:mb-[3%] flex justify-center">
       <Image src={HexagonWithDots} alt="HexagonWithDots" className="w-[12%] lg:w-auto"/>
       </div>
{/* Dots icon between banner and cards */}

{/* Wellgorithm cards */}
      <section className=" grid grid-cols-1 place-items-center w-[100%] h-full gap-14 lg:gap-28">
        
{/* Card */}
        <RectWellgorithmCard className = {{main : "w-[50%]" , text : "text-white bg-purple-mid" }} >
        <LabelComponent shape={"arrow"} text={["compassion","title"]} angle={15} align={"top"} className="!text-lg !px-[6%] h-[10%] left-[50%] translate-x-[-50%]"/>
        <LabelComponent thin={{apply: true, color: "#FAA81A", width: 3}} shape={"arrow"} textClasses={"!text-white"} text={["compassion","title","30"]} angle={15} align={"bottom"} className="!text-lg text-white !px-[6%] h-[10%] left-[50%] translate-x-[-50%] !bg-orange-dark" />
        </RectWellgorithmCard>
{/* Card */}

<RectWellgorithmCard className = {{main : "w-[50%]" , text : "text-white bg-purple-mid" }} >
        <LabelComponent shape={"arrow"} text={["compassion","title"]} angle={15} align={"top"} className="!text-lg !px-[6%] h-[10%] left-[50%] translate-x-[-50%]"/>
        <LabelComponent thin={{apply: true, color: "#FAA81A", width: 3}} shape={"arrow"} textClasses={"!text-white"} text={["compassion","title","30"]} angle={15} align={"bottom"} className="!text-lg text-white !px-[6%] h-[10%] left-[50%] translate-x-[-50%] !bg-orange-dark" />
        </RectWellgorithmCard>
        

        
             </section>
{/* Wellgorithm cards */}
</>
  );
};
export default Screen;

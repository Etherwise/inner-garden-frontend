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

const Screen = () => {

const WellgoLogoRef = useRef(null);
const filterHeadingRef = useRef(null);
const filtersRef = useRef(null);

const {hexagonClip , halfHexagonClip} = useClipBuilder()

const expressionFilter = useWellgorithmFilter();

useEffect(() => {
  calculate(WellgoLogoRef,"top")
  hexagonClip(filterHeadingRef , 14);
  halfHexagonClip(filtersRef , 50 );

  document.querySelector("body").style.background = "#3F225B";

  return () => {
    document.querySelector("body").style.background = "#C4CAF0";
  }


}, [])

console.log(expressionFilter)

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
      <Banner
        className="mt-10 lg:mt-20 aspect-[2.3/1] md:aspect-[4.5/1] w-full before:bg-[url(/assets/banner/banner-web.svg)]"
        shape="hexagon"
        angle={50}
      >

        <Image src={WellgoLogo} alt="WellgoLogo" className="absolute left-1/2 translate-x-[-50%] w-[50%] lg:w-[30%]" ref={WellgoLogoRef}/>

        <section className="absolute w-full top-[26%] lg:top-[28%] left-1/2 translate-x-[-50%] flex flex-col items-center justify-center gap-1 lg:gap-3 h-fit text-white">
          <span ref={filterHeadingRef} className=" lg:h-[55px] w-fit px-[5%] max-lg:py-[2%] md:px-[13%] lg:px-[3%] bg-orange-dark grid place-items-center text-sm md:text-lg  lg:text-3xl font-bold">{expressionFilter?.activeFilter.name}</span>
          <p className=" text-xs lg:text-lg w-[60%] font-semibold tracking-wide text-center">a unique blend of refreshment and revelation</p>
        </section>

        <section className="absolute bottom-0 w-full lg:h-[26%] bg-[#FFF500] py-[2px]" ref={filtersRef}>

        <section className="w-[100%] text-xs lg:w-full lg:h-[100%] bg-[#AF5CAA] flex max-lg:gap-8 items-center justify-center px-[45%] lg:px-[20%]">

        
        {wellgoFilters.map((filter,i)=>
          <WellgorithmFilterBtn key={i} id={filter.id} text={filter.name} className="text-white"/>
        )}    

        </section>
        </section>

      </Banner>

       <div className="w-full my-[3%] lg:my-[2%] flex justify-center">
       <Image src={HexagonWithDots} className="w-[12%] lg:w-auto"/>
       </div>

      <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid-rows-3 gap-5">
        
        <WellgorithmCard className="aspect-square w-full !bg-purple-mid">
          <p className="mt-[23%] text-2xl text-center font-bold text-yellow-dark">
           Welcome the crackling anxieties, knowing they’ll soon wither in the wind.
          </p>
        </WellgorithmCard>
        <WellgorithmCard className="aspect-square w-full !bg-purple-mid">
          <p className="mt-[23%] text-2xl text-center font-bold text-yellow-dark">
           Welcome the crackling anxieties, knowing they’ll soon wither in the wind.
          </p>
        </WellgorithmCard>
        <WellgorithmCard className="aspect-square w-full !bg-purple-mid">
          <p className="mt-[23%] text-2xl text-center font-bold text-yellow-dark">
           Welcome the crackling anxieties, knowing they’ll soon wither in the wind.
          </p>
        </WellgorithmCard>

      </section>
</>
  );
};
export default Screen;

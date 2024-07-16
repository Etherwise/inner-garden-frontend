"use client";
import Banner from "@/app/_components/banner";
import WellgorithmCard from "@/app/_components/cards/wellgorithm_card";
import LabelComponent from "@/app/_components/label";
import React, { useEffect, useRef, useState } from "react";
import WellgoLogo from "@/public/assets/header/header_wellgorithm_active.svg"
import Image from "next/image";
import calculate from "@/app/_libs/align_calculation";
import useClipBuilder from "@/app/_hooks/clip_path_calculations";
import './style.css'

const Screen = () => {

const WellgoLogoRef = useRef(null);
const bannerTitleRef = useRef(null);
const filterHeadingRef = useRef(null);
const bannerRef = useRef(null);
const filtersRef = useRef(null);

const {hexagonClip , halfHexagonClip} = useClipBuilder()

useEffect(() => {
  calculate(WellgoLogoRef,"top")
  calculate(bannerTitleRef,"center")
  hexagonClip(filterHeadingRef , 18);
  halfHexagonClip(filtersRef , 50);




}, [])

const [filter, setFilter] = useState("Mint")


  return (
    <>
      <Banner
        className="mt-20 aspect-[2.3/1] md:aspect-[4.5/1] w-full before:bg-[url(/assets/banner/banner-web.svg)]"
        shape="hexagon"
        angle={50} ref={bannerRef}
      >

        <Image src={WellgoLogo} alt="WellgoLogo" className="absolute left-1/2 translate-x-[-50%]" ref={WellgoLogoRef}/>

        <section className="absolute flex flex-col items-center justify-center gap-3 w-fit h-fit text-white" ref={bannerTitleRef}>
          <span ref={filterHeadingRef} className="h-[55px] w-[165px] bg-orange-dark grid place-items-center text-3xl font-bold">{filter}</span>
          <p className="text-lg font-semibold tracking-wide">a unique blend of refreshment and revelation</p>
        </section>

        <section className="absolute bottom-0 w-full h-[100px] bg-[#AF5CAA]" ref={filtersRef}>

        </section>

      </Banner>

      <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid-rows-3 gap-5 mt-[20%] ">
        
        <WellgorithmCard className="aspect-square w-full">
          <p className="mt-[20%] text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos cupiditate doloribus laboriosam illo iste maiores nobis
            mollitia itaque, odio labore.
          </p>
        </WellgorithmCard>
        <WellgorithmCard className="aspect-square w-full">
          <p className="mt-[20%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos cupiditate doloribus laboriosam illo iste maiores nobis
            mollitia itaque, odio labore.
          </p>
        </WellgorithmCard>
        <WellgorithmCard className="aspect-square w-full">
          <p className="mt-[20%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos cupiditate doloribus laboriosam illo iste maiores nobis
            mollitia itaque, odio labore.
          </p>
        </WellgorithmCard>


        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

      </section>
</>
  );
};
export default Screen;

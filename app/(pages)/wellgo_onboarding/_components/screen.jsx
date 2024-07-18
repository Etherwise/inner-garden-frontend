"use client";
import Banner from '@/app/_components/banner'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from "react";
import WellgoLogo from "@/public/assets/header/header_wellgorithm_active.svg"
import calculate from "@/app/_libs/align_calculation";
import useClipBuilder from "@/app/_hooks/clip_path_calculations";
import useWellgorithmFilter from "@/app/_state_hooks/wellgorithm_filters";
import Screen2 from './screen2';

const Screen = () => {

  const WellgoLogoRef = useRef(null);
const filterHeadingRef = useRef(null);
const filtersRef = useRef(null);
let border = ["w-[99.7%],w-[100%]"];

const {hexagonClip , halfHexagonClip} = useClipBuilder()

const expressionFilter = useWellgorithmFilter();

useEffect(() => {
  calculate(WellgoLogoRef,"top")
  hexagonClip(filterHeadingRef , 14);
  halfHexagonClip(filtersRef , 50 );

}, [])


  return (
    
<>
<Banner
        className="mt-10 md:mt-[7%] flex items-center justify-center aspect-[2.3/1] md:aspect-[4.5/1] w-full before:bg-[url(/assets/wellgorithm_page/banner.png)]"
        shape="hexagon"
        angle={50}
      >

        <Image src={WellgoLogo} alt="WellgoLogo" className="absolute left-1/2 translate-x-[-50%] w-[50%] lg:w-[30%]" ref={WellgoLogoRef}/>

        <section className="w-full flex flex-col items-center justify-center gap-1 lg:gap-3 h-fit text-white">
        
         <p className='text-2xl md:text-3xl lg:text-4xl text-yellow-dark font-bold'>Wellgorithms are ...</p>
         <p className='text-lg md:text-xl lg:text-2xl font-semibold mb-[-0.3%] text-yellow-dark'>gamified prompts to nourish your (inner)Garden</p>
         <p className='text-lg md:text-xl lg:text-2xl font-semibold mt-[-0.3%] '>combining 2D journaling with immersive 3D virtual experience</p>

        </section>

        {/* <section>
          <Image src={Arrow} alt=''/>
        </section> */}

      </Banner>

      <section className='bg-purple-outer-octagon mt-12 p-6 h-full'>

        <Screen2 />

      </section>

</>
  )
}

export default Screen
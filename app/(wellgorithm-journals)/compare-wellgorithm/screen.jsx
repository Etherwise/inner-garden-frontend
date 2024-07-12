"use client";
import useClipBuilder from "@/app/hooks/clip_path_calculations";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import WellgorithmLogo from "@/public/images/wellgo-logos/wellgorithm-arrow-logo.svg";
import ButterflyWoman from "@/public/images/banner/butterfly-woman.svg";
import TextWithBrackets from "@/app/components/text_with_brackets";
import WelgoCard from "./components/wellgo-card";

const Screen = () => {
  const bannerRef = useRef(null);
  const arrowClipRef = useRef(null);
  const wellgoRef = useRef(null);
  const octaRef = useRef(null);




  const { arrowClip, octagonClip } = useClipBuilder();
  
  useEffect(() => {
    if (wellgoRef.current.length > 0 && octaRef.current.length > 0) {
      arrowClip(80, bannerRef);
      arrowClip(30, arrowClipRef);
      

      for(let i = 0; i < wellgoRef.current.length; i++) {

        console.log(octaRef)
        
        arrowClip(80, wellgoRef.current[i], "left");
        octagonClip(octaRef.current[i]);

        octaRef.current[i].style.top = `${(wellgoRef.current[i].clientHeight - octaRef.current[i].clientHeight) / 2}px`;
        octaRef.current[i].style.right = `${-(octaRef.current[i].clientWidth / 2)}px`;
      }
  
      arrowClipRef.current.style.bottom = `${-(arrowClipRef.current.clientHeight / 2)}px`;
    }
  }, []);


  const bracketsData = {
    rightText: {
      text: "sunflower",
      properties: "font-black text-xl md:text-3xl lg:text-4xl text-white",
    },
    middleText: {
      text: "title",
      properties: "font-black text-xl md:text-3xl lg:text-4xl text-yellow-dark",
    },
    brackets: {
      properties: "h-[80%]",
    },
  };

  return (
    <div className="min-h-[100vh] px-[3%] py-[1%]  flex flex-col items-center gap-14">
      <section className="banner h-[300px] w-[1600px] relative z-0 my-20 drop-shadow-white">
        <div
          src={ButterflyWoman}
          alt="ButterflyWoman"
          ref={bannerRef}
          className='h-full w-full bg-[url("/images/banner/butterfly-woman.svg")] bg-no-repeat bg-cover'
        />
        <Image
          src={WellgorithmLogo}
          alt="WellgorithmLogo"
          className="absolute left-1/2 translate-x-[-50%] top-[-29%] z-99"
        />
        <TextWithBrackets
          bracketsData={bracketsData}
          className={`bg-purple-inner-octagon w-fit p-6 px-24 absolute  left-1/2 translate-x-[-50%]`}
          ref={arrowClipRef}
        />
      </section>

      <section className="compare-section w-full flex justify-center gap-14">

        {/* Left Section */}
        <section className="left-section  w-[40%] px-2 flex justify-end">
         <WelgoCard/>
        </section>
        {/* Left Section */}

        {/* Right Section */}
        <section className="right-section  w-[40%] flex flex-col gap-14">
          
          

        </section>
        {/* Right Section */}

      </section>
    </div>
  );
};

export default Screen;

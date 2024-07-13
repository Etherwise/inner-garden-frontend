"use client";
import useClipBuilder from "@/app/_hooks/clip_path_calculations";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import WellgorithmLogo from "@/public/assets/images/wellgo-logos/wellgorithm-arrow-logo.svg";
import TextWithBrackets from "@/app/_components/texts/text_with_brackets";
import WelgoCard from "./wellgo-card";
import Banner from "@/app/_components/banner";
import ExpressionFilter from "@/app/_components/expressions_filter";

const Screen = () => {
  const welgoRef = useRef(null);
  const arrowClipRef = useRef(null);

  const { arrowClip } = useClipBuilder();
  
  useEffect(() => {
   
      arrowClip(arrowClipRef,30);
      arrowClipRef.current.style.bottom = `${-(arrowClipRef.current.clientHeight / 2)}px`;
      // welgoRef.current.style.top = `${-(welgoRef.current.clientHeight / 2)}px`;
   
  }, [arrowClip]);


  const bracketsData = {
    rightText: {
      text: "sunflowers",
      properties: "font-black text-2xl md:text-4xl lg:text-5xl text-white",
    },
    middleText: {
      text: "title",
      properties: "font-black text-2xl md:text-4xl lg:text-5xl text-yellow-dark",
    },
    brackets: {
      properties: "h-[80%]",
    },
  };

  const wellgorithmData = [{text : " Welcome the crackling anxieties, knowing theyll soon wither in the wind" , tags : {tag1 : "love" , tag2 : "peace" , tag3 :"kindness"}},
                           {text : " Welcome the crackling anxieties, knowing theyll soon wither in the wind" , tags : {tag1 : "love" , tag2 : "peace" , tag3 :"kindness"}},
                           {text : " Welcome the crackling anxieties, knowing theyll soon wither in the wind" , tags : {tag1 : "love" , tag2 : "peace" , tag3 :"kindness"}}
  ]

  return (<div>
<ExpressionFilter/>
    <section className=" flex min-h-screen flex-col items-center px-[3%] py-[1%] gap-14 mt-16">

      <Banner className="before:bg-[url(/assets/images/banner/butterfly-woman.svg)] bg-contain h-[400px] w-full mb-10" shape="arrow" angle={90}>

      <Image
          src={WellgorithmLogo}
          alt="WellgorithmLogo"
          className="absolute left-1/2 translate-x-[-50%] top-[-21.5%]"
          ref={welgoRef}
          />

        <TextWithBrackets
          bracketsData={bracketsData}
          className={`bg-purple-inner-octagon w-fit p-6 px-24 absolute  left-1/2 translate-x-[-50%] fill-white`}
          ref={arrowClipRef}
          />

          </Banner>

      <section className="compare-section w-full flex justify-center gap-4">

        {/* Left Section */}
        <section className="left-section w-[40%] px-2 flex flex-col items-end">
          <span className="w-full relative left-[60%] p-5 text-xl text-purple-dark font-extrabold">original</span>
         <WelgoCard text={wellgorithmData[1].text} tags={wellgorithmData.tags}/>
        </section>
        {/* Left Section */}

        {/* Right Section */}
        <section className="right-section  w-[40%] flex flex-col">
        <span className="w-full relative left-[15%] p-5 text-xl text-purple-dark font-extrabold">personalized</span>
        {wellgorithmData.map((wellgorithmData,i)=>(
         <WelgoCard key={i} text={wellgorithmData.text} tags={wellgorithmData.tags}/>
        ))}
        </section>
        {/* Right Section */}

      </section>
    </section>
    </div>
  );
};

export default Screen;

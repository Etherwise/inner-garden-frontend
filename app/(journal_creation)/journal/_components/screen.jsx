"use client";
import React, { useEffect, useRef, useState } from "react";
import WellgorithmMoments from "./wellgorithmMoments";
import AiHumoMeter from "./aiHumoMeter";
import ProfileComp from "./profileComp";
import Xbt from "./xbt";
import XbtButton from "./xbtButton";
import Banner from "@/app/_components/banner";
import ScrollContainer from "@/app/_components/container/scroll";
import TextInBrackets from "@/app/_components/texts/text_in_brackets";
import Image from "next/image";
import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const Screen = () => {

    const hexaRef = useRef(null)
    const hexaRef2 = useRef(null)
    const octaRef1 = useRef(null)
    const octaRef2 = useRef(null)
    const octaPointsRef1 = useRef(null)
    const octaPointsRef2 = useRef(null)
    const octaPointsInnerRef1 = useRef(null)
    const octaPointsInnerRef2 = useRef(null)
    const [angle, setAngle] = useState(0);
    const {hexagonClip,octagonClip} = useClipBuilder()
  
    useEffect(() => {
      setAngle(Math.floor(window.innerHeight)/(150-(window.innerHeight/window.innerWidth)));
      hexagonClip(hexaRef , 40);
      hexagonClip(hexaRef2 , 40);
      octagonClip(octaRef1,50)
      octagonClip(octaRef2,50)
      octagonClip(octaPointsRef1,50)
      octagonClip(octaPointsRef2,50)
      octagonClip(octaPointsInnerRef1,50)
      octagonClip(octaPointsInnerRef2,50)
    }, []);

    const headingText = (
      <p className="flex font-bold gap-1">
      <TextInBrackets text="visitation" className="fill-white text-yellow-dark font-bold"/>2024
      </p>
    )

  return (
    <>
    <Banner className="w-full mt-10 lg:mt-10 aspect-[2.3/1] md:aspect-[4.5/1.7]" shape="rect" angle={angle} innerangle={15}>
     

    <div ref={octaPointsRef1} className="w-24 h-24 bg-white absolute bottom-[5%] left-[10%] flex items-center justify-center p-[5px]">
      <div ref={octaPointsInnerRef1} className="w-full h-full bg-orange-dark flex items-center justify-center">
      <Image src={'/assets/journal_creation/icons/weather.svg'} width={80} height={80}/>
      </div>
    </div>
    <div ref={octaPointsRef2} className="w-24 h-24 bg-white absolute bottom-[5%] right-[10%] flex items-center justify-center p-[5px]">
      <div ref={octaPointsInnerRef2} className="w-full h-full bg-orange-dark flex flex-col items-center justify-center">
         <p className="text-3xl font-bold text-white">20</p>
         <p className="font-bold text-white">pts</p>
      </div>
    </div>


    <div className="w-full absolute h-full">
    <ScrollContainer containerClassName="!w-[53%] left-[50%] translate-x-[-50%] top-[68%] !h-fit" headClassName="bg-[#9768D5]" heading={headingText} headAngle={34} bodyClassName="before:!h-screen h-fit !p-0">

    <p className="w-full text-center bg-[#D5D1ED] p-7 font-bold text-3xl text-[#774793]">
    The angels have come, revealing<br />themselves in everyday acts of<br />kindness.
    </p>
    
    <p className=" w-full text-lg text-justify px-12 py-4">
    Around the world, a new awareness is blooming - that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden. Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden. Around the world, a new awareness is blooming - that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden.
    <br />
    <br />
    Around the world, a new awareness is blooming - that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden. Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden. Around the world, a new awareness is blooming - that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden.
    </p>

    <section className="bg-[#AE5CAA] w-full pt-7 flex flex-col items-center justify-center">
      <p className="font-bold text-yellow-dark text-2xl">above all, a generation committed to</p>

     <div className="w-full flex flex-col ">
     
      <div className="w-full flex justify-center"><p className=" font-bold text-yellow-dark text-4xl py-4">being the <span className="text-white font-bold">peace</span>,</p></div>
      <div className="w-full flex justify-center bg-[#564A8D] "><p className=" font-bold text-yellow-dark text-4xl py-4">being the <span className="text-white font-bold">peace</span>,</p></div>
      <div className="w-full flex justify-center bg-[#FFA800] "><p className=" font-bold text-yellow-dark text-4xl py-4">being the <span className="text-white font-bold">peace</span>,</p></div>
     
     </div>

    </section>

    <p className=" w-full text-lg text-justify px-12 py-4">
    Around the world, a new awareness is blooming - that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden. Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden. Around the world, a new awareness is blooming - that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden.
    </p>

    <section className="flex gap-3 items-center justify-center my-5 mb-10">
      <Image src={"/assets/journal_creation/icons/snail.svg"} alt="" width={80} height={80} className=""/>
      <Image src={"/assets/journal_creation/icons/hive.svg"} alt="" width={80} height={80} />
      <Image src={"/assets/journal_creation/icons/butterfly.svg"} alt="" width={80} height={80} />
    </section>

<div className="relative mb-20">
    <div className="w-full h-[25vh] flex items-center justify-center relative">
    <div ref={hexaRef} className="h-full !w-[112.5%] bg-[#9768D5] absolute" />
    </div>
    <div className="bg-[#DFDCF1] p-[2%] h-[140%] aspect-square absolute top-[50%] translate-y-[-50%] left-[5%] flex items-center justify-center" ref={octaRef1}>
      <div className="w-full h-full bg-white" ref={octaRef2}>

      </div>
    </div>
</div>

<div className="relative mb-20">
    <div className="w-full h-[15vh] flex items-center justify-center relative">
    <div ref={hexaRef2} className="h-full !w-[112.5%] bg-[#4E73C4] absolute flex items-center justify-center text-5xl text-white font-light">
      comments
    </div>
    </div>
</div>

    <section className="flex gap-5 my-20 px-10 w-full h-full">
      <Image src={'/assets/avatar/avatar.svg'} alt="" width={100} height={100} className="w-[600px] 2xl:w-[400px] aspect-square" />
      <div>
        <p className="text-3xl font-bold text-[#5950A1]">jack jones</p>
        <p>
        Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden. Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden. Around the
        </p>
      </div>
    </section>

    </ScrollContainer>
    </div>

    </Banner>

    <div className="relative min-h-screen flex items-start justify-center ">
      
      <section className="h-full w-2/5 2xl:w-1/4 flex flex-col py-10">
      <WellgorithmMoments className={' w-full py-12 gap-6 mb-4 bg-[#C4B8DD]'}/>
      <AiHumoMeter className={'w-full py-12 gap-4 mb-16 '} />
      <ProfileComp className={'w-full mb-6 bg-purple-text-light'}/>
      </section>

      <section className="h-full w-4/5 relative">

        <div className="mt-[-24%]">
        
        </div>

      </section>

      <section className="h-full w-2/5 2xl:w-1/4 flex flex-col py-10">
      <Xbt className={'w-full py-0 gap-4 mb-6 bg-[#C4B8DD]'}/>
      <XbtButton className={'w-full py-0 gap-4 mb-6 min-h-[450px]'}/>
      </section>

    </div>
    </>
  );
};

export default Screen;

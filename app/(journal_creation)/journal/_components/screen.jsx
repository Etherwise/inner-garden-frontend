"use client";
import React from "react";
import WellgorithmMoments from "./wellgorithmMoments";
import AiHumoMeter from "./aiHumoMeter";
import ProfileComp from "./profileComp";
import Xbt from "./xbt";
import XbtButton from "./xbtButton";

const Screen = () => {


  return (
    <div className="min-h-screen flex items-start justify-center gap-1">
      
      <section className="h-full w-1/4 flex flex-col py-10">
      <WellgorithmMoments className={' w-full py-12 gap-6 mb-4 bg-[#C4B8DD]'}/>
      <AiHumoMeter className={'w-full py-12 gap-4 mb-16 bg-purple-dark'} />
      <ProfileComp className={'w-full mt-28 mb-6 bg-purple-text-light'}/>
      </section>

      <section className="h-full w-3/4 "></section>

      <section className="h-full w-1/4 flex flex-col py-10">
      <Xbt className={'w-full py-0 gap-4 mb-6 bg-[#C4B8DD]'}/>
      <XbtButton className={'w-full py-0 gap-4 mb-6 bg-[#C4B8DD]  min-h-[450px]'}/>
      </section>

    </div>
  );
};

export default Screen;

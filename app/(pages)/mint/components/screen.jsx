"use client";
import Banner from "@/app/_components/banner";
import WellgorithmCard from "@/app/_components/cards/wellgorithm_card";
import LabelComponent from "@/app/_components/label";
import React, { useEffect, useState } from "react";
import WellgoLogo from "@/public/assets/header/header_wellgorithm_active.svg"
import Image from "next/image";

const Screen = () => {



   


  return (
    <div className="min-h-screen">
      <Banner
        className="mt-10 aspect-[2.3/1] md:aspect-[4.5/1] w-full"
        shape="hexagon"
        angle={50}
        innerangle={15}
      >

        <Image src={WellgoLogo} alt="WellgoLogo" className="absolute" />

        <LabelComponent
          className="absolute left-1/2 translate-x-[-50%] w-max z-10"
          text={["aware", "nest"]}
          align={{do:true,value : 100}}
        />

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
    </div>
  );
};
export default Screen;

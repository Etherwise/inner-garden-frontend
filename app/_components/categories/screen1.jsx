"use client"

import { useEffect, useState } from "react";

import Banner from "@/app/_components/banner";
import TextCard from "@/app/_components/cards/text_card";
import LabelComponent from "@/app/_components/label";

export default function Screen1({ category="", content="", categoryImage="" }) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {

    setAngle(Math.floor(window.innerHeight)/(150-(window.innerHeight/window.innerWidth)));
  }, []);
  
  return (
    <>
      <Banner className={`aspect-[2.3/1] md:aspect-[2.9/1] w-full`} shape="rect" angle={angle} innerangle={15}
        imageurl={categoryImage}
      >
        <TextCard angle={4} innerangle={18} align={{apply: true, value: 100}}
        className="absolute left-[calc(50%)] translate-x-[-50%]
        w-[90%] md:w-[80%] xl:w-[60%]
        xl:px-12 lg:px-10 md:px-8 px-6">
          <LabelComponent className="absolute left-1/2 translate-x-[-50%] w-max z-10 !py-1 md:!py-2 xl:!py-3"
          text={[category]} align={"top"} shape="hexagon" bracketClassName="!w-[55%] md:!w-[58%] lg:!w-[58%] xl:!w-[62%]" />
          
          <p className="text-xl md:text-2xl lg:text-3xl text-center w-full font-semibold line-clamp-4">
            {content}
          </p>
        </TextCard>
      </Banner>
    </>
  );
}

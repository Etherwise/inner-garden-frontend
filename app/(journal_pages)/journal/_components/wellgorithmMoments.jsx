import React, { createRef, useEffect, useRef, useState } from "react";
import ComponentContainer from "./componentContainer";
import Image from "next/image";
import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const WellgorithmMoments = ({className}) => {


    const arr = [
        ["prepare", "your emotion soil"],
        ["mulch", "your mind"],
        ["fertilize", "your best self"],
        ["harvest", "flowers of the spirit"],
      ];

    const [selected, setSelected] = useState(0);

    const optionRef = useRef(arr.map(() => createRef()));
    const containerRef = useRef(null);
  
    const { hexagonClip } = useClipBuilder();

    useEffect(() => {
        optionRef.current.forEach((ref) => {
          hexagonClip(ref, 25);
        });
        if (containerRef.current) {
          containerRef.current.style.clipPath = 'polygon(15% 0, 100% 0, 100% 100%, 10% 100%, 0 95%, 0 10%)' 
        }
      }, []);


  return (
    <ComponentContainer className={`${className}`} ref={containerRef}>
    <Image
      src={"/assets/journal_creation/octa.svg"}
      alt="octa"
      width={160}
      height={160}
    />
    <section className="">
      <p className="text-center text-2xl font-extrabold text-purple-dark">
        Wellgorithm
      </p>
      <p className="text-center text-lg font-semibold text-purple-text-light">
        moments
      </p>
    </section>
    <section className="flex flex-col gap-4">
      {arr.map((item, i) => (
        <div
          key={i}
          ref={optionRef.current[i]}
          className={`py-3 px-12 text-center cursor-pointer transition-colors duration-600 ${
            selected === i ? "bg-[#774793]" : "bg-[#B5A3CE]"
          }`}
          onClick={() => setSelected(i)}
        >
          <p
            className={`text-xl font-bold transition-colors duration-600 ${
              selected === i
                ? "text-yellow-dark"
                : "text-purple-text-light"
            }`}
          >
            {item[0]}
          </p>
          <p
            className={`text-sm font-medium transition-colors duration-600 ${
              selected === i ? "text-white" : "text-purple-text-light"
            }`}
          >
            {item[1]}
          </p>
        </div>
      ))}
    </section>
  </ComponentContainer>
  )
}

export default WellgorithmMoments

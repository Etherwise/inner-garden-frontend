import React, { useEffect, useRef } from 'react'
import AiHumanMeter from "@/app/_components/ai_human_meter/AiHumanMeter";
import ComponentContainer from './componentContainer';
import Image from 'next/image';

const AiHumoMeter = ({className}) => {

  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.clipPath = 'polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 92%, 0 7%)' 
    }
  }, []);

  return (
    <ComponentContainer className={`overflow-visible ${className}`} ref={containerRef}>
    <AiHumanMeter />
    <p className="text-center text-2xl font-bold text-yellow-dark">
      AI-Humometer
    </p>
    <p className="text-center text-sm font-semibold text-white">
      How much this journal was
      <br />
      writter by man or machine.
    </p>
    <Image
      src={"/assets/journal_creation/que_mark.svg"}
      alt="que_mark"
      width={60}
      height={60}
      className="absolute bottom-[-6%] z-10"
    />
  </ComponentContainer>
  )
}

export default AiHumoMeter

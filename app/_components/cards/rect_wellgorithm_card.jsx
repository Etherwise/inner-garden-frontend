"use client"
import { useEffect, useRef } from "react";
import useClipBuilder from "@/app/_hooks/clip_path_calculations";
import womanImage from '@/public/assets/banner/banner.png'
import Image from "next/image";
import WellgorithmBottom from "@/public/assets/wellgorithm_card/wellgorithm_card_bottom.png"
import Explore from "@/public/assets/icons/explore.png"
import Compare from "@/public/assets/icons/compare.png"
import Create from "@/public/assets/icons/create.png"

const RectWellgorithmCard = ({cardImage , children , text , upperAngle = 8 , lowerAngle = 5 , className = {main : "" , image : "" , text : "" } , shadow , shape}) => {

  const imageTextRef = useRef(null);  
  const outerWellgoritmCardRef = useRef(null);  
  const { squareClip,rectClip } = useClipBuilder();

  useEffect(() => {
   
    switch (shape) {
      case "rect":
        rectClip(outerWellgoritmCardRef, upperAngle, lowerAngle );
        rectClip(outerWellgoritmCardRef, upperAngle, lowerAngle );
        break;
      case "square":
        squareClip(imageTextRef, upperAngle, lowerAngle );
        squareClip(outerWellgoritmCardRef, upperAngle, lowerAngle );
        break;
    
      default:
        squareClip(imageTextRef, upperAngle, lowerAngle );
        squareClip(outerWellgoritmCardRef, upperAngle, lowerAngle );
        break;
    }

  }, []);

  return (
    <div className={`relative h-full max-lg:w-full ${className.main}`} >
    <section className={`image-text h-full bg-white `} ref={imageTextRef}>

      <Image src={cardImage ? cardImage : womanImage} alt='womanImage' className={`h-2/5 w-[100%] object-cover ${className.image}`}/>

      <p className={`grid place-items-center w-full h-2/5 my-auto px-12 py-8 font-semibold text-lg md:text-2xl text-center text-purple-inner-octagon ${className.text}`}>
{ text ? text : "Welcome the crackling anxieties, knowing they’ll soon wither in the wind."}</p>

    <section className={`relative h-1/5  ${shadow ? "border-yellow-dark border-t-[1px]" : ""}`}>
      <Image src={WellgorithmBottom} alt="WellgorithmBottom" className=" w-full h-full"/>
     <section className="w-full h-full absolute bottom-0 z-99 flex">
     <div className="w-1/3 h-[80%] flex flex-col items-center justify-center"><Image src={Explore} /><span className="font-semibold text-white">explore</span></div>
      <div className="w-1/3 h-[80%] flex flex-col items-center justify-center"><Image src={Compare} /><span className="font-semibold text-white">compare</span></div>
      <div className="w-1/3 h-[80%] flex flex-col items-center justify-center"><Image src={Create} /><span className="font-semibold text-white">create</span></div>
     </section>
    </section>
    
    </section>
        {children}
  </div>
  );
}

export default RectWellgorithmCard;
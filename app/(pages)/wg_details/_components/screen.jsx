'use client'
import RectWellgorithmCard from '@/app/_components/cards/rect_wellgorithm_card'
import LabelComponent from '@/app/_components/label'
import useClipBuilder from '@/app/_hooks/clip_path_calculations'
import calculate from '@/app/_libs/align_calculation'
import React, { useEffect, useRef } from 'react'
import Card from './card'

const Screen = () => {

  const sectionRef = useRef(null)
  const cardBottomSectionRef = useRef(null)
  const userNameCardOuterRef = useRef(null)
  const userNameCardInnerRef = useRef(null)
  const cardTagRef = useRef(null)
  const pointsOctaRef = useRef(null)
  const {rectClipBanner , hexagonClip , octagonClip} = useClipBuilder()

  useEffect(() => {
  
    rectClipBanner(sectionRef,5,13)
    hexagonClip(userNameCardOuterRef,8)
    hexagonClip(userNameCardInnerRef,8)
    hexagonClip(cardTagRef,8)
    octagonClip(pointsOctaRef,8)
    calculate(cardBottomSectionRef,"bottom")
  
  }, [])
  

  return (
    <>
    <section className='grid grid-cols-1 place-items-center w-[100%] h-full my-20'>
    <RectWellgorithmCard className = {{main : " w-[53%] md:w-[60%] lg:w-[53%] 2xl:w-[33%] h-[105%] lg:h-full" , text : "text-white bg-purple-mid" }} >
        <LabelComponent shape={"arrow"} text={["compassion","title"]} angle={15} align={"top"}
        className="!text-lg !px-[6%] h-[10%] left-[50%] translate-x-[-50%]" bracketClassName="!w-[70%]" />
        <LabelComponent thin={{apply: true, color: "#FAA81A", width: 3}} shape={"arrow"} textClasses={"!text-white"}
        text={["compassion","title","30"]} angle={15} align={"bottom"} bracketClassName="!w-[63%]"
        className="!text-lg text-white !px-[6%] h-[10%] left-[50%] translate-x-[-50%] !bg-orange-dark" />
        </RectWellgorithmCard>

      <section className='w-fit h-fit bg-[#AA9DD0] md:pt-40 pt-28 lg:pt-36 max-md:px-[8%] md:max-lg:px-[15%] lg:max-xl:px-[20%] py-20 lg:py-32 flex xl:flex-row flex-col items-center lg:justify-center gap-20 xl:gap-8 2xl:gap-10 relative z-[-1] mt-[-12%]  md:mt-[-8%] lg:mt-[-6%] xl:mt-[-3%]' ref={sectionRef}>
        
        <Card />
        <Card />
        <Card />
        
      </section>

    </section>
    </>
  )
}

export default Screen
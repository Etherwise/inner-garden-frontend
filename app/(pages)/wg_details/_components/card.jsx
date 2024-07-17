import SquareCard from '@/app/_components/cards/square_card'
import LabelComponent from '@/app/_components/label'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Avatar from '@/public/assets/avatar/avatar.svg'
import useClipBuilder from '@/app/_hooks/clip_path_calculations'
import calculate from '@/app/_libs/align_calculation'

const Card = () => {

    const cardBottomSectionRef = useRef(null)
    const userNameCardOuterRef = useRef(null)
    const userNameCardInnerRef = useRef(null)
    const cardTagRef = useRef(null)
    const pointsOctaRef = useRef(null)
    const {rectClipBanner , hexagonClip , octagonClip} = useClipBuilder()

    useEffect(() => {
      
        hexagonClip(userNameCardOuterRef,8)
        hexagonClip(userNameCardInnerRef,8)
        hexagonClip(cardTagRef,8)
        octagonClip(pointsOctaRef,8)
        calculate(cardBottomSectionRef,"bottom")
      
    }, [])
    

  return (
    <SquareCard className = {{main : "!w-[24%] max-md:!w-[100%]" , image : "" , text : "text-[18px] leading-5 !text-black"}}>
            <LabelComponent angle={14} text={["compassion","title"]} align={"top"} shape='hexagon' className='lg:w-[63%] h-[14%] left-[50%] translate-x-[-50%]' textClasses={"text-lg"} bracketClassName=' text-lg !w-[70%]'/>
                <section ref={cardBottomSectionRef} className='h-fit absolute left-[50%] translate-x-[-50%] w-[90%] flex   items-center justify-between'>
                  <section className='flex items-center justify-center w-fit'>
                    <Image src={Avatar} alt='avatar' className='z-[2]'/>
                    <span className='bg-purple-inner-octagon flex items-center justify-center h-fit p-[1px] ml-[-12%] z-[1]' ref={userNameCardOuterRef}><p className='flex items-center justify-center py-1 pl-7 pr-4 bg-white text-purple-inner-octagon text-sm font-bold text-nowrap' ref={userNameCardInnerRef}>jackie milter</p></span>
                  </section>
                  <section className='flex items-center gap-[2px] lg:mr-[3%]'>
                  <p ref={cardTagRef} className='bg-orange-dark py-2 px-5 h-fit text-sm font-bold text-white'>peace</p>
                  <p className='bg-[#4F81E5] px-[14px] lg:px-[16px] flex items-center justify-center aspect-square text-white font-bold' ref={pointsOctaRef}>20</p>
                  </section>
                </section>
          </SquareCard>
  )
}

export default Card
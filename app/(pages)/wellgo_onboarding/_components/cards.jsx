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
    <SquareCard className = {{main : " max-xl:w-[70%] 2xl:!w-[24%] max-md:!w-[100%]" , image : "" , text : "text-[18px] leading-5 !text-black"}} cardText={"motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part"}>
            <LabelComponent angle={14} text={["compassion","title"]} align={"top"} shape='hexagon' className='lg:w-[68%] h-[15%] left-[50%] translate-x-[-50%]' textClasses={"text-xl"} bracketClassName=' text-xl !w-[80%]'/>
                <section className='h-fit absolute left-[50%] translate-x-[-50%] w-[90%] flex bottom-[5%] items-center justify-between'>
                  <section className='flex items-center justify-center w-fit gap-3'>
                    <Image src={Avatar} alt='avatar' className='z-[2]'/>
                    <span className='h-fit z-[1] flex items-center justify-center text-purple-mid text-lg font-bold text-nowrap'>jackie milter</span>
                  </section>
                </section>
          </SquareCard>
  )
}

export default Card
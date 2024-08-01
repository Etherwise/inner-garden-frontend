import TextInBrackets from '@/app/_components/texts/text_in_brackets'
import React, { useEffect, useRef } from 'react'
import ComponentContainer from './componentContainer'
import useClipBuilder from '@/app/_hooks/clip_path_calculations'

const ProfileComp = ({className}) => {


    const octaRef3 = useRef(null)
    const octaRef4 = useRef(null)

    const { octagonClip } = useClipBuilder()

    useEffect(() => {
        octagonClip(octaRef3, 25)
        octagonClip(octaRef4, 25)
    }, [])

    const containerRef = useRef(null);
    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.style.clipPath = 'polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 94%, 0 7%)' 
      }
    }, []);
  
    return (
        <section className='h-fit w-full relative mt-28'>
        <ComponentContainer className={` ${className}`} ref={containerRef}>

            <p className="text-white text-2xl pt-10 pb-4 font-bold">Winston Churchil</p>
            <p className="w-full bg-white flex justify-center py-8 text-xl leading-8 text-nowrap text-justify font-medium">
                Around the world, a new<br />awareness is blooming<br />— that our emotions,
                like<br />our bodies, are a part of<br />nature, and that we can<br />cultivate
                them like a gar-<br />den. Around the world, a<br />new awareness is bloom-<br />
                ing — that our emotions,<br />like our bodies, are a part<br />of nature, and that we can
            </p>
            <p className="flex items-center justify-center flex-wrap fill-white text-3xl font-extrabold text-white bg-[#AE5CAA] w-full py-5">
                <TextInBrackets text="inner" className="text-yellow-dark font-extrabold w-[3.3rem] sm:w-[45%] md:w-[49%] lg:w-[50%] xl:w-fit text-3xl !gap-0" thin={{ apply: true, width: 1, color: "#8757B5" }} />
                Hero
            </p>
           
        </ComponentContainer>
        <div ref={octaRef3} className="w-40 h-40 bg-white absolute p-[1%] top-[-18.5%] left-[50%] translate-x-[-50%] rotate-[23deg]">
                <div ref={octaRef4} className="w-full h-full bg-green-400 ">
                </div>
            </div>
        </section>
    )
}

export default ProfileComp

'use client'
import AiHumanMeter from '@/app/_components/ai_human_meter/AiHumanMeter'
import React, { createRef, useEffect, useRef, useState } from 'react'
import ComponentContainer from './componentContainer'
import Image from 'next/image'
import useClipBuilder from '@/app/_hooks/clip_path_calculations'

const Screen = () => {

  const arr = [['prepare','your emotion soil'],['mulch','your mind'],['fertilize','your best self'],['harvest','flowers of the spirit']];
const [selected, setSelected] = useState(0)

  const optionRef = useRef(arr.map(()=>createRef()));

  const {hexagonClip} = useClipBuilder();

  useEffect(() => {
  
    optionRef.current.forEach((ref)=>{hexagonClip(ref,25)});
  
  }, []);
  

  return (
    <div className='w-screen px-3 flex items-center justify-center gap-1'>

    <section className='h-full w-1/4 flex flex-col items-center py-10 '>

        <ComponentContainer className=' w-full py-12 gap-6 mb-4 bg-[#C4B8DD]'>
        <Image src={'/assets/journal_creation/octa.svg'} alt='octa' width={160} height={160}/>
        <section className=''>
        <p className='text-center text-2xl font-extrabold text-purple-dark'>Wellgorithm</p>
        <p className='text-center text-lg font-semibold text-purple-text-light'>moments</p>
        </section>
        <section className='flex flex-col gap-4'>
          {arr.map((item,i)=>(
            <div key={i} ref={optionRef.current[i]} className={`py-3 px-12 text-center cursor-pointer transition-colors duration-600 ${selected === i ? 'bg-[#774793]' : 'bg-[#B5A3CE]'}`} onClick={()=>setSelected(i)}>
              <p className={`text-xl font-bold transition-colors duration-600 ${selected === i ? 'text-yellow-dark' : 'text-purple-text-light'}`}>{item[0]}</p>
              <p className={`text-sm font-medium transition-colors duration-600 ${selected === i ? 'text-white' : 'text-purple-text-light'}`}>{item[1]}</p>
            </div>
          ))}
        </section>
        </ComponentContainer>

        <ComponentContainer className='w-full py-12 gap-4 mb-6 bg-purple-dark'>
        <AiHumanMeter />
        <p className='text-center text-2xl font-bold text-yellow-dark'>AI-Humometer</p>
        <p className='text-center text-sm font-semibold text-white'>How much this journal was<br/>writter by man or machine.</p>
        <Image src={'/assets/journal_creation/que_mark.svg'} alt='que_mark' width={60} height={60} className='absolute bottom-[-6%]'/>
        </ComponentContainer>

      </section>

    <section className='h-full w-3/4 bg-green-400'></section>
    <section className='h-full w-1/4 bg-green-400'></section>



    </div>
  )
}

export default Screen

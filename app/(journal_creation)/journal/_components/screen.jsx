import AiHumanMeter from '@/app/_components/ai_human_meter/AiHumanMeter'
import React from 'react'
import ComponentContainer from './componentContainer'
import Image from 'next/image'

const Screen = () => {
  return (
    <div className='w-screen h-screen px-3 flex gap-1'>
      
    <section className='h-full w-1/5 flex flex-col items-center py-10 bg-black'>
      <ComponentContainer className='w-full p-8 pb-12 gap-4 mb-6'>
      <AiHumanMeter />
      <p className='text-center text-2xl font-bold text-yellow-dark'>AI-Humometer</p>
      <p className='text-center text-sm font-semibold text-white'>How much this journal was<br/>writter by man or machine.</p>
      <Image src={'/assets/journal_creation/que_mark.svg'} width={60} height={60} className='absolute bottom-[-6%]'/>
      </ComponentContainer>

      <ComponentContainer className='p-8 gap-4 my-4'>
        
      </ComponentContainer>
      </section>
    <section className='h-full w-4/5'></section>
    <section className='h-full w-1/5 flex flex-col items-center py-10'></section>



    </div>
  )
}

export default Screen

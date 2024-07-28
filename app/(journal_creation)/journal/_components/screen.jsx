import AiHumanMeter from '@/app/_components/ai_human_meter/AiHumanMeter'
import React from 'react'
import ComponentContainer from './componentContainer'

const Screen = () => {
  return (
    <div className='w-screen h-screen bg-blue-300 px-3 flex gap-1'>
      
    <section className='h-full bg-red-300 w-2/4'>
    
    <ComponentContainer className='p-8 gap-4'>
      <AiHumanMeter />
      <p className='text-center text-2xl font-bold text-yellow-dark'>AI-Humometer</p>
      <p className='text-center text-sm font-semibold text-white'>How much this journal was<br/>writter by man or machine.</p>
      </ComponentContainer>
      


      </section>
    <section className='h-full bg-red-300 w-3/4'></section>
    <section className='h-full bg-red-300 w-2/4'></section>



    </div>
  )
}

export default Screen

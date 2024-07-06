import React from 'react'
import leftb from '@/public/brackets/left-bracket.svg'
import rightb from '@/public/brackets/right-bracket.svg'
import Image from 'next/image'
import './style.css'


const rafce = () => {
  return (
    <div class="bg-purple-bg-light h-screen flex items-center justify-center">
    <div class="octa w-[500px] h-[500px] bg-white clip-octagon flex items-center justify-center ">
        <div class="octa w-[97%] h-[97%] bg-purple-outer-octagon clip-octagon flex items-center justify-center">
            <div class="octa w-[85%] h-[85%] bg-white clip-octagon flex items-center justify-center">
                <div class="octa w-[96%] h-[96%] bg-purple-inner-octagon clip-octagon items-center justify-center flex flex-col">
                    
                       <div class=" w-full h-full flex items-center justify-center flex-col gap-3">
                        <div className='flex justify-center'>
                            <span className='font-black text-[40px] text-yellow-dark mx-1'>log</span>
                        <Image src={leftb} alt='leftb'/>
                        <span className='font-black text-[40px] text-white mx-1'>in</span>
                        <Image src={rightb} alt='as' />
                        </div>
                        

                        <div class="h-[50%] w-[90%] flex flex-col items-center justify-center">

                            <div class="px-8 relative octa-input-up w-full h-full  text-purple-text flex items-center justify-center bg-white my-2">
                                <span class="absolute left-9 font-bold">|</span> <input type="email" placeholder="email" class="w-full h-full p-2 px-4 font-semibold text-lg  border-white bg-transparent text-purple-text placeholder-purple-text focus:outline-none bg-white"/>
                            </div>
    
                            <div class="px-8 relative octa-input-down w-full h-full  text-purple-text flex items-center justify-center bg-white my-2">
                                <span class="absolute left-9 font-bold">|</span>  <input type="password" placeholder="password" class="w-full h-full p-2 px-4 font-semibold  text-lg  border-white bg-transparent text-purple-text  placeholder-purple-text focus:outline-none bg-white"/>
                            </div>

                        </div>

                        <button class="login-button bg-yellow-dark text-purple-text-light font-bold text-lg py-1 px-8 ">enter</button>
                       </div>

                </div>
        </div>
    </div>
</div>
</div>

  )
}

export default rafce

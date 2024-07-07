import React from 'react'
import './style.css'
import BracketsWithText from '../components/BracketsWithText'
import Shape from '../components/Shape'
import Octagon from '../components/Octagon'

const bracketsData = {
    leftText : {text : "log" , properties : "font-black md:text-4xl text-3xl text-yellow-dark"},
    middleText : {text : "in" , properties : "font-black md:text-4xl text-3xl text-white"},
    brackets :{properties : ""}
}


const rafce = () => {
  return (
   
                    <Octagon>
                       
                       <div className='flex items-center h-[25%] lg:pt-[10%] pt-[11%]'>
                       <BracketsWithText bracketsData = {bracketsData}/>
                       </div>
                        

                        <section className=" w-[90%] h-[50%] flex flex-col items-center justify-center ">

                            <div className="px-10 relative octa-input-up w-full h-[50%]  text-purple-text flex items-center justify-center bg-white my-2">
                                <span className="absolute left-11 font-semibold text-xl">|</span> <input type="email" placeholder="email" className="w-full h-full p-2 px-4 font-semibold text-lg  border-white bg-transparent text-purple-text placeholder-purple-text focus:outline-none bg-white"/>
                            </div>
    
                            <div className="px-10 relative octa-input-down w-full h-[50%]  text-purple-text flex items-center justify-center bg-white my-2">
                                <span className="absolute left-11 font-semibold text-xl">|</span>  <input type="password" placeholder="password" className="w-full h-full p-2 px-4 font-semibold  text-lg  border-white bg-transparent text-purple-text  placeholder-purple-text focus:outline-none bg-white"/>
                            </div>

                        </section>

                       <section className='h-[25%] '>

                       <Shape className={`bg-yellow-dark md:mt-3`} width={112} anglePixel={11.2}>
                        <button className=''><span class="text-purple-text-light font-bold text-lg">enter</span></button>
                       </Shape>
                       </section>
                       </Octagon>


           

  )
}

export default rafce

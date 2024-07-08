'use client'
import React, { useState } from 'react'
import Octagon from '../extras/octagon'
import './style.css'
import BracketsWithText from '../extras/brackets_with_text'
import Shape from '../extras/Shape'

const Screen = () => {

  const bracketsData = {
    leftText: {
      text: "pass",
      properties: "font-black text-3xl md:text-4xl lg:text-5xl text-yellow-dark",
    },
    middleText: {
      text: "word",
      properties: "font-black text-3xl md:text-4xl lg:text-5xl text-white",
    }
  };

  const [email, setEmail] = useState('')

  const handleSubmit = () =>{

    // TODO : /api/forgotpassword

  }

  return (
    <Octagon>
      <h1>
        oops, i forgot my
      </h1>
      <div className="flex items-center lg:pt-[10%] pt-[11%]">
        <BracketsWithText bracketsData={bracketsData} />
      </div>
      
      <Shape
          className={`bg-white md:mt-3`}
          width={"sm:w-[112px] md:w-[114px] lg:w-[118px]"}
          anglePixel={11.2}
        >
      <form className=" w-[90%] flex flex-col items-center justify-center ">
        <section className="px-10 relative w-full  text-purple-text flex items-center justify-center bg-white my-2">
          <span className="absolute left-11 font-semibold text-xl">|</span>{" "}
          <input
            type="email"
            placeholder="email"
            className="w-full  p-2 px-4 font-semibold text-lg  border-white bg-transparent text-purple-text placeholder-purple-text focus:outline-none bg-white"
            autoComplete="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </section>
      </form>
      </Shape>

      <div className="">
        <Shape
          className={`bg-yellow-dark md:mt-3`}
          width={"sm:w-[112px] md:w-[114px] lg:w-[118px]"}
          anglePixel={11.2}
        >
          <button onClick={handleSubmit} className="text-purple-text-light font-bold text-lg">
            send
          </button>
        </Shape>
      </div>
    </Octagon>
  )
}

export default Screen
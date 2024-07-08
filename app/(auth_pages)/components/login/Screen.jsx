'use client'
import React, { useState } from "react";
import "./style.css";
import BracketsWithText from "../extras/brackets_with_text";
import Shape from "../extras/shape";
import Octagon from "../extras/octagon";

const Screen = () => {
  const bracketsData = {
    leftText: {
      text: "log",
      properties: "font-black text-3xl md:text-4xl lg:text-5xl text-yellow-dark",
    },
    middleText: {
      text: "in",
      properties: "font-black text-3xl md:text-4xl lg:text-5xl text-white",
    }
  };

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = ()=>{

    // TODO: API - /api/userlogin

  }

  return (
    <Octagon>
      <div className="flex items-center h-[25%] lg:pt-[10%] pt-[11%]">
        <BracketsWithText bracketsData={bracketsData} />
      </div>
      
      <form className=" w-[90%] h-[50%] flex flex-col items-center justify-center ">
        <section className="px-10 relative octa-input-up w-full h-[50%]  text-purple-text flex items-center justify-center bg-white my-2">
          <span className="absolute left-11 font-semibold text-xl">|</span>{" "}
          <input
            type="email"
            placeholder="email"
            className="w-full h-full p-2 px-4 font-semibold text-lg  border-white bg-transparent text-purple-text placeholder-purple-text focus:outline-none bg-white"
            autoComplete="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </section>

        <section className="px-10 relative octa-input-down w-full h-[50%]  text-purple-text flex items-center justify-center bg-white my-2">
          <span className="absolute left-11 font-semibold text-xl">|</span>{" "}
          <input
            type="password"
            placeholder="password"
            className="w-full h-full p-2 px-4 font-semibold  text-lg  border-white bg-transparent text-purple-text  placeholder-purple-text focus:outline-none bg-white"
            autoComplete="current-password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </section>
      </form>

      <div className="h-[25%]">
        <Shape
          className={`bg-yellow-dark md:mt-3`}
          width={"sm:w-[112px] md:w-[114px] lg:w-[118px]"}
          anglePixel={11.2}
        >
          <button onClick={handleSubmit} className="text-purple-text-light font-bold text-lg">
            enter
          </button>
        </Shape>
      </div>
    </Octagon>
  );
};

export default Screen;

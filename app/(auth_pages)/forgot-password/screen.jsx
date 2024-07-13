"use client";
import React, { useEffect, useRef, useState } from "react";
import Octagon from "../components/octogon";
import "./style.css";
import TextWithBrackets from "@/app/_components/texts/text_with_brackets";
import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const Screen = () => {
  const bracketsData = {
    leftText: {
      text: "pass",
      properties:
        "font-black text-2xl md:text-4xl lg:text-4xl text-yellow-dark",
    },
    middleText: {
      text: "word",
      properties: "font-black text-2xl md:text-4xl lg:text-4xl text-white",
    },
    brackets: {
      properties: "md:h-[80%] h-[60%] w-auto ",
    },
  };

  const [email, setEmail] = useState("");

  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(formRef, 14);
    hexagonClip(buttonRef, 14);
  }, [hexagonClip]);

  const handleSubmit = () => {
    // TODO : /api/forgotpassword
  };

  return (
    <Octagon>
      <h1 className="text-white font-semibold text-xs md:text-lg">oops, i forgot my</h1>

      <TextWithBrackets
        bracketsData={bracketsData}
        className={"flex items-center"}
      />

      <form
        className="mb-3 md:my-6 md:mb-0 relative flex flex-col items-center justify-center bg-white w-[200px] md:w-[315px] lg:w-[330px] h-[14%] lg:h-[10%]"
        ref={formRef}
      >
        <span className="absolute left-6 lg:left-10 font-semibold text-sm lg:text-2xl text-purple-text-light">
          |
        </span>
        <input
          type="email"
          placeholder="email"
          className="w-full pl-14 px-4 font-semibold text-lg lg:text-2xl  border-white bg-transparent text-purple-text placeholder-purple-text focus:outline-none bg-white"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>

      <button onClick={handleSubmit} className="text-purple-text-light font-bold text-lg py-1 px-8 bg-yellow-dark md:mt-3 sm:w-[112px] md:w-[114px] lg:w-[118px] lg:h-10" ref={buttonRef}>
            send
          </button>
        
    </Octagon>
  );
};

export default Screen;

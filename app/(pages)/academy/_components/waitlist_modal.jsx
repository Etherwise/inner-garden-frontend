"use client"

import Image from "next/image";
import { useRef, useEffect } from "react";

import CardImage from "@/public/assets/banner/banner.png";
import PlayIcon from "@/public/assets/academy/play_icon.svg";

import RectangleCard from "@/app/_components/cards/rectangle_card";
import LabelComponent from "@/app/_components/label";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

const WaitlistModal = ({ open=false, data=[] }) => {
  const elementRef = useRef(null);
  const inputSecRef = useRef(null);
  const joinbtnRef = useRef(null);
  const nameRef = useRef(null);
  const mailRef = useRef(null);

  const { hexagonClip, halfHexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(elementRef, 70);
    hexagonClip(inputSecRef, 27);
    hexagonClip(joinbtnRef, 12);
 
    // halfHexagonClip(nameRef, 29, 0);
    // halfHexagonClip(mailRef, 29, 0);
  }, [open]);

  if (!open) return (<></>);
  return (
    <>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] drop-shadow-clip-outline-yellow min-w-[600px] w-[40%]">
        <div ref={elementRef} className="
        flex flex-col items-center gap-6
        py-6 px-9
        bg-[#25408F]">
          <section className="flex flex-col items-center gap-1 w-full">
            <p className="text-white">get on the waiting list for</p>
            <p className="text-white font-extrabold text-3xl">(Inner)Academy</p>
          </section>
          <section ref={inputSecRef} className="flex flex-col gap-6 w-full bg-transparent mb-4">
            <section className="p-2 px-9 bg-white">
              <input type="text" ref={nameRef} className="p-1 w-full" placeholder="firstname" />
            </section>
            <section className="p-2 px-9 bg-white">
            <input type="mail" placeholder="email" className="text-purple-text-light p-1 w-full" ref={mailRef} />
            </section>
          </section>
          <button ref={joinbtnRef} className="bg-yellow-dark text-purple-text-light p-2 px-6 font-extrabold text-xl">join the list</button>
        </div>
      </div>
    </>
  );
}

export default WaitlistModal;
"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";

const MailSubscribeComp = ({}) => {
  const mailSubscribeSecRef = useRef();
  const subscribeBtnRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(mailSubscribeSecRef, 24);
    hexagonClip(subscribeBtnRef, 19);
  }, [hexagonClip]);

  return (
    <section ref={mailSubscribeSecRef} className="
    flex gap-3 justify-between
    w-full sm:w-[60%] lg:w-[45%] py-1.5 px-2 bg-white 
    text-black">
      <input type='mail' placeholder="Email" className="py-2 lg:py-3 ml-6 outline-2 w-full" />
      <button ref={subscribeBtnRef} className="bg-[#AF5CAA] text-white py-2 lg:py-3 px-6 sm:px-3 w-[90%] sm:w-1/3 font-bold">subscribe</button>
    </section>
  );
}

export default MailSubscribeComp;
"use client"

import { useEffect, useRef } from "react";

import useClipBuilder from "@/app/hooks/clip_path_calculations";

const MailSubscribeComp = ({}) => {
  const mailSubscribeSecRef = useRef();
  const subscribeBtnRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(24, mailSubscribeSecRef);
    hexagonClip(19, subscribeBtnRef);
  }, [hexagonClip]);

  return (
    <section ref={mailSubscribeSecRef} className="
    flex gap-3 justify-between
    lg:w-[45%] py-1.5 px-2 bg-white text-black">
      <input type='mail' placeholder="Email" className="py-2 lg:py-3 ml-6 outline-0" />
      <button ref={subscribeBtnRef} className="bg-[#AF5CAA] text-white py-2 lg:py-3 px-6 sm:px-3 w-1/3 font-bold">subscribe</button>
    </section>
  );
}

export default MailSubscribeComp;
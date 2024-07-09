"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";

import useClipPath from "@/app/hooks/clip_path_calculations";

// #TODO update 'strong' with 'heading' tag later
const MailSubscribeComp = ({}) => {
  const mailSubscribeSecRef = useRef();
  const subscribeBtnRef = useRef();

  const { hexagon } = useClipPath();

  useEffect(() => {
    hexagon(24, mailSubscribeSecRef);
    hexagon(19, subscribeBtnRef);
  }, [hexagon]);

  return (
    <section ref={mailSubscribeSecRef} className="
    flex gap-3 justify-between
    lg:w-1/3 py-1.5 px-2 bg-white text-black">
      <input type='mail' placeholder="Email" className="py-3 ml-6 w-full outline-0" />
      <button ref={subscribeBtnRef} className="bg-[#AF5CAA] text-white p-3 w-1/3 font-bold">subscribe</button>
    </section>
  );
}

export default MailSubscribeComp;
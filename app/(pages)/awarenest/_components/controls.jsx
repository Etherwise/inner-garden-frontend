"use client"

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import Caterpillar from "@/public/assets/awarenest/caterpillar.svg";
import Hive from "@/public/assets/awarenest/hive.svg";
import Butterfly from "@/public/assets/awarenest/butterfly.svg";
import ActiveCaterpillar from "@/public/assets/awarenest/active_caterpillar.svg";
import ActiveHive from "@/public/assets/awarenest/active_hive.svg";
import ActiveButterfly from "@/public/assets/awarenest/active_butterfly.svg";

const Controls = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const handleClick = (e) => {
    
    setActiveBtn(e.target.parentNode.dataset.id-0);

  }
  
  return (
    <>
      <section className="flex items-center gap-6">
        <button onClick={handleClick} data-id={1}>
            <Image src={activeBtn === 1 ? ActiveCaterpillar : Caterpillar} alt="caterpillar" className="w-[80%] lg:w-full" />
        </button>
        <button onClick={handleClick} data-id={2}>
            <Image src={activeBtn === 2 ? ActiveHive : Hive} alt="hive" className="w-[80%] lg:w-full" />
        </button>
        <button onClick={handleClick} data-id={3}>
            <Image src={activeBtn === 3 ? ActiveButterfly : Butterfly} alt="butterfly" className="w-[80%] lg:w-full" />
        </button>
      </section>
    </>
  );
}

export default Controls;
import Image from "next/image";

import CardImage from "@/public/assets/banner/banner.png";
import PlayIcon from "@/public/assets/academy/play_icon.svg";

import RectangleCard from "@/app/_components/cards/rectangle_card";
import LabelComponent from "@/app/_components/label";

export default function Screen2({ data=[] }) {
  return (
    <>
      <section>
        (inner)Gardening 101
      </section>
      <div className="flex gap-6 lg:mt-6">
        <RectangleCard cardImage={CardImage} className={{
            container: " drop-shadow-light-purple",
            main: "relative",
            image: "!h-[40%]",
            text: `bg-purple-text-light py-9 text-center text-xl md:text-xl lg:text-2xl 2xl:!px-20 xl:!px-12 lg:!px-10 md:!px-8 !px-12 !text-white !m-0`
          }}
          textContent={<span className="font-semibold line-clamp-3 ">Conversations with experts on the importance of cultivating calm</span>}
        >
          <section className="absolute left-1/2 top-1/2 translate-y-[-80%] translate-x-[-50%] bg-[#d9d9d989] p-6 rounded-full">
            <Image src={PlayIcon} alt="play" className="w-full" />
          </section>
        </RectangleCard>
        
        <RectangleCard cardImage={CardImage} className={{
            container: " drop-shadow-light-purple",
            main: "relative",
            image: "!h-[40%]",
            text: `bg-purple-text-light py-9 text-center text-xl md:text-xl lg:text-2xl 2xl:!px-20 xl:!px-12 lg:!px-10 md:!px-8 !px-12 !text-white !m-0`
          }}
          textContent={<span className="font-semibold line-clamp-3 ">Conversations with experts on the importance of cultivating calm</span>}
        >
          <section className="absolute left-1/2 top-1/2 translate-y-[-80%] translate-x-[-50%] bg-[#d9d9d989] p-6 rounded-full">
            <Image src={PlayIcon} alt="play" className="w-full" />
          </section>
        </RectangleCard>

        <RectangleCard cardImage={CardImage} className={{
            container: " drop-shadow-light-purple",
            main: "relative",
            image: "!h-[40%]",
            text: `bg-purple-text-light py-9 text-center text-xl md:text-xl lg:text-2xl 2xl:!px-20 xl:!px-12 lg:!px-10 md:!px-8 !px-12 !text-white !m-0`
          }}
          textContent={<span className="font-semibold line-clamp-3 ">Conversations with experts on the importance of cultivating calm</span>}
        >
          <section className="absolute left-1/2 top-1/2 translate-y-[-80%] translate-x-[-50%] bg-[#d9d9d989] p-6 rounded-full">
            <Image src={PlayIcon} alt="play" className="w-full" />
          </section>
        </RectangleCard>
      </div>
    </>
  );
}

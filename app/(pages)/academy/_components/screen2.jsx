import Image from "next/image";

import CardImage from "@/public/assets/banner/banner.png";
import PlayIcon from "@/public/assets/academy/play_icon.svg";

import RectangleCard from "@/app/_components/cards/rectangle_card";
import LabelComponent from "@/app/_components/label";

export default function Screen2({ data=[], children }) {
  return (
    <div className="relative">
      <section className="flex flex-col items-center gap-3 my-12">
        <h2 className="text-yellow-dark font-extrabold text-4xl">(<span className="text-white font-extrabold">inner</span>)Gardening 101</h2>
        <p className="text-purple-bg-light font-bold text-xl">where 2D journaling meets 3D virtual reality</p>
      </section>
      <div className="flex gap-12">
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

      <section className="flex flex-col items-center gap-3 my-12">
        <h2 className="text-yellow-dark font-extrabold text-4xl">(<span className="text-white font-extrabold">inner</span>)Gardening 201</h2>
        <p className="text-purple-bg-light font-bold text-xl">where 2D journaling meets 3D virtual reality</p>
      </section>

      {children}
    </div>
  );
}

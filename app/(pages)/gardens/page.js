import CardImage from "@/public/assets/cards/butterfly.png";

import ExpressionFilter from "@/app/_components/expressions_filter";

import Screen1 from "./_components/screen1";

import RectangleCard from "@/app/_components/cards/rectangle_card";
import LabelComponent from "@/app/_components/label";

export default function Home() {
  return (
    <>
      <ExpressionFilter />
      <div className="h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]">
        <Screen1 />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-12">
        <RectangleCard cardImage={CardImage} className={{image: "h-[30%]", text: " text-xl md:text-2xl !text-black px-12 h-[70%] py-0"}}>
          <LabelComponent className="absolute left-1/2 top-[30%] py-3 translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />
        </RectangleCard>
        <RectangleCard cardImage={CardImage} className={{image: "h-[30%]", text: " text-xl md:text-2xl !text-black px-12 h-[70%] py-0"}}>
          <LabelComponent className="absolute left-1/2 top-[30%] translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["aware", "nest"]} />
        </RectangleCard>
        <RectangleCard cardImage={CardImage} className={{image: "h-[30%]", text: " text-xl md:text-2xl !text-black px-12 h-[70%] py-0"}}>
          <LabelComponent className="absolute left-1/2 top-[30%] translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["aware", "nest"]} />
        </RectangleCard>
        <RectangleCard cardImage={CardImage} className={{image: "h-[30%]", text: " text-xl md:text-2xl !text-black px-12 h-[70%] py-0"}}>
          <LabelComponent className="absolute left-1/2 top-[30%] translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["aware", "nest"]} />
        </RectangleCard>

      </div>
    </>
  );
}

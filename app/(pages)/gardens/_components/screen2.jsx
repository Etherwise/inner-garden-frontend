import CardImage from "@/public/assets/cards/butterfly.png";

import RectangleCard from "@/app/_components/cards/rectangle_card";
import LabelComponent from "@/app/_components/label";

export default function Screen2() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-rows-3 gap-12">
        <RectangleCard cardImage={CardImage} className={{
            main: "",
            image: "!h-[30%]",
            text: `text-balance text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
        }}>
          <LabelComponent shape={"hexagon"}
          className="absolute left-1/2 top-[30%] translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />
        </RectangleCard>
        
        <RectangleCard cardImage={CardImage} className={{
            main: "",
            image: "!h-[30%]",
            text: `text-balance text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
        }}>
          <LabelComponent shape={"hexagon"}
          className="absolute left-1/2 top-[30%] translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />
        </RectangleCard>
        <RectangleCard cardImage={CardImage} className={{
            main: "",
            image: "!h-[30%]",
            text: `text-balance text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
        }}>
          <LabelComponent shape={"hexagon"}
          className="absolute left-1/2 top-[30%] translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />
        </RectangleCard>
        <RectangleCard cardImage={CardImage} className={{
            main: "",
            image: "!h-[30%]",
            text: `text-balance text-xl md:text-xl lg:text-2xl !xl:px-12 !lg:px-10 !md:px-8 !px-12 !text-black !h-fit !py-0 !m-0 !mt-[10%]`
        }}>
          <LabelComponent shape={"hexagon"}
          className="absolute left-1/2 top-[30%] translate-y-[-50%] translate-x-[-50%] w-max z-10" text={["compassion", "title"]} />
        </RectangleCard>
        
      </div>
    </>
  );
}

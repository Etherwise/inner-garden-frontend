import CardImage from "@/public/assets/cards/butterfly.png";

import RectangleCard from "@/app/_components/cards/rectangle_card";
import LabelComponent from "@/app/_components/label";

export default function Screen2({ topics=[] }) {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-rows-[repeat(3,_minmax(300px,_400px))] gap-12 lg:mt-6">
        {
          topics.map(z => 
            <RectangleCard key={z._id} cardImage={CardImage} className={{
                main: "relative",
                image: "!h-[40%] mb-3",
                text: `line-clamp-3 text-balance text-xl md:text-xl lg:text-2xl 2xl:!px-20 xl:!px-12 lg:!px-10 md:!px-8 !px-12 !text-black !m-0`
            }}
            textContent={z.content}
            >
              <LabelComponent className="absolute left-1/2 translate-x-[-50%] top-[40%] translate-y-[-50%] w-max z-10 !py-1 md:!py-2 xl:!py-3"
                text={[z.topicName]} shape="hexagon" bracketClassName="" />
              {/* !w-[68%] md:!w-[71%] lg:!w-[71%] xl:!w-[74%] */}
            </RectangleCard>
          )
        }
        
      </div>
    </>
  );
}

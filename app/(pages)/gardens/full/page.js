import CardImage from "@/public/assets/cards/butterfly.png";

import ExpressionFilter from "@/app/_components/expressions_filter";

import Screen1 from "./screen1";

export default function Index() {
  return (
    <>
      <ExpressionFilter />
      <div className="h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh] mb-9">
        <Screen1 />
      </div>
      <div className="h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh] mb-9">
        <Screen1 />
      </div>
      <div className="h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh] mb-9">
        <Screen1 />
      </div>
    </>
  );
}

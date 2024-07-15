import ExpressionFilter from "@/app/_components/expressions_filter";

import Screen1 from "./_components/screen1";

export default function Home() {
  return (
    <>
      <ExpressionFilter />
      <div className="h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]">
        <Screen1 />
      </div>
      <div className="grid grid-flow-row min-h-screen border-2 border-black">
        hello world
      </div>
    </>
  );
}

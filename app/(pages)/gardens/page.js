import ExpressionFilter from "@/app/_components/expressions_filter";

import Screen1 from "./_components/screen1";
import Screen2 from "./_components/screen2";


export default function Index() {
  return (
    <>
      <ExpressionFilter />
      <div className="h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]">
        <Screen1 />
      </div>
      <Screen2 />
    </>
  );
}

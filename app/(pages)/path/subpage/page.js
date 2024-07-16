
import ExpressionFilter from "@/app/_components/expressions_filter";

import Screen1 from "./_components/screen1";

// h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]
export default function Index() {
  return (
    <>
      <ExpressionFilter />
      <div className="">
        <Screen1 />
      </div>
    </>
  );
}

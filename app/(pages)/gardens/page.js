import ExpressionFilter from "@/app/_components/expressions_filter";

import Screen1 from "../_components/screen1";

export default function Home() {
  return (
    <>
      <ExpressionFilter />
      {/* <div className="h-[60vh]">
        <Screen1 />
      </div> */}
      <div className="grid grid-flow-row min-h-screen">
        hello world
      </div>
    </>
  );
}

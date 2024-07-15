import ExpressionFilter from "@/app/_components/expressions_filter";

import Screen1 from "./_components/screen1";

export default function Index() {
  return (
    <>
      <ExpressionFilter />
      <div className="">
        <Screen1 />
      </div>
      <div className="grid grid-flow-row min-h-screen border-2 border-black">
        hello world
      </div>
    </>
  );
}

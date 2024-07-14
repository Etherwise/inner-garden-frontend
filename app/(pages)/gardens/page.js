import ExpressionFilter from "@/app/_components/expressions_filter";

import Screen1 from "./_components/screen1";

export default function Home() {
  return (
    <>
      <ExpressionFilter />
      <Screen1 />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        hello world
      </div>
    </>
  );
}

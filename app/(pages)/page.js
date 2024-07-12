import Image from "next/image";

import ExpressionFilter from "@/app/components/expressions_filter";
import Banner from "@/app/components/banner";

function Home() {
  return (
    <>
      <ExpressionFilter />
      <div className="flex min-h-screen flex-col items-center justify-between mt-3">
        <Banner className="h-[300px] w-full" angle={6} />
      </div>
    </>
  );
}

export default Home;
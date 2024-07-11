import Image from "next/image";

import ExpressionFilter from "@/app/components/expressions_filter";
import Banner from "@/app/components/banner";

function Home() {
  return (
    <>
      <ExpressionFilter />
      <Banner />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        asfsd
      </div>
    </>
  );
}

export default Home;
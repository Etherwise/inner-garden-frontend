import Image from "next/image";

import ExpressionFilter from "@/app/components/expressions_filter";
import Banner from "@/app/components/banner";
import TextInBrackets from "@/app/components/texts/text_in_brackets";
import ScrollContainer from "@/app/components/container/scroll";
import WellgorithmCard from "@/app/components/cards/wellgorithm_card";


function Home() {
  const heading = (
    <section className="flex items-center gap-1 w-min font-extrabold">
      <TextInBrackets text="title" className="fill-white text-yellow-dark font-extrabold w-[54%] gap-1.5" thin={{apply: true, color: "#8757B5", width: 3}} />
      Path
    </section>
  );
  return (
    <>
      <ExpressionFilter />
      <div className="flex min-h-screen flex-col items-center justify-between mt-6">
        <div className="w-1/3">
          <WellgorithmCard className="h-[300px] text-center">
            <p className="text-purple-text text-xl font-extrabold mt-9">Welcome the crackling anxieties, knowing they’ll soon wither in the wind.</p>
          </WellgorithmCard>
        </div>
        {/* <Banner className="h-[400px] w-full" angle={60} shape="hexagon">
          {heading}
        </Banner> */}
        {/* <ScrollContainer heading={heading}>
          asfd
        </ScrollContainer> */}
      </div>
    </>
  );
}

export default Home;
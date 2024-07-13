import Banner from "@/app/_components/banner";
import ExpressionFilter from "@/app/_components/expressions_filter";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ExpressionFilter />
      <Banner className="mt-6 h-[480px] w-full" shape="square" angle={3}></Banner>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        hello world
      </div>
    </>
  );
}

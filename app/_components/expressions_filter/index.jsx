"use client"

import Image from "next/image";

import { useRef } from "react";

import LeftHandle from "@/public/assets/expressions_filter/left_handle.svg";
import RightHandle from "@/public/assets/expressions_filter/right_handle.svg";

import FilterBtn from "./filter_btn";

const expressions = [
  {id: 1, name: "peace"},
  {id: 2, name: "love"},
  {id: 3, name: "kindness"},
  {id: 4, name: "gratitude"},
  {id: 5, name: "hope"},
  {id: 6, name: "humility"},
  {id: 7, name: "peace"},
  {id: 8, name: "love"},
  {id: 9, name: "kindness"},
  {id: 10, name: "gratitude"},
  {id: 11, name: "hope"},
  {id: 12, name: "humility"},
]
const ExpressionFilter = ({
}) => {
  const sectionRef = useRef(null);

  const handleLeftClick = () => {
    if (!sectionRef) return 0;

    sectionRef.current.scrollBy({
      left: 100, // Scroll 100 pixels to the right
      behavior: 'smooth'
    });
  }

  const handleRightClick = () => {
    if (!sectionRef) return 0;

    sectionRef.current.scrollBy({
      left: -100, // Scroll 100 pixels to the right
      behavior: 'smooth'
    });
  }

  return (
    <div className="
    flex items-center justify-between gap-3
    min-h-max w-full py-2 mt-3">

      <section className="grid place-items-center">
        <button onClick={handleRightClick}>
          <Image
            src={LeftHandle}
            alt="left"
            className="w-[90%] lg:w-[100%]"
          />
        </button>
      </section>

      <section className="flex gap-6 md:gap-9 w-full overflow-auto no-scrollbar" ref={sectionRef}>
        {
          expressions.map((z, i) => 
            <FilterBtn key={z.id} id={z.id} text={z.name} />
          )
        }
      </section>

      <section className="grid place-items-center">
        <button onClick={handleLeftClick}>
          <Image
            src={RightHandle}
            alt="right"
            className="w-[90%] lg:w-[100%]"
          />
        </button>
      </section>

    </div>
  );
}
export default ExpressionFilter;
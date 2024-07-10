"use client"

import Image from "next/image";

import { useState } from "react";

import LeftHandle from "@/public/expressions_filter/left_handle.svg";
import RightHandle from "@/public/expressions_filter/right_handle.svg";

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

  return (
    <div className="
    flex items-center justify-between gap-3
    min-h-max w-full py-2 px-6">

      <section className="hidden lg:inline w-max">
        <button>
          <Image
            src={LeftHandle}
            alt="Avatar"
            className="w-[60%] lg:w-[70%]"
          />
        </button>
      </section>

      <section className="flex gap-3 w-full overflow-auto border-2 border-black no-scrollbar">
        {
          expressions.map((z, i) => 
            <FilterBtn key={z.id} id={z.id} text={z.name} />
          )
        }
      </section>

      <section className="hidden lg:inline w-max">
        <button>
          <Image
            src={RightHandle}
            alt="Avatar"
            className="w-[60%] lg:w-[70%]"
          />
        </button>
      </section>

    </div>
  );
}
export default ExpressionFilter;
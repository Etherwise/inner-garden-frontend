import Image from "next/image";
import Link from "next/link";

import HeaderWellgorithm from "@/public/header/header_wellgorithm.svg";

import FilterBtn from "./filter_btn";
import LinkComp from "../link_component";

const MobileNav = ({
  open = false
}) => {
  return (
    <div className={`
      ${open ? "absolute right-0" : "hidden left-full"} top-[6%]
      lg:hidden flex flex-col items-center gap-6
      bg-inherit min-w-[200px] w-1/4 p-6 h-full`}>
        <section className="space-y-3">
          <FilterBtn id={1} text="Gardens" angle={0} />
          <FilterBtn id={2} text="Adversities" angle={0} />
          <FilterBtn id={3} text="Activities" angle={0} />
        </section>

        <hr className="bg-purple-bg-light w-full" />

        <section className="">
          <Image
            src={HeaderWellgorithm}
            alt="Avatar"
            className="w-[100%]"
          />
        </section>
        
        <hr className="bg-purple-bg-light w-full" />

        <section className="flex flex-col gap-3">
          <LinkComp text="login" href="/login" className="text-purple-mid text-sm xl:text-base" />
          <LinkComp text="join us" href="/joinus" className="text-purple-mid text-sm xl:text-base" angle={0} />
        </section>
    </div>
  );
}
export default MobileNav;
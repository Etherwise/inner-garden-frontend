import Image from "next/image";
import Link from "next/link";

import HeaderWellgorithm from "@/public/header/header_wellgorithm.svg";

import NavLink from "./nav_link";
import LinkComp from "../link_component";

const MobileNav = ({
  open = false
}) => {
  return (
    <div className={`
      ${open ? "absolute right-0" : "hidden left-full"} top-[6%]
      lg:hidden flex flex-col items-center gap-6
      bg-inherit min-w-[200px] w-1/4 p-6 h-full z-10`}>
        <section className="flex flex-col gap-y-3">
          <NavLink id={1} text="Gardens" href="/gardens" active={true} />
          <NavLink id={2} text="Adversities" href="/adversities" />
          <NavLink id={3} text="Activities" href="/activities" />
        </section>

        <hr className="bg-purple-bg-light w-full" />

        <section className="">
          <Link href="/wellgorithms">
            <Image
              src={HeaderWellgorithm}
              alt="Avatar"
              className=""
            />
          </Link>
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
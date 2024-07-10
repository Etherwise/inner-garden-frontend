import Image from "next/image";
import Link from "next/link";

import HeaderLogo from "@/public/header/header_logo.svg";
import HeaderAvatar from "@/public/header/header_avatar.svg";
import HeaderExtra from "@/public/header/header_extras.svg";
import HeaderWellgorithm from "@/public/header/header_wellgorithm.svg";
import HeaderSearch from "@/public/header/header_search.svg";

import FilterBtn from "./filter_btn";
import LinkComp from "../link_component";

const Header = ({
}) => {
  return (
    <header className="
    flex items-center justify-between
    min-h-max w-full text-white py-3 px-6
    bg-black">
      <section>
        <Link href={"/"}>
          <Image
            src={HeaderLogo}
            alt="Inner Logo"
            className="w-[80%] xl:w-full"
          />
        </Link>
      </section>
      
      <section>
        <Image
          src={HeaderAvatar}
          alt="Avatar"
          className="w-[60%] lg:w-[80%] xl:w-full"
        />
      </section>

      <section className="hidden gap-1 lg:flex">
        <FilterBtn id={1} text="Gardens" />
        <FilterBtn id={2} text="Adversities" />
        <FilterBtn id={3} text="Activities" />
      </section>

      <section className="hidden gap-1 lg:flex items-center">
        <Image
          src={HeaderExtra}
          alt="extra"
        />
        <Image
          src={HeaderExtra}
          alt="extra"
        />
        <Image
          src={HeaderExtra}
          alt="extra"
          className="fill-red-600 stroke-black"
          style={{fill: "black", stroke: "black"}}
        />
      </section>

      <section>
        <Image
          src={HeaderWellgorithm}
          alt="Avatar"
          className="w-[60%] lg:w-[80%] xl:w-full"
        />
      </section>

      <section className="w-max">
        <Image
          src={HeaderSearch}
          alt="Avatar"
          className="w-[60%] lg:w-[80%] xl:w-full ml-auto"
        />
      </section>

      <section className="hidden
      lg:flex items-center gap-3
      w-[24%] lg:w-[21%] xl:w-[18%]
      ">
        <LinkComp text="login" href="/login" className="text-purple-mid text-sm xl:text-base" />
        <LinkComp text="join us" href="/joinus" className="bg-purple-mid py-2 text-sm xl:text-base" angle={15} />
      </section>
      
    </header>
  );
}
export default Header;
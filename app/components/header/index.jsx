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
    min-h-max w-full text-white py-3 px-9
    bg-black">
      <section>
        <Image
          src={HeaderLogo}
          alt="Inner Logo"
          className="w-[60%] lg:w-[80%] xl:w-full"
        />
      </section>
      
      <section>
        <Image
          src={HeaderAvatar}
          alt="Avatar"
          className="w-[60%] lg:w-[80%] xl:w-full"
        />
      </section>

      <section className="flex gap-1">
        <FilterBtn id={1} text="Gardens" />
        <FilterBtn id={2} text="Adversities" />
        <FilterBtn id={3} text="Activities" />
      </section>

      <section className="flex items-center">
        <Image
          src={HeaderExtra}
          alt="extra"
          className="w-[60%] lg:w-[80%] xl:w-full"
        />
        <Image
          src={HeaderExtra}
          alt="extra"
          className="w-[60%] lg:w-[80%] xl:w-full"
        />
        <Image
          src={HeaderExtra}
          alt="extra"
          className="w-[60%] lg:w-[80%] xl:w-full"
          style={{fill: "yellow", stroke: "yellow"}}
        />
      </section>

      <section>
        <Image
          src={HeaderWellgorithm}
          alt="Avatar"
          className="w-[60%] lg:w-[80%] xl:w-full"
        />
      </section>

      <section>
        <Image
          src={HeaderSearch}
          alt="Avatar"
          className="w-[60%] lg:w-[80%] xl:w-full"
        />
      </section>

      <section className="
      flex items-center gap-3 w-1/6
      ">
        <LinkComp text="login" href="/login" className="text-purple-mid" />
        <LinkComp text="join us" href="/joinus" className="bg-purple-mid py-2" angle={15} />
      </section>
      
      
      {/* 
      

      <div className="flex flex-col items-center justify-center gap-y-3">
        <section className="flex justify-between items-center gap-9
        text-xl w-max">
          <Link href="/academy">(inner) Academy</Link>
          <Link href="/tv">(inner) TV</Link>
        </section>
        <section className="text-center">
          <span>copyright 2024 Lightworkers of the Sphere, LLC. All rights reserved.</span>
        </section>
        <section className="flex justify-between items-center gap-9
        text-xl w-max">
          <Link href="/policies">policies</Link>
          <Link href="/contact">contact</Link>
        </section>
      </div> */}
    </header>
  );
}
export default Header;
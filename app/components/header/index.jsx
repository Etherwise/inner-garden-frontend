"use client"

import Image from "next/image";
import Link from "next/link";

import { usePathname } from 'next/navigation';
import { useState } from "react";

import HeaderLogo from "@/public/header/header_logo.svg";
import HeaderAvatar from "@/public/header/header_avatar.svg";
import HeaderExtra from "@/public/header/header_extras.svg";
import HeaderWellgorithm from "@/public/header/header_wellgorithm.svg";
import HeaderWellgorithmActive from "@/public/header/header_wellgorithm_active.svg";
import HeaderSearch from "@/public/header/header_search.svg";
import HeaderMenu from "@/public/header/header_menu.svg";

import NavLink from "./nav_link";
import MobileNav from "./mobile_nav";
import LinkComp from "../link_component";
import TextInBrackets from "@/app/components/texts/text_in_brackets";

const Header = ({
}) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const pathname = usePathname();

  const handleMenuClick = () => {
    setOpenMobileNav(!openMobileNav);
  }
  
  return (
    <header className="
    flex items-center justify-between gap-5
    min-h-max w-full text-white py-2
    bg-black responsive-container">
      <section>
        <Link href={"/"}>
          <Image
            src={HeaderLogo}
            alt="Inner Logo"
            className="w-[90%] xl:w-full"
          />
        </Link>
      </section>
      
      <section className="hidden lg:inline">
        <Image
          src={HeaderAvatar}
          alt="Avatar"
          className="w-[60%] lg:w-[90%] xl:w-full"
        />
      </section>

      <section className="hidden gap-3 lg:flex">
        <NavLink id={1} text="Gardens" href="/gardens" active={pathname == "/gardens"} />
        <NavLink id={2} text="Adversities" href="/adversities" active={pathname == "/adversities"} />
        <NavLink id={3} text="Activities" href="/activities" active={pathname == "/activities"} />
      </section>

      <section className="hidden lg:flex items-center justify-center w-[6%] lg:w-[3%]">
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
        />
      </section>

      <section className="hidden lg:inline w-[30%] lg:w-[15%]">
        <Link href="/wellgorithms">
          <Image
            src={pathname == "/wellgorithms" ? HeaderWellgorithmActive : HeaderWellgorithm}
            alt="Avatar"
            className="w-full"
          />
        </Link>
      </section>

      <section className="flex items-center justify-between gap-6">
        <button className="lg:w-full">
          <Image
            src={HeaderSearch}
            alt="Search"
            className="w-full"
          />
        </button>
        <button onClick={handleMenuClick} className="w-[25%] lg:hidden">
          <Image
            src={HeaderMenu}
            alt="Menu"
            className="w-full"
          />
        </button>
      </section>

      <section className="hidden
      lg:flex items-center gap-3
      w-[24%] lg:w-[21%] xl:w-[18%]
      ">
        <LinkComp href="/login" className="flex items-center justify-center gap-0.5 text-purple-mid text-sm xl:text-base">
          <>
            log
            <TextInBrackets text="in" className="w-1/3 font-bold text-white fill-purple-mid" thin={{apply: true, color: "#000", width: 3}} />
          </>
        </LinkComp>
        <LinkComp text="join us" href="/joinus" className="bg-purple-mid py-2 text-sm xl:text-base" angle={15} />
      </section>

      <MobileNav open={openMobileNav} />
      
    </header>
  );
}
export default Header;
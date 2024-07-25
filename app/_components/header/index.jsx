"use client"

import Image from "next/image";
import Link from "next/link";

import { usePathname } from 'next/navigation';
import { useState } from "react";

import HeaderLogo from "@/public/assets/header/header_logo.svg";
import HeaderAvatar from "@/public/assets/header/header_avatar.svg";
import HeaderExtra from "@/public/assets/header/header_extras.svg";
import HeaderWellgorithm from "@/public/assets/header/header_wellgorithm.svg";
import HeaderWellgorithmActive from "@/public/assets/header/header_wellgorithm_orange.svg";
import HeaderSearch from "@/public/assets/header/header_search.svg";
import HeaderMenu from "@/public/assets/header/header_menu.svg";

import NavLink from "./nav_link";
import MobileNav from "./mobile_nav";
import CategoriesDrawer from "./categories_drawer";

import LinkComp from "@/app/_components/link_component";
import TextInBrackets from "@/app/_components/texts/text_in_brackets";


const Header = () => {
  const [openCategoryDrawer, setOpenCategoryDrawer] = useState(true);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const pathname = usePathname();

  const handleMenuClick = () => {
    setOpenMobileNav(!openMobileNav);
  }

  const handleMoreCategoryClick = () => {
    setOpenCategoryDrawer(!openCategoryDrawer);
  }
  
  return (
    <header className="relative
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
      </section>

      <section className="hidden gap-3 lg:flex">
        <NavLink id={2} text="Adversities" href="/adversities" active={pathname == "/adversities"} />
      </section>

      <section className="hidden gap-3 lg:flex">
        <NavLink id={3} text="Activities" href="/activities" active={pathname == "/activities"} />
      </section>

      <section className="hidden lg:flex items-center justify-center">
        <button className="lg:flex items-center justify-center" onClick={handleMoreCategoryClick}>
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
        </button>
      </section>

      <section className="hidden lg:inline w-[30%] lg:w-[15%] xl:w-[12%]">
        <Link href="/wellgorithms">
          <Image
            src={pathname == "/wellgorithms" ? HeaderWellgorithmActive : HeaderWellgorithm}
            alt="Avatar"
            className="w-full"
          />
        </Link>
      </section>

      <section className="flex items-center justify-between gap-6">
        <button className="lg:w-full ml-6">
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
      ">
        <LinkComp href="/login" className="flex items-center justify-center gap-0.5 text-purple-mid text-sm xl:text-base">
          <>
            log
            <TextInBrackets text="in" className="w-[41%] font-bold text-white fill-purple-mid" thin={{apply: true, color: "#000", width: 3}} />
          </>
        </LinkComp>
      </section>

      <section className="hidden lg:flex
        w-max
      ">
        <LinkComp text="join us" href="/joinus" className="bg-purple-mid py-2 px-6 text-sm xl:text-base text-nowrap" angle={18} />
      </section>

      <MobileNav open={openMobileNav} />

      {
        openCategoryDrawer && <CategoriesDrawer handleMoreCategoryClick={handleMoreCategoryClick} />
      }
      
    </header>
  );
}
export default Header;
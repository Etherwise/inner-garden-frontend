"use client"

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import HeaderLogo from "@/public/header/header_logo.svg";
import HeaderAvatar from "@/public/header/header_avatar.svg";
import HeaderExtra from "@/public/header/header_extras.svg";
import HeaderWellgorithm from "@/public/header/header_wellgorithm.svg";
import HeaderSearch from "@/public/header/header_search.svg";
import HeaderMenu from "@/public/header/header_menu.svg";

import NavLink from "./nav_link";
import MobileNav from "./mobile_nav";
import LinkComp from "../link_component";

const Header = ({
}) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

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

      <section className="hidden gap-1 lg:flex">
        <NavLink id={1} text="Gardens" href="/gardens" active={true} />
        <NavLink id={2} text="Adversities" href="/adversities" />
        <NavLink id={3} text="Activities" href="/activities" />
      </section>

      <section className="hidden lg:flex items-center w-[6%] lg:w-[3%]">
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

      <section className="hidden lg:inline w-max">
        <Link href="/wellgorithms">
          <Image
            src={HeaderWellgorithm}
            alt="Avatar"
            className="w-[60%] lg:w-[70%]"
          />
        </Link>
      </section>

      <section className="flex items-center justify-between gap-6">
        <button>
          <Image
            src={HeaderSearch}
            alt="Avatar"
            className="w-[80%] lg:w-full"
          />
        </button>
        <button onClick={handleMenuClick}>
          <Image
            src={HeaderMenu}
            alt="Avatar"
            className="w-[70%] lg:hidden"
          />
        </button>
      </section>

      <section className="hidden
      lg:flex items-center gap-3
      w-[24%] lg:w-[21%] xl:w-[18%]
      ">
        <LinkComp text="login" href="/login" className="text-purple-mid text-sm xl:text-base" />
        <LinkComp text="join us" href="/joinus" className="bg-purple-mid py-2 text-sm xl:text-base" angle={15} />
      </section>

      <MobileNav open={openMobileNav} />
      
    </header>
  );
}
export default Header;
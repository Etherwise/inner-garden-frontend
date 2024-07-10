import Image from "next/image";
import Link from "next/link";

import FooterLogo from "@/public/footer/footer_logo.svg";

import LinkComp from "../link_component";
import MailSubscribeComp from "./mail_subscribe";

// #TODO update 'strong' with 'heading' tag later
const Footer = ({
  heading="subscribe to Wellgorithms  Weekly",
  sub=`a weekly dose of Wellgorithms to warm your heart, 
      invigorate your mind, and inspire resilience in adversity.`,
}) => {
  return (
    <footer className="
    flex flex-col items-center justify-center gap-y-[5vh] md:gap-y-[6vh] lg:gap-y-[7vh]
    min-h-screen w-full text-white md:pt-[12vh] px-6
    bg-no-repeat bg-[url(/footer/footer_bg.png)] bg-cover bg-center">
      <section className="
      flex flex-col items-center
      text-center
      w-full space-y-2">
        <strong className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl 3xl:text-6xl font-extrabold">
          {heading}
        </strong>
        <p className="text-xl md:text-xl xl:text-2xl md:w-1/2">
          {sub}
        </p>
      </section>
      <MailSubscribeComp />
      <section className="grid place-items-center">
        <Image
          src={FooterLogo}
          alt="Inner Logo"
          className="w-[60%] md:w-[70%] lg:w-[80%] xl:w-[90%] 3xl:w-full"
        />
      </section>
      <section className="
      flex justify-between items-center gap-6 sm:gap-9 w-max
      text-xl xl:text-2xl">
        <LinkComp text="welcome" href="/login" className="bg-orange-mid py-2 lg:py-3 px-6 lg:px-9" angle={9} />
        <LinkComp text="donate" href="/donate" className="bg-orange-mid py-2 lg:py-3 px-6 lg:px-9" angle={9} />
      </section>

      <div className="flex flex-col items-center justify-center gap-y-[2vh]">
        <section className="flex justify-between items-center gap-9
        md:text-xl w-max">
          <Link href="/academy">(inner) Academy</Link>
          <Link href="/tv">(inner) TV</Link>
        </section>
        <section className="text-center text-sm">
          <span>copyright 2024 Lightworkers of the Sphere, LLC. All rights reserved.</span>
        </section>
        <section className="flex justify-between items-center gap-9
        md:text-xl w-max">
          <Link href="/policies">policies</Link>
          <Link href="/contact">contact</Link>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
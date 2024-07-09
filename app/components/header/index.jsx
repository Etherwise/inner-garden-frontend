import Image from "next/image";
import Link from "next/link";

import HeaderLogo from "@/public/header/header_logo.svg";
import HeaderAvatar from "@/public/header/header_avatar.svg";
import LinkComp from "./link";

// #TODO update 'strong' with 'heading' tag later
export default function Header({
  heading="subscribe to Wellgorithms  Weekly",
  sub=`a weekly dose of Wellgorithms to warm your heart, 
      invigorate your mind, and inspire resilience in adversity.`,
}) {
  return (
    <header className="
    flex items-center justify-between gap-y-12
    min-h-max w-full text-white py-6 px-9
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
          alt="Picture of the author"
          className="w-[60%] lg:w-[80%] xl:w-full"
        />
      </section>
      {/* <section>
        <Image
          src={FooterLogo}
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </section> */}
      {/* <section className="
      flex flex-col items-center
      text-center
      w-full space-y-2">
        <strong className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
            {heading}
        </strong>
        <p className="text-xl lg:text-2xl xl:text-3xl md:w-1/2">
            {sub}
        </p>
      </section>
      <MailSubscribeComp />
      <section>
        <Image
          src={FooterLogo}
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </section>
      <section className="
      flex justify-between items-center gap-9 w-max
      text-xl xl:text-2xl">
        <LinkComp text="welcome" href="/login" />
        <LinkComp text="donate" href="/donate" />
      </section>

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

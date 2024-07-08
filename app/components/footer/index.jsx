import Image from "next/image";
import Link from "next/link";

import FooterLogo from "@/public/footer/footer_logo.svg";
import LinkComp from "./link";
import MailSubscribeComp from "./mail_subscribe";

// #TODO update 'strong' with 'heading' tag later
export default function Footer({
  heading="subscribe to Wellgorithms  Weekly",
  sub=`a weekly dose of Wellgorithms to warm your heart, 
      invigorate your mind, and inspire resilience in adversity.`,
}) {
  return (
    <footer className="
    flex flex-col items-center justify-center gap-y-12
    min-h-screen w-full text-white
    bg-no-repeat bg-[url(/footer/footer_bg.png)] bg-cover bg-center lg:bg-bottom">
      <section className="
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
          alt="Inner Logo"
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
      </div>
    </footer>
  );
}

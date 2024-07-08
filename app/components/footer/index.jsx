import Image from "next/image";

import MailSubscribeComp from "./mail_subscribe";

// #TODO update 'strong' with 'heading' tag later
export default function Footer({
  heading="subscribe to Wellgorithms  Weekly",
  sub=`a weekly dose of Wellgorithms to warm your heart, 
      invigorate your mind, and inspire resilience in adversity.`,
}) {
  return (
    <footer className="
    grid place-items-center
    min-h-screen w-full text-white
    bg-no-repeat bg-[url(/footer_bg.png)] bg-cover bg-center lg:bg-bottom">
      <section className="
      flex flex-col items-center
      text-center
      w-full space-y-2">
        <strong className="text-6xl font-extrabold">
            {heading}
        </strong>
        <p className="text-3xl w-1/2">
            {sub}
        </p>
      </section>
      <MailSubscribeComp />
    </footer>
  );
}

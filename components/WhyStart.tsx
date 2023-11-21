import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import { Button } from "./ui/button";
import whyStartBg from "@/public/whyStartBg.png";
import whyStartPlayer from "@/public/whystartplayer.png";
import overLayLeft from "@/public/whyStartOverlay1.png";
import overLayBottom from "@/public/whyStartOverlay2.png";
import overLayTop from "@/public/whatStartOverlaytop.png";
import overLayRight from "@/public/whatStartOverlayright.png";
import Image from "next/image";
const WhyStart = () => {
  return (
    <MaxWidthContainer className="w-full min-h-[786px] z-[0] relative flex  px-[90px]">
      <div>
        <Image
          className="absolute object-cover top-0 left-0 w-full h-full z-[10]"
          src={whyStartBg}
          alt="whyStartbg"
        />
        <Image
          className="absolute object-cover top-0 left-0 w-full h-full z-[20]"
          src={overLayLeft}
          alt="overlay left"
        />
        <Image
          className="absolute object-cover top-0 right-0 w-full h-full z-[20]"
          src={overLayRight}
          alt="overlay right"
        />
        <Image
          className="absolute object-cover top-0 left-0 w-full h-full z-[20]"
          src={overLayTop}
          alt="overlay top"
        />
        <Image
          className="absolute object-cover bottom-0 left-0 w-full h-full z-[50]"
          src={overLayBottom}
          alt="overlay bottom"
        />
      </div>

      <div className="left w-[55%] relative z-[30] flex flex-col items-start pl-2 pt-[80px]">
        <h5 className="text-[24px] font-[400] font-['Russo_one'] leading-[95.5%] capitalize text-white mt-[0px]">
          wHY DID WE START THE
        </h5>
        <h2 className=" text-start mt-[15px] font-['Russo_one'] font-[400] leading-[95.5%] uppercase bg-clip-text bg-gradient-to-b from-[#ffa500] to-[#b87802] text-[70px] text-transparent  tracking-[-2.8px] ">
          SMASH GOLF TOUR
        </h2>
        <p className="text-[18px] w-[504px]  mt-[30px]  text-start font-[400] leading-[146%] tracking-[-.36px] text-white ">
          Traditionally, golf has been a hard game to get into for large
          segments of the community. There are tons of barriers that keep people
          from ever trying the game. It &apos;s expensive, intimidating, and
          difficult.
          <br />
          <br />
          We &apos;ve cracked the code that the golf industry has been wrestling
          with for decades...How do we make golf inviting, fair and accessible
          to everyone?
        </p>
        <div className="w-full mt-[25px] flex flex-col gap-y-[25px]"></div>
        <Button className="w-[190px] mt-[12px] h-[50px] bg-[#3f83f8] shrink-0 text-[15.42px] font-[400] leading-[111.5%] font-['Russo_one'] uppercase">
          Get started
        </Button>
      </div>
      <div className="w-[45%] h-full z-[40] overflow-hidden">
        <Image
          className=" object-cover absolute right-10 h-auto w-auto "
          src={whyStartPlayer}
          alt="whyStartbg"
        />
      </div>
    </MaxWidthContainer>
  );
};

export default WhyStart;

import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import playingGolf from "@/public/playing-golf-club 2.png";
import heroOverlay from "@/public/herooverlay.png";
import Image from "next/image";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <MaxWidthContainer className="mix-w-full mt-[-98px] min-h-[331px]">
      <div className="w-full h-full  relative z-0 overflow-hidden">
        <Image
          className="w-full h-full z-10 object-cover"
          src={playingGolf}
          alt="playing-golf"
        />
        <Image
          className="w-full h-auto z-10 object-cover absolute bottom-0"
          src={heroOverlay}
          alt="hero-overlay"
        />
        <div className="heroText z-20 absolute bottom-0 flex flex-col items-center w-full">
          <h1 className="text-[100px] font-[400] text-white font-['Russo_one'] leading-[95.5%] tracking-[-4px] uppercase mb-[28px]">
            smash golf tour
          </h1>
          <Button className="text-[65.082px] text-[#000] tracking-[3.905px] uppercase bg-[#3F83F8] w-[922px] h-[132.876px] rounded-tl-[65.082px] rounded-br-[65.082px] mb-[32px] flex justify-center items-center font-['Russo_one']">
            play compete. win
          </Button>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default Hero;

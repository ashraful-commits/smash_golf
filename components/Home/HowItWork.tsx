import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import HowItWorkCard from "./HowItWorkCard";
import cardImg1 from "@/public/HowitworkcardIcon.png";
import cardImg2 from "@/public/HowitworkcardIcon1.png";
import cardImg3 from "@/public/HowitworkcardIcon2.png";
import cardImg4 from "@/public/HowitworkcardIcon3.png";
import { Button } from "../ui/button";

const HowItWork = () => {
  return (
    <MaxWidthContainer className="w-full min-h-screen py-[170px] px-[16px] bg-black">
      <div className="w-full flex flex-col items-center pr-12">
        <h2 className="text-center font-['Russo_one'] font-[400] leading-[95.5%] uppercase bg-clip-text bg-gradient-to-b from-[#ffa500] to-[#b87802] text-[70px] text-transparent  tracking-[-2.8px] px-[20px]">
          HOW IT WORKS
        </h2>
        <p className="text-[21.132px] text-white font-[400] leading-[146%] tracking-[-0.423px] text-center mt-7">
          Register with Smash Golf Tour and connect with other gamers in the
          region. Connect, Compete and Win!
        </p>
      </div>
      <div className="grid grid-flow-col justify-between mt-[50px] px-[120px]">
        <HowItWorkCard
          cardImg={cardImg1}
          title="Connect"
          desc="Play in our daily and weekly tournaments with friends and other gamers across the region. Or challenge your favourite influencers, YouTubers and content creators across different games."
        />
        <HowItWorkCard
          cardImg={cardImg2}
          title="Compete"
          desc="Compete and win rewards and real world prizes in our competitive esports tournaments designed for everyone."
        />
        <HowItWorkCard
          cardImg={cardImg3}
          bgImg={cardImg4}
          title="Win!"
          desc="Earn  Gold and convert them to cash and product prizes by competing in our tournaments."
        />
      </div>
      <Button className="w-[190px] hover:scale-105 transition-all duration-500 h-[50px] bg-[#3f83f8] shrink-0 text-[15.42px] font-[400] leading-[111.5%] font-['Russo_one'] uppercase">
        LEARN MORE
      </Button>
    </MaxWidthContainer>
  );
};

export default HowItWork;

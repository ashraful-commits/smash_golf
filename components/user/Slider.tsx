import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { SliderType } from "@/Type";
import bigLeagueoverlay from "@/public/bigleaqueoverlay.png";
const Slider = ({ bigLeague }: SliderType) => {
  return (
    <div className="our_big_leaque transition-all duration-500 ease-in-out w-[844px] h-full shrink-0 slider rounded-[20px] overflow-hidden">
      <div className="w-full h-full relative z-0 transition-all duration-500 ease-in-out">
        <Image
          className="absolute  w-full h-full object-cover z-10 top-0 left-0"
          src={bigLeague}
          alt="our biggest league"
        />
        <Image
          className="absolute z-20 top-0 left-0"
          src={bigLeagueoverlay}
          alt="our biggest league"
        />
        <div className="w-[106px] h-[30px] absolute right-[34px] top-[22px] z-30 bg-gray-500 bg-opacity-50 flex justify-center items-center gap-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.2332 10.0003C18.2332 14.2578 14.712 17.7087 10.3676 17.7087C6.02321 17.7087 2.50195 14.2578 2.50195 10.0003C2.50195 5.74283 6.02321 2.29199 10.3676 2.29199C14.712 2.29199 18.2332 5.74283 18.2332 10.0003Z"
              stroke="#A5B2BC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.2859 12.4524L10.0801 10.5782V6.53906"
              stroke="#A5B2BC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-white text-[14px] font-[500] font-['Poppins'] ">
            22:22:34
          </span>
        </div>
        <div className=" h-full flex flex-col justify-center items-start px-[38px] gap-y-[28px] w-[60%] absolute z-30 top-0">
          <h1 className="text-[40px] font-[700] leading-[56.1px] capitalize text-white font-['Montserrat']">
            Our <span className="text-[#E8E2E2]">Biggest</span> League coming
            soon!
          </h1>
          <Button className="text-white font-[500] leading-[46.566px] text-[14.522px]  w-[121px] h-[50px] bg-[#3f83f8] hover:bg-blue-600 hover:scale-105 transition-all duration-500 ease-in-out">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slider;

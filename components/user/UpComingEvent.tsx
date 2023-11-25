import Image from "next/image";
import React from "react";
import participent from "@/public/participentSvg.png";
import eventOverlay from "@/public/eventOverlay.png";
import { eventType } from "@/Type";
const UpComingEvent = ({ tourImg, date, time, title, Participant }:eventType) => {
  return (
    <div className="w-[304px] relative z-0 h-[325px] rounded-tr-[20px] rounded-tl-[20px] overflow-hidden shrink-0 bg-[#1c1c24]">
      <div className=" overflow-hidden w-full h-full absolute top-0 left-0 z-10">
        <Image
          alt="content"
          className="object-cover w-full h-full"
          src={tourImg}
        />
      </div>
      <Image
        className="absolute bottom-0 left-0 z-20"
        src={eventOverlay}
        alt="overlay"
      />
      <div className="p-[20px] absolute bottom-0 z-30">
        <h2 className="text-white font-[700] font-['Poppins'] leadeing-[36px] capitalize ">
          {title}
        </h2>
        <p className=" text-white font-['Poppins'] font-[400] text-[14px] uppercase  ">
          {date} start at {time}
        </p>
        <div className="flex mt-3 justify-between w-full items-center ">
          <span className="text-white font-['Poppins'] text-[13px] font-[600]   tracking-[0.26px] flex gap-3 ">
            <Image
              className="w-[24px] h-[24px]"
              src={participent}
              alt="participent"
            />
            {Participant} participants
          </span>

          <button className="w-[30px] h-[30px]  bg-gray-500 bg-opacity-50 hover:scale-105 transition-all duration-500 ease-in-out rounded-full flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
            >
              <path
                d="M10.6339 6.62038L15.0695 11.056L10.6339 15.4916"
                stroke="white"
                stroke-width="1.74621"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvent;

import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import { Button } from "../ui/button";
import howtoplayBg from "@/public/howtoplaybg.png";
import howttoplaymobile from "@/public/howToPlayMobile.png";
import howtopalyoverlay from "@/public/howtoplayoverlay.png";
import appStore from "@/public/App Store.png";

import Image from "next/image";
const HowToPlay = () => {
  return (
    <MaxWidthContainer className="w-full  min-h-[786px] z-[0] relative flex  px-[90px] pb-[45px]">
      <div>
        <Image
          className="absolute object-cover top-0 left-0 w-full h-full z-[10]"
          src={howtoplayBg}
          alt="whyStartbg"
        />
        <Image
          className="absolute object-cover top-0 left-0 w-full h-full z-[20]"
          src={howtopalyoverlay}
          alt="overlay left"
        />
      </div>
      <div className="w-[45%] z-[20] h-full relative flex justify-center items-center min-h-[786px]  overflow-hidden">
        <Image
          className=" object-cover self-end mb-7 left-10 h-full w-auto "
          src={howttoplaymobile}
          alt="mobile"
        />
      </div>
      <div className="right w-[55%] h-full relative z-[30] flex flex-col items-start pl-10 pt-[80px]">
        <h5 className="text-[24px] font-[400] font-['Russo_one'] leading-[95.5%] capitalize text-white mt-[0px]">
          BECOME A SMASH GOLF CHAMPION
        </h5>
        <h2 className=" text-start mt-[15px] font-['Russo_one'] font-[400] leading-[95.5%] uppercase bg-clip-text bg-gradient-to-b from-[#ffa500] to-[#b87802] text-[70px] text-transparent  tracking-[-2.8px] ">
          HOW TO PLAY
        </h2>

        <div className="w-full mt-[25px] gap-y-[25px] flex flex-col">
          <div className="step w-full flex justify-start flex-col">
            <span className="text-[#2A7DF5] text-[18px] font-[700] leading-[146%] text-start tracking-[-0.36px] ">
              Step 1:
            </span>
            <p className="text-start text-white text-[18px] font-[400] leading-[146%] tracking-[-0.36px] ">
              Install SmashersON (50) App then use Google or Apple to
              register/log in
            </p>
          </div>
          <div className="step w-full flex justify-start flex-col">
            <span className="text-[#2A7DF5] text-[18px] font-[700] leading-[146%] text-start tracking-[-0.36px] ">
              Step 1:
            </span>
            <p className="text-start text-white text-[18px] font-[400] leading-[146%] tracking-[-0.36px] ">
              On SO home page enter average 9 Hole score to establish handicap.
              (Only required once, handicap will update based on scores posted)
            </p>
          </div>
          <div className="step w-full flex justify-start flex-col">
            <span className="text-[#2A7DF5] text-[18px] font-[700] leading-[146%] text-start tracking-[-0.36px] ">
              Step 1:
            </span>
            <p className="text-start text-white text-[18px] font-[400] leading-[146%] tracking-[-0.36px] ">
              Click Play Now then tap Events to view Live tournaments and
              contests
            </p>
          </div>
          <div className="step w-full flex justify-start flex-col">
            <span className="text-[#2A7DF5] text-[18px] font-[700] leading-[146%] text-start tracking-[-0.36px] ">
              Step 1:
            </span>
            <p className="text-start text-white text-[18px] font-[400] leading-[146%] tracking-[-0.36px] ">
              Click the Icon displayed to view format, Smash Cash Purse,
              timeframe, leaderboard, rules, and who&apos;s playing
            </p>
          </div>
          <div className="step w-full flex justify-start flex-col">
            <span className="text-[#2A7DF5] text-[18px] font-[700] leading-[146%] text-start tracking-[-0.36px] ">
              Step 1:
            </span>
            <p className="text-start text-white text-[18px] font-[400] leading-[146%] tracking-[-0.36px] ">
              To Enter the event click Register, complete and its game-time!!
            </p>
          </div>
        </div>
        <div className="flex mt-6 gap-4">
       
          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <button className="bg-[#3F83F8] hover:scale-105 transition-all duration-500 inline-flex py-3 px-5 rounded-lg items-center hover:bg-[#3F83F8] focus:outline-none">
      <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="32"
                viewBox="0 0 29 32"
                fill="none"
                className="w-[30px] h-[33px]  object-cover object-center flex-shrink-0  mr-4"
              >
                <path
                  d="M21.1632 20.3569C24.6862 18.3423 27.3572 16.8074 27.5874 16.6882C28.3236 16.2802 29.0843 15.2008 27.5874 14.3625C27.1041 14.0989 24.5019 12.6115 21.1632 10.6938L16.5352 15.5611L21.1629 20.3569H21.1632Z"
                  fill="#FFD900"
                />
                <path
                  d="M16.5337 15.5615L1.79688 31.0283C2.14254 31.0761 2.53309 30.9805 2.99372 30.7169C3.96038 30.1661 14.2073 24.3384 21.162 20.3584L16.5337 15.5615Z"
                  fill="#F43249"
                />
                <path
                  d="M16.533 15.5614L21.1607 10.7178C21.1607 10.7178 4.02947 0.982035 2.99272 0.407566C2.60268 0.166017 2.16499 0.0946022 1.77344 0.166017L16.533 15.5611V15.5614Z"
                  fill="#00EE76"
                />
                <path
                  d="M16.5333 15.5611L1.77354 0.166016C1.17448 0.310158 0.668213 0.861259 0.668213 1.98788V29.2053C0.668213 30.2371 1.06002 30.9801 1.79623 31.0515L16.5331 15.5609L16.5333 15.5611Z"
                  fill="#00D3FF"
                />
              </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white mb-1">GET IT ON</span>
          <span className="title-font text-white font-medium">Google Play</span>
        </span>
      </button>
      <button className="bg-[#3F83F8] hover:scale-105 transition-all duration-500 inline-flex py-3 px-5 rounded-lg items-center hover:bg-[#3F83F8] focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width={29} height={33} viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white mb-1">Download on the</span>
          <span className="title-font text-white font-medium">App Store</span>
        </span>
      </button>
    </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default HowToPlay;

        
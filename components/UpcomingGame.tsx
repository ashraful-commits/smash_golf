import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import upcomingGameBg from "@/public/upcomingGamebackgorund.png";

import Image from "next/image";
import { Button } from "./ui/button";

const UpcomingGame = ({
  hostImg,
  username,
  time,
  gameImg,
  entry,
  reward,
  entryNum,
  styles,
  title,
}: UpcomingGameProps) => {
  return (
    <MaxWidthContainer className="w-[400px] h-[537px] rounded-[30px]  border-[1px] border-[#000] shadow backdrop-blur-[25px]">
      <Image
        className="absolute top-0 left-0 object-cover"
        src={upcomingGameBg}
        alt="upcomingGamebg"
      />
      <div className="relative z-[30] flex  flex-col items-center pt-[20px]">
        <div className="img w-[361px] h-[265px] rounded-[15px] overflow-hidden">
          <Image
            src={gameImg}
            className="w-full h-full object-cover"
            alt="gameImg1"
          />
        </div>
        <div className="flex justify-between w-full px-[20px] mt-[16px] items-center">
          <span
            className={`${styles} inline-block text-[14px] font-[500px] leading-[110%] capitalize`}
          >
            {entryNum}
          </span>
          <div
            className={`${styles} w-[130px] h-[28px] inline-block p-[2px] overflow-hidden rounded-2xl bg-gradient-to-r from-gray-500 to-pink-400 `}
          >
            <div
              className={`w-full h-full rounded-2xl flex justify-center items-center font-[500] text-[14px] leading-[110%] tracking-[.49px] bg-gray-600 ${styles}`}
            >
              {entry}
            </div>
          </div>
        </div>
        <h4 className="text-white font-['Russo_one'] font-[400] text-[24px] leading-[110.6%] capitalize w-full text-start px-[22px] mt-[10px] tracking-[.84px]">
          {title}
        </h4>
        <div className="w-full flex justify-between px-[20px] items-center mt-[13px]">
          <div className="host w-full flex items-center gap-[16px]">
            <div className="Avatar w-[40px] h-40px] rounded-full shrink-0 overflow-hidden flex justify-start items-center">
              <Image
                className="w-full h-full object-cover"
                src={hostImg}
                alt="avatar"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <h5 className="text-[16px] text-white font-[500] leading-[110%] tracking-[.56px] capitalize">
                Hosted by
              </h5>
              <span
                className={`${styles} text-[14px] font-[500] leading-[110%] capitalize`}
              >
                {username}
              </span>
            </div>
          </div>
          <div className="time flex flex-col items-start pr-4">
            <h5 className="text-[16px] text-white font-[500] leading-[110%] tracking-[.56px] capitalize">
              Time
            </h5>
            <span
              className={`${styles} text-[14px] whitespace-nowrap font-[500] leading-[110%] capitalize`}
            >
              {time}
            </span>
          </div>
        </div>
        <Button className=" -skew-x-[20deg] mt-[26px] !rounded-[4px] flex justify-center items-center -skew-[35px] mx-[16px] w-[355px] font-['Russo_one'] font-[400] text-[24px]  gap-2 h-[52px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="skew-x-[20deg]"
          >
            <g clip-path="url(#clip0_1_3618)">
              <path
                d="M1.5 2.25H4.125V1.5C4.125 0.670875 4.79588 0 5.625 0H18.375C19.2041 0 19.875 0.670875 19.875 1.5V2.25H22.5C23.3291 2.25 24 2.92088 24 3.75V6.75C24 9.02812 22.1531 10.875 19.875 10.875H19.839C19.4963 14.4975 16.6961 17.3985 13.125 17.9108V21H15.75C16.5791 21 17.25 21.6709 17.25 22.5V23.625C17.25 23.8324 17.0824 24 16.875 24H7.125C6.91763 24 6.75 23.8324 6.75 23.625V22.5C6.75 21.6709 7.42088 21 8.25 21H10.875V17.9108C7.30387 17.3985 4.50375 14.4975 4.161 10.875H4.125C1.84687 10.875 0 9.02812 0 6.75V3.75C0 2.92088 0.670876 2.25 1.5 2.25ZM21.75 6.75V4.5H19.875V8.625C20.9107 8.625 21.75 7.78575 21.75 6.75ZM9.108 7.893L10.2877 9.10312L10.0084 10.8146C9.98512 10.9564 10.0455 11.0989 10.1625 11.1818C10.227 11.2268 10.3031 11.25 10.3789 11.25C10.4411 11.25 10.5037 11.2346 10.5604 11.2031L12.0008 10.407L13.4411 11.2031C13.5671 11.2729 13.7216 11.2642 13.839 11.1814C13.9564 11.0985 14.0164 10.956 13.9931 10.8142L13.7137 9.10275L14.8935 7.89263C14.9917 7.79175 15.0255 7.64512 14.9805 7.51163C14.9355 7.37813 14.8204 7.28138 14.6816 7.26L13.0658 7.01325L12.3398 5.46712C12.2779 5.33512 12.1455 5.2515 12.0004 5.2515C11.8552 5.2515 11.7229 5.3355 11.661 5.46712L10.935 7.01325L9.31913 7.26C9.18038 7.28138 9.06488 7.37813 9.02025 7.51163C8.97563 7.64512 9.00975 7.79213 9.108 7.893ZM2.25 6.75C2.25 7.78575 3.08925 8.625 4.125 8.625V4.5H2.25V6.75Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_3618">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="matrix(-1 0 0 1 24 0)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="skew-x-[20deg]">{reward}</span>
        </Button>
      </div>
    </MaxWidthContainer>
  );
};

export default UpcomingGame;

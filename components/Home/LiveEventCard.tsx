import Image, { StaticImageData } from "next/image";
import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import { liveEvent } from "@/Types";

const LiveEventCard = ({ liveEventBanner }: liveEvent) => {
  return (
    <MaxWidthContainer className="w-[400px] hover:scale-105 duration-500 transition-all ease-in-out h-[537px] bg-gradient-to-t from-gray-900 to-gray-900 rounded-[30px]  border-[1px] border-[#413333] shadow backdrop-blur-[25px]">
      <div className="relative z-[30] flex  flex-col items-center pt-[20px]">
        <div className="img w-[361px] h-auto rounded-[15px] overflow-hidden">
          <Image
            src={liveEventBanner}
            className="w-full h-full object-cover"
            alt="gameImg1"
          />
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default LiveEventCard;

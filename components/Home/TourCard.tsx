import { TourCard } from "@/Types";

import React from "react";

const TourCard = ({ svg, title, desc }: TourCard) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="h-full flex items-start gap-x-[15px]  rounded-lg">
          <div className="w-[46px] h-[46px] rounded-full bg-red-100 flex justify-center items-center">
            {svg}
          </div>
          <div className="text-start flex flex-col gap-y-[8px]">
            <h2 className="text-white font-['Russo_one'] w-[75%] font-[400] text-[18px] leading-[95.5%] capitalize ">
              {title}
            </h2>
            <p className="text-white text-[16px] font-[400] leading-[146%] tracking-tighter-[-0.32px] ">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

import { MostPopularType } from "@/Type";
import Image from "next/image";
import React from "react";

const MostPopularGam = ({ title, tourImg }: MostPopularType) => {
  return (
    <div className="w-[304px] relative z-0 h-[249px] rounded-[20px] overflow-hidden shrink-0 bg-[#1c1c24] border-[3px] border-[#21214a]">
      <div className=" overflow-hidden w-full h-[200px] absolute top-0 left-0 z-10">
        <Image
          alt="content"
          className="object-cover w-full h-full"
          src={tourImg}
        />
      </div>

      <div className="px-[20px] bg-gray-900 absolute bottom-0 z-30">
        <h2 className="text-white font-[700] font-['Poppins'] leading-[36px] capitalize ">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default MostPopularGam;

import Image from "next/image";
import React from "react";
import { leaderType } from "@/Type";

const LeaderBoardMember = ({
  leaderAvatar,
  name,
  Id,
  game,
  point,
}: leaderType) => {
  return (
    <div className="flex justify-between">
      <div className="h-[62px] flex items-center border-gray-200  justify-between gap-x-[15px] ">
        <Image
          className="w-[36px] h-[36px] rounded-md border-[3px] border-gray-600"
          alt="team"
          src={leaderAvatar ? leaderAvatar : ""}
        />
        <div className="flex-grow">
          <h2 className="text-white font-['Poppins'] font-[400] tracking-[.1px] title-font font-medium">
            {name}
          </h2>
          <p className="text-[#92929d] font-['Poppins'] text-[12px] ">
            Id# {Id}{" "}
            <span className=" text-[12px] font-[400] text-[#3dd598] ">
              {point} &nbsp;Point
            </span>
          </p>
        </div>
      </div>
      <button className="w-[145px] h-[30px] bg-[#30303a] bg-opacity-40 rounded-[30px] text-white text-[14px] font-[400] tracking-[.1px] font-['Poppins'] flex justify-center items-center gap-2 ">
        <Image
          className="w-[20px] h-[20px] rounded-md "
          src={leaderAvatar}
          alt="leader avatar"
        />
        {game}
      </button>
    </div>
  );
};

export default LeaderBoardMember;

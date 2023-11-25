import React from "react";
import MaxWidthContainer from "../user/MaxWidthContainer";
import AchievementCard from "./AchievementCard";
import banner from "@/public/avatar.png";
const Achievements = () => {
  return (
    <MaxWidthContainer className="w-[951px] h-[286px] rounded-[20px] p-[20px] bg-[#1c1c24]">
      <h3 className=" w-[174px] h-[23px] text-white font-['Poppins'] font-[600] text-[20px] tracking-[0.5px] ">
        Achievements
      </h3>
      <div className="w-full mt-[20px] flex justify-between">
        <AchievementCard
          prize={2500}
          time="22:32:22"
          banner={banner}
          title="Win 5 Games "
          left={3}
        />
        <AchievementCard
          prize={2500}
          time="22:32:22"
          banner={banner}
          title="Win 5 Games "
          left={3}
        />
        <AchievementCard
          prize={2500}
          time="22:32:22"
          banner={banner}
          title="Win 5 Games "
          left={3}
        />
      </div>
    </MaxWidthContainer>
  );
};

export default Achievements;

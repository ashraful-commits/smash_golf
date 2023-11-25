"use client";
import React, { useState } from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Image from "next/image";
import bigLeague from "@/public/bigleaque.png";

import { Button } from "../ui/button";
import LeaderBoardMember from "./LeaderBoardMember";
import leaderAvatar from "@/public/leaderAvatar.png";
import leaderAvatar2 from "@/public/leaderAvatar2.png";
import leaderAvatar3 from "@/public/leaderAvatar3.png";
import leaderAvatar4 from "@/public/leaderAvatar4.png";
import { UpcomingTournament } from "./UpcomingTournament";
import tourImg1 from "@/public/tournamentImg1.png";
import tourImg2 from "@/public/tournamentImg2.png";
import tourImg3 from "@/public/tournamentImg3.png";
import tourImg4 from "@/public/tournamentImg4.png";
import UpComingEvent from "./UpComingEvent";
import MostPopularGam from "./MostPopularGam";
import Slider from "./Slider";
const MainContent = () => {
  const [slider, setSlider] = useState(0);
  const sliderList = [
    {
      bigLeague: tourImg1,
    },
    {
      bigLeague: tourImg2,
    },
  ];
  console.log(slider);
  return (
    <MaxWidthContainer className="w-[1350px] max-h-full bg-[#13131A] px-[40px] pt-[49px]">
      <h6 className="text-[24px] flex items-center gap-[3px] font-['Poppins'] font-[600] leading-[36px] tracking-[.1px] text-[#fafafb] ">
        Hi James,{" "}
        <span
          className="text-[18px] block text-[#929290] font-['Roboto'] 
        "
        >
          Welcome to Smash Golf Tour
        </span>
      </h6>
      <div className="w-full hero_section h-[370px] mt-[18px] flex justify-between ">
        <div className="w-[844px] relative z-0 h-full slider rounded-[20px] flex overflow-x-hidden">
          {sliderList.map((item, i) => {
            return (
              <div
                key={i}
                className={` ${
                  slider === i
                    ? "absolute  top-0 left-0  "
                    : ""
                }`}
              >
                <Slider bigLeague={item.bigLeague} />
              </div>
            );
          })}

          <div className="w-[95px] h-[41px] z-40 flex sticky top-[300px] right-[35px] gap-[3px]">
            <button
              onClick={() => {
                setSlider((prev) =>
                  prev > sliderList.length - 1 ? prev - 1 : 0
                );
              }}
              className="w-[40.8px] h-[40.8px] hover:scale-105 transition-all duration-500 ease-in-out rounded-full bg-gray-500 bg-opacity-50  flex justify-center items-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M16.3711 9.05403L10.3688 15.0563L16.3711 21.0586"
                  stroke="white"
                  stroke-width="1.74621"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                setSlider((prev) =>
                  prev < sliderList.length - 1 ? prev + 1 : 0
                );
              }}
              className="w-[40.8px] h-[40.8px] hover:scale-105 transition-all duration-500 ease-in-out rounded-full bg-gray-500 bg-opacity-50  flex justify-center items-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M14.373 9.05403L20.3753 15.0563L14.373 21.0586"
                  stroke="white"
                  stroke-width="1.74621"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="leaderboards w-[410px] h-[371px] rounded-[20px] bg-[#1C1C24]">
          <div className="p-[20px]">
            <div className="flex justify-between">
              <span className="text-[20px] font-['Poppins'] font-[600] tracking-[0.5px] uppercase text-white">
                leaderboards
              </span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12ZM14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12ZM19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10Z"
                    fill="#92929D"
                  />
                </svg>
              </button>
            </div>
            <LeaderBoardMember
              leaderAvatar={leaderAvatar}
              name="Lily Saunders"
              Id={3124}
              point={120}
              game="Real Golf 2011"
            />
            <LeaderBoardMember
              leaderAvatar={leaderAvatar2}
              name="Franklin Jackson"
              Id={3124}
              point={120}
              game="Real Golf 2011"
            />
            <LeaderBoardMember
              leaderAvatar={leaderAvatar3}
              name="Kyle Duncan"
              Id={3124}
              point={120}
              game="Real Golf 2011"
            />
            <LeaderBoardMember
              leaderAvatar={leaderAvatar4}
              name="Alta Chandler"
              Id={3124}
              point={120}
              game="Real Golf 2011"
            />
            <LeaderBoardMember
              leaderAvatar={leaderAvatar2}
              name="Franklin Jackson"
              Id={3124}
              point={120}
              game="Real Golf 2011"
            />
          </div>
        </div>
      </div>
      {/* //======================upcoming tournament  */}
      <div className="w-full  mt-[45px] flex justify-between">
        <h6 className="text-[#00d8ff] text-[22px] font-[600] tracking-[0.5px] capitalize font-['Poppins']  ">
          Upcoming Tournaments
        </h6>
        <button className="text-white font-[600] text-[14px] tracking-[.1px] font-['Poppins'] border-0">
          see all
        </button>
      </div>
      <div className="flex justify-between w-full mt-[20px]">
        <UpcomingTournament
          tourImg={tourImg1}
          date="Nov 01, 2023"
          time="6:00 AM"
          title="War zone Tournament"
          prize={3500}
          Participant={128}
        />
        <UpcomingTournament
          tourImg={tourImg1}
          date="Nov 01, 2023"
          time="6:00 AM"
          title="War zone Tournament"
          prize={3500}
          Participant={128}
        />
        <UpcomingTournament
          tourImg={tourImg1}
          date="Nov 01, 2023"
          time="6:00 AM"
          title="War zone Tournament"
          prize={3500}
          Participant={128}
        />
        <UpcomingTournament
          tourImg={tourImg1}
          date="Nov 01, 2023"
          time="6:00 AM"
          title="War zone Tournament"
          prize={3500}
          Participant={128}
        />
      </div>
      <div className="w-full  mt-[45px] flex justify-between">
        <h6 className="text-[#00d8ff] text-[22px] font-[600] tracking-[0.5px] capitalize font-['Poppins']  ">
          Upcoming Events
        </h6>
        <button className="text-white font-[600] text-[14px] tracking-[.1px] font-['Poppins'] border-0">
          see all
        </button>
      </div>
      <div className="flex justify-between w-full mt-[20px]">
        <UpComingEvent
          tourImg={tourImg1}
          date="Nov 01, 2023"
          time="6:00 AM"
          title="War zone Tournament"
          Participant={128}
        />
        <UpComingEvent
          tourImg={tourImg1}
          date="Nov 01, 2023"
          time="6:00 AM"
          title="War zone Tournament"
          Participant={128}
        />
        <UpComingEvent
          tourImg={tourImg1}
          date="Nov 01, 2023"
          time="6:00 AM"
          title="War zone Tournament"
          Participant={128}
        />
        <UpComingEvent
          tourImg={tourImg1}
          date="Nov 01, 2023"
          time="6:00 AM"
          title="War zone Tournament"
          Participant={128}
        />
      </div>
      <div className="w-full  mt-[45px] flex justify-between">
        <h6 className="text-[#00d8ff] text-[22px] font-[600] tracking-[0.5px] capitalize font-['Poppins']  ">
          Most Popular Golf Games
        </h6>
        <button className="text-white font-[600] text-[14px] tracking-[.1px] font-['Poppins'] border-0">
          see all
        </button>
      </div>
      <div className="flex justify-between w-full mt-[20px]">
        <MostPopularGam tourImg={tourImg1} title="War zone Tournament" />
        <MostPopularGam tourImg={tourImg1} title="War zone Tournament" />
        <MostPopularGam tourImg={tourImg1} title="War zone Tournament" />
        <MostPopularGam tourImg={tourImg1} title="War zone Tournament" />
      </div>
    </MaxWidthContainer>
  );
};

export default MainContent;

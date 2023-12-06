import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Image from "next/image";
import upcomingTournament from "@/public/upcomingTornament.png";
import upcomingTournamentOverlay from "@/public/upcomingTornamentOverlay.png";
import topRacer from "@/public/toptracer.png";
import ranger from "@/public/ranger.png";
import UpcomingGame from "./UpcomingGame";
import gameImg from "@/public/gameImg.png";
import gameImg1 from "@/public/gameImg1.png";
import gameImg2 from "@/public/gameImg2.png";
import hostImg from "@/public/HostImg.png";
const UpcomingTournaments = () => {
  const upcommingTournament=[
   { 
    hostImg:hostImg,
username:"Milca01",
time:"Oct 31. 11:00 AM",
gameImg:gameImg,
entry:"Free Entry",
title:"Metagoons Fornit Tournament",
styles:"text-[#FD3BBB]",
reward:"100USD",
entryNum:"Closest-To-The-Pin",},
   { 
    hostImg:hostImg,
username:"Milca01",
time:"Oct 31. 11:00 AM",
gameImg:gameImg1,
entry:"Free Entry",
title:"Metagoons Fornit Tournament",
styles:"text-[#FFB800]",
reward:"100USD",
entryNum:21},
   { 
    hostImg:hostImg,
username:"Milca01",
time:"Oct 31. 11:00 AM",
gameImg:gameImg2,
entry:"Free Entry",
title:"Metagoons Fornit Tournament",
styles:"text-[#1FD2F1]",
reward:"100USD",
entryNum:"Longest Drive",},
  ]
  return (
    <MaxWidthContainer className="min-h-1093px  overflow-hidden z-0 ">
      <div className="bgImg relative top-0 left-0 w-full  h-full z-10 overflow-hidden">
        <Image
          className="w-full  h-full object-cover z-10"
          src={upcomingTournament}
          alt="upcomingTournament"
        />
        <Image
          className="w-full h-full object-cover z-20 absolute"
          src={upcomingTournamentOverlay}
          alt="upcomingTournamentOverlay"
        />
        <div className="content absolute top-0 left-0 w-full h-full z-30 mt-[50px]">
          <div className="powered_by w-full h-auto flex flex-col items-center">
            <h5 className="text-white leading-[111.5%] text-[18px] font-[400] font-['Russo_one']">
              Powered By
            </h5>
            <div className="logos mt-[10px] gap-[19px] flex">
              <Image src={topRacer} alt="topRacer" />
              <Image src={ranger} alt="ranger" />
            </div>
            <h2 className="text-center font-['Russo_one'] font-[400] leading-[95.5%] uppercase bg-clip-text bg-gradient-to-b from-[#ffa500] to-[#b87802] text-[70px] text-transparent mt-[132px] tracking-[-2.8px]">
              UPCOMING TOURNAMENTS
            </h2>
            <p className="text-white text-center text-[21.132px] font-[400] w-[728px] capitalize leading-[146%] tracking-[-0.423px] mt-[32px]">
              We have a tournament almost everyday. <br /> Find your game,
              connect with your tribe and level up with D11!
            </p>
          </div>
          <div className="tornaments mt-[48px] grid grid-flow-col gap-[5px] w-full h-full px-[95px]">
          
          {upcommingTournament?.map((item,i)=>{
              return <UpcomingGame key={i}
              hostImg={item?.hostImg}
              username={item?.username}
              time={item?.time}
              gameImg={item?.gameImg}
              entry={item?.entry}
              title={item?.title}
              styles={item?.styles}
              reward={item?.reward}
              entryNum={item?.entryNum}
              />
          })}
          
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default UpcomingTournaments;

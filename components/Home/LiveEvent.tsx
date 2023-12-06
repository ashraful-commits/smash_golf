import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import LiveEventCard from "./LiveEventCard";
import liveEventB from "@/public/liveEvent1.png";
import liveEventB2 from "@/public/liveEvent2.png";
import liveEventB3 from "@/public/liveEvent3.png";
const LiveEvent = () => {
  const LiveEvent =[
    {
      Photo:liveEventB
    },
    {
      Photo:liveEventB2
    },
    {
      Photo:liveEventB3
    },
  ]
  return (
    <MaxWidthContainer className=" min-h-screen bg-black">
      <div className="w-full h-full">
        <h2 className=" text-center mt-[85px] font-['Russo_one'] font-[400] leading-[95.5%] uppercase bg-clip-text bg-gradient-to-b from-[#ffa500] to-[#b87802] text-[70px] text-transparent  tracking-[-2.8px] ">
          LIVE EVENTS
        </h2>
        <p className="text-white mt-8 text-center text-[21px] font-[400] leading-[146%] tracking-[-0.423px] ">
          Watch all the action live on{" "}
          <a
            className="text-[#009FC9] text-center text-[21px] font-[400] leading-[146%] tracking-[-0.423px]"
            href=""
          >
            Instagram
          </a>
        </p>
        <div className="liveEvent flex mt-[50px] px-[80px]">
          {LiveEvent.map((item,i)=>{
            return  <LiveEventCard key={i} liveEventBanner={item.Photo} />
          })}
         
         
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default LiveEvent;

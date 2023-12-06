import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import brand1 from "@/public/brand1.png";
import brand2 from "@/public/brand2.png";
import brand3 from "@/public/brand3.png";
import brand4 from "@/public/brand4.png";
import brand5 from "@/public/brand5.png";
import brand6 from "@/public/brand6.png";
import Image from "next/image";
import { Button } from "../ui/button";
const HottestBrands = () => {
  const allBrand=[
    {
      logo:brand1
    },
    {
      logo:brand2
    },
    
    {
      logo:brand3
    },
    {
      logo:brand4
    },
    {
      logo:brand5
    },
    {
      logo:brand6
    },
  ]
  return (
    <MaxWidthContainer className="w-full min-h-[375px] overflow-hidden z-0 relative px-[80px] bg-gradient-to-r from-gray-900 to-black">
      <div className="w-full  h-full relative z-[50] flex  items-center flex-col">
        <h4 className="text-center w-full mt-[65px] ml-[140px]  font-['Russo_one'] font-[400] leading-[120%] uppercase bg-clip-text bg-gradient-to-b from-[#ffa500] to-[#b87802] text-[30px] text-transparent  tracking-[-1.2px]">
          REEDEM SMASH CASH FOR GOLF’S HOTTEST BRANDS
        </h4>
      </div>
      <div className="brands mt-[45px] w-full h-full flex relative z-[50] justify-end gap-[42px] px-[70px]">
       {allBrand?.map((item,i)=>{
        return <Image key={i}
           className="w-auto hover:scale-105 duration-500 ease-in-out h-auto"
           src={item?.logo}
           alt="brand1"
         />

       })}
        
      </div>
      <Button className="font-['Russo_one'] hover:scale-105 duration-500 ease-in-out transition-all text-center w-[190px] h-[50px] ml-32 bg-[#3f83f8] shrink-0 relative z-[50] mt-[45px] ">
        Shop now
      </Button>
    </MaxWidthContainer>
  );
};

export default HottestBrands;

import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import MaxWidthContainer from "./MaxWidthContainer";
import Image from "next/image";
import { howItWork } from "@/Types";
import bgMainImg from "@/public/howItworkCardBg.png";
const HowItWorkCard = ({ cardImg, title, desc, bgImg }: howItWork) => {
  return (
    <MaxWidthContainer className="w-[340px] bg-black">
      <Card className="bg-black border-none z-0 w-full">
        <div className="w-[310.600px] h-[310.600px] relative z-10 flex justify-center items-center">
          <div
            style={{
              backgroundImage:
                "radial-gradient(ellipse at center,  rgba(255, 0, 0, 0.5)  ,black 40% )",
            }}
            className="  w-full h-full z-30 "
          ></div>
          <Image
            className="w-full sepia h-full absolute top-0 left-0 z-20"
            src={bgMainImg}
            alt=""
          />
          <Image className="absolute z-[40] " src={cardImg} alt="" />
          <Image className="absolute z-[50] " src={bgImg} alt="" />
          <CardHeader className="absolute -bottom-5 z-[70] text-white text-[60px] font-[400] font-['Russo_one'] leading-[95.5%] tracking-[-2.4px] capitalize">
            {title}
          </CardHeader>
        </div>
        <CardContent className="mt-6 w-full">
          <p className="leading-[146%] text-center text-white w-full tracking-[-.36px] text-[18px]">
            {desc}
          </p>
        </CardContent>
      </Card>
    </MaxWidthContainer>
  );
};

export default HowItWorkCard;

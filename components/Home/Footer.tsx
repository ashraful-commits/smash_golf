import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Image from "next/image";
import logo from "@/public/Logo.png";
const Footer = () => {
  return (
    <MaxWidthContainer className="bg-black min-h-[62vh] flex flex-col  items-center max-w-[1440px]">
      <Image
        className="w-[142px] h-[133px] mt-[180px]"
        src={logo}
        alt="footer logo"
      />
      <h2 className="text-center font-['Russo_one'] mt-[40px] font-[400] text-[32px] leading-[95.5%] tracking-[-1.2px] capitalize text-white">
        Home of golf’s non-traditional Champions
      </h2>
      <ul className="flex mt-7 gap-[62px]">
        <li className="transition-all duration-500 ease-in-out hover:scale-110">
          <a
            className="font-['Russo_one'] font-[400] leading-[111.5%] capitalize text-white "
            href=""
          >
            About
          </a>
        </li>
        <li className="transition-all duration-500 ease-in-out hover:scale-110">
          <a
            className="font-['Russo_one'] font-[400] leading-[111.5%] capitalize text-white "
            href=""
          >
            Events
          </a>
        </li>
        <li className="transition-all duration-500 ease-in-out hover:scale-110">
          <a
            className="font-['Russo_one'] font-[400] leading-[111.5%] capitalize text-white "
            href=""
          >
            Leaderboards
          </a>
        </li>
        <li className="transition-all duration-500 ease-in-out hover:scale-110">
          <a
            className="font-['Russo_one'] font-[400] leading-[111.5%] capitalize text-white "
            href=""
          >
            Videos
          </a>
        </li>
        <li className="transition-all duration-500 ease-in-out hover:scale-110">
          <a
            className="font-['Russo_one'] font-[400] leading-[111.5%] capitalize text-white "
            href=""
          >
            Contact
          </a>
        </li>
      </ul>
      <p className="text-white mt-[60px] text-[18px] font-[400] font-['Russo_one'] leading-[111.1%] ">
        <span className="font-sans text-[23px] font-[500]">&copy;</span>{" "}
        2020-2023 Smash Golf Tour <sup>TM</sup> All right reserved.
      </p>
    </MaxWidthContainer>
  );
};

export default Footer;

import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import logo from "@/public/Logo.png";
import Image from "next/image";

import NavItem from "./NavItem";
const Navbar = () => {
  const NavItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "about",
    },
    {
      path: "/videos",
      name: "videos",
    },
    {
      path: "/leaderboards",
      name: "leaderboards",
    },
    {
      path: "/contact",
      name: "contact",
    },
    {
      path: "/register",
      name: "register",
    },
  ];
  return (
    <div className=" bg-transparent sticky z-[99999] px-[100px] top-[35px] left-0  h-[98px]">
      <MaxWidthContainer className="flex justify-between items-center">
        <div className="logo w-[105px] h-[98px] shrink-0  ">
          <Image className="w-full h-full object-cover" src={logo} alt="logo" />
        </div>
        <div className="menu flex h-full items-end">
          <NavItem NavItems={NavItems} />
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default Navbar;

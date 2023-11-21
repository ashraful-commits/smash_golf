"use client";
import React, { useEffect, useState } from "react";
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
  //==============================
  const [scrollY, setScrollY] = useState(0);
  const [stickyHeader, setStickyHeader] = useState(35);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollY > 0) {
      setStickyHeader(0);
    } else {
      setStickyHeader(35);
    }
  }, [scrollY]);
  return (
    <div
      className={` bg-transparent transition-all duration-500 ease-in-out sticky z-[99999] px-[100px] top-[${stickyHeader}px] left-0  h-[98px] ${
        stickyHeader === 0 ? "bg-gray-900 bg-opacity-90" : ""
      }`}
    >
      <MaxWidthContainer className={`flex justify-between items-center `}>
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

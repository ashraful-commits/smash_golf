"use client";
import React, { useEffect, useState } from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import logo from "@/public/Logo.png";
import Image from "next/image";

import NavItem from "./NavItem";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = ({ session }) => {
  const router = useRouter();
  if (!session) {
    router.push("/api/auth/signin");
  }
  const NavItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
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
      path: `/${session ? "api/auth/signout" : "register"}`,
      name: `${session ? "Logout" : "Register"}`,
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
    <MaxWidthContainer
      className={`w-[1440px] transition-all sticky duration-500 ease-in-out  z-[9999999] px-[100px] m-auto top-[${stickyHeader}px] left-0  h-[98px] min-w-[1440px] ${
        stickyHeader === 0 ? "bg-gray-900 bg-opacity-90" : "bg-transparent"
      }`}
    >
      <MaxWidthContainer
        className={`flex justify-between items-center m-auto `}
      >
        <Link href="/" className="logo w-[105px] h-[98px] shrink-0  ">
          <Image className="w-full h-full object-cover" src={logo} alt="logo" />
        </Link>
        <div className="menu flex h-full items-end">
          <NavItem NavItems={NavItems} />
        </div>
      </MaxWidthContainer>
    </MaxWidthContainer>
  );
};

export default Navbar;

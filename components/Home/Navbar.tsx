"use client";
import React, { useEffect, useState } from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import logo from "@/public/Logo.png";
import Image from "next/image";

import NavItem from "./NavItem";
import Link from "next/link";
import { useSingleUserQuery } from "@/lib/feature/UserSlice";

const Navbar = ({ session }: any) => {
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
      name: "Videos",
    },
    {
      path: `${session ? `/user` : "/signin"}`,
      name: "Userboard",
    },

    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: `${session ? "/api/auth/signout" : "/register"}`,
      name: `${session ? "Logout" : "Register"}`,
    },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { data } = useSingleUserQuery<any>(session?.user?.email);
  return (
    <MaxWidthContainer
      className={`w-[1440px] transition-all sticky duration-500 ease-in-out  z-[9999999] px-[100px] m-auto ${
        scrollY > 0 ? "top-0" : "top-[35px]"
      }  left-0  h-[98px] min-w-[1440px] ${
        scrollY === 0 ? " bg-transparent" : "bg-gray-900 bg-opacity-90"
      }`}
    >
      <MaxWidthContainer
        className={`flex justify-between items-center m-auto `}
      >
        <Link href="/" className="logo w-[105px] h-[98px] shrink-0  ">
          <Image className="w-full h-full object-cover" src={logo} alt="logo" />
        </Link>
        <div className="menu flex h-full items-end">
          <NavItem NavItems={NavItems} role={data?.user?.role} />
        </div>
      </MaxWidthContainer>
    </MaxWidthContainer>
  );
};

export default Navbar;

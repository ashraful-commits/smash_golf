"use client";
import { NavItemProps } from "@/Types";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
const NavItem = ({ NavItems }: NavItemProps) => {
  const [active, setActive] = useState<null | string>("/");
  const pathName = usePathname();

  return (
    <ul className="flex gap-x-[26px]">
      {NavItems.map((item, i) => {
        return (
          <li
            key={i}
            className={` hover:scale-110 transition-all duration-500 ease-in-out ${
              item.name === "Register"||item.name === "Logout"
                ? "w-[141px] h-[42px] ml-[18px]  bg-blue-500 hover:bg-blue-600 transition-all duration-500 ease-in-out -skew-x-[25deg] rounded-md"
                : " flex justify-center items-center"
            }`}
          >
            <a
              href={item.path}
              onClick={() => setActive(item.path)}
              className={`flex w-full ${
                item.name === "Register"||item.name === "Logout" ? "skew-x-[25deg]" : ""
              } h-full justify-center items-center `}
            >
              <span
                className={` ${
                  item.name === "register"
                    ? "text-[15.79px] font-[700] capitalize"
                    : "text-[18.424px]  inline-block capitalize  font-[400] font-['Russo_one']"
                } ${item.path === pathName ? "text-blue-500" : "text-white"} ${
                  item.name === "Register"||item.name === "Logout" ? "text-white " : ""
                }`}
              >
                {item.name}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItem;

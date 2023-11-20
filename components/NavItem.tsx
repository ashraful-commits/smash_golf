"use client";

import React, { useState } from "react";

const NavItem = ({ NavItems }) => {
  const [active, setActive] = useState<null | string>("/");

  return (
    <ul className="flex gap-x-[26px]">
      {NavItems.map((item: Object, i: number) => {
        return (
          <li
            key={i}
            className={`${
              item.name === "register"
                ? "w-[141px] h-[42px] ml-[18px] bg-blue-500 hover:bg-blue-600 transition-all duration-500 ease-in-out -skew-x-[25deg] rounded-md"
                : " flex justify-center items-center"
            }`}
          >
            <a
              href={item.path}
              onClick={() => setActive(item.path)}
              className={`flex w-full ${
                item.name === "register" ? "skew-x-[25deg]" : ""
              } h-full justify-center items-center `}
            >
              <span
                className={` ${
                  item.name === "register"
                    ? "text-[15.79px] font-[700] capitalize"
                    : "text-[18.424px]  inline-block capitalize text-white font-[400] font-['Russo_one']"
                } ${active === item.path ? "text-blue-500" : ""} ${
                  item.name === "register" ? "text-white " : ""
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

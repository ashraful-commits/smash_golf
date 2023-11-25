import React from "react";
import MaxWidthContainer from "../user/MaxWidthContainer";
import avatar from "@/public/avatar.png";

import Achievements from "./Achievements";
import InviteFriend from "./InviteFriend";
import TableComponent from "./TableComponent";
import { InvoiceType, singleInvoice } from "@/Type";

const MainContent = () => {
  const invoices = [
    {
      name: "INV001",
      avatar: avatar,
      rank: 1,
      id: "#3124",
      point: 120,
      gross: 100,
      Net: 185,
      handicap: 11,
      smashCash: 2500,
      mostPlayed: [
        { name: "Real Golf 2011", logo: avatar },
        { name: "Golf 2011", logo: avatar },
      ],
    },
    {
      name: "INV001",
      avatar: avatar,
      rank: 1,
      id: "#3124",
      point: 120,
      gross: 100,
      Net: 185,
      handicap: 11,
      smashCash: 2500,
      mostPlayed: [
        { name: "Real Golf 2011", logo: avatar },
        { name: "Golf 2011", logo: avatar },
      ],
    },
    {
      name: "INV001",
      avatar: avatar,
      rank: 1,
      id: "#3124",
      point: 120,
      gross: 100,
      Net: 185,
      handicap: 11,
      smashCash: 2500,
      mostPlayed: [
        { name: "Real Golf 2011", logo: avatar },
        { name: "Golf 2011", logo: avatar },
      ],
    },
    {
      name: "INV001",
      avatar: avatar,
      rank: 1,
      id: "#3124",
      point: 120,
      gross: 100,
      Net: 185,
      handicap: 11,
      smashCash: 2500,
      mostPlayed: [
        { name: "Real Golf 2011", logo: avatar },
        { name: "Golf 2011", logo: avatar },
      ],
    },
  ];
  return (
    <MaxWidthContainer className="w-[1350px] p-[20px]">
      <h6 className="text-[24px] ml-[45px] w-[460px] flex items-center gap-[3px] font-['Poppins'] font-[600] leading-[36px] tracking-[.1px] text-[#fafafb] ">
        Dobson Ranch Golf Course
      </h6>
      <div className="Table w-[1270px] px-[20px] py-[23px] m-auto mt-[22px] h-[720px] shrink-0 rounded-[20px] bg-[#1c1c24]">
        <div className="tableSearchBar flex items-center">
          <h5 className="text-[#fafafb] font-['Poppins'] font-[600] capitalize text-[16px] ">
            Longest Drive
          </h5>
          <div className="input ml-[64px] gap-2 border-[1px] flex items-center border-[#292932] px-[12px] w-[200px] h-[38px] shrink-0 rounded-[10px]">
            <label
              className="text-[#92929d] font-['Poppins'] font-[400] tracking-[.1px] text-[14px] "
              htmlFor=""
            >
              Region:
            </label>
            <select
              className="flex-1 border-0 focus:outline-none bg-transparent px-[12px] text-[#d5d5dc] font-['Poppins'] font-[500] tracking-[.1px] text-[14px]"
              name=""
              id=""
            >
              <option value="">Global</option>
            </select>
          </div>
          <div className="input ml-[12px] gap-2 border-[1px] flex items-center border-[#292932] px-[12px] w-[200px] h-[38px] shrink-0 rounded-[10px]">
            <label
              className="text-[#92929d] font-['Poppins'] font-[400] tracking-[.1px] text-[14px] "
              htmlFor=""
            >
              Course:
            </label>
            <select
              className="flex-1 border-0 focus:outline-none bg-transparent px-[12px] text-[#d5d5dc] font-['Poppins'] font-[500] tracking-[.1px] text-[14px]"
              name=""
              id=""
            >
              <option value="">Global</option>
            </select>
          </div>
          <div className="input ml-[12px] gap-2 border-[1px] flex items-center border-[#292932] px-[12px] w-[200px] h-[38px] shrink-0 rounded-[10px]">
            <label
              className="text-[#92929d] font-['Poppins'] font-[400] tracking-[.1px] text-[14px] "
              htmlFor=""
            >
              Game:
            </label>
            <select
              className="flex-1 border-0 focus:outline-none bg-transparent px-[12px] text-[#d5d5dc] font-['Poppins'] font-[500] tracking-[.1px] text-[14px]"
              name=""
              id=""
            >
              <option value="">Global</option>
            </select>
          </div>

          <div className="input ml-[12px] gap-2 border-[1px] flex items-center border-[#292932] px-[12px] w-[135px] h-[38px] shrink-0 rounded-[10px]">
            <label
              className="text-[#92929d] font-['Poppins'] font-[400] tracking-[.1px] text-[14px] "
              htmlFor=""
            >
              Flight:
            </label>
            <select
              className="flex-1 border-0 focus:outline-none bg-transparent px-[12px] text-[#d5d5dc] font-['Poppins'] font-[500] tracking-[.1px] text-[14px]"
              name=""
              id=""
            >
              <option value="">A</option>
            </select>
          </div>
          <div className="input ml-[29px] gap-2 border-[1px] flex items-center border-[#292932] px-[12px] w-[200px] h-[38px] shrink-0 rounded-[10px]">
            <label
              className="text-[#92929d] font-['Poppins'] font-[400] tracking-[.1px] text-[14px] "
              htmlFor=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.9025 14.6975C0.921498 11.7165 0.921498 6.88338 3.9025 3.90238C6.8835 0.921376 11.7167 0.921376 14.6977 3.90238C17.4225 6.62719 17.6566 10.8995 15.4002 13.8903L18.412 16.9021L17.2335 18.0806L14.2577 15.1048C11.2586 17.6717 6.74094 17.536 3.9025 14.6975ZM13.5191 5.08093C11.1889 2.7508 7.41106 2.7508 5.08093 5.08093C2.7508 7.41106 2.7508 11.1889 5.08093 13.5191C7.41106 15.8492 11.1889 15.8492 13.5191 13.5191C15.8492 11.1889 15.8492 7.41106 13.5191 5.08093Z"
                  fill="#92929D"
                />
              </svg>
            </label>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 border-0 focus:outline-none bg-transparent px-[12px] text-[#d5d5dc] font-['Poppins'] font-[500] tracking-[.1px] text-[14px]"
            />
          </div>
          <button className="ml-[26px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12ZM14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12ZM19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10Z"
                fill="#92929D"
              />
            </svg>
          </button>
        </div>
        <TableComponent data={invoices} />
      </div>
      <div className="achievement w-full flex items-center mt-[20px]">
        <Achievements />
        <InviteFriend />
      </div>
    </MaxWidthContainer>
  );
};

export default MainContent;

import { UpcomingType } from "@/Type";
import Image from "next/image";
import React from "react";

export const UpcomingTournament = ({
  tourImg,
  date,
  time,
  title,
  prize,
  Participant,
}: UpcomingType) => {
  return (
    <div className="w-[304px] h-[369px] rounded-[20px] overflow-hidden shrink-0 bg-[#1c1c24]">
      <div className="">
        <div className=" overflow-hidden w-full h-[232px]">
          <Image
            alt="content"
            className="object-cover w-full h-full"
            src={tourImg}
          />
        </div>
        <div className="p-[20px]">
          <p className=" text-white font-['Poppins'] font-[400] text-[14px] uppercase  ">
            {date} start at {time}
          </p>
          <h2 className="text-white font-[700] font-['Poppins'] leadeing-[36px] capitalize ">
            {title}
          </h2>
          <div className="flex justify-between w-full items-center ">
            <div className="flex flex-col">
              <span className="text-[#a0a0a0] font-['Poppins'] text-[14px] leading-[36px] capitalize ">
                Prize
              </span>
              <span className="text-white font-['Poppins'] text-[13px] font-[600] tracking-[0.26px] flex gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.5 2C3.0285 2 2.542 2.1775 2.156 2.515C1.771 2.854 1.5 3.375 1.5 4C1.5 4.531 1.723 4.985 2 5.344C2.277 5.702 2.613 5.9865 2.922 6.2655C3.54 6.824 4 7.2825 4 8C4 8.076 3.925 8.26 3.828 8.4065C3.731 8.5515 3.6405 8.6405 3.6405 8.6405L4.3605 9.344C4.3605 9.344 4.5195 9.183 4.6725 8.954C4.8025 8.757 4.945 8.5015 4.985 8.1725C5.0415 8.3335 5.095 8.501 5.156 8.6565C5.501 9.544 5.896 10.339 6.344 10.938C6.5065 11.156 6.674 11.35 6.859 11.516C5.8265 11.59 5 12.45 5 13.5V14H11V13.5C11 12.4385 10.1575 11.5735 9.11 11.515C9.30583 11.341 9.48341 11.1475 9.64 10.9375C10.09 10.3405 10.481 9.5425 10.828 8.656C10.893 8.49 10.9545 8.3125 11.0155 8.141C11.0505 8.4845 11.194 8.751 11.3285 8.953C11.4815 9.183 11.641 9.344 11.641 9.344L12.361 8.6405C12.361 8.6405 12.27 8.5525 12.173 8.4065C12.0755 8.2615 12.001 8.0765 12.001 8.0005C12.001 7.2825 12.461 6.824 13.079 6.2655C13.388 5.987 13.724 5.7025 14.001 5.3445C14.278 4.986 14.501 4.5315 14.501 4.0005C14.501 3.3745 14.231 2.854 13.8445 2.5155C13.4729 2.18761 12.9956 2.0046 12.5 2C12.0158 1.99914 11.5484 2.17721 11.1875 2.5H4.8125C4.45161 2.17721 3.98418 1.99914 3.5 2ZM3.5 3C3.737 3 3.889 3.075 4 3.14C4.014 4.16 4.19 5.317 4.469 6.453C4.203 6.093 3.87 5.795 3.578 5.531C3.262 5.246 2.973 4.983 2.7815 4.7345C2.589 4.485 2.5 4.271 2.5 4C2.5 3.651 2.636 3.434 2.828 3.265C3.02 3.098 3.283 3 3.5 3ZM12.5 3C12.717 3 12.98 3.0975 13.172 3.265C13.364 3.434 13.5 3.651 13.5 4C13.5 4.2715 13.41 4.486 13.2185 4.735C13.027 4.983 12.7385 5.245 12.422 5.531C12.122 5.801 11.785 6.1125 11.5155 6.4845C11.8035 5.3395 11.9855 4.1745 12.0005 3.1395C12.1115 3.0745 12.2635 2.9995 12.5005 2.9995L12.5 3ZM5.0625 3.5H10.9375C10.861 4.986 10.4775 6.799 9.8905 8.297C9.567 9.1255 9.192 9.8445 8.8285 10.328C8.465 10.8115 8.132 11 7.985 11C7.8375 11 7.5185 10.813 7.156 10.328C6.794 9.843 6.416 9.1265 6.094 8.297C5.511 6.797 5.139 4.9785 5.0625 3.5ZM7.5 5V7.5H8.5V5H7.5ZM7 12.5H9C9.3585 12.5 9.605 12.7215 9.7815 13H6.219C6.395 12.7215 6.6415 12.5 7 12.5Z"
                    fill="#FF8A00"
                  />
                </svg>
                {prize}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#a0a0a0] font-['Poppins'] text-[14px] leading-[36px] capitalize ">
                Participant
              </span>
              <span className="text-white font-['Poppins'] text-[13px] font-[600] tracking-[0.26px] ">
                {Participant} joined
              </span>
            </div>
            <button className="w-[62px] h-[38px] bg-[#0062ff] hover:bg-blue-600 hover:scale-105 transition-all duration-500 ease-in-out rounded-[10px] text-[#fafafb] text-[14px] font-['Poppins'] font-[600] ">
              join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

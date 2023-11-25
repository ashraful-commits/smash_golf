import { AchievementType } from "@/Type";
import Image from "next/image";
import React from "react";
import { Progress } from "../ui/progress";

const AchievementCard = ({
  prize,
  time,
  banner,
  title,
  left,
}: AchievementType) => {
  return (
    <div className="w-[292px] flex justify-center items-center h-[204px] overflow-hidden rounded-[20px]  bg-gradient-to-r from-gray-600 to-red-800">
      <div className="m-[1px] w-[99%] px-[20px] py-[24px] rounded-[20px] h-[99%] bg-gradient-to-r from-gray-700 to-gray-800">
        <div className="flex gap-[16px] ">
          <span className="text-white p-1 rounded-md px-2 font-['Poppins'] font-[500] text-[13px] bg-black flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.375 2.50001C3.78688 2.50001 3.17875 2.72188 2.695 3.14438C2.2125 3.56688 1.875 4.21626 1.875 5.00001C1.875 5.66438 2.15312 6.23063 2.5 6.68001C2.84688 7.12876 3.26687 7.48313 3.6525 7.83188C4.42375 8.53001 5 9.10376 5 10C5 10.095 4.9075 10.325 4.785 10.5081C4.66313 10.6906 4.55063 10.8006 4.55063 10.8006L5.44937 11.68C5.44937 11.68 5.64937 11.48 5.84 11.1913C6.00312 10.945 6.18187 10.6275 6.23063 10.215C6.30125 10.4175 6.36937 10.625 6.44562 10.82C6.875 11.9288 7.37063 12.9225 7.92938 13.6719C8.1325 13.9456 8.34188 14.1869 8.57438 14.3944C7.2825 14.4875 6.25 15.5613 6.25 16.875V17.5H13.75V16.875C13.75 15.5469 12.6975 14.4675 11.3869 14.3944C11.6313 14.176 11.8537 13.934 12.0506 13.6719C12.6125 12.925 13.1006 11.9281 13.535 10.82C13.6163 10.6125 13.6938 10.3906 13.7694 10.1763C13.8112 10.6056 13.9919 10.9375 14.16 11.1913C14.3506 11.4794 14.5506 11.68 14.5506 11.68L15.4494 10.8006C15.4494 10.8006 15.3369 10.6906 15.215 10.5081C15.0925 10.325 15 10.095 15 10C15 9.10376 15.5763 8.53001 16.3475 7.83188C16.7331 7.48313 17.1538 7.12876 17.5 6.67938C17.8469 6.23063 18.125 5.66438 18.125 5.00001C18.125 4.21626 17.7875 3.56688 17.3044 3.14438C16.8401 2.73489 16.244 2.50616 15.625 2.50001C15.0197 2.4984 14.4352 2.72106 13.9844 3.12501H6.01562C5.5648 2.72106 4.98033 2.4984 4.375 2.50001ZM4.375 3.75001C4.67062 3.75001 4.86063 3.84251 5 3.92563C5.01688 5.20063 5.23687 6.64563 5.58625 8.06626C5.25375 7.61688 4.83875 7.24376 4.4725 6.91376C4.07687 6.55751 3.71625 6.22813 3.47688 5.91813C3.2375 5.60813 3.125 5.33938 3.125 5.00001C3.125 4.56251 3.29563 4.29188 3.535 4.08188C3.775 3.87188 4.10375 3.75001 4.375 3.75001ZM15.625 3.75001C15.8962 3.75001 16.225 3.87188 16.465 4.08188C16.7044 4.29188 16.875 4.56313 16.875 5.00001C16.875 5.33938 16.7625 5.60813 16.5231 5.91813C16.2844 6.22813 15.9231 6.55751 15.5275 6.91438C15.1537 7.25126 14.7312 7.63938 14.3944 8.10563C14.7531 6.67438 14.9831 5.21751 15 3.92563C15.1871 3.80822 15.4041 3.74724 15.625 3.75001ZM6.32812 4.37501H13.6719C13.5769 6.23313 13.0956 8.49876 12.3631 10.3713C11.9581 11.4063 11.4894 12.3044 11.035 12.91C10.5813 13.5156 10.1663 13.75 9.98063 13.75C9.7975 13.75 9.39687 13.5156 8.94562 12.91C8.49375 12.305 8.02 11.4088 7.61688 10.3713C6.88938 8.49626 6.42312 6.22313 6.32812 4.37501ZM9.375 6.25001V9.37501H10.625V6.25001H9.375ZM8.75 15.625H11.25C11.6994 15.625 12.0062 15.9006 12.2269 16.25H7.77375C7.99312 15.9006 8.30062 15.625 8.75 15.625Z"
                fill="#FFD233"
              />
            </svg>
            $2500
          </span>
          <span className="text-white p-1 rounded-md px-2 font-['Poppins'] font-[500] text-[13px] bg-black flex justify-center items-center gap-2">
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
                d="M17.7077 10.0003C17.7077 14.2578 14.2568 17.7087 9.99935 17.7087C5.74185 17.7087 2.29102 14.2578 2.29102 10.0003C2.29102 5.74283 5.74185 2.29199 9.99935 2.29199C14.2568 2.29199 17.7077 5.74283 17.7077 10.0003Z"
                stroke="#A5B2BC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.8585 12.4524L9.7168 10.5782V6.53906"
                stroke="#A5B2BC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            22:49:33
          </span>
        </div>
        <div className="flex  mt-[24px] gap-x-[16px]">
          <Image
            className=" w-[45px] h-[45px] rounded-full "
            src={banner}
            alt="benner"
          />
          <div>
            <h4 className=" text-white font-['Poppins'] font-[500] tracking-[0.76px] text-[19px] ">
              {title}
            </h4>
            <h6 className=" text-white font-['Poppins'] text-[14px] tracking-[.28px] ">
              in Among Us
            </h6>
          </div>
        </div>
        <div className="w-[252px]">
          <Progress value={65} className=" mt-[23px] h-[7px] w-[252px]" />
          <div className="flex justify-between mt-2">
            <span className=" text-[#aba9c2] font-['Poppins'] font-[500] text-[13px] ">
              02/05
            </span>
            <span className="text-[#fe1f27] font-['Poppins'] text-[13px] font-[500]">
              {left} left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;

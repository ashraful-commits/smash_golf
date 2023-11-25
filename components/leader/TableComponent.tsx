"use sever";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { InvoiceType, singleInvoice } from "@/Types";

const TableComponent = ({ data }: any) => {
  return (
    <>
      <Table className="w-[1219px] m-auto mt-[19px] h-full flex flex-col border-none">
        <TableHeader className="w-full rounded-[10px] h-[38px]  overflow-hidden flex items-center  shrink-0  bg-[#2929232] border-b-0">
          <TableRow className="w-full flex items-center border-none hover:bg-none h-full shrink-0 bg-[#292932] ">
            <TableHead className="text-[#fafafb] font-['Poppins'] flex items-center text-[14px] font-[600] tracking-[0.1px] w-[100px]">
              Rank
            </TableHead>
            <TableHead className="text-[#fafafb] font-['Poppins'] flex items-center text-[14px] font-[600] tracking-[0.1px] w-[280px]">
              Name
            </TableHead>
            <TableHead className="text-[#fafafb] font-['Poppins'] flex items-center text-[14px] font-[600] tracking-[0.1px] w-[72px]">
              Gross
            </TableHead>
            <TableHead className="text-[#fafafb] font-['Poppins'] flex items-center text-[14px] font-[600] tracking-[0.1px] text-left w-[115px]">
              Net
            </TableHead>
            <TableHead className="text-[#fafafb] font-['Poppins'] flex items-center text-[14px] font-[600] tracking-[0.1px] text-left w-[123px]">
              Handicap
            </TableHead>
            <TableHead className="text-[#fafafb] font-['Poppins'] flex items-center text-[14px] font-[600] tracking-[0.1px] text-left w-[145px]">
              Smash Cash
            </TableHead>
            <TableHead className="text-[#fafafb] font-['Poppins'] flex items-center text-[14px] font-[600] tracking-[0.1px] text-left flex-1">
              Most played
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full mt-[10px]">
          <ScrollArea className="w-full h-full">
            {data?.map((item: singleInvoice, i: number) => (
              <TableRow
                className="w-[1219px] group h-[62px] bg-[none] border-b-[1px] border-gray-800  shrink-0 hover:bg-gradient-to-r transition-all duration-500 ease-in-out rounded-[30px]  from-gray-700 to-gray-800 flex items-center"
                key={i}
              >
                <TableCell className="text-left w-[110px]">
                  <span className="w-[51px] flex justify-center items-center h-[30px] rounded-[30px] bg-[#30303a] text-white bg-opacity-[0.4] group-hover:bg-gray-100 group-hover:bg-opacity-20 transition-all duration-500 ease-in-out group-hover:border- ">
                    {item.rank}
                  </span>
                </TableCell>
                <TableCell className="text-left w-[280px]">
                  <div className="flex justify-between">
                    <div className="h-[62px] flex items-center border-gray-200  justify-between gap-x-[15px] ">
                      <Image
                        className="w-[36px] h-[36px] rounded-md border-[3px] border-gray-600"
                        alt="team"
                        src={item.avatar ? item.avatar : ""}
                      />
                      <div className="flex-grow">
                        <h2 className="text-white font-['Poppins'] font-[400] tracking-[.1px] title-font ">
                          {item.name}
                        </h2>
                        <p className="text-[#92929d] font-['Poppins'] text-[12px] ">
                          Id# {item.id}{" "}
                          <span className=" text-[12px] font-[400] text-[#3dd598] ">
                            {item.point} &nbsp;Point
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-left w-[72px]">
                  <span className="w-[65px] flex justify-center items-center h-[30px] rounded-[30px] bg-[#30303a] text-white bg-opacity-[0.4] group-hover:bg-gray-100 group-hover:bg-opacity-20 transition-all duration-500 ease-in-out group-hover:border- ">
                    {item.gross}
                  </span>
                </TableCell>
                <TableCell className="text-left w-[115px]">
                  <span className="w-[65px] flex justify-center items-center h-[30px] rounded-[30px] bg-[#30303a] text-white bg-opacity-[0.4] group-hover:bg-gray-100 group-hover:bg-opacity-20 transition-all duration-500 ease-in-out group-hover:border-">
                    {item.Net}
                  </span>
                </TableCell>
                <TableCell className="text-left w-[123px]">
                  <span className="w-[65px] flex justify-center items-center h-[30px] rounded-[30px] bg-[#30303a] text-white bg-opacity-[0.4] group-hover:bg-gray-100 group-hover:bg-opacity-20 transition-all duration-500 ease-in-out group-hover:border-">
                    {item.handicap}
                  </span>
                </TableCell>
                <TableCell className="text-left w-[145px]">
                  <span className="w-[95px] flex justify-center items-center h-[30px] rounded-[30px] bg-[#30303a] text-white bg-opacity-[0.4] group-hover:bg-gray-100 group-hover:bg-opacity-20 transition-all duration-500 ease-in-out group-hover:border-">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                    >
                      <path
                        d="M5.03125 2.875C4.35347 2.875 3.65412 3.13016 3.09925 3.61532C2.54581 4.10263 2.15625 4.85157 2.15625 5.75C2.15625 6.51332 2.47681 7.16594 2.875 7.682C3.27319 8.19663 3.75619 8.6056 4.20037 9.00666C5.08875 9.8095 5.75 10.4686 5.75 11.5C5.75 11.6093 5.64219 11.8738 5.50275 12.0843C5.36331 12.2928 5.23322 12.4207 5.23322 12.4207L6.26822 13.432C6.26822 13.432 6.49678 13.2006 6.71672 12.8714C6.90359 12.5882 7.10844 12.2209 7.16594 11.748C7.24716 11.9794 7.32406 12.2202 7.41175 12.4437C7.90769 13.7195 8.4755 14.8623 9.1195 15.7234C9.35309 16.0368 9.59388 16.3156 9.85981 16.5543C8.37559 16.6606 7.1875 17.8969 7.1875 19.4063V20.125H15.8125V19.4063C15.8125 17.8803 14.6014 16.6369 13.0956 16.5528C13.3771 16.3027 13.6324 16.0245 13.8575 15.7227C14.5044 14.8645 15.0664 13.7173 15.5653 12.443C15.6587 12.2044 15.7471 11.9492 15.8348 11.7027C15.8851 12.1965 16.0914 12.5796 16.2847 12.8699C16.5047 13.2006 16.7339 13.432 16.7339 13.432L17.7689 12.4207C17.7689 12.4207 17.6381 12.2942 17.4987 12.0843C17.3585 11.8759 17.2514 11.61 17.2514 11.5007C17.2514 10.4686 17.9127 9.8095 18.8011 9.00666C19.2453 8.60632 19.7283 8.19735 20.1264 7.68272C20.5246 7.16738 20.8452 6.51404 20.8452 5.75072C20.8452 4.85085 20.4571 4.10263 19.9015 3.61604C19.3673 3.14469 18.6811 2.88161 17.9688 2.875C17.2727 2.87377 16.6008 3.12974 16.082 3.59375H6.91797C6.39919 3.12974 5.72726 2.87377 5.03125 2.875ZM5.03125 4.3125C5.37194 4.3125 5.59044 4.42032 5.75 4.51375C5.77012 5.98 6.02312 7.64319 6.42419 9.27619C6.04181 8.75869 5.56313 8.33032 5.14338 7.95082C4.68913 7.54113 4.27369 7.16307 3.99841 6.80585C3.72169 6.44719 3.59375 6.13957 3.59375 5.75C3.59375 5.24832 3.78925 4.93638 4.06525 4.69344C4.34125 4.45338 4.71931 4.3125 5.03125 4.3125ZM17.9688 4.3125C18.2807 4.3125 18.6588 4.45266 18.9347 4.69344C19.2108 4.93638 19.4062 5.24832 19.4062 5.75C19.4062 6.14029 19.2769 6.44863 19.0016 6.80657C18.7263 7.16307 18.3116 7.53969 17.8566 7.95082C17.4254 8.33894 16.9409 8.78672 16.5535 9.32147C16.9675 7.67554 17.2292 6.00085 17.2507 4.51304C17.4103 4.4196 17.6288 4.31179 17.9695 4.31179L17.9688 4.3125ZM7.27734 5.03125H15.7227C15.6127 7.16738 15.0614 9.77357 14.2176 11.9269C13.7526 13.1179 13.2135 14.1515 12.691 14.8465C12.1684 15.5415 11.6897 15.8125 11.4784 15.8125C11.2664 15.8125 10.8078 15.5437 10.2867 14.8465C9.76638 14.1493 9.223 13.1193 8.76012 11.9269C7.92206 9.77069 7.38731 7.1566 7.27734 5.03125ZM10.7812 7.1875V10.7813H12.2188V7.1875H10.7812ZM10.0625 17.9688H12.9375C13.4528 17.9688 13.8072 18.2872 14.0609 18.6875H8.93981C9.19281 18.2872 9.54716 17.9688 10.0625 17.9688Z"
                        fill="#FF8A00"
                      />
                    </svg>
                    ${item.smashCash}
                  </span>
                </TableCell>
                <TableCell className="text-left flex flex-1 items-center  gap-x-[24px]">
                  {item.mostPlayed.map((most, index) => {
                    return (
                      <div
                        key={index}
                        className="flex bg-[#30303A] items-center  rounded-[30px] px-3 py-1"
                      >
                        <div className="flex gap-3  bg-opacity-[.4] h-[30px] items-center justify-center">
                          <Image
                            className="w-5 h-5"
                            src={most.logo}
                            alt="name"
                          />
                          <span className="text-[14px] font-[400] font-['Poppins'] text-white ">
                            {most.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </TableCell>
              </TableRow>
            ))}
          </ScrollArea>
        </TableBody>
      </Table>
    </>
  );
};

export default TableComponent;

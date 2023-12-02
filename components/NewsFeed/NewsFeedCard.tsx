"use client";

import React, { useEffect, useState } from "react";
import MaxWidthContainer from "../user/MaxWidthContainer";
import Image from "next/image";
import { useGetAllNewsFeedQuery } from "@/lib/feature/NewsSlice";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

const NewsFeedCard = () => {
  const { data, isLoading } = useGetAllNewsFeedQuery();

  return (
    <MaxWidthContainer>
     {isLoading && 
     <div className="grid grid-cols-4 w-full p-5 gap-[30px]">
      <div className="flex flex-col w-[304px] h-[369px] rounded-md">
        <Skeleton className="h-[232px] w-[100%] bg-gray-700" />
        <Skeleton className="h-[20px] w-[100%] mt-5 bg-gray-700" />
        <Skeleton className="h-[10px] w-[100%] mt-5 bg-gray-700" />
        <Skeleton className="h-[40px] w-[100px] mt-5 bg-gray-700" />
      </div>
      <div className="flex flex-col w-[304px] h-[369px] rounded-md">
        <Skeleton className="h-[232px] w-[100%] bg-gray-700" />
        <Skeleton className="h-[20px] w-[100%] mt-5 bg-gray-700" />
        <Skeleton className="h-[10px] w-[100%] mt-5 bg-gray-700" />
        <Skeleton className="h-[40px] w-[100px] mt-5 bg-gray-700" />
      </div>
      <div className="flex flex-col w-[304px] h-[369px] rounded-md">
        <Skeleton className="h-[232px] w-[100%] bg-gray-700" />
        <Skeleton className="h-[20px] w-[100%] mt-5 bg-gray-700" />
        <Skeleton className="h-[10px] w-[100%] mt-5 bg-gray-700" />
        <Skeleton className="h-[40px] w-[100px] mt-5 bg-gray-700" />
      </div>
      <div className="flex flex-col w-[304px] h-[369px] rounded-md">
        <Skeleton className="h-[232px] w-[100%] bg-gray-700" />
        <Skeleton className="h-[20px] w-[100%] mt-5 bg-gray-700" />
        <Skeleton className="h-[10px] w-[100%] mt-5 bg-gray-700" />
        <Skeleton className="h-[40px] w-[100px] mt-5 bg-gray-700" />
      </div>
    </div>}
      <div className="grid grid-cols-4 gap-5 p-5">
        {data?.newsfeed?.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-gray-900  h-80 overflow-hidden p-3 rounded-lg "
            >
              <Image
                width={350}
                height={152}
                className={""}
                src={item?.photo}
                alt={item?.title}
              />
              <h1 className="text-white text-clip text-[16px] font-[700] font-['Poppins'] mt-5">
                {item?.title}
              </h1>
              <p className="text-white text-clip text-[12px]  font-['Poppins'] mt-1">
                {item?.desc?.length > 40
                  ? `${item?.desc?.slice(0, 40)}...`
                  : item?.desc}
              </p>

              <Link
                href={`/user/newsfeed/${item._id}`}
                className="text-white mt-5 w-[100px]  bg-gray-800 px-3 flex justify-center items-center py-1 hover:bg-gray-900 transition-all rounded-lg duration-500"
              >
                See more
              </Link>
            </div>
          );
        })}
      </div>
    </MaxWidthContainer>
  );
};

export default NewsFeedCard;

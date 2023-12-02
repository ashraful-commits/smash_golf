"use client";
import React from "react";
import MaxWidthContainer from "../user/MaxWidthContainer";
import { GameCard } from "./GameCard";
import { useGetAllGameQuery } from "@/lib/feature/GameSlice";
import { Skeleton } from "../ui/skeleton";

const Game = () => {
  const { data, isLoading } = useGetAllGameQuery<any>(null);

  return (
    <MaxWidthContainer>
      {isLoading && (
        <div className="grid grid-cols-4 w-full p-5 gap-[30px]">
          <div className="flex flex-col w-[304px] h-[369px]">
            <Skeleton className="h-[232px] w-[100%] bg-gray-700" />
            <Skeleton className="h-[5px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[20px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[10px] w-[100%] mt-5 bg-gray-700" />
            <div className="flex justify-between">
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
            </div>
          </div>
          <div className="flex flex-col w-[304px] h-[369px]">
            <Skeleton className="h-[232px] w-[100%] bg-gray-700" />
            <Skeleton className="h-[5px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[20px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[10px] w-[100%] mt-5 bg-gray-700" />
            <div className="flex justify-between">
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
            </div>
          </div>
          <div className="flex flex-col w-[304px] h-[369px]">
            <Skeleton className="h-[232px] w-[100%] bg-gray-700" />
            <Skeleton className="h-[5px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[20px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[10px] w-[100%] mt-5 bg-gray-700" />
            <div className="flex justify-between">
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
            </div>
          </div>
          <div className="flex flex-col w-[304px] h-[369px]">
            <Skeleton className="h-[232px] w-[100%] bg-gray-700" />
            <Skeleton className="h-[5px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[20px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[10px] w-[100%] mt-5 bg-gray-700" />
            <div className="flex justify-between">
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
            </div>
          </div>
          <div className="flex flex-col w-[304px] h-[369px]">
            <Skeleton className="h-[232px] w-[100%] bg-gray-700" />
            <Skeleton className="h-[5px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[20px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[10px] w-[100%] mt-5 bg-gray-700" />
            <div className="flex justify-between">
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
            </div>
          </div>
          <div className="flex flex-col w-[304px] h-[369px]">
            <Skeleton className="h-[232px] w-[100%] bg-gray-700" />
            <Skeleton className="h-[5px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[20px] w-[100%] mt-5 bg-gray-700" />
            <Skeleton className="h-[10px] w-[100%] mt-5 bg-gray-700" />
            <div className="flex justify-between">
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
              <Skeleton className="h-[40px] w-[80px] mt-5 bg-gray-700" />
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-4 p-5 w-full">
        {data?.game
          ?.filter((item) => item?.type === "tournament")
          ?.map((item, i) => {
            return (
              <GameCard
                key={i}
                tourImg={item?.photo}
                date={item?.date}
                time={item?.date}
                title={item?.title}
                prize={item?.prize}
                Participant={item?.participant}
              />
            );
          })}
      </div>
    </MaxWidthContainer>
  );
};

export default Game;

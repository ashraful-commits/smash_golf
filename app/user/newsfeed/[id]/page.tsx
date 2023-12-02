"use client"
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/user/Header";
import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import { useGetSingleNewsQuery } from "@/lib/feature/NewsSlice";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const SingleNewsFeed = () => {
  const {id} = useParams()
const {data,isLoading} =useGetSingleNewsQuery(id)
console.log(data)
  return <MaxWidthContainer>
    <Header/>
    <>
    
  {isLoading ? <Skeleton className="w-[100px] mt-5 ml-4 h-[40px] bg-gray-700 rounded-md"/>:  <Link href={"/user/newsfeed"} className="text-white w-[130px] rounded-lg mt-5 capitalize flex gap-2 px-2 py-1 bg-gray-900 hover:bg-gray-700 transition-all duration-500"> <svg width="22" height="22" fill="white" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M34,256,210,80l21.21,21.2L91.4,241H478v30H91.4L231.25,410.84,210,432Z"/></svg>Back</Link>}
  {isLoading ?
    <div className=" flex flex-col p-5">
      <Skeleton className="w-[1400px] h-[650px] bg-gray-700 rounded-md"/>
      <Skeleton className="w-[1400px] h-[25px] bg-gray-700 rounded-md mt-5"/>
      <Skeleton className="w-[1400px] h-[10px] bg-gray-700 rounded-md mt-2"/>
      <Skeleton className="w-[1400px] h-[10px] bg-gray-700 rounded-md mt-2"/>
      <Skeleton className="w-[1400px] h-[10px] bg-gray-700 rounded-md mt-2"/>
      <Skeleton className="w-[1400px] h-[10px] bg-gray-700 rounded-md mt-2"/>
      <Skeleton className="w-[1400px] h-[10px] bg-gray-700 rounded-md mt-2"/>
      <Skeleton className="w-[1400px] h-[10px] bg-gray-700 rounded-md mt-2"/>
      <Skeleton className="w-[1400px] h-[10px] bg-gray-700 rounded-md mt-2"/>
      <Skeleton className="w-[1400px] h-[10px] bg-gray-700 rounded-md mt-2"/>
      </div>:<div className=" p-5">
      <Image className="m-auto" width={1400} height={250} src={data?.newsfeed?.photo} alt={data?.newsfeed?.title}/>
      <hr className="mt-5"/>
      <h1 className="text-white text-[18px] my-5">{data?.newsfeed?.title}</h1>
      <p className="text-white">{data?.newsfeed?.desc}</p>
    </div>}
    
    </>
  </MaxWidthContainer>;
};

export default SingleNewsFeed;

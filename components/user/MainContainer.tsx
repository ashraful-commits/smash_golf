"use client";
import React, { useEffect, useState } from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import { getSingleUser } from "@/Utility/GetSingleUser";
import { getServerSession } from "next-auth";


const MainContainer =  () => {
  const [userData, setUserData] = useState<any>({});
  useEffect(() => {
    const singleDataFunc = async () => {
      const session = await getServerSession();
      try {
        const userData = await getSingleUser({ email: session?.user?.email });
        setUserData(userData);
      } catch (error) {
        console.log(error);
      }
    };
    singleDataFunc();
  },[]);
  console.log(userData);
  return (
    <MaxWidthContainer className="w-full bg-[#13131A] min-h-[1799px] flex">
      <SideBar />
      <MainContent userData={userData?.data?.user} />
    </MaxWidthContainer>
  );
};

export default MainContainer;

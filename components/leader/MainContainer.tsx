"use client"
import React, { useEffect, useState } from "react";
import MaxWidthContainer from "../user/MaxWidthContainer";
import SideBar from "../user/SideBar";
import MainContent from "./MainContent";
import { getServerSession } from "next-auth";
import { getSingleUser } from "@/Utility/GetSingleUser";

const MainContainer = () => {
 
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
  return (
    <MaxWidthContainer className="flex min-h-[1175px]">
      <SideBar />
      <MainContent userData={userData} />
    </MaxWidthContainer>
  );
};

export default MainContainer;

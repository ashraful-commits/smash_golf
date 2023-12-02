
import React, { useEffect, useState } from "react";
import MaxWidthContainer from "../user/MaxWidthContainer";
import SideBar from "../user/SideBar";
import MainContent from "./MainContent";
import { getServerSession } from "next-auth";


const MainContainer = async() => {
 const session = await getServerSession()
  
  return (
    <MaxWidthContainer className="flex min-h-[1175px]">
      <SideBar />
      <MainContent session={session} />
    </MaxWidthContainer>
  );
};

export default MainContainer;

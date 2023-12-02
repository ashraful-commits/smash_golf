
import React, { useEffect, useState } from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

import { getServerSession } from "next-auth";


const MainContainer = async() => {

  const session = await getServerSession();

 
  return (
    <MaxWidthContainer className="w-full bg-[#13131A] min-h-[1799px] flex">
      <SideBar />
      <MainContent session={session} />
    </MaxWidthContainer>
  );
};

export default MainContainer;

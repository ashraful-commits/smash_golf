import React from "react";
import MaxWidthContainer from "../user/MaxWidthContainer";
import SideBar from "../user/SideBar";
import MainContent from "./MainContent";
import { getServerSession } from "next-auth";
import { getSingleUser } from "@/Utility/GetSingleUser";

const MainContainer = async() => {
  const session = await getServerSession();
  const userData = await getSingleUser({ email: session?.user?.email });
 
  return (
    <MaxWidthContainer className="flex min-h-[1175px]">
      <SideBar />
      <MainContent userData={userData} />
    </MaxWidthContainer>
  );
};

export default MainContainer;

import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import { getSingleUser } from "@/Utility/GetSingleUser";
import { getServerSession } from "next-auth";

const MainContainer = async () => {
  const session = await getServerSession();
  const userData = await getSingleUser({ email: session?.user?.email });
 
  return (
    <MaxWidthContainer className="w-full bg-[#13131A] min-h-[1799px] flex">
      <SideBar />
      <MainContent userData={userData?.data?.user} />
    </MaxWidthContainer>
  );
};

export default MainContainer;

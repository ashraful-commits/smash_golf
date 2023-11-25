import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const MainContainer = () => {
  return (
    <MaxWidthContainer className="w-full bg-[#13131A] min-h-[1799px] flex">
      <SideBar />
      <MainContent />
    </MaxWidthContainer>
  );
};

export default MainContainer;

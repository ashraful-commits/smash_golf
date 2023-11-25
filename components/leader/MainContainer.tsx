import React from "react";
import MaxWidthContainer from "../user/MaxWidthContainer";
import SideBar from "../user/SideBar";
import MainContent from "./MainContent";

const MainContainer = () => {
  return (
    <MaxWidthContainer className="flex min-h-[1175px]">
      <SideBar />
      <MainContent />
    </MaxWidthContainer>
  );
};

export default MainContainer;

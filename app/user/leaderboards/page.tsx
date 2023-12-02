import Header from "@/components/user/Header";
import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import SideBar from "@/components/user/SideBar";
import React from "react";

const LeaderBoard = () => {
  return <MaxWidthContainer><Header/>
  <div className="flex relative">
  <SideBar/>
  <MaxWidthContainer>LeaderBoard</MaxWidthContainer>
  </div></MaxWidthContainer>;
};

export default LeaderBoard;

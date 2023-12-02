import Game from "@/components/Game/Game";
import Header from "@/components/user/Header";
import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import SideBar from "@/components/user/SideBar";
import React from "react";

const Tournament = () => {
  return <MaxWidthContainer><Header/>
  
  <div className="flex relative">
    <SideBar/>
    <Game/>
    
    </div></MaxWidthContainer>;
};

export default Tournament;

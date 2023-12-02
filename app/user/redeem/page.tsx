import Header from "@/components/user/Header";
import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import SideBar from "@/components/user/SideBar";
import React from "react";

const Redeem = () => {
  return <MaxWidthContainer><Header/>
  <div className="flex relative">
  <SideBar/>
  <MaxWidthContainer>Redeem</MaxWidthContainer>
  </div></MaxWidthContainer>;
};

export default Redeem;

import Header from "@/components/leader/Header";
import MainContainer from "@/components/leader/MainContainer";
import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Leader",
  description: "play. compete. win",
};
const Leader = () => {
  return (
    <MaxWidthContainer>
      <Header />
      <MainContainer />
    </MaxWidthContainer>
  );
};

export default Leader;

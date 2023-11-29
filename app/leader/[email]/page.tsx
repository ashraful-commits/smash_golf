import Header from "@/components/leader/Header";
import MainContainer from "@/components/leader/MainContainer";
import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import React from "react";

const Leader = () => {
  return (
    <MaxWidthContainer>
      <Header />
      <MainContainer />
    </MaxWidthContainer>
  );
};

export default Leader;

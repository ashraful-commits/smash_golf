import NewsFeedCard from "@/components/NewsFeed/NewsFeedCard";
import Header from "@/components/user/Header";
import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import SideBar from "@/components/user/SideBar";
import React from "react";

const NewsFeed = async () => {
  return (
    <MaxWidthContainer>
      <Header />
      <div className="flex  w-full">
        <SideBar />
        <NewsFeedCard />
      </div>
    </MaxWidthContainer>
  );
};

export default NewsFeed;

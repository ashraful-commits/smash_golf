import { getAllNewsFeed } from "@/Utility/GetAllNewsFeed";
import React from "react";

const NewsFeed = () => {
  getAllNewsFeed();
  return <div>NewsFeed</div>;
};

export default NewsFeed;

import { getAllNewsFeed } from "@/Utility/GetAllNewsFeed";
import React from "react";

const NewsFeed =async () => {
 const allNewsFeed= await getAllNewsFeed();
console.log(allNewsFeed)
  return <div>NewsFeed</div>;
};

export default NewsFeed;

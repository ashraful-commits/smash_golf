import axios from "axios";
//================================
export const getAllNewsFeed = async () => {
  const response = await axios.get("https://localhost:3000/api/user/newsfeed");
  return response;
};

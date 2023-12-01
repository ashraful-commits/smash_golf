import axios from "axios";
//================================================
export const getAllNewsFeed = async () => {
  const response = await axios.get(
    "https://smash-golf.vercel.app/api/user/newsfeed"
  );
  return response;
};

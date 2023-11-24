import axios from "axios";

export const getAllUser = async () => {
  const getAllData = await axios.get("https://smash-golf.vercel.app/api");
  console.log(getAllData.data);
};
getAllUser();

import axios from "axios";
//================================
export const getSingleUser = async (data: any) => {
  const response = await axios.get(
    `https://smash-golf.vercel.app/api/user/${data.email}`
  );
  return response;
};

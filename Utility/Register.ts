import axios from "axios";
//================================
export const register = async (data: any) => {
  const response = await axios.post(
    "https://smash-golf.vercel.app/api/register",
    data
  );
  return response;
};

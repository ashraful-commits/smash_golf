import axios from "axios";
//================================
export const register = async (data: any) => {
  const response = await axios.post("http://localhost:3000/api/register", data);
  return response;
};

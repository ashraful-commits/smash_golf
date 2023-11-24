import axios from "axios";

export const LoginUser = async (data: any) => {
  const response = await axios.post("http://localhost:3000/api/login", data);
  console.log(response);
  return response;
};

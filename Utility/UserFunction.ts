import axios from "axios";

export const getAllUser = async () => {
  const getAllData = await axios.get("http://localhost:3000/api");
  console.log(getAllData.data);
};
getAllUser();

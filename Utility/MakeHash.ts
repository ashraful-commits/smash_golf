import bcryptjs from "bcryptjs";
export const makeHash = async (password: any) => {
  const salt = await bcryptjs.genSaltSync(10);
  const hashPass = bcryptjs.hash(password, salt);
  return hashPass;
};

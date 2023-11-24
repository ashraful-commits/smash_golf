import bcrypt from "bcryptjs";
export const comparePasswords = async (
  password: string,
  oldPassword: string
) => {
  try {
    const passwordMatches = await bcrypt.compare(password, oldPassword);
    return passwordMatches;
  } catch (error) {
    throw error;
  }
};

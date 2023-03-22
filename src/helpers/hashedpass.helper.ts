import bcrypt from "bcrypt";

export const hashPassword = async (pass: string) => {
  const hashedPassword = await bcrypt.hash(pass, 30);
  return hashedPassword;
};
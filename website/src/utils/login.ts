import wbtl from "jsonwebtoken";
import { dbLogin } from "./routes";

type LoginResponse =
  | { success: false; token: null; max: null }
  | { success: true; token: string; max: number };

export default async function login({
  username,
  password,
  maxAge,
  secret,
}: {
  username: string;
  password: string;
  maxAge: number;
  secret: string;
}): Promise<LoginResponse> {
  const getLoginData = await dbLogin(username, password);
  if (getLoginData.success === false) {
    return { success: false, token: null, max: null };
  }
  const expire = Math.floor(Date.now() / 1000) + maxAge;
  const token = wbtl.sign(
    {
      exp: expire,
      username: username,
      user: getLoginData.user,
    },
    secret,
  );
  return { success: true, token: `${token}`, max: maxAge };
}

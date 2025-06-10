import wblt from "jsonwebtoken";
import type { profileType } from "./types";

type HasProfileResponse =
  | { success: false; username: null; user: null }
  | { success: true; username: string; user: string };

export default function hasProfile(
  myToken: string | undefined,
  secret: string,
): HasProfileResponse {
  let username: string | null = null;
  let user: string | null = null;
  let success = false;
  if (!myToken || myToken === "undefined" || myToken === "null") {
    return { success, username, user };
  }
  try {
    const data = wblt.verify(myToken, secret) as profileType;
    if (data.username && data.user) {
      success = true;
      username = data.username;
      user = data.user;
    }
  } catch {
    success = false;
  }
  if (!success) {
    return { success, username: null, user: null };
  }
  return { success, username: username as string, user: user as string };
}

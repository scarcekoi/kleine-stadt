interface dbLoginType {
  success: boolean;
  username: string | null;
}

export function dbLogin(email: string, password: string): Promise<dbLoginType> {
  let username: string | null = null;
  let success = false;
  return new Promise((resolve) => {
    if (email === "ks_access" && password === "CJjBuf1!V9rR!w") {
      username = "Kleine Stadt Admin";
      success = true;
    } else if (email === "ks_access" && password === "CJjBuf1!V9rR!w") {
      username = "Kleine Stadt Admin";
      success = true;
    }
    resolve({ success, username });
  });
}

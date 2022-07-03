import Cookies from "js-cookie";

export const sessionStore = {
  get() {
    return Cookies.get("session");
  },
  save(session: string) {
    Cookies.set("session", session, { expires: 14 });
  },
  clear() {
    Cookies.remove("session");
  },
};

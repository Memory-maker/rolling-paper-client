import axios from "axios";
import { kakaoProfile } from "../types/login";

const BASE_URL = "http://localhost:8080/";
const SIGNUP = "/user/signup";
const LOGIN = "/user/signin";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },

  timeout: 2500,
});

export const login_API = async (sessionId: string) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
      sessionId,
    },
    timeout: 2500,
  });
  try {
    return await instance.post(LOGIN);
  } catch (error) {
    console.log(error, "error");
  }
};

export const singup_API = async (userData: kakaoProfile | null) => {
  try {
    return await axiosInstance.post(SIGNUP, userData);
  } catch (err: unknown) {
    console.log(err, "err");
  }
};

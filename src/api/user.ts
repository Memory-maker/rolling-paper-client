import axios from "axios";
import { kakaoProfile } from "../types/login";

const BASE_URL = "http://ec2-15-165-187-40.ap-northeast-2.compute.amazonaws.com:8080";
const SIGNUP = "/user/signup";
const LOGIN = "/member/login";
const NICKNAME = "/member";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
  timeout: 2500,
});

export const login_API = async (username: string | null) => {
  try {
    if (!username) return;
    const data = { username };
    return await axiosInstance.post(LOGIN, data);
  } catch (error) {
    console.log(error, "error");
  }
};

export const nickname_API = async (nickname: string | null) => {
  try {
    if (!nickname) return;
    const data = { nickname };
    return await axiosInstance.put(NICKNAME, data);
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

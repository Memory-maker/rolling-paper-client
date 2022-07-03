import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = "http://ec2-15-165-187-40.ap-northeast-2.compute.amazonaws.com:8080/";

const axiosWrapper = async ({
  method,
  url,
  params,
  body,
}: {
  method: "get" | "post" | "put" | "delete";
  url: string;
  params?: {};
  body?: {};
}) => {
  const token = localStorage.getItem("token");
  try {
    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      withCredentials: true,
      params,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
    const { data } =
      (method === "get" && (await axios.get(url, config))) ||
      (method === "post" && (await axios.post(url, body, config))) ||
      (method === "put" && (await axios.put(url, body, config))) ||
      (method === "delete" && (await axios.delete(url, config))) ||
      {};
    return data;
  } catch (error: any) {
    console.log(error.response.status, error);
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/401";
    }
  }
};

export const GET = (url: string, params?: {}) => axiosWrapper({ method: "get", url, params });

export const POST = (url: string, body?: {}, params?: {}) => axiosWrapper({ method: "post", url, body, params });

export const PUT = (url: string, body?: {}, params?: {}) => axiosWrapper({ method: "put", url, body, params });

export const DELETE = (url: string) => axiosWrapper({ method: "delete", url });

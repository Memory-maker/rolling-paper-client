import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = "http://ec2-15-165-187-40.ap-northeast-2.compute.amazonaws.com:8080/";

const axiosClient = axios.create();

axiosClient.interceptors.request.use(
  (config) => {
    const session = sessionStorage.get();
    config.baseURL = BASE_URL;
    if (!config.headers) config.headers = {};
    if (session) {
      config.headers["Authorization"] = `Bearer ${session}`;
    }
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Headers"] = "Content-Type";
    config.headers["Access-Control-Allow-Methods"] = "GET, PUT, POST, DELETE, OPTIONS";
    config.headers["x-api-key"] = process.env.REACT_APP_CATS_KEY as string;
    config.withCredentials = true;

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
const makeRequest = <T>(config: AxiosRequestConfig) => axiosClient.request<any, T>(config);
export default makeRequest;

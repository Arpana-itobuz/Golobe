import axios, { AxiosError } from "axios";

export const baseURL = process.env.REACT_APP_BASE_URL;

console.log(baseURL);

export const instance = axios.create({ baseURL: baseURL });

instance.interceptors.response.use(
  (response) => response,
  async function (error) {
    if (error instanceof AxiosError) {
      const originalRequest = error.config;

      if (!originalRequest) {
        return;
      }
    }
    return Promise.reject(error);
  }
);

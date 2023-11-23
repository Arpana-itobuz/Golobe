import { AxiosError, AxiosRequestConfig } from "axios";
import { APIRequestInterface, UserSignUp } from "../interfaces/interfaces";
import { instance } from "./axiosInstance";
import { URLS } from "../config/urls";

const apiRequest = async (config: AxiosRequestConfig) => {
  try {
    const response = await instance(config);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

const apiCall = async <T, U>(
  url: string,
  method: string,
  body?: U
): Promise<APIRequestInterface<T>> => {
  const config: AxiosRequestConfig = {
    method,
    url,
    data: body,
  };
  return await apiRequest(config);
};

// Register User

export async function registerUser(formData: UserSignUp) {
  const response = await apiCall<null, UserSignUp>(
    URLS.register,
    "POST",
    formData
  );
  return response;
}

//login user

export async function login(formData: UserSignUp) {
  const response = await apiCall<null, UserSignUp>(
    URLS.login,
    "POST",
    formData
  );
  return response;
}

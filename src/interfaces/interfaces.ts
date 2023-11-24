import React from "react";

export interface APIRequestInterface<T> {
  data: T;
  message: string;
  success: boolean;
  error: Error;
}

export interface UserSignUp {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface LoginCreden {
  token: {
    accessToken: string;
    refreshToken: string;
  };
  user: UserData;
}

export interface GlobalContextData {
  userDetails?: UserData | null;
  setUserDetails: React.Dispatch<React.SetStateAction<UserData | null>>;
}
export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

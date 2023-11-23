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

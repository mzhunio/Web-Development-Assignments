import type { LoginModel } from "@/models/AuthModel";
import type { CreateUserModel, User } from "@/models/UserModel";
import { user } from "@/state/user";
import axios from "axios";
import { LocalStorage } from "./LocalStorageServices";
import { createUser } from "./UserService";

export const API_URL = import.meta.env.Vite_API_URL;

export enum AuthError {
  InvalidEmail = "Invalid email: Please enter valid email",
  InvalidUsernameMinLength = "Invalid username: Please enter at least 4 characters",
  InvalidPasswordMinLength = "Invalid Password: Please enter at least 5 characters",
  InvalidPasswordAndRePasswordDoNotMatch = "Invalid Password: Password and re-enter password are not equal",
}

export const AuthApi = {
  async login(loginModel: LoginModel): Promise<User> {
    const { data } = await axios.post<User>(`${API_URL}/login`, loginModel);
    return data;
  },

  async logout(userId: string) {
    const { data } = await axios.post<User>(`${API_URL}/logout/${userId}`);
    return data;
  },
};

export const AuthService = {
  async register(createUserModel: CreateUserModel) {
    user.value = await createUser(createUserModel);
    LocalStorage.setCurrentUser(user.value);
  },

  async login(username: string, password: string) {
    user.value = await AuthApi.login({ username, password });
    LocalStorage.setCurrentUser(user.value);
  },

  async logout(userId: string) {
    await AuthApi.logout(userId);
    user.value = null;
    LocalStorage.removeCurrentUser();
  },
};

export function updateCurrentUser(currentUser: User) {
  user.value = currentUser;
}

export function getUsernameErrors(username: string) {
  const hasMinimumLength = username.length >= 4;

  if (!hasMinimumLength) {
    return { InvalidUsernameMinLength: true };
  }

  return null;
}

export function getPasswordErrors(password: string, rePassword: string) {
  const arePasswordAndReEnterPasswordEqual = password === rePassword;
  if (!arePasswordAndReEnterPasswordEqual) {
    return { InvalidPasswordAndRePasswordDoNotMatch: true };
  }

  const hasMinimumLength =
    arePasswordAndReEnterPasswordEqual && password.length >= 5;
  if (!hasMinimumLength) {
    return { InvalidPasswordMinLength: true };
  }

  return null;
}

export function getEmailErrors(email: string | null) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmailValid = !!email?.toLowerCase().match(emailRegex);

  if (!isEmailValid) {
    return { InvalidEmail: true };
  }

  return null;
}

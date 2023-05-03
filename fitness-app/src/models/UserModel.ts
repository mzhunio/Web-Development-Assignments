export interface CreateUserModel {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  lastActive: string;
  token: string;
}

export interface UpdateUserModel {
  password?: string;
  isAdmin?: boolean;
}

export interface UserModel  {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  lastActive: string;
}

export interface CreateUserModel {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  lastActive: string;
}

export interface UpdateUserModel {
  username?: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
}

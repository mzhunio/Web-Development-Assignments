import { RowDataPacket } from "mysql2";

export interface UserModel extends RowDataPacket {
  id: number;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface CreateUserModel {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface UpdateUserModel {
  password?: string;
  isAdmin?: boolean;
}

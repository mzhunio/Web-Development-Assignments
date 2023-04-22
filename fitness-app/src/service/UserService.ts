import type { CreateUserModel, UpdateUserModel, User } from "@/models/UserModel";
import axios from "axios";

const API_URL = "http://localhost:3000";

export async function getAllUsers(): Promise<User[]> {
  const { data } = await axios.get<User[]>(API_URL + "/user");
  return data;
}

export async function getUser(id: number): Promise<User[]> {
  const { data } = await axios.get<User[]>(`${API_URL}/user/${id}`);
  return data;
}

export async function createUser(
  createUserModel: CreateUserModel
): Promise<User> {
  const { data } = await axios.post<User>(API_URL + "/user", createUserModel);
  return data;
}

export async function updateUser(
  id: number,
  updateUserModel: UpdateUserModel
): Promise<User> {
  const { data } = await axios.patch<User>(
    `${API_URL}/user/${id}`,
    updateUserModel
  );
  return data;
}

export async function deleteUser(id: number): Promise<User> {
  const { data } = await axios.delete<User>(`${API_URL}/user/${id}`);
  return data;
}

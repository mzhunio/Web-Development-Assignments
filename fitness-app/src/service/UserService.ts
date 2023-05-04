import type {
  CreateUserModel,
  UpdateUserModel,
  User,
} from "@/models/UserModel";
import { users } from "@/state/user";
import axios from "axios";
import { ref } from "vue";
import { API_URL } from "./AuthService";

// export async function getAllWorkouts(): Promise<User[]> {
//   const { data } = await axios.get<User[]>(API_URL + "/workouts");
//   return data;
// }

// export async function getWorkoutsByUserId(userId: string): Promise<User[]> {
//   const { data } = await axios.get<User[]>(API_URL + "/workouts/" + userId);
//   return data;
// }

export const currentUpdatingUser = ref<User | null>(null);

export const showCreateUserModal = ref(false);
export const showUpdateUserModal = ref(false);

export async function getUser(id: number): Promise<User[]> {
  const { data } = await axios.get<User[]>(`${API_URL}/user/${id}`);
  return data;
}

export async function reloadUsers() {
  const { data } = await axios.get(`${API_URL}/user`);
  users.value = data;
}

export async function createUser(
  createUserModel: CreateUserModel
): Promise<User> {
  const { data } = await axios.post<User>(`${API_URL}/user/${createUserModel}`);
  return data;
}

export async function updateUser(
  id: string,
  updateUserModel: UpdateUserModel
): Promise<User> {
  const { data } = await axios.patch<User>(
    `${API_URL}/user/${id}`,
    updateUserModel
  );
  return data;
}

export async function deleteUser(id: string): Promise<User> {
  const { data } = await axios.delete<User>(`${API_URL}/user/${id}`);
  return data;
}
interface CreateExerciseModel {
  name: string;
  sets: number;
  reps: number;
}

interface CreateWorkoutModel {
  name: string;
  duration: string;
  exercises: CreateExerciseModel;
  userId: string;
}

export async function createWorkout(workout: CreateWorkoutModel) {}

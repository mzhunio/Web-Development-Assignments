import type { CreateUserModel, UpdateUserModel, User } from "@/models/UserModel";
import type { Workout } from "@/state/workout";
import axios from "axios";

const API_URL = "http://localhost:3000";

export async function getAllUsers(): Promise<User[]> {
  const { data } = await axios.get<User[]>(API_URL + "/user");
  return data;
}

// export async function getAllWorkouts(): Promise<User[]> {
//   const { data } = await axios.get<User[]>(API_URL + "/workouts");
//   return data;
// }

// export async function getWorkoutsByUserId(userId: string): Promise<User[]> {
//   const { data } = await axios.get<User[]>(API_URL + "/workouts/" + userId);
//   return data;
// }

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
import type { User } from "@/models/UserModel";
import { ref } from "vue";
// import workouts from "../data/workouts.json";

export interface Workout {
  _id: string;
  name: string;
  duration: string;
  userId: string;
  exercises: Exercise[];
  user?: User;
}

export interface Exercise {
  name: string;
  sets: string;
  reps: string;
}

export const workout = ref<Workout>({
  _id: "",
  name: "Leg Workout",
  duration: "30 mins",
  userId: "",
  exercises: [],
});

export const newExercise = ref<Exercise>({
  name: "Arm",
  sets: "",
  reps: "",
});

export const friendsWorkouts = ref<Workout[]>([]);

export const workouts = ref<Workout[]>([]);

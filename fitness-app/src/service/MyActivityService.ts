import { user } from "@/state/user";
import type { Exercise, Workout } from "@/state/workout";
import axios from "axios";
import { ref } from "vue";
import { API_URL } from "./AuthService";

export const workouts = ref<Workout[]>([]);

export const workout = ref<Workout>({
  _id: "",
  userId: "",
  name: "",
  duration: "",
  exercises: [],
});

export const newExercise = ref<Exercise>({
  name: "",
  sets: "",
  reps: "",
});

export const shouldShowModal = ref(false);

export function onAddWorkoutClicked() {
  workout.value = { ...workout.value, exercises: [] };
  showModal();
}

export async function reloadWorkouts(userId: string) {
  const { data } = await axios.get(`${API_URL}/workout/${userId}`);
  workouts.value = data;
}

export function showModal() {
  shouldShowModal.value = true;
}

export function closeModal() {
  shouldShowModal.value = false;
}

export function onAddExercise() {
  workout.value.exercises.push({ ...newExercise.value });
}

export function onDeleteExercise(exerciseIndex: number) {
  workout.value.exercises.splice(exerciseIndex, 1);
}

export async function deleteWorkout(workoutId: string) {
  await axios.delete(`${API_URL}/workout/${workoutId}`);
  await reloadWorkouts(user.value!._id);
}

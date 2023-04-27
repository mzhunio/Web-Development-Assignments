import { user } from "@/state/user";
import type { Exercise, Workout } from "@/state/workout";
import axios from "axios";
import { ref } from "vue";

export const workouts = ref<Workout[]>([]);

export const workout = ref<Workout>({
  _id: "",
  userId: "",
  name: "Leg Workout",
  duration: "30 mins",
  exercises: [],
});

export const newExercise = ref<Exercise>({
  name: "Arm",
  sets: 4,
  reps: 15,
});

export const shouldShowModal = ref(false);

export function onAddWorkoutClicked() {
  workout.value = { ...workout.value, exercises: [] };
  showModal();
}

export async function reloadWorkouts(userId: string) {
  const { data } = await axios.get(`http://localhost:3000/workout/${userId}`);
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
  await axios.delete(`http://localhost:3000/workout/${workoutId}`);
  await reloadWorkouts(user.value!._id);
}
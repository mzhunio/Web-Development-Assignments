import { API_URL } from "@/service/AuthService";
import { workouts, workout, newExercise } from "@/state/workout";
import axios from "axios";
import { ref } from "vue";

async function getAllWorkoutsByUserId(userId: string) {
  const { data } = await axios.get(`${API_URL}/workout/${userId}`);

  workouts.value = data;
}

export const shouldShowModal = ref(false);

export function onAddWorkoutClicked() {
  showModal();
}

export function showModal() {
  shouldShowModal.value = true;
}

export function closeModal() {
  shouldShowModal.value = false;
}

export function onSaveChangesClicked() {
  workouts.value.push(workout.value);
  closeModal();
}

export function onAddExercise() {
  workout.value.exercises.push({ ...newExercise.value });
}

export async function onDeleteWorkout(workoutId: string) {
  const res = await axios.delete(`${API_URL}/workout/${workoutId}`);

}

export function onDeleteExercise(exerciseIndex: number) {
  workout.value.exercises.splice(exerciseIndex, 1);
}

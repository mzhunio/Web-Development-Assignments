import { workouts, workout, newExercise } from "@/state/workout";
import { ref } from "vue";

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

export function onDeleteWorkout(workoutIndex: number) {
  workouts.value.splice(workoutIndex, 1);
}

export function onDeleteExercise(exerciseIndex: number) {
  workout.value.exercises.splice(exerciseIndex, 1);
}

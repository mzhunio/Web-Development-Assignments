import { workouts } from "@/state/auth.state";
import { ref } from "vue";

export const shouldShowModal = ref(false);

export interface Workout {
  workoutName: string;
  duration: number;
  exercises: Exercise[];
}

interface Exercise {
  exerciseName: string;
  sets: number;
  repetitions: number;
}

export const workout = ref<Workout>({
  workoutName: "Leg Workout",
  duration: 30,
  exercises: [],
});

export const newExercise = ref<Exercise>({
  exerciseName: "Arm",
  sets: 4,
  repetitions: 15,
});

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

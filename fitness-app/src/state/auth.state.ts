import { ref } from "vue";

const username = ref("");

export const authState = {
  username,
};

export const workouts = ref([
  { workoutName: "A", sets: 1, repetitions: 2 },
  { workoutName: "B", sets: 1, repetitions: 2 },
  { workoutName: "C", sets: 1, repetitions: 2 },
]);

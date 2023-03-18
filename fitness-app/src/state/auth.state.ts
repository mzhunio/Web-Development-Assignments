import { ref } from "vue";

const username = ref("");

export const authState = {
  username,
};

export const workouts = ref([
  {
    workoutName: "Leg Workout",
    duration: 30,
    exercises: [
      { exerciseName: "Squats", sets: 4, repetitions: 15 },
      { exerciseName: "Lunges", sets: 3, repetitions: 10 },
      { exerciseName: "Leg Press", sets: 4, repetitions: 5 },
      { exerciseName: "Summo Squat", sets: 3, repetitions: 8 },
    ],
  },
  {
    workoutName: "Arms Workout",
    duration: 30,
    exercises: [
      { exerciseName: "Bicep Curl", sets: 1, repetitions: 2 },
      { exerciseName: "Triceps", sets: 3, repetitions: 10 },
      { exerciseName: "Skull Crusher", sets: 4, repetitions: 5 },
    ],
  },
  {
    workoutName: "Chest Workout",
    duration: 30,
    exercises: [
      { exerciseName: "Bench Press", sets: 1, repetitions: 2 },
      { exerciseName: "Push ups", sets: 3, repetitions: 10 },
      { exerciseName: "Inclined Bench Press", sets: 3, repetitions: 10 },
    ],
  },
]);

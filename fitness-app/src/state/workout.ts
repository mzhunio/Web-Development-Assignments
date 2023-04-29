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
  sets: number;
  reps: number;
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
  sets: 4,
  reps: 15,
});

// const michelleWorkouts = [
//   {
//     name: "MichelleLeg Workout",
//     duration: 30,
//     exercises: [
//       { exerciseName: "Squats", sets: 4, repetitions: 15 },
//       { exerciseName: "Lunges", sets: 3, repetitions: 10 },
//       { exerciseName: "Leg Press", sets: 4, repetitions: 5 },
//       { exerciseName: "Sumo Squat", sets: 3, repetitions: 8 },
//     ],
//   },
//   {
//     name: "Arms Workout",
//     duration: 30,
//     exercises: [
//       { exerciseName: "Bicep Curl", sets: 1, repetitions: 2 },
//       { exerciseName: "Triceps", sets: 3, repetitions: 10 },
//       { exerciseName: "Skull Crusher", sets: 4, repetitions: 5 },
//     ],
//   },
//   {
//     name: "Chest Workout",
//     duration: 30,
//     exercises: [
//       { exerciseName: "Bench Press", sets: 1, repetitions: 2 },
//       { exerciseName: "Push ups", sets: 3, repetitions: 10 },
//       { exerciseName: "Inclined Bench Press", sets: 3, repetitions: 10 },
//     ],
//   },
// ];

// const richardWorkouts = [
//   {
//     name: "RichardArms Workouts",
//     duration: 40,
//     exercises: [
//       { exerciseName: "Bicep Curl", sets: 1, repetitions: 2 },
//       { exerciseName: "Triceps", sets: 3, repetitions: 10 },
//       { exerciseName: "Skull Crusher", sets: 4, repetitions: 5 },
//     ],
//   },
//   {
//     name: "Leg Workout",
//     duration: 40,
//     exercises: [
//       { exerciseName: "Squats", sets: 4, repetitions: 15 },
//       { exerciseName: "Lunges", sets: 3, repetitions: 10 },
//       { exerciseName: "Leg Press", sets: 4, repetitions: 5 },
//       { exerciseName: "Summo Squat", sets: 3, repetitions: 8 },
//     ],
//   },
//   {
//     name: "Chest Workout",
//     duration: 40,
//     exercises: [
//       { exerciseName: "Bench Press", sets: 1, repetitions: 2 },
//       { exerciseName: "Push ups", sets: 3, repetitions: 10 },
//       { exerciseName: "Inclined Bench Press", sets: 3, repetitions: 10 },
//     ],
//   },
// ];

// const karoWorkouts = [
//   {
//     name: "KaroArms Workouts",
//     duration: 50,
//     exercises: [
//       { exerciseName: "Bicep Curl", sets: 1, repetitions: 2 },
//       { exerciseName: "Triceps", sets: 3, repetitions: 10 },
//       { exerciseName: "Skull Crusher", sets: 4, repetitions: 5 },
//     ],
//   },
//   {
//     name: "Leg Workout",
//     duration: 50,
//     exercises: [
//       { exerciseName: "Squats", sets: 4, repetitions: 15 },
//       { exerciseName: "Lunges", sets: 3, repetitions: 10 },
//       { exerciseName: "Leg Press", sets: 4, repetitions: 5 },
//       { exerciseName: "Summo Squat", sets: 3, repetitions: 8 },
//     ],
//   },
//   {
//     name: "Chest Workout",
//     duration: 50,
//     exercises: [
//       { exerciseName: "Bench Press", sets: 1, repetitions: 2 },
//       { exerciseName: "Push ups", sets: 3, repetitions: 10 },
//       { exerciseName: "Inclined Bench Press", sets: 3, repetitions: 10 },
//     ],
//   },
// ];

// export const workoutsMap = {
//   mzhunio: michelleWorkouts,
//   rzhunio: richardWorkouts,
//   kzhunio: karoWorkouts,
// };

// export const friendsActivityWorkouts = ref([
//   { username: "mzhunio", workouts: michelleWorkouts },
//   { username: "rzhunio", workouts: richardWorkouts },
//   { username: "kzhunio", workouts: karoWorkouts },
// ]);

export const friendsWorkouts = ref<Workout[]>([]);

export const workouts = ref<Workout[]>([]);

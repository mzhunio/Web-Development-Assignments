import { ref } from "vue";

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

const michelleWorkouts = [
  {
    workoutName: "MichelleLeg Workout",
    duration: 30,
    exercises: [
      { exerciseName: "Squats", sets: 4, repetitions: 15 },
      { exerciseName: "Lunges", sets: 3, repetitions: 10 },
      { exerciseName: "Leg Press", sets: 4, repetitions: 5 },
      { exerciseName: "Sumo Squat", sets: 3, repetitions: 8 },
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
];

const richardWorkouts = [
  {
    workoutName: "RichardArms Workouts",
    duration: 40,
    exercises: [
      { exerciseName: "Bicep Curl", sets: 1, repetitions: 2 },
      { exerciseName: "Triceps", sets: 3, repetitions: 10 },
      { exerciseName: "Skull Crusher", sets: 4, repetitions: 5 },
    ],
  },
  {
    workoutName: "Leg Workout",
    duration: 40,
    exercises: [
      { exerciseName: "Squats", sets: 4, repetitions: 15 },
      { exerciseName: "Lunges", sets: 3, repetitions: 10 },
      { exerciseName: "Leg Press", sets: 4, repetitions: 5 },
      { exerciseName: "Summo Squat", sets: 3, repetitions: 8 },
    ],
  },
  {
    workoutName: "Chest Workout",
    duration: 40,
    exercises: [
      { exerciseName: "Bench Press", sets: 1, repetitions: 2 },
      { exerciseName: "Push ups", sets: 3, repetitions: 10 },
      { exerciseName: "Inclined Bench Press", sets: 3, repetitions: 10 },
    ],
  },
];

const karoWorkouts = [
  {
    workoutName: "KaroArms Workouts",
    duration: 50,
    exercises: [
      { exerciseName: "Bicep Curl", sets: 1, repetitions: 2 },
      { exerciseName: "Triceps", sets: 3, repetitions: 10 },
      { exerciseName: "Skull Crusher", sets: 4, repetitions: 5 },
    ],
  },
  {
    workoutName: "Leg Workout",
    duration: 50,
    exercises: [
      { exerciseName: "Squats", sets: 4, repetitions: 15 },
      { exerciseName: "Lunges", sets: 3, repetitions: 10 },
      { exerciseName: "Leg Press", sets: 4, repetitions: 5 },
      { exerciseName: "Summo Squat", sets: 3, repetitions: 8 },
    ],
  },
  {
    workoutName: "Chest Workout",
    duration: 50,
    exercises: [
      { exerciseName: "Bench Press", sets: 1, repetitions: 2 },
      { exerciseName: "Push ups", sets: 3, repetitions: 10 },
      { exerciseName: "Inclined Bench Press", sets: 3, repetitions: 10 },
    ],
  },
];

export const workoutsMap = {
  mzhunio: michelleWorkouts,
  rzhunio: richardWorkouts,
  kzhunio: karoWorkouts,
};

export const friendsActivityWorkouts = ref([
  { username: "mzhunio", workouts: michelleWorkouts},
  { username: "rzhunio", workouts: richardWorkouts},
  { username: "kzhunio", workouts: karoWorkouts}
]);

export const friendsWorkouts = ref<Workout[]>(michelleWorkouts);

export const workouts = ref<Workout[]>(michelleWorkouts);

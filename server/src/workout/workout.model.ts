import { CreateExerciseModel, ExerciseModel, UpdateExerciseModel } from "../exercise/exercise.model";

export interface WorkoutModel {
  name: string;
  duration: string;
  userId: string;
  exercises?: ExerciseModel[];
}

export interface CreateWorkoutModel {
  name: string;
  duration: string;
  userId: string;
  exercises: CreateExerciseModel[];
}

export interface UpdateWorkoutModel {
  name?: string;
  duration?: string;
  exercises: CreateExerciseModel[ 
    // name?: string;
    // sets?: number;
    // reps?: number;
  ]
}

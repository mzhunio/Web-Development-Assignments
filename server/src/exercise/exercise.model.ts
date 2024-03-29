import { ObjectId } from "mongodb";

export interface ExerciseModel {
  workoutId: ObjectId;
  name: string;
  sets: number;
  reps: number;
}

export interface CreateExerciseModel {
  workoutId: ObjectId;
  name: string;
  sets: number;
  reps: number;
}

export interface UpdateExerciseModel {
  workoutId: ObjectId;
  name?: string;
  sets?: number;
  reps?: number;
}

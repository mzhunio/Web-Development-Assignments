import { CreateExerciseModel, ExerciseModel, UpdateExerciseModel } from "../exercise/exercise.model";
import { UserModel } from "../user/user.model";

export interface WorkoutModel {
  name: string;
  duration: string;
  userId: string;
  exercises?: ExerciseModel[];
  user?: UserModel;
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
  exercises: CreateExerciseModel[]
}

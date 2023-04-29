import { ObjectId } from "mongodb";
import { WorkoutService } from "../workout/workout.service";
import { database } from "../models/mongo";
import {
  CreateExerciseModel,
  ExerciseModel,
  UpdateExerciseModel,
} from "./exercise.model";

export class ExerciseService {
  private collection = database.collection<ExerciseModel>("exercise");

  getExerciseById(exerciseId: ObjectId) {
    return this.collection.findOne({ _id: exerciseId });
  }

  getExercisesByWorkoutId(workoutId: ObjectId) {
    return this.collection.find({ workoutId }).toArray();
  }

  async getAllExercises() {
    return this.collection.find().toArray();
  }

  async createExercise({ name, sets, reps, workoutId }: CreateExerciseModel) {
    const { insertedId } = await this.collection.insertOne({
      name,
      sets,
      reps,
      workoutId,
    });

    return this.collection.findOne({ _id: insertedId });
  }

  // async updateExercise(id: ObjectId, changes: UpdateExerciseModel) {
  //   await this.collection.updateOne({ _id: id }, { $set: changes });

  //   return this.getAllExercisesByUserId(id);
  // }

  async deleteExercise(exerciseId: ObjectId) {
    const exercise = await this.getExerciseById(exerciseId);

    await this.collection.deleteOne({ _id: exerciseId });

    return exercise;
  }
}

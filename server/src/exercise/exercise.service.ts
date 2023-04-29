import { ObjectId } from "mongodb";
import { database } from "../models/mongo";
import { CreateExerciseModel, ExerciseModel } from "./exercise.model";

export class ExerciseService {
  private collection = database.collection<ExerciseModel>("exercise");

  getExercisesByWorkoutId(workoutId: ObjectId) {
    return this.collection.find({ workoutId }).toArray();
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
}

import { ObjectId } from "mongodb";
import { database } from "../models/mongo";
import { CreateExerciseModel, ExerciseModel } from "./exercise.model";

export class ExerciseService {
  private collection = database.collection<ExerciseModel>("exercise");

  getExerciseById(exerciseId: ObjectId) {
    return this.collection.findOne({ _id: exerciseId });
  }

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

  //   async deleteExercise(exerciseId: string) {
  //     const exercise = await this.getExerciseById(exerciseId);

  //     await this.collection.deleteOne({ _id: new ObjectId(exerciseId) });

  //     return exercise;
  //   }
}

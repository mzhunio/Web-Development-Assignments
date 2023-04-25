import { ObjectId } from "mongodb";
import { database } from "../models/mongo";
import { CreateWorkoutModel, UpdateWorkoutModel } from "./workout.model";

export class WorkoutService {
  private collection = database.collection("workout");

  getAllWorkouts() {
    return this.collection.find().toArray();
  }

  getWorkoutById(id: string) {
    return this.collection.findOne({ _id: new ObjectId(id) });
  }

  async createWorkout({ name, duration, userId }: CreateWorkoutModel) {
    const { insertedId } = await this.collection.insertOne({
      name,
      duration,
      userId,
    });

    return this.collection.findOne({ _id: insertedId });
  }

  async updateWorkout(id: string, changes: UpdateWorkoutModel) {
    await this.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: changes }
    );

    return this.getWorkoutById(id);
  }

  async deleteWorkout(id: string) {
    const workout = this.getWorkoutById(id);

    await this.collection.deleteOne({ _id: new ObjectId(id) });

    return workout;
  }
}

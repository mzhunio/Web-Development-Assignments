import { ObjectId } from "mongodb";
import { ExerciseService } from "../exercise/exercise.service";
import { database } from "../models/mongo";
import {
  CreateWorkoutModel,
  UpdateWorkoutModel,
  WorkoutModel,
} from "./workout.model";

export class WorkoutService {
  collection = database.collection<WorkoutModel>("workout");
  exerciseService = new ExerciseService();

  async getAllWorkouts() {
    const workouts = await this.collection.find().toArray();

    for (const workout of workouts) {
      workout.exercises = await this.exerciseService.getExercisesByWorkoutId(
        workout._id
      );
    }

    return workouts;
  }

  async getAllWorkoutsByUserId(userId: string) {
    const workouts = await this.collection
      .find({ userId })
      .toArray();

    for (const workout of workouts) {
      workout.exercises = await this.exerciseService.getExercisesByWorkoutId(
        workout._id
      );
    }

    return workouts;
  }

  async getWorkoutById(workoutId: ObjectId) {
    return await this.collection.findOne({
      _id: workoutId,
    });
  }

  async getMyWorkouts(userId: string) {
    const workouts = (await this.collection
      .find({})
      .toArray()) as unknown as WorkoutModel[];
    return workouts;
  }

  async createWorkout({
    name,
    duration,
    userId,
    exercises,
  }: CreateWorkoutModel) {
    const { insertedId } = await this.collection.insertOne({
      name,
      duration,
      userId,
    });

    for (const exercise of exercises) {
      await this.exerciseService.createExercise({
        ...exercise,
        workoutId: insertedId,
      });
    }

    return await this.getWorkoutById(insertedId);
  }

  // async updateWorkout(id: ObjectId, changes: UpdateWorkoutModel) {
  //   await this.collection.updateOne({ _id: id }, { $set: changes });

  //   return this.getAllWorkoutsByUserId(id);
  // }

  async deleteWorkout(workoutId: ObjectId) {
    const workout = await this.getWorkoutById(workoutId);

    await this.collection.deleteOne({ _id: workoutId });

    return workout;
  }
}

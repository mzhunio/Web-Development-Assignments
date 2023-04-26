import { ObjectId } from "mongodb";
// import { ExerciseService } from "../exercise/exercise.service";
import { database } from "../models/mongo";
import {
  CreateWorkoutModel,
  UpdateWorkoutModel,
  WorkoutModel,
} from "./workout.model";

export class WorkoutService {
  collection = database.collection("workout");
  // private exerciseService = new ExerciseService();

  async getAllWorkouts() {
    const workouts = (await this.collection
      .find()
      .toArray()) as unknown as WorkoutModel[];

    // for (const workout of workouts) {
    //   workout.exercises = await this.exerciseService.getExercisesByWorkout(
    //     workout._id
    //   );
    // }

    return workouts;
  }

  async getWorkoutById(id: string) {
    const workout = (await this.collection.findOne({
      _id: new ObjectId(id),
    })) as any;
    // workout.exercises = await this.exerciseService.getExercisesByWorkout(
    //   workout._id
    // );

    return workout;
  }

  async getMyWorkouts(userId: string) {
    const workouts = (await this.collection
      .find({ userId })
      .toArray()) as unknown as WorkoutModel[];

    // for (const workout of workouts) {
    //   workout.exercises = await this.exerciseService.getExercisesByWorkout(
    //     workout._id
    //   );
    // }

    return workouts;
  }

  async createWorkout({
    name,
    duration,
    userId,
  }: // exercises,
  CreateWorkoutModel) {
    const { insertedId } = await this.collection.insertOne({
      name,
      duration,
      userId,
    });

    // for (const exercise of exercises) {
    //   await this.exerciseService.createExercise({
    //     ...exercise,
    //     workoutId: insertedId,
    //   });
    // }

    return await this.collection.findOne({ _id: insertedId });
  }

  async updateWorkout(id: string, changes: UpdateWorkoutModel) {
    await this.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: changes }
    );

    return this.getWorkoutById(id);
  }

  async deleteWorkout(id: string) {
    const workout = await this.getWorkoutById(id);

    await this.collection.deleteOne({ _id: new ObjectId(id) });

    return workout;
  }
}

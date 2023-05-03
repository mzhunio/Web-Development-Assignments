import { ObjectId } from "mongodb";
import { ExerciseService } from "../exercise/exercise.service";
import { database } from "../models/mongo";
import { UserService } from "../user/user.service";
import { CreateWorkoutModel, WorkoutModel } from "./workout.model";

export class WorkoutService {
  collection = database.collection("workout");
  exerciseService = new ExerciseService();
  userService = new UserService();

  async getAllWorkouts() {
    const workouts = await this.collection.find().toArray();

    for (const workout of workouts) {
      workout.user = await this.userService.getUserById(
        new ObjectId(workout.userId)
      );
      workout.exercises = await this.exerciseService.getExercisesByWorkoutId(
        workout._id
      );
    }

    return workouts;
  }

  async getAllWorkoutsByUserId(userId: string) {
    const workouts = await this.collection.find({ userId }).toArray();

    for (const workout of workouts) {
      workout.user = await this.userService.getUserById(
        new ObjectId(workout.userId)
      );
      workout.exercises = await this.exerciseService.getExercisesByWorkoutId(
        workout._id
      );
    }

    return workouts;
  }

  async getWorkoutById(workoutId: ObjectId) {
    const workout = await this.collection.findOne({
      _id: workoutId,
    });

    workout!.user = await this.userService.getUserById(
      new ObjectId(workout!.userId)
    );
    workout!.exercises = await this.exerciseService.getExercisesByWorkoutId(
      workout!._id
    );

    return workout;
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

  async deleteWorkout(workoutId: ObjectId) {
    const workout = await this.getWorkoutById(workoutId);

    for (const exercise of workout!.exercises) {
      await this.exerciseService.deleteExercise(exercise._id);
    }

    await this.collection.deleteOne({ _id: workoutId });

    return workout;
  }
}

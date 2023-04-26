// import { ObjectId } from "mongodb";
// import { database } from "../models/mongo";
// import { CreateExerciseModel } from "./exercise.model";

// export class ExerciseService {
//   private collection = database.collection("exercise");

//   getExerciseById(id: string) {
//     return this.collection.findOne({ _id: new ObjectId(id) });
//   }

//   async getExercisesByWorkout(workoutId: string) {
//     return (await this.collection.find({ workoutId }).toArray()) as any;
//   }

//   async createExercise({ name, sets, reps, workoutId }: CreateExerciseModel) {
//     const { insertedId } = await this.collection.insertOne({
//       name,
//       sets,
//       reps,
//       workoutId,
//     });

//     return this.collection.findOne({ _id: insertedId });
//   }

//   async deleteExercise(exerciseId: string) {
//     const exercise = await this.getExerciseById(exerciseId);

//     await this.collection.deleteOne({ _id: new ObjectId(exerciseId) });

//     return exercise;
//   }
// }

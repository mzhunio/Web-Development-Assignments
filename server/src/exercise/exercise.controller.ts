// import { Request, Response } from "express";
// import { CreateExerciseModel, UpdateWorkoutModel } from "./exercise.model";
// import { ExerciseService } from "./exercise.service";

// export class ExerciseController {
//   private workoutService = new ExerciseService();

//   async getAllWorkouts(req: Request, res: Response) {
//     try {
//       const workouts = await this.workoutService.getAllExercises();
//       res.send(workouts);
//     } catch (err: any) {
//       const message = err.message ?? "Cannot fetch all workouts";
//       res.status(400).send({ message });
//     }
//   }

//   async getWorkout(req: Request, res: Response) {
//     const { id } = req.params;

//     try {
//       const workout = await this.workoutService.getWorkoutById(id);
//       res.send(workout);
//     } catch (err: any) {
//       const message = err.message ?? "Cannot get workout with is ${id}";
//       res.status(400).send({ message });
//     }
//   }

//   async createWorkout(req: Request, res: Response) {
//     const { name, sets: duration, userId } = req.body as CreateExerciseModel;

//     try {
//       const workout = await this.workoutService.createExercise({
//         name,
//         sets: duration,
//         userId,
//       });
//       res.send(workout);
//     } catch (err: any) {
//       const message = err.message ?? `Cannot create workout`;
//       res.status(400).send({ message });
//     }
//   }

//   async updateWorkout(req: Request, res: Response) {
//     const { id } = req.params;
//     const changes = req.body as UpdateWorkoutModel;

//     try {
//       const workout = await this.workoutService.updateWorkout(id, changes);
//       res.send(workout);
//     } catch (err: any) {
//       const message = err.message ?? `Cannot update workout with id ${id}`;

//       res.status(400).send({ message });
//     }
//   }

//   async deleteWorkout(req: Request, res: Response) {
//     const { id } = req.params;
//     await this.workoutService.getWorkoutById(id);

//     try {
//       const workout = await this.workoutService.deleteExercise(id);
//       res.send(workout);
//     } catch (err: any) {
//       const message = err.message ?? `Cannot delete workout with id ${id}`;

//       res.status(400).send({ message });
//     }
//   }
// }

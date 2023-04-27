import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { CreateWorkoutModel } from "./workout.model";
import { WorkoutService } from "./workout.service";

export class WorkoutController {
  private workoutService = new WorkoutService();

  async getAllWorkouts(req: Request, res: Response) {
    try {
      const workouts = await this.workoutService.getAllWorkouts();
      res.send(workouts);
    } catch (err: any) {
      const message = err.message ?? "Cannot fetch all workouts";
      res.status(400).send({ message });
    }
  }

  async getAllWorkoutsByUserId(req: Request, res: Response) {
    const { userId } = req.params;

    try {
      const workout = await this.workoutService.getAllWorkoutsByUserId(userId);
      res.send(workout);
    } catch (err: any) {
      const message = err.message ?? `Cannot get workout with id ${userId}`;
      res.status(400).send({ message });
    }
  }

  async createWorkout(req: Request, res: Response) {
    const { name, duration, userId, exercises } =
      req.body as CreateWorkoutModel;

    try {
      const workout = await this.workoutService.createWorkout({
        name,
        duration,
        userId,
        exercises,
      });
      res.send(workout);
    } catch (err: any) {
      const message = err.message ?? `Cannot create workout`;
      res.status(400).send({ message });
    }
  }

  // async updateWorkout(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const changes = req.body as UpdateWorkoutModel;

  //   try {
  //     const workout = await this.workoutService.updateWorkout(
  //       new ObjectId(id),
  //       changes
  //     );
  //     res.send(workout);
  //   } catch (err: any) {
  //     const message = err.message ?? `Cannot update workout with id ${id}`;

  //     res.status(400).send({ message });
  //   }
  // }

  async deleteWorkout(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const workout = await this.workoutService.deleteWorkout(new ObjectId(id));
      res.send(workout);
    } catch (err: any) {
      const message = err.message ?? `Cannot delete workout with id ${id}`;

      res.status(400).send({ message });
    }
  }
}

import { Request, Response } from "express";
import { WorkoutService } from "./workout.service";
import { CreateWorkoutModel, UpdateWorkoutModel } from "./workout.model";

export class WorkoutController {
  private workoutService = new WorkoutService();

  async getAllWorkouts(req: Request, res: Response) {
    try {
      const workouts = await this.workoutService.getWorkouts();
      res.send(workouts);
    } catch (err: any) {
      const message = err.message ?? "Cannot fetch all workouts";
      res.status(400).send({ message });
    }
  }

  async getWorkout(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const workout = await this.workoutService.getWorkout(parseInt(id, 10));
      res.send(workout);
    } catch (err: any) {
      const message = err.message ?? "Cannot get workout with is ${id}";
      res.status(400).send({ message });
    }
  }

  async createWorkout(req: Request, res: Response) {
    const { name, duration, userId } = req.body as CreateWorkoutModel;

    try {
      const workout = await this.workoutService.createWorkout({
        name,
        duration,
        userId,
      });
      res.send(workout);
    } catch (err: any) {
      const message = err.message ?? `Cannot create workout`;
      res.status(400).send({ message });
    }
  }

  async updateWorkout(req: Request, res: Response) {
    const { id } = req.params;
    const changes = req.body as UpdateWorkoutModel;

    try {
      const workout = await this.workoutService.updateWorkout(
        parseInt(id, 10),
        changes
      );
      res.send(workout);
    } catch (err: any) {
      const message = err.message ?? `Cannot update workout with id ${id}`;

      res.status(400).send({ message });
    }
  }

  async deleteWorkout(req: Request, res: Response) {
    const { id } = req.params;
    await this.workoutService.getWorkout(parseInt(id, 10));

    try {
      const workout = await this.workoutService.deleteWorkout(parseInt(id, 10));
      res.send(workout);
    } catch (err: any) {
      const message = err.message ?? `Cannot delete workout with id ${id}`;

      res.status(400).send({ message });
    }
  }
}

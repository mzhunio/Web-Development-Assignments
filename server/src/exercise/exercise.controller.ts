import { Request, Response } from "express";
import { CreateExerciseModel, UpdateExerciseModel } from "./exercise.model";
import { ExerciseService } from "./exercise.service";
import { ObjectId } from "mongodb";

export class ExerciseController {
  private exerciseService = new ExerciseService();

  async getAllExercises(req: Request, res: Response) {
    try {
      const exercises = await this.exerciseService.getAllExercises();
      res.send(exercises);
    } catch (err: any) {
      const message = err.message ?? "Cannot fetch all exercises";
      res.status(400).send({ message });
    }
  }

  async getExercise(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const exercise = await this.exerciseService.getExerciseById(
        new ObjectId(id)
      );
      res.send(exercise);
    } catch (err: any) {
      const message = err.message ?? "Cannot get exercise with is ${id}";
      res.status(400).send({ message });
    }
  }

  async createExercise(req: Request, res: Response) {
    const { name, sets, reps, workoutId } = req.body as CreateExerciseModel;

    try {
      const exercise = await this.exerciseService.createExercise({
        name,
        sets,
        reps,
        workoutId,
      });
      res.send(exercise);
    } catch (err: any) {
      const message = err.message ?? `Cannot create exercise`;
      res.status(400).send({ message });
    }
  }

  // async updateExercise(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const changes = req.body as UpdateExerciseModel;

  //   try {
  //     const exercise = await this.exerciseService.updateExercise(
  //       new ObjectId(id),
  //       changes
  //     );
  //     res.send(exercise);
  //   } catch (err: any) {
  //     const message = err.message ?? `Cannot update exercise with id ${id}`;

  //     res.status(400).send({ message });
  //   }
  // }

  async deleteWorkout(req: Request, res: Response) {
    const { id } = req.params;
    await this.exerciseService.getExerciseById(new ObjectId(id));

    try {
      const exercise = await this.exerciseService.deleteExercise(
        new ObjectId(id)
      );
      res.send(exercise);
    } catch (err: any) {
      const message = err.message ?? `Cannot delete exercise with id ${id}`;

      res.status(400).send({ message });
    }
  }
}

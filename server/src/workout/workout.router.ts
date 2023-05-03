import { Router } from "express";
import { requiresAuth } from "../auth/auth.service";
import { WorkoutController } from "./workout.controller";

const workoutRouter = Router();
const workoutController = new WorkoutController();

workoutRouter.get(
  "/workout",
  // @ts-ignore
  requiresAuth,
  workoutController.getAllWorkouts.bind(workoutController)
);
workoutRouter.get(
  "/workout/:userId",
  workoutController.getAllWorkoutsByUserId.bind(workoutController)
);
workoutRouter.post(
  "/workout/",
  workoutController.createWorkout.bind(workoutController)
);
workoutRouter.delete(
  "/workout/:id",
  workoutController.deleteWorkout.bind(workoutController)
);

export { workoutRouter };

import { Router } from "express";
import { WorkoutController } from "./workout.controller";

const workoutRouter = Router();
const workoutController = new WorkoutController();

workoutRouter.get("/workout", workoutController.getAllWorkouts.bind(workoutController));
workoutRouter.get("/workout/:userId", workoutController.getAllWorkoutsByUserId.bind(workoutController));
workoutRouter.post("/workout/", workoutController.createWorkout.bind(workoutController));
// workoutRouter.patch("/workout/:id", workoutController.updateWorkout.bind(workoutController));
workoutRouter.delete("/workout/:id", workoutController.deleteWorkout.bind(workoutController));

export { workoutRouter };
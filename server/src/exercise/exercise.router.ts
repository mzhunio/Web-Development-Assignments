import { Router } from "express";
import { ExerciseController } from "./exercise.controller";

const exerciseRouter = Router();
const exerciseController = new ExerciseController();

exerciseRouter.get("/exercise", exerciseController.getAllExercises.bind(exerciseController));
exerciseRouter.post("/exercise/", exerciseController.createExercise.bind(exerciseController));

export { exerciseRouter };
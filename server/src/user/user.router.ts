import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();
const userController = new UserController();

router.get("/user", userController.getAllUsers.bind(userController));
router.get("/user/:id", userController.getUser.bind(userController));
router.get(
  "/user/:id/workouts",
  userController.getUserWorkouts.bind(userController)
);
router.post("/user", userController.createUser.bind(userController));
router.patch("/user/:id", userController.updateUser.bind(userController));
router.delete("/user/:id", userController.deleteUser.bind(userController));

export const userRouter = router;

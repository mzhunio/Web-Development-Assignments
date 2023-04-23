import { Request, Response } from "express";
import { CreateUserModel, UpdateUserModel } from "./user.model";
import { UserService } from "./user.service";

export class UserController {
  
  // private userService = new UserService();

  // async getAllUsers(req: Request, res: Response) {
  //   try {
  //     const users = await this.userService.getUsers();
  //     res.send(users);
  //   } catch (err: any) {
  //     const message = err.message ?? `Cannot fetch all users`;
  //     res.status(400).send({ message });
  //   }
  // }

  // async getUser(req: Request, res: Response) {
  //   const { id } = req.params;

  //   try {
  //     const user = await this.userService.getUser(parseInt(id, 10));
  //     res.send(user);
  //   } catch (err: any) {
  //     const message = err.message ?? `Cannot get user with id ${id}`;
  //     res.status(400).send({ message });
  //   }
  // }

  // async getUserWorkouts(req: Request, res: Response) {
  //   const { id } = req.params;

  //   try {
  //     const userWorkouts = await this.userService.getUserWorkouts(
  //       parseInt(id, 10)
  //     );

  //     res.send(userWorkouts);
  //   } catch (err: any) {
  //     const message = err.message ?? `Cannot get user workouts with id ${id}`;
  //     res.status(400).send({ message });
  //   }
  // }

  // async createUser(req: Request, res: Response) {
  //   const { username, email, password, isAdmin } = req.body as CreateUserModel;

  //   try {
  //     const user = await this.userService.createUser({
  //       username,
  //       email,
  //       password,
  //       isAdmin,
  //     });
  //     res.send(user);
  //   } catch (err: any) {
  //     const message = err.message ?? `Cannot create user`;
  //     res.status(400).send({ message });
  //   }
  // }

  // async updateUser(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const changes = req.body as UpdateUserModel;

  //   try {
  //     const user = await this.userService.updateUser(parseInt(id, 10), changes);
  //     res.send(user);
  //   } catch (err: any) {
  //     const message = err.message ?? `Cannot update user with id ${id}`;

  //     res.status(400).send({ message });
  //   }
  // }

  // async deleteUser(req: Request, res: Response) {
  //   const { id } = req.params;
  //   await this.userService.getUser(parseInt(id, 10));

  //   try {
  //     const user = await this.userService.deleteUser(parseInt(id, 10));
  //     res.send(user);
  //   } catch (err: any) {
  //     const message = err.message ?? `Cannot delete user with id ${id}`;

  //     res.status(400).send({ message });
  //   }
  // }
}

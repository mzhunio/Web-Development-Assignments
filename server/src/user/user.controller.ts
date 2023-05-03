import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { CreateUserModel, UpdateUserModel } from "./user.model";
import { UserService } from "./user.service";

export class UserController {
  private userService = new UserService();

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.getAllUsers();
      res.send(users);
    } catch (err: any) {
      const message = err.message ?? `Cannot fetch all users`;
      res.status(400).send({ message });
    }
  }

  async getUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await this.userService.getUserById(new ObjectId(id));
      res.send(user);
    } catch (err: any) {
      const message = err.message ?? `Cannot get user with id ${id}`;
      res.status(400).send({ message });
    }
  }

  async getUserWorkouts(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const userWorkouts = await this.userService.getUserWorkouts(
        new ObjectId(id)
      );

      res.send(userWorkouts);
    } catch (err: any) {
      const message = err.message ?? `Cannot get user workouts with id ${id}`;
      res.status(400).send({ message });
    }
  }

  async createUser(req: Request, res: Response) {
    const { username, email, password, isAdmin, lastActive } =
      req.body as CreateUserModel;

    try {
      const user = await this.userService.createUser({
        username,
        email,
        password,
        isAdmin,
        lastActive,
      });
      res.send(user);
    } catch (err: any) {
      const message = err.message ?? `Cannot create user`;
      res.status(400).send({ message });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const changes = req.body as UpdateUserModel;

    try {
      const user = await this.userService.updateUser(new ObjectId(id), changes);
      res.send(user);
    } catch (err: any) {
      const message = err.message ?? `Cannot update user with id ${id}`;

      res.status(400).send({ message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await this.userService.getUserById(new ObjectId(id));

    try {
      const user = await this.userService.deleteUser(new ObjectId(id));
      res.send(user);
    } catch (err: any) {
      const message = err.message ?? `Cannot delete user with id ${id}`;

      res.status(400).send({ message });
    }
  }
}

import { ObjectId } from "mongodb";
import { database } from "../models/mongo";
import { UserModel } from "../user/user.model";
import { UserService } from "../user/user.service";

export class AuthService {
  private collection = database.collection<UserModel>("user");
  private userService = new UserService();

  async login(username: string, password: string) {
    const user = await this.userService.getUserByUserNameAndPassword(
      username,
      password
    );

    if (!user) {
      throw new Error("Could not authenticate user");
    }

    await this.updateLastActive(user._id);

    return await this.userService.getUserById(user._id);
  }

  async logout(userId: ObjectId) {
    await this.updateLastActive(userId);

    return await this.userService.getUserById(userId);
  }

  async updateLastActive(userId: ObjectId) {
    const lastActive = new Date().toISOString();

    await this.collection.updateOne(
      { _id: new ObjectId(userId) },
      { $set: { lastActive } }
    );
  }
}

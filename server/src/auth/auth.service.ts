import { UserModel } from "../user/user.model";
import { database } from "../models/mongo";
import { LoginModel } from "./auth.model";
import { ObjectId } from "mongodb";

export class AuthService {
  private collection = database.collection("user");

  login(loginModel: LoginModel): Promise<UserModel> {
    return this.findUserByUserNameAndPassword(loginModel);
  }

  async updateLastActive(userId: number) {
    const lastActive = new Date();

    await this.collection.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      lastActive.toISOString
    );
  }

  private async findUserByUserNameAndPassword({
    username,
    password,
  }: LoginModel): Promise<UserModel> {
    const [users] = await this.collection
      .find({ username, password })
      .toArray();
    const [user] = users as any;

    if (!user) {
      throw new Error("Could not authenticate user");
    }

    return user;
  }
}

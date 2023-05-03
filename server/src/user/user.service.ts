import { ObjectId } from "mongodb";
import { database } from "../models/mongo";
import { CreateUserModel, UpdateUserModel, UserModel } from "./user.model";

export class UserService {
  collection = database.collection<UserModel>("user");

  getAllUsers() {
    return this.collection.find().toArray();
  }

  getUserById(id: ObjectId) {
    return this.collection.findOne({ _id: id });
  }

  async getUserByUserNameAndPassword(username: string, password: string) {
    return await this.collection.findOne({ username, password });
  }

  async getUserWorkouts(userId: ObjectId) {
    const user: any = await this.getUserById(userId);

    user.workouts = this.collection.find({ userId }).toArray();

    return user;
  }

  async createUser({
    username,
    email,
    password,
    isAdmin,
    lastActive,
  }: CreateUserModel) {
    const isUserByUsernameFound = await this.collection.findOne({ username });
    const isUserByEmailFound = await this.collection.findOne({ email });
    if (isUserByEmailFound || isUserByUsernameFound) {
      throw new Error("Could not create duplicate user");
    }

    const { insertedId } = await this.collection.insertOne({
      username,
      email,
      password,
      isAdmin,
      lastActive: new Date().toISOString(),
    });

    return await this.collection.findOne({ _id: insertedId });
  }

  async updateUser(id: ObjectId, changes: UpdateUserModel) {
    await this.collection.updateOne({ _id: id }, { $set: changes });

    return this.getUserById(id);
  }

  async deleteUser(id: ObjectId) {
    const user = this.getUserById(id);

    await this.collection.deleteOne({ _id: id });

    return user;
  }
}

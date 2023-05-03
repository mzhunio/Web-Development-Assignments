import { NextFunction, Request, Response } from "express";
import { SignOptions, sign, verify } from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { database } from "../models/mongo";
import { UserModel } from "../user/user.model";
import { UserService } from "../user/user.service";

export class AuthService {
  private collection = database.collection<UserModel>("user");
  private userService = new UserService();

  async login(username: string, password: string) {
    const isUserFound = await this.userService.getUserByUserNameAndPassword(
      username,
      password
    );

    if (!isUserFound) {
      throw new Error("Could not authenticate user");
    }

    await this.updateLastActive(isUserFound._id);

    const user = await this.userService.getUserById(isUserFound._id);
    const userWithoutPassword = { ...user, password: undefined };
    const token = await encodeToken(userWithoutPassword, {
      expiresIn: "1d",
    });

    return { ...userWithoutPassword, token };
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

export function encodeToken(
  data: string | object | Buffer,
  signOptions: SignOptions
): Promise<string> {
  const secretOrPrivateKey = process.env.JWT_SECRET ?? "";

  return new Promise((resolve, reject) => {
    sign(data, secretOrPrivateKey, signOptions, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token as string);
      }
    });
  });
}

export function decodeToken(token: string) {
  return new Promise((resolve, reject) => {
    verify(token, process.env.JWT_SECRET ?? "", (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
}

export async function requiresAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = await getHeaderAuthToken(req);
  if (!authToken) {
    return res.status(400).send({
      message: "You must be authenticated to access this resource",
    });
  }

  next();
}

export async function getHeaderAuthToken(req: Request) {
  const token = req.get("Authorization")?.split(" ")[1];

  if (!token) {
    return null;
  }

  try {
    return await decodeToken(token);
  } catch (error) {
    return null;
  }
}

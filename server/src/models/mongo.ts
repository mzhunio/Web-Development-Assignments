import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URL ?? "";

export const client = new MongoClient(uri);
export const database = client.db("fitness");

console.log("✅ MongoDB connected!");

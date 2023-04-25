import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://mzhunio:123password@cluster0.8rysnbi.mongodb.net/?retryWrites=true&w=majority";

export const client = new MongoClient(uri);
export const database = client.db("fitness");

console.log("✅ MongoDB connected!");

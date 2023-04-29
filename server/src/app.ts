require("dotenv").config();
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { authRouter } from "./auth/auth.router";
import "./models/mongo";
import { userRouter } from "./user/user.router";
import { workoutRouter } from "./workout/workout.router";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Fitness API");
});

app.use(authRouter);
app.use(userRouter);
app.use(workoutRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Server running on PORT ${port}`));

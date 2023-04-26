import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import "./models/mongo";
import { userRouter } from "./user/user.router";
import { workoutRouter } from "./workout/workout.router";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Fitness API");
});


app.use(userRouter);
app.use(workoutRouter);
// app.use(exerciseRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Server running on PORT ${port}`));

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { userRouter } from "./user/user.router";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Fitness API");
});

app.use(userRouter);
// app.user(workoutRouter);
// app.use(exerciseRouter);

const port = 3000;
const server = app.listen(port, () =>
  console.log(`✅ Server running on http://localhost:${port}`)
);

export const closeServer = () =>
  new Promise((resolve) => server.close(resolve));

export { app };

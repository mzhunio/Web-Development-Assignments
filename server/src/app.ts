import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { userRouter } from "./user/user.router";

async function startServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  app.get("/", (req, res) => {
    res.send("Welcome to the Fitness API");
  });

  app.use(userRouter);

  const port = 3000;
  app.listen(port, () =>
    console.log(`✅ Server running on http://localhost:${port}`)
  );
}

startServer();

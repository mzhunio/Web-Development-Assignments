const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

let workouts = [];

app.get("/api/v1/", (req, res) => {
  res.send("Hello World From Express");
});

app.get("/api/v1/workouts", (req, res) => {
  res.json(workouts);
});

app.post("/api/v1/workouts", (req, res) => {
  const { workoutName } = req.body;
  const newExercise = {
    id: workouts.length + 1,
    workoutName: workoutName,
  };

  workouts.push(newExercise);
  res.json(newExercise);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


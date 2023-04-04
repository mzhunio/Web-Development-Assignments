const express = require("express");
const app = express();
require("dotenv").config();
// const exercisesController = require("./routes/exercises.router");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/v1/", (req, res) => {
  res.send("Hello World From Express");
});
// .use("/api/v1/exercises", exercisesController);

app.get("/workout/:id", (req, res) => {
  const workout = [
    { workoutName: "Leg" },
    { workoutName: "Arm" },
    { workoutName: "Back" },
  ];

  res.send(workout);
});

app.listen(PORT, () => {
  console.log("Server is Running...");
});

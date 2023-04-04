const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

let workouts = [];

app.get("/workouts", (req, res) => {
    res.json(products);
});


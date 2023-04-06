const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2/promise");

// 1. async await
async function startServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  const connection = await mysql.createConnection({
    socketPath: "/tmp/mysql.sock",
    user: "root",
    password: "",
    database: "fitness",
  });

  app.get("/", (req, res) => {
    res.send("Welcome to the Fitness API");
  });

  //User GET, POST, PUT, DELETE & Functions
  async function getUser(id) {
    const [rows] = await connection.execute("SELECT * FROM User WHERE id = ?", [
      id,
    ]);
    return rows[0];
  }

  // TODO: Add this to POST /user
  async function createUser(username, email, password, isAdmin) {
    const [result] = await connection.execute(
      `INSERT INTO User (username, email, password, isAdmin) VALUES (?, ?, ?, ?);`,
      [username, email, password, isAdmin]
    );

    const [rows] = await connection.execute(`SELECT * FROM User WHERE id = ?`, [
      result.insertId,
    ]);

    return rows[0];
  }

  // TODO: Add this to UPDATE /user/:id
  async function updateUser(id, password, isAdmin) {
    await connection.execute(
      "UPDATE User SET password = ?, isAdmin = ? WHERE id = ?;",
      [password, isAdmin, id]
    );

    const [rows] = await connection.execute("SELECT * FROM User WHERE id = ?", [
      id,
    ]);

    return rows[0];
  }

  // TODO: Add this to DELETE /user/:id
  async function deleteUser(id) {
    // TODO: Add functionality to delete user from database
    const [rows] = await connection.execute("DELETE FROM User WHERE id = ?", [
      id,
    ]);
    return rows[0];
  }

  app.get("/user/:id", async (req, res) => {
    try {
      const { id } = req.params;

      // TODO: See how this it is?
      const user = await getUser(id);
      res.send(user);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.get("/user", async (req, res) => {
    try {
      const [rows] = await connection.execute("SELECT * FROM User;");
      res.send(rows);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.post("/user", async (req, res) => {
    const { username, email, password, isAdmin } = req.body;

    try {
      const user = await createUser(username, email, password, isAdmin);
      res.send(user);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.put("/user/:id", async (req, res) => {
    const { id } = req.params;
    // 2. object destructuring
    const { password, isAdmin } = req.body;

    try {
      const user = await updateUser(id, password, isAdmin);
      res.send(user);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;
    await getUser(id);

    try {
      const user = await deleteUser(id);
      res.send(user);
    } catch (err) {
      res.status(400).send({
        message: `Cannot delete user with id ${id}`,
      });
    }
  });

  //Exercise GET, POST, PUT, DELETE & Functions
  async function getExercise() {
    const [rows] = await connection.execute(
      "SELECT * FROM Exercise WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  async function createExercise(exerciseName, sets, repetitions) {
    const [result] = await connection.execute(
      `INSERT INTO Exercise (exerciseName, sets, repetitions) VALUES (?, ?, ?);`,
      [exerciseName, sets, repetitions]
    );

    const [rows] = await connection.execute(
      `SELECT * FROM Exercise WHERE id = ?`,
      [result.insertId]
    );

    return rows[0];
  }

  async function updateExercise(id, exerciseName, sets, repetitions) {
    await connection.execute(
      "UPDATE Exercise SET exerciseName = ?, sets = ?, repetitions = ? WHERE id = ?;",
      [exerciseName, sets, repetitions, id]
    );

    const [rows] = await connection.execute(
      "SELECT * FROM Exercise WHERE id = ?",
      [id]
    );

    return rows[0];
  }

  async function deleteExercise(id) {
    const [rows] = await connection.execute(
      "DELETE FROM Exercise WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  app.get("/exercise/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const exercise = await getExercise(id);
      res.send(exercise);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.get("/exercise", async (req, res) => {
    try {
      const [rows] = await connection.execute("SELECT * FROM Exercise;");
      res.send(rows);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.post("/exercise", async (req, res) => {
    const { exerciseName, sets, repetitions } = req.body;

    try {
      const exercise = await createExercise(exerciseName, sets, repetitions);
      res.send(exercise);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.put("/exercise/:id", async (req, res) => {
    const { id } = req.params;
    const { exerciseName, sets, repetitions } = req.body;

    try {
      const exercise = await updateExercise(
        id,
        exerciseName,
        sets,
        repetitions
      );
      res.send(exercise);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.delete("/exercise/:id", async (req, res) => {
    const { id } = req.params;
    await getExercise(id);

    try {
      const exercise = await deleteExercise(id);
      res.send(exercise);
    } catch (err) {
      res.status(400).send({
        message: `Cannot delete user with id ${id}`,
      });
    }
  });

  //Workout GET, POST, PUT, DELETE & Functions
  async function getWorkout() {
    const [rows] = await connection.execute(
      "SELECT * FROM Workout WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  async function createWorkout(name, duration) {
    const [result] = await connection.execute(
      `INSERT INTO Workout (name, duration) VALUES (?, ?);`,
      [name, duration]
    );

    const [rows] = await connection.execute(
      `SELECT * FROM Workout WHERE id = ?`,
      [result.insertId]
    );

    return rows[0];
  }

  async function updateWorkout(id, name, duration) {
    await connection.execute(
      "UPDATE Workout SET name = ?, duration = ? WHERE id = ?;",
      [name, duration, id]
    );

    const [rows] = await connection.execute(
      "SELECT * FROM Workout WHERE id = ?",
      [id]
    );

    return rows[0];
  }

  async function deleteWorkout(id) {
    const [rows] = await connection.execute(
      "DELETE FROM Workout WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  app.get("/workout/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const workout = await getWorkout(id);
      res.send(workout);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.get("/workout", async (req, res) => {
    try {
      const [rows] = await connection.execute("SELECT * FROM Workout;");
      res.send(rows);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.post("/workout", async (req, res) => {
    const { name, duration } = req.body;

    try {
      const workout = await createWorkout(name, duration);
      res.send(workout);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.put("/workout/:id", async (req, res) => {
    const { id } = req.params;
    const { name, duration } = req.body;

    try {
      const workout = await updateWorkout(id, name, duration);
      res.send(workout);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.delete("/workout/:id", async (req, res) => {
    const { id } = req.params;
    await deleteWorkout(id);

    try {
      const workout = await deleteExercise(id);
      res.send(workout);
    } catch (err) {
      res.status(400).send({
        message: `Cannot delete user with id ${id}`,
      });
    }
  });

  const port = 3000;
  app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
  });
}

startServer();

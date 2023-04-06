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

    const [result] = await connection.execute(
      `INSERT INTO User (username, email, password, isAdmin) VALUES (?, ?, ?, ?);`,
      [username, email, password, isAdmin]
    );

    const [rows] = await connection.execute(`SELECT * FROM User WHERE id = ?`, [
      result.insertId,
    ]);
    const [user] = rows;

    res.send(user);
  });

  app.put("/user/:id", async (req, res) => {
    const { id } = req.params;
    // 2. object destructuring
    const { password, isAdmin } = req.body;

    try {
      await connection.execute(
        "UPDATE User SET password = ?, isAdmin = ? WHERE id = ?;",
        [password, isAdmin, id]
      );

      const [rows] = await connection.execute(
        "SELECT * FROM User WHERE id = ?",
        [id]
      );
      // 3. object destructuring
      const [user] = rows;

      res.send(user);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;

    const [rows] = await connection.execute("SELECT * FROM User WHERE id = ?", [
      id,
    ]);
    const [user] = rows;

    if (user) {
      await connection.execute("DELETE FROM User WHERE id = ?", [id]);

      res.send(user);
    } else {
      res.status(400).send({
        message: `Cannot delete user with id ${id}`,
      });
    }

    res.send(result);
  });

  const port = 3000;
  app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
  });
}

startServer();

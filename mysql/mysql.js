const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "minecraft_trade_page",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

connection.query("SELECT * FROM users", (err, results, fields) => {
  if (err) throw err;
  console.log("The users are: ", results);
});

connection.end();

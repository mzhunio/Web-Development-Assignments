import mysql, { Pool, PoolOptions } from "mysql2/promise";

const poolOptions: PoolOptions = {
  socketPath: "/tmp/mysql.sock",
  user: "root",
  password: "",
  database: "fitness",
  connectionLimit: 10,
};

export const pool: Pool = mysql.createPool(poolOptions);

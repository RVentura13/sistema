import mysql from "mysql2";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Ventur@1989",
  database: "sistema",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

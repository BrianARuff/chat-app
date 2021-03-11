require("dotenv").config();
const mysql = require("mysql");

let database;

if (process.env.NODE_ENV === "production") {
  database = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
  database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "CHAT_APP",
  });
}

database.connect();

module.exports = database;

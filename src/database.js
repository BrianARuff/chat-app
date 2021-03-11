require("dotenv").config();
const mysql = require("mysql");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "CHAT_APP",
});

database.connect();

module.exports = database;

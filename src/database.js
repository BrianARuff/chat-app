require("dotenv").config();
const { Client } = require("pg");
var bcrypt = require("bcryptjs");

let database;

if (process.env.NODE_ENV === "production") {
  database = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  database = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "chat_app",
  });
}

database.connect();

module.exports = database;

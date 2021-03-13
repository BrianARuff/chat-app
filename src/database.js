require("dotenv").config()
const { Client } = require("pg");

let database;

console.log(process.env.PG_PORT);

if (process.env.NODE_ENV === "production") {
  database = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  database = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  });
}

database.connect();

module.exports = database;

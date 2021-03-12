import db from "../../../database";
import bcrypt from "bcryptjs";

export default (req, res) => {
  if (req.method === "GET") {
    db.query("SELECT * FROM users").then(({ rows }) => res.status(200).json({ users: rows })).catch(err => res.status(500).json(err));
  } else if (req.method === "POST") {
    const { username, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 12);
    db.query("INSERT INTO users (username, password) VALUES ($1, $2)" +
      " RETURNING *", [username, passwordHash])
      .then(table => res.status(200).json(table.rows))
      .catch(err => res.status(500).json(err));
  }
};

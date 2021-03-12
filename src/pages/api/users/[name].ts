import db from "../../../database";

export default (req, res) => {
  if (req.method === "GET") {
    const { name } = req.query;
    db.query(`SELECT * FROM users WHERE username = $1`, [name]).then(t => res.json({ user: t.rows }));
  } else if (req.method === "PATCH") {
    const { username } = req.body;
    console.log(req.query);
    db.query("UPDATE users SET username = $1 WHERE username = $2 RETURNING" +
      " *;", [username, req.query.name])
      .then(table => res.status(200).json(table.rows))
      .catch(err => res.status(500).json(err));
  } else if (req.method === "DELETE") {
    db.query("DELETE FROM users WHERE username = $1 RETURNING *;", [req.query.name])
      .then(table => res.status(200).json(table.rows))
      .catch(err => res.status(500).json(err));
  }
};

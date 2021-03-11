import db from "../../database";

export default (req, res) => {
  if (req.method === "GET") {
    db.query("SELECT username FROM users", (err, results) => {
      if (err) {
        res.status(500).json(err);
      }
      res.status(200).json(results)
    });
  } else if (req.method === "POST") {
    const { username, password } = req.body;
    db.query(`INSERT INTO users (username, password) VALUES ('${username}', SHA2('${password}', 512));`, (err, results) => {
      if (err) {
        throw new Error(err);
      }
      console.log(results);
    });
  }
};

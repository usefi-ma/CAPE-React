import mysql from "mysql2/promise";
import bcrypt from "bcrypt";

const pool = mysql.createPool({
  host: "localhost",
  user: "Cape",
  password: "Mendoza89",
  database: "cape",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default class User {
  static async GetAll(req, res) {
    try {
      const [rows, fields] = await pool.execute("SELECT * FROM user");
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  static async Add(req, res) {
    //Parameters expected
    const { FullName, Email, Pwd } = req.body;

    if (!FullName || !Email || !Pwd) {
      return res.status(400).send("Please ensure you have added all fields");
    }
    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      // const salt = await bcrypt.genSalt();
      const hashPwd = await bcrypt.hash(Pwd, 10);
      // console.log(salt);
      // console.log(hashPwd);
      const [result] = await conn.execute(
        "INSERT INTO user (FullName, Email, Password) VALUES(?, ?, ?)",
        [FullName, Email, hashPwd]
      );
      const [row] = await conn.execute("Select * FROM user WHERE Id = ?", [
        result.insertId,
      ]);
      await conn.commit();
      conn.release();
      res.json(row[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  static async Login(req, res) {
    const { Email, Pwd } = req.body;

    try {
      const conn = await pool.getConnection();
      const [result] = await conn.execute(
        "SELECT * FROM user WHERE Email = ?",
        [Email]
      );
      conn.release();
      if (result.length === 0) {
        return res.send("User not found!");
      }

      const user = result[0];

      if (await bcrypt.compare(Pwd, user.Password)) {
        const { FullName, Email } = user;
        console.log(user);
        res.json({ FullName, Email });
        // res.send('Success')
      } else {
        res.send("Failure");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }


  static async countUser(req, res){
    try {
      const [row] = await pool.execute("Select COUNT(Id) FROM user");
      return res.json(row[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }
  



}

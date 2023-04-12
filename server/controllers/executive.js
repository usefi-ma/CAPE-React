import mysql from "mysql2/promise";
const pool = mysql.createPool({
  host: "localhost",
  user: "Cape",
  password: "Mendoza89",
  database: "cape",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
export default class Executive {
  //every middleware which is related to executives, write here

  static async GetAll(req, res) {
    try {
      const [rows, fields] = await pool.execute("SELECT * FROM executive");
      return res.json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  static async AddOne(req, res) {
    //Parameters expected
    const { FullName, JobTitle, Organization, Description } = req.body;
    if (!FullName || !JobTitle || !Organization || !Description) {
      return res.status(400).send("Please ensure you have added all fields");
    }
    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "INSERT INTO executive (FullName, JobTitle, Organization, Description) VALUES(?, ?, ?, ?)",
        [FullName, JobTitle, Organization, Description]
      );
      const [row] = await conn.execute("Select * FROM executive WHERE id = ?", [
        result.insertId,
      ]);
      await conn.commit();
      conn.release();
      return res.json(row[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  
  static async UpdateOne(req, res) {
    const { FullName, JobTitle, Organization, Description } = req.body;
    if (!FullName || !JobTitle || !Organization || !Description) {
      return res.status(400).send("Please ensure you have added all fields");
    }
    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "UPDATE executive SET `FullName`=?, `JobTitle`=?,`Organization`=?,`Description`=? WHERE Id=?",[FullName, JobTitle, Organization, Description,req.params.Id]
      );
      const [row] = await conn.execute("Select * FROM executive WHERE id = ?", [
        req.params.Id
      ]);
      console.log([result]);
      await conn.commit();
      conn.release();
      return res.json(row[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
 
  }

  static async DeleteOne(req, res) {
   
    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "DELETE FROM executive WHERE Id=?",[req.params.Id]
      );
      await conn.commit();
      conn.release();
      return res.send(result);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

}

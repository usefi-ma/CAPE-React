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

export default class Banner {
  static async Get(req, res) {

    try {
      const [rows, fields] = await pool.execute("SELECT * FROM banner");
     return res.json(rows);

    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  static async Add(req, res) {
    //Parameters expected
    const { BannerTitle, EventTitle, Date, Description } = req.body;
    if (!BannerTitle || !EventTitle || !Date || !Description) {
      return res.status(400).send("Please ensure you have added all fields");
    }
    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "UPDATE banner SET BannerTitle=?, EventTitle=?, Date=?, Description=? WHERE Id = 1",
        [BannerTitle, EventTitle, Date, Description]
      );
      const [row] = await conn.execute("Select * FROM banner WHERE Id = 1");
       
      await conn.commit();
      conn.release();
     
      return res.json(row[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }
}

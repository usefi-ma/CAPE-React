import mysql from "mysql2/promise";
import multer from "multer";

const pool = mysql.createPool({
  host: "localhost",
  user: "Cape",
  password: "Mendoza89",
  database: "cape",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/executive");
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    callback(null, `image-${Date.now()}.${ext}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only image is Allowed.."));
  }
};

const upload = multer({
  storage: multerConfig,
  fileFilter: isImage,
});

export const uploadImage = upload.single("Image");

export default class Executive {
  //every middleware which is related to executives, write here
  static async Get(req, res) {
    try {
      const [row] = await pool.execute("Select * FROM executive WHERE Id = ?", [
        req.params.Id,
      ]);
      return res.json(row[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }
  static async GetAll(req, res) {
    try {
      const [rows, fields] = await pool.execute("SELECT * FROM executive");
      return res.json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  static async Add(req, res) {
    //Parameters expected
    
    const { FullName, JobTitle, Organization, Description } = req.body;
    const Image="EmptyUser.jpg";
    if (req.file != undefined) {
      Image = req.file.filename;
    } 

    if (!FullName || !JobTitle || !Organization || !Description) {
      return res.status(400).send("Please ensure you have added all fields");
    }
    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "INSERT INTO executive (FullName, JobTitle, Organization, Description,Image) VALUES(?, ?, ?, ?,?)",
        [FullName, JobTitle, Organization, Description, Image]
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

  static async Update(req, res) {
    const { FullName, JobTitle, Organization, Description } = req.body;
    const Image="EmptyUser.jpg";
    if (req.file != undefined) {
      Image = req.file.filename;
    } 

    if (!FullName || !JobTitle || !Organization || !Description) {
      return res.status(400).send("Please ensure you have added all fields");
    }
    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "UPDATE executive SET `FullName`=?, `JobTitle`=?,`Organization`=?,`Description`=?, `Image`=? WHERE Id=?",
        [FullName, JobTitle, Organization, Description, Image, req.params.Id]
      );
      const [row] = await conn.execute("Select * FROM executive WHERE Id = ?", [
        req.params.Id,
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

  static async Delete(req, res) {
    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute("DELETE FROM executive WHERE Id=?", [
        req.params.Id,
      ]);
      await conn.commit();
      conn.release();
      return res.send(result);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }
}

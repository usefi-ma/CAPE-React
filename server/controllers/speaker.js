import mysql from "mysql2/promise";
import multer from "multer";
import { v4 as uuidv4, v4 } from "uuid";

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
    callback(null, "public/sponsor");
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    callback(null, `image-${uuidv4()}.${ext}`);

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

export default class Speaker {
  static async Get(req, res) {
    try {
      const [rows] = await pool.execute("Select * FROM speaker WHERE ConferenceId = ?", [
        req.params.Id,
      ]);
      return res.json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  static async GetAll(req, res) {
    try {
      const [rows, fields] = await pool.execute("SELECT * FROM speaker");
      return res.json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  static async Add(req, res) {
    console.log("Attempting to Update one Speaker");

    const { ConferenceId, FullName, Organization } = req.body;
    let Image = "EmptyUser.jpg";
    try{
      Image = req.file.filename;
    }catch(error){
      Image = "EmptyUser.jpg";
      console.log("error from catch"+error)
    }

 
    try {
        const conn = await pool.getConnection();
        await conn.beginTransaction();
        const [result] = await conn.execute(
            "INSERT INTO speaker (FullName, Organization, Image, ConferenceId) VALUES(?, ?, ?, ?)",
            [FullName, Organization, Image, ConferenceId]
          );
          const [row] = await conn.execute(
            "SELECT * FROM speaker WHERE Id = ?",
            [result.insertId]
          );
  
          await conn.commit();
          conn.release();
          return res.json(row[0]);
        } catch (error) {
          console.error(error);
          return res.status(500).send("Internal Server Error");
        }
  }



  static async Update(req, res) {
    const { ConferenceId, FullName, Organization } = req.body;
    let Image = "EmptyUser.jpg";
    try{
      Image = req.file.filename;
    }catch(error){
      Image = "EmptyUser.jpg";
      console.log("error from catch"+error)
    }

    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "UPDATE speaker SET `FullName`=?, `Organization`=?,`ConferenceId`=?, `Image`=? WHERE Id=?",
        [FullName, Organization, ConferenceId, Image, req.params.Id]
      );
      const [row] = await conn.execute("Select * FROM speaker WHERE Id = ?", [
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
      const [result] = await conn.execute("DELETE FROM speaker WHERE Id=?", [
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

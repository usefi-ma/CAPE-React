import mysql from "mysql2/promise";
import multer from "multer";
import { v4 as uuidv4, v4 } from "uuid";
//import ConferenceDetail from "../../cape-educator/src/user-pages/ConferenceDetail";

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
    callback(null, "public/contactbook");
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



export default class Contactbook {
  // ! Assumes database table is named 'contacts'

  // Get single contact
  static async Get(req, res) {
    try {
      const [row] = await pool.execute("Select * FROM contacts WHERE Id = ?", [
        req.params.Id,
      ]);
      return res.json(row[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  // Get all contacts for list
  static async GetAll(req, res) {
    try {
      const [rows, fields] = await pool.execute("SELECT * FROM contacts");
      return res.json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  // Add new contact from dashboard
  static async Add(req, res) {
    console.log("Attempting to add");
    const { FullName, TitleRank, Email } = req.body;
    
    if (!FullName || !TitleRank || !Email) {
      return res.status(400).send("Please ensure you have added all fields");
    }
    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "INSERT INTO contacts (FullName, TitleRank, Email) VALUES(?, ?, ?)",
        [FullName, TitleRank, Email]
      );

      const [row] = await conn.execute(
        "SELECT * FROM contacts WHERE id = ?",
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
    const { FullName, Email, TitleRank } = req.body;

    if (!FullName || !Email || !TitleRank) {
      return res.status(400).send("Please ensure you have added all fields");
    }

    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "UPDATE contacts SET `FullName`=?, `Email`=?,`TitleRank`=? WHERE Id=?",
        [FullName, Email, TitleRank, req.params.Id]
      );
      const [row] = await conn.execute(
        "Select * FROM contacts WHERE Id = ?",
        [req.params.Id]
      );
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
      const [result] = await conn.execute("DELETE FROM contacts WHERE Id=?", [
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

  
//count
static async countConference(req, res){
  try {
    const [row] = await pool.execute("Select COUNT(Id) FROM contacts");
    return res.json(row[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
}

}

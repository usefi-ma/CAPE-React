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
    callback(null, "public/research");
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

export default class Research {
  static async GetAll(req, res) {
    try {
      const [rows, fields] = await pool.execute("SELECT * FROM research");
      return res.json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  static async Get(req, res) {
    try {
      const [row, fields] = await pool.execute("SELECT * FROM research");
      return res.json(row[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  static async Add(req, res) {
    //Parameters expected
    const { Title, Description, Link  } = req.body;

    let Image = "EmptyConference.jpg";
    try {
      Image = req.file.filename;
    } catch (error) {
      Image = "EmptyConference.png";
      console.log("error from catch" + error);
    }

    if (!Title || !Description || !Link ) {
      return res.status(400).send("Please ensure you have added all fields");
    }
 
    try {
        const conn = await pool.getConnection();
        await conn.beginTransaction();
        const [result] = await conn.execute(
            "INSERT INTO research (Title, Description, Link,Image) VALUES(?, ?, ?, ?)",
            [Title, Description, Link, Image]
          );
          const [row] = await conn.execute(
            "SELECT * FROM research WHERE Id = ?",
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
  const { Title, Link, Description } = req.body;
  let Image = "EmptyConference.png";
  try{
    Image = req.file.filename;
  }catch(error){
    Image = "EmptyConference.png";
    console.log("error from catch"+error)
  }

  try {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    const [result] = await conn.execute(
      "UPDATE research SET `Title`=?, `Link`=?,`Description`=?, `Image`=? WHERE Id=?",
      [Title, Link, Description, Image, req.params.Id]
    );
    const [row] = await conn.execute("Select * FROM research WHERE Id = ?", [
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
    const [result] = await conn.execute("DELETE FROM research WHERE Id=?", [
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

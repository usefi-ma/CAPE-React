import mysql from "mysql2/promise";
import multer from "multer";
import { v4 as uuidv4, v4} from 'uuid';

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mendoza89",
  database: "cape",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/banner");
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
    const { BannerTitle, EventTitle, Date,BannerLink, Description } = req.body;

    let Image = "EmptyUser.jpg";
    try{
      Image = req.file.filename;
    }catch(error){
      Image = "EmptyUser.jpg";
      console.log("error from catch"+error)
    }

    if (!BannerTitle || !EventTitle || !Date || !Description || !BannerLink) {
      return res.status(400).send("Please ensure you have added all fields");
    }
    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "UPDATE banner SET BannerTitle=?, EventTitle=?, Date=?, BannerLink=?, Description=?, Image=? WHERE Id = 1",
        [BannerTitle, EventTitle, Date,BannerLink, Description,Image]
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

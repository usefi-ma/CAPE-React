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
    callback(null, "public/conference");
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

export const uploadImages = upload.fields([
  { name: "BannerImage", maxCount: 1 },
  { name: "AboutImage", maxCount: 1 },
]);

export default class Conference {
  // ! Assumes database table is named 'conference'

  // Get single conference for conference page
  static async Get(req, res) {
    try {
      const [row] = await pool.execute("Select * FROM confernce WHERE Id = ?", [
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
      const [rows, fields] = await pool.execute("SELECT * FROM conference");
      return res.json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  // Get all conferences for conference list page
  static async GetAll(req, res) {
    try {
      const [rows, fields] = await pool.execute("SELECT * FROM conference");
      return res.json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  }

  // Add new conference from dashboard
  static async Add(req, res) {
    console.log("Attempting to add");
    const { ConferenceTitle, Description, Date } = req.body;

    // Change with default conference image later
    let Image = "EmptyUser.jpg";
    try {
      Image = req.file.filename;
    } catch (error) {
      Image = "EmptyUser.jpg";
      console.log("Error from catch " + error);
    }

    if (!ConferenceTitle || !Description || !Date) {
      return res.status(400).send("Please ensure you have added all fields");
    }
    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "INSERT INTO conference (ConferenceTitle, Description, Date, Image) VALUES(?, ?, ?, ?)",
        [ConferenceTitle, Description, Date, Image]
      );

      const [row] = await conn.execute(
        "SELECT * FROM conference WHERE id = ?",
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
    const { ConferenceTitle, Date, Description } = req.body;
    let Image = "EmptyUser.jpg";
    try {
      Image = req.file.filename;
    } catch (error) {
      Image = "EmptyUser.jpg";
    }

    if (!ConferenceTitle || !Date || !Description) {
      return res.status(400).send("Please ensure you have added all fields");
    }

    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "UPDATE conference SET `ConferenceTitle`=?, `Date`=?,`Description`=?, `Image`=? WHERE Id=?",
        [ConferenceTitle, Date, Description, Image, req.params.Id]
      );
      const [row] = await conn.execute(
        "Select * FROM conference WHERE Id = ?",
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
      const [result] = await conn.execute("DELETE FROM conference WHERE Id=?", [
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

  // Add to single conference for conference Detail page
  static async UpdateOne(req, res) {
    console.log("Attempting to Update one conference");

    const {
      BannerTitle,
      EventVenue,
      BannerDescription,
      AboutTitle,
      AboutDescription,
      AdditionalInfo,
    } = req.body;

    let BannerImage = "EmptyConference.png";
    let AboutImage = "EmptyConference.png";
    try {
    
      if (req.files["BannerImage"] && req.files["BannerImage"].length>0) {
        BannerImage = req.files["BannerImage"][0].filename;
      
      }
      if (req.files["AboutImage"] && req.files["AboutImage"].length > 0) {
        AboutImage = req.files["AboutImage"][0].filename;
        
      }
    } catch (error) {
      BannerImage = "EmptyConference1.png";
      AboutImage = "EmptyConference1.png";
    }

    try {
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      const [result] = await conn.execute(
        "UPDATE conference SET `BannerTitle`=?, `EventVenue`=?,`BannerDescription`=?, `AboutTitle`=?, `AboutDescription`=?, `AdditionalInfo`=?, `BannerImage`=?,`AboutImage`=? WHERE Id=?",
        [
          BannerTitle || null,
          EventVenue || null,
          BannerDescription || null,
          AboutTitle || null,
          AboutDescription || null,
          AdditionalInfo || null,
          BannerImage,
          AboutImage,
          req.params.Id || null,
        ]
      );
      const [row] = await conn.execute(
        "Select * FROM conference WHERE Id = ?",
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
}

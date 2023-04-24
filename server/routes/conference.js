import express from "express";
import ConferenceController from "../controllers/conference.js";
import { uploadImage } from "../controllers/conference.js";

const router = express.Router();

router.get("/conference", ConferenceController.GetAll);
router.get("/conference/:Id", ConferenceController.Get);
router.post("/conference", uploadImage, ConferenceController.Add);
router.put("/conference/:Id", uploadImage, ConferenceController.Update);
router.delete("/conference/:Id", ConferenceController.Delete);

export default router;
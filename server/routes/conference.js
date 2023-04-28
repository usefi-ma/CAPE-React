import express from "express";
import ConferenceController from "../controllers/conference.js";
import { uploadImage } from "../controllers/conference.js";
import { uploadImages } from "../controllers/conference.js";
const router = express.Router();

router.get("/conference", ConferenceController.GetAll);
router.get("/conference/:Id", ConferenceController.Get);
router.post("/conference", uploadImage, ConferenceController.Add);
router.put("/conference/:Id", uploadImage, ConferenceController.Update);
router.put("/conferencedetail/:Id",uploadImages,ConferenceController.UpdateOne);
router.put("/conferenceContact/:Id",ConferenceController.UpdateContactConference);
router.delete("/conference/:Id", ConferenceController.Delete);
router.get("/conferenceCount", ConferenceController.countConference);

export default router;
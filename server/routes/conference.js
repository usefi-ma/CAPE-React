import express from 'express';
import ConferenceController from '../controllers/conference.js';
import {uploadImage} from "../controllers/conference.js";

const router = express.Router();

router.get('/conference', ConferenceController.GetAll);
router.post('/conference', uploadImage, ConferenceController.Add);
export default router;
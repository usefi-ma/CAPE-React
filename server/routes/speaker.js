
import express from 'express';
import SpeakerController from '../controllers/speaker.js';
import {uploadImage} from "../controllers/speaker.js";

const router=express.Router();

 router.get('/speaker' , SpeakerController.GetAll)
 router.get('/speaker/:Id' , SpeakerController.Get)
 router.post('/speaker',uploadImage,SpeakerController.Add);
 router.put('/speaker/:Id',uploadImage,SpeakerController.Update)
router.delete('/speaker/:Id',SpeakerController.Delete)

export default router;
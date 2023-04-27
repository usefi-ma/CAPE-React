
import express from 'express';
import ResearchController from '../controllers/research.js';
import {uploadImage} from "../controllers/research.js";

const router=express.Router();

 router.get('/research' , ResearchController.GetAll)
 router.get('/research/:Id' , ResearchController.Get)
router.post('/research',uploadImage,ResearchController.Add);
router.put('/research/:Id',uploadImage,ResearchController.Update)
router.delete('/research/:Id',ResearchController.Delete)

export default router;
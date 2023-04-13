//endpoints will declare here, call the file the same as resources(tables)

import express from 'express';
import ExecutiveController from '../controllers/executive.js';
import {uploadImage} from "../controllers/executive.js";

const router=express.Router();



  
router.get('/executive' , ExecutiveController.GetAll)
router.post('/executive',uploadImage,ExecutiveController.AddOne)
router.put('/executive/:Id',ExecutiveController.UpdateOne)
router.delete('/executive/:Id',ExecutiveController.DeleteOne)
export default router;

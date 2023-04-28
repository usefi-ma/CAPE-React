//endpoints will declare here, call the file the same as resources(tables)

import express from 'express';
import ExecutiveController from '../controllers/executive.js';
import {uploadImage} from "../controllers/executive.js";

const router=express.Router();

router.get('/executive' , ExecutiveController.GetAll)
router.get('/executive/:Id' , ExecutiveController.Get)
router.post('/executive',uploadImage,ExecutiveController.Add)
router.put('/executive/:Id',uploadImage,ExecutiveController.Update)
router.delete('/executive/:Id',ExecutiveController.Delete)
router.get('/countexecutive',ExecutiveController.countExecutive)

export default router;

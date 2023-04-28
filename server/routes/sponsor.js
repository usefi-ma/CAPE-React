

import express from 'express';
import SponsorController from '../controllers/sponsor.js';
import {uploadImage} from "../controllers/sponsor.js";

const router=express.Router();

  router.get('/sponsor' , SponsorController.GetAll)
  router.get('/sponsor/:Id' , SponsorController.Get)
  router.post('/sponsor',uploadImage,SponsorController.Add);
  router.put('/sponsor/:Id',uploadImage,SponsorController.Update)
 router.delete('/sponsor/:Id',SponsorController.Delete)

export default router;
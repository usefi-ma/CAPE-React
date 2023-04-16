import express from 'express';
import BannerController from '../controllers/banner.js';
import {uploadImage} from "../controllers/banner.js";

const router = express.Router();

router.get('/banner', BannerController.Get);
router.post('/banner',uploadImage, BannerController.Add);

export default router;

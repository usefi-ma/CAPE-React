import express from 'express';
import BannerController from '../controllers/banner.js';

const router = express.Router();

router.get('/banner', BannerController.Get);
router.post('/banner', BannerController.Add);

export default router;

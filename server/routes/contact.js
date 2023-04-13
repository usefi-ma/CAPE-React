import express from 'express';
import ContactController from '../controllers/contact.js';

const router = express.Router();

router.post('/contact', ContactController.sendMail);

export default router;

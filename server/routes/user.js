//endpoints will declare here, call the file the same as resources(tables)

import express from 'express';
import UserController from '../controllers/user.js';

const router=express.Router();


router.post('/users',UserController.Add)
router.get('/users' , UserController.GetAll)
router.post('/users/login',UserController.Login)

export default router;

//endpoints will declare here, call the file the same as resources(tables)

import express from 'express';
import UserController from '../controllers/user.js';

const router=express.Router();


router.post('/user',UserController.Add)
router.get('/user' , UserController.GetAll)
 router.post('/user/login',UserController.Login)
 router.get('/countuser',UserController.countUser)
export default router;

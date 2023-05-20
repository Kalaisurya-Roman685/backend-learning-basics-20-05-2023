import express from 'express';
import routerauth from './database/auth/index.js';


const router=express.Router();


router.use("/auth",routerauth)



export default router;
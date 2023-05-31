import express from 'express';
import routerauth from './database/auth/index.js';
import routerBike from './database/shopbike/index.js';
import { MiddlewareCheck } from './middleware/middlewaretoken/Middlewaretoken.js';
import routeraddress from './database/bikeareas/index.js';


const router = express.Router();


router.use("/auth", routerauth)
router.use("/bike", MiddlewareCheck, routerBike)
router.use("/bikearea", MiddlewareCheck, routeraddress)





export default router;
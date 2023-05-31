import express from 'express';
import { AuthLogin, AuthRegister } from './controlls/Auth_ controlls.js';
import { upload } from '../../middleware/imageupload/Imageupload.js';

const routerauth = express.Router();

// upload.single("image")
routerauth.post("/register", AuthRegister)
routerauth.post("/login", AuthLogin)




export default routerauth;
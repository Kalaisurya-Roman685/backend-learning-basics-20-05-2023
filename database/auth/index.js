import express from 'express';
import { AuthLogin, AuthRegister } from './controlls/Auth_ controlls.js';

const routerauth=express.Router();


routerauth.post("/register",AuthRegister)
routerauth.post("/login",AuthLogin)




export default routerauth;
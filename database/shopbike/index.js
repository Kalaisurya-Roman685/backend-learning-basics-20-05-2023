import express from 'express';
import { BikeComentDelete, BikeComments, BikeCreate, BikeDelete, BikeLikePost, BikegetAllshops, BikegetSingle, BikegetUserid } from './controlls/Shop_controlls.js';

const routerBike = express.Router();


routerBike.post("/createshop", BikeCreate)
routerBike.post("/shops", BikegetUserid)
routerBike.post("/shops/:id", BikegetSingle)
routerBike.post("/allshops", BikegetAllshops)
routerBike.post("/shop/delete/:id", BikeDelete)
routerBike.post("/shop/comment/:id", BikeComments)
routerBike.post("/shop/comment/delete/:id", BikeComentDelete)
routerBike.put("/shop/comment/like/:id", BikeLikePost)






export default routerBike;
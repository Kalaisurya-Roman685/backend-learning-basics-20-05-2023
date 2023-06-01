import express from "express";
import { AggregateAllusers, BikeAreaAllarea, BikeAreaAllfinduser, BikeAreacreate, BikeAreaedit, BikeAreasingle } from "./controlls/Bikearea_controlls.js";
const routeraddress = express.Router();
routeraddress.post("/area", BikeAreacreate);
routeraddress.put("/area/update", BikeAreaedit);
routeraddress.get("/area/getsingle", BikeAreasingle);
routeraddress.get("/area/allareas", BikeAreaAllarea);
routeraddress.get("/area/finduser", BikeAreaAllfinduser);
routeraddress.get("/area/match", AggregateAllusers);

export default routeraddress;
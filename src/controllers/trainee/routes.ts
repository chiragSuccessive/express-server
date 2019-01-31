import { Router } from "express";
import { controller } from "./controller";
// import validate from "./validation";//validate in validation.ts
// import {validationHandler} from "../../libs/routes";
import {authMiddleWare} from "../../libs/routes"
const traineerouter = Router();
traineerouter.post("/",authMiddleWare('node','delete'), controller.post);
traineerouter.put("/",authMiddleWare('node','delete'),controller.put);
traineerouter.delete("/",authMiddleWare('node','delete'), controller.delete);
traineerouter.get("/",authMiddleWare('node','delete'), controller.get);


export default traineerouter;

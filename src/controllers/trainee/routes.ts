import { Router } from "express";
import { controller } from "./controller";
import validate from "./validation";//validate in validation.ts
import {validationHandler} from "../../libs/routes";
import {authMiddleWare} from "../../libs/routes"
const traineerouter = Router();
// traineerouter.get("/",validationHandler(validate.get), controller.get);
traineerouter.post("/",validationHandler(validate.post), controller.post);
traineerouter.put("/",validationHandler(validate.update) ,controller.put);
traineerouter.delete("/",validationHandler(validate.delete), controller.delete);
traineerouter.get("/",authMiddleWare('node','delete'), controller.get);


export default traineerouter;

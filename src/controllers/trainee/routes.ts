import { Router } from "express";
import { controller } from "./controller";
const traineerouter = Router();
traineerouter.get("/", controller.get);
traineerouter.post("/", controller.post);
traineerouter.put("/", controller.put);
traineerouter.delete("/", controller.delete);

export default traineerouter;

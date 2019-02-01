import { Router } from "express";
import controller from "./controller";
import authMiddleWare from "../../libs/routes/authMiddleWare";
const userRouter = Router();
console.log("in userrouter");

userRouter.post("/",authMiddleWare('node','read'),controller.create);
userRouter.get("/",controller.get);
userRouter.put("/",controller.put);
userRouter.delete("/",controller.delete);
export default userRouter;

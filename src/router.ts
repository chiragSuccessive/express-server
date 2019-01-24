import { Router } from "express";
import { traineerouter } from "./controllers/trainee";
const router = Router();
// router.use('/',(req,res)=> {
//   res.send({msg:"i am in router"});
// })
router.use("/trainee", traineerouter);
export { router };

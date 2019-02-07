import { Router } from 'express';
import tokenRouter from './controllers/tokenRouter';
import { traineerouter } from './controllers/trainee';
import { userRouter } from './controllers/user';
const router = Router();
router.use('/trainee', traineerouter);
router.use('/user', userRouter);
router.use('/login', tokenRouter);

export { router };

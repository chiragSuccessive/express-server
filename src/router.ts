import { Router } from 'express';
import { traineerouter } from './controllers/trainee';
import { userRouter } from './controllers/user';
const router = Router();
router.use('/trainee', traineerouter);
router.use('/user', userRouter);
export { router };

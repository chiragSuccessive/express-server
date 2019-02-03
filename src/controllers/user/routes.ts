import { Router } from 'express';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import controller from './controller';
const userRouter = Router();
console.log('in userrouter');

userRouter.post('/', controller.create);
userRouter.get('/', authMiddleWare( 'node', 'read' ), controller.get);
userRouter.put('/', controller.put);
userRouter.delete('/', controller.delete);
export default userRouter;

import { Router } from 'express';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import controller from './controller';
const userRouter = Router();
console.log('in userrouter');

try {
  console.log('in userroutfgher');
  userRouter.post('/', controller.create);
  userRouter.get('/', authMiddleWare( 'read', 'node' ), controller.get);
  userRouter.put('/', controller.put);
  userRouter.delete('/', controller.delete);
} catch (err) {
  console.log(err);
}
export default userRouter;

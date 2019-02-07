import { Router } from 'express';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import validation from '../trainee/validation';
import controller from './controller';
const userRouter = Router();
try {
  userRouter.post('/', validationHandler(validation.post), authMiddleWare( 'write', 'node' ), controller.create);
  userRouter.get('/', validationHandler(validation.get), authMiddleWare( 'read', 'node' ), controller.get);
  userRouter.put('/', validationHandler(validation.update), authMiddleWare( 'write', 'node' ), controller.put);
  userRouter.delete('/:id', validationHandler(validation.delete), authMiddleWare('delete', 'node'), controller.delete);
} catch (err) {
  console.log(err);
}
export default userRouter;

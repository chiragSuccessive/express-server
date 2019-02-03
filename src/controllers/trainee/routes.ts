import { Router } from 'express';
import { authMiddleWare } from '../../libs/routes';
import { controller } from './controller';
const traineerouter = Router();
traineerouter.post('/', authMiddleWare('node', 'delete' ), controller.post);
traineerouter.put('/', authMiddleWare('node', 'delete' ), controller.put);
traineerouter.delete('/', authMiddleWare('node', 'delete'), controller.delete);
traineerouter.get('/', authMiddleWare('node', 'delete'), controller.get);

export default traineerouter;

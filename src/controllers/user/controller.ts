import { NextFunction, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
import user from '../../repositories/user/UserRepository';

class Controller {
  public async get(req: Request, res: Response) {
    const { skip = 0, limit = 10 } = req.query;
    try {
      const count = await user.count();
      const obj = {
        limit,
        role: 'head-trainer',
        skip,
      };
      const items = await user.find(obj);
      const data = {
        items,
        totalNoOfDocs : count,
      };
      res.send(successHandler('data is created', 200, data));
    } catch (err) {
      throw new Error(err);
    }
  }
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await user.create(req.body);
      res.send(successHandler('data is created', 200, data));
    } catch (err) {
      throw new Error(err);
    }
  }
  public async put(req: Request, res: Response, next: NextFunction) {
    const { id, dataToUpdate: {name} } = req.body;
    try {
      const data = await user.update(id, name);
      res.send(successHandler('successfully updated', 200, data));
    } catch (err) {
      next({
        error: 'Bad request', message: err.message, status: 400,
      });
    }
  }
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await user.delete(id);
      res.send(successHandler('successfully deleted', 200, data));
    } catch (err) {
      next({
        error: 'Bad request', message: err.message, status: 400,
      });
    }
  }
}
export default new Controller();

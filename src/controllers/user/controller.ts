import { NextFunction, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
import user from '../../repositories/user/UserRepository';

class Controller {
  public async get(req: Request, res: Response) {
    const { skip, limit } = req.query;
    const count = await user.count();
    const items = await user.find(skip, limit);
    const data = {
      items,
      totalNoOfDocs : count,
    };
    res.send(successHandler('data is created', 200, data));
  }
  public async create(req: Request, res: Response, next: NextFunction) {
    const data = await user.create(req.body);
    res.send(successHandler('data is created', 200, data));
  }
  public async put(req: Request, res: Response, next: NextFunction) {
    const { id, dataToUpdate: {name} } = req.body;
    const data = await user.update(id, name);
    res.send(successHandler('successfully updated', 200, data));
  }
  public async delete(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    const { id } = req.params;
    const data = await user.delete(id);
    res.send(successHandler('successfully deleted', 200, data));
  }
}
export default new Controller();

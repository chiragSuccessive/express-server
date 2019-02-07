import { NextFunction, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
import user from '../../repositories/user/UserRepository';

class Controller {
  public get(req: Request, res: Response) {
    user.read({_id: req.body.id}).then((users) => {
      res.send(successHandler('ok', 200, users));
    });
  }
  public create(req: Request, res: Response, next: NextFunction) {
    user.create(req.body).then((data) => {
      res.send(successHandler('data is created', 200, data));
    });
  }
  public put(req: Request, res: Response, next: NextFunction) {
    const { id, name } = req.body;
    user.update(id, name).then((data) => {
      res.send(successHandler('successfully updated', 200, data));
    });
  }
  public delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    user.delete(id).then((data) => {
      res.send(successHandler('successfully deleted', 200, data));
    });
  }
}
export default new Controller();

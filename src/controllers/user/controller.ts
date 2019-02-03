import { NextFunction, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
import user from '../../repositories/user/UserRepository';

class Controller {
  public get(req: Request, res: Response) {
    console.log('in get controller');
    user.read({}).then((users) => {
      console.log(users);
      res.send(successHandler('ok', 200, users));
    });
  }
  public create(req: Request, res: Response, next: NextFunction) {
    res.send(successHandler('data is created', 200));
  }
  public put(req: Request, res: Response, next: NextFunction) {
    res.send(successHandler('successfully updated', 200));
  }
  public delete(req: Request, res: Response, next: NextFunction) {
    res.send(successHandler('successfully deleted', 200));
  }
}
export default new Controller();

import { NextFunction, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
import user from '../../repositories/user/UserRepository';

class Controller {
  public get(req: Request, res: Response) {
    console.log('in get controller');
    user.read({id: req.body.id}).then((users) => {
      console.log('info readed from users database', users);
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
    console.log('id', id);
    console.log('name', name);
    user.update(id, name).then((data) => {
      res.send(successHandler('successfully updated', 200, data));
    });
  }
  public delete(req: Request, res: Response, next: NextFunction) {
    res.send(successHandler('successfully deleted', 200));
  }
}
export default new Controller();

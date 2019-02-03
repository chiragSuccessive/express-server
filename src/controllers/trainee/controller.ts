import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
class Controller {
  public get(req: Request, res: Response) {
    const data = [
      {
        name: 'chirag',
      },
      {
        name: 'deepak',
      },
    ];

    res.send(successHandler('ok', 200, data));
  }
  public post(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    if (name && id) {
      res.send(successHandler('ok', 200, { name, id }));
    }
  }
  public put(req: Request, res: Response, next: NextFunction) {
    res.send(successHandler('successfully updated', 200));
  }
  public delete(req: Request, res: Response, next: NextFunction) {
    res.send(successHandler('successfully deleted', 200));
  }
}
const controller = new Controller();
export { controller };

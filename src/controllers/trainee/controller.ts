import { Request, Response, NextFunction } from "express";
import { successHandler } from "../../libs/routes";
class Controller {
  public get(req: Request, res: Response) {
    const data = [
      {
        name: "chirag"
      },
      {
        name: "deepak"
      }
    ];
    res.send(successHandler("ok", 200, data));
  }
  public post(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    if (!name) {
      next({
        error: "Bad Request",
        status: 400,
        message: "Name not entered"
      });
    }
    if (!id) {
      next({
        error: "Bad Request",
        status: 400,
        message: "id not entered"
      });
    }
    if (name && id) {
      res.send(successHandler("ok", 200, { name: name, id: id }));
    }
  }
  public put(req: Request, res: Response, next: NextFunction) {
    const data = {
      name: "chirag",
      id: 564
    };
    const { name, id } = req.body;
    if (id == data.id) {
      res.send(successHandler("successfully updated", 200, name)); //updated name will display in data key
    } else {
      next({
        error: "Bad Request",
        status: 400,
        message: "id not present"
      });
    }
  }
  public delete(req: Request, res: Response, next: NextFunction) {
    const data = {
      name: "chirag",
      id: 564
    };
    const { name, id } = req.body;
    if (id == data.id) {
      res.send(successHandler("successfully deleted", 200, id));
    } else {
      next({
        error: "Bad Request",
        status: 400,
        message: "id not present"
      });
    }
  }
}
const controller = new Controller();
export { controller };

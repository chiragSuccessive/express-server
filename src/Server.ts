import * as express from "express";
import * as bodyparser from "body-parser";
import { notFoundRoute, errorHandler } from "./libs/routes";
class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
  }
  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public initBodyParser() {
    const { app } = this;
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json());
  }
  public setupRoutes() {
    const { app } = this;
    app.use("/health-check", (req, res) => {
      res.send("i am ok ");
    });
    app.use(notFoundRoute);
    app.use(errorHandler);
  }
  public run() {
    const { app, config: { port } } = this;
    app.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`app listening on port ${port}`);
    });
  }
}
export default Server;

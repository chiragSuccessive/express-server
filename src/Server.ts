import { json, urlencoded } from 'body-parser';
import * as express from 'express';
import Database from './libs/Database';
import { errorHandler, notFoundRoute } from './libs/routes';
import { router } from './router';
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
    app.use( urlencoded({ extended: false }));
    app.use( json());
  }
  public setupRoutes() {
    const { app } = this;
    app.use('/health-check', (req, res) => {
      res.send('i am ok');
    });
    app.use('/api', router);
    app.use(notFoundRoute);
    app.use(errorHandler);
  }
  public run() {
    const { app, config: { port, mongo_url } } = this;
    Database.open(mongo_url).then( (res) => {
      app.listen(port, (err) => {
        if (err) {
          throw new Error(err);
        }
        console.log(`app listening on port ${port}`);
        // Database.disconnect();
      });
    }).catch((err) => {
      console.log('error recieved in server', err);
    });
  }
}
export default Server;

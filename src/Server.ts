import * as bodyparser from 'body-parser';
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
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json());
  }
  public setupRoutes() {
    console.log('INSIDE SETUP ROUTES:::::::');
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
    console.log('****************************************', port);
    Database.open(mongo_url).then( (res) => {
      app.listen(port, (err) => {
        if (err) {
          console.log('error in run');
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

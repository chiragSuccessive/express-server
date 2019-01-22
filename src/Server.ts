import * as express from "express";
class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
  }
  public bootstrap() {
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    const { app } = this;
    app.use("/health-check", (req, res) => {
      res.send("i am ok ");
    });
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

import * as mongoose from "mongoose";
import seed from "./seedData";
class Database {
  static open(url) {
      return mongoose.connect(url, { useNewUrlParser: true }).then(
        () => { console.log("successfully connected");
         return seed();
          //return "success";
        },
        err => {
          console.log("error in database");
          throw new Error(err);
        }
      );
  }
  static disconnect() {
    console.log("Disconnected");
    mongoose.disconnect();
  }
}
export default Database;

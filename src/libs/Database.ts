import { connect, disconnect } from 'mongoose';
import seed from './seedData';
class Database {
  public static open(url) {
      return connect(url, { useNewUrlParser: true }).then(
        () => { console.log('successfully connected');
                return seed();
        },
        (err) => {
          console.log('error in database');
          throw new Error(err);
        },
      );
  }
  public static disconnect() {
    disconnect();
  }
}
export default Database;

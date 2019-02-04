import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { UserModel } from './UserModel';
class UserRepository {
  private model: mongoose.Model<IUserModel>;
  // public generateObjectId() {
  //   return String(mongoose.Types.ObjectId());
  // }
  constructor() {
    this.model = UserModel;
  }
  public count() {
    return this.model.countDocuments();
  }
  public create(data): Promise<IUserModel> {
    return this.model.create(data);
  }
  public read(data) {
    console.log('in read');
    return this.model.findOne(data);
  }

  public update(data, name) {
    return this.model.findOneAndUpdate(data, name).then( (res) => {
      console.log(res);
    });
  }
  public delete(data) {
    return this.model.findOneAndRemove(data).then( (res) => {
      console.log(res);
    });
  }
}

export default new UserRepository();

import { UserModel } from './UserModel';
import * as mongoose from "mongoose";
import IUserModel from "./IUserModel";
class UserRepository {
  private model: mongoose.Model<IUserModel>;
  public generateObjectId() {
    return mongoose.Types.ObjectId();
  }
  constructor() {
    this.model = UserModel;
  }
  public create(data):Promise<IUserModel> {
    return this.model.create(data);

  }
}
export default new UserRepository;

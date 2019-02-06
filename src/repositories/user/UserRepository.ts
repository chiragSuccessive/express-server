import * as mongoose from 'mongoose';
import versionableRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { UserModel } from './UserModel';
class UserRepository extends versionableRepository<IUserModel, mongoose.Model<IUserModel>> {
  // private const model: mongoose.Model<IUserModel>;
  // public generateObjectId() {
  //   return String(mongoose.Types.ObjectId());
  // }
  constructor() {
    super(UserModel);
  }
  public count() {
    return this.genericCount();
  }
  public create(data) {
    console.log('in user create');
    return this.genericCreate(data);
  }
  public read(data) {
    console.log('in read');
    return this.genericRead(data);
  }

  public update(id, name) {
    return this.genericUpdate(id, name).then( (res) => {
      console.log('in user update', res);
    });
  }
  public delete(data) {
    return this.genericDelete(data).then( (res) => {
      console.log(res);
    });
  }
}

export default new UserRepository();

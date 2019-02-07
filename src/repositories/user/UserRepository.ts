import { Model } from 'mongoose';
import versionableRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { UserModel } from './UserModel';
class UserRepository extends versionableRepository<IUserModel, Model<IUserModel>> {
  constructor() {
    super(UserModel);
  }
  public count() {
    return this.genericCount();
  }
  public create(data) {
    return this.genericCreate(data);
  }
  public read(data) {
    return this.genericRead(data);
  }

  public update(id, name) {
    return this.genericUpdate(id, name);
  }
  public delete(data) {
    return this.genericDelete(data);  }
}

export default new UserRepository();

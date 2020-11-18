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
  public find(data) {
    return this.genericFind(data);
  }
  public async update(id, name) {
  try {
    const updated = await this.genericUpdate(id, name);
    if (updated) {
      return updated;
    }
    throw new Error('Not updated');
  } catch (err) {
    throw new Error(err);
  }

  }
  public async delete(id) {
    try {
      const deleted = await this.genericDelete(id);
      if (deleted) {
        return deleted;
      }
      throw new Error('Not deleted');
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
export default new UserRepository();

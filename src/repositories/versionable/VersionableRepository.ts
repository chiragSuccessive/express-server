import * as mongoose from 'mongoose';
import IVersionableModel from './IVersionableModel';
import VersionableSchema from './VersionableSchema';
export default class VersionRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  private model: mongoose.Model<M>;
  // public generateObjectId() {
  //   return String(mongoose.Types.ObjectId());
  // }
  constructor(model) {
    this.model = model;
  }
  public generateObjectId() {
  }
  public create(): Promise<IVersionableModel> {
    return this.model.create();
  }
  public update() {

  }
}

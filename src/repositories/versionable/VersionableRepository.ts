import { Document, Model, Types } from 'mongoose';
export default class VersionableRepository<D extends Document, M extends Model<D>> {
  private model;

  constructor(model) {
    this.model = model;
  }
  public generateObjectId() {
    return String(Types.ObjectId());
  }
  public genericCount() {
    return this.model.countDocuments();
  }
  public genericCreate(data) {
    const id = this.generateObjectId();
    return this.model.create({...data, _id: id, originalId: id});
  }
  public genericUpdateCreate(data) {
    const id = this.generateObjectId();
    return this.model.create({...data, _id: id});
  }
  public genericRead(data) {
    return this.model.findOne(data);
  }
  public async genericFind(skip , limit) {
    const count = await this.model.countDocuments();
    // tslint:disable-next-line:no-null-keyword
    return await this.model.find({}, null, {skip: parseInt(skip, 10), limit: parseInt(limit, 10)});
  }
  public async genericUpdate(id, data): Promise<D> {
      try {
        const fetched = await this.model.findOne({ originalId: id, deletedAt: { $exists: false}}).lean();
        const dataToInsert = Object.assign(fetched, {name: data, createdAt: new Date()});
        await this.genericUpdateCreate(dataToInsert);
        return this.model.updateOne({ _id: id }, {$set: { deletedAt: true }});
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
  }
  public genericDelete(data) {
    return this.model.findOneAndRemove(data);
  }
}

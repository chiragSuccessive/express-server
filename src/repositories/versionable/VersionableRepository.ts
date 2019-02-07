import * as mongoose from 'mongoose';
export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  private model;

  constructor(model) {
    this.model = model;
  }
  public generateObjectId() {
    return String(mongoose.Types.ObjectId());
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
    console.log('in read');
    return this.model.findOne(data);
  }
  public async genericUpdate(id, data): Promise<D> {
      try {
        const fetched = await this.model.findOne({ originalId: id }).lean();
        const dataToInsert = Object.assign(fetched, {name: data, createdAt: new Date()});
        const newRes = await this.genericUpdateCreate(dataToInsert);
        console.log('------------new file created', newRes);
        return this.model.updateOne( {_id: fetched._id}, {$set : {deletedAt: true}}, {upsert: true} );
      } catch (err) {
        console.log(err);
      }
  }
  public genericDelete(data) {
    return this.model.findOneAndRemove(data);
  }
}

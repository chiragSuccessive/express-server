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
  public genericUpdate(id, data): Promise<D> {
    return this.model.findOne({ originalId: id }).lean().then((temp) => {
      const dataToInsert = Object.assign(temp, {name: data, _id : this.generateObjectId()});
      return this.genericUpdateCreate(dataToInsert).then((newres) => {
          console.log('in update create ', newres );
        });
    }).then((res) => {
      return this.model.updateOne( {_id: id}, {$set : {deletedAt: true}}, {upsert: true} );
    });
  }
  public genericDelete(data) {
    return this.model.findOneAndRemove(data);
  }
}

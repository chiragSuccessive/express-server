import * as mongoose from 'mongoose';
import IVersionableModel from './IVersionableModel';
import VersionableSchema from './VersionableSchema';
export default class VersionableRepository<
  D extends mongoose.Document,
  M extends mongoose.Model<D>
  > {
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
    console.log('in  generic create');
    const id = this.generateObjectId();
    return this.model.create({...data, _id: id, originalId: id});
  }
  public genericUpdateCreate(data) {
    console.log('in  generic create');
    const id = this.generateObjectId();
    return this.model.create({...data, _id: id});
  }
  public genericRead(data) {
    console.log('in read');
    return this.model.findOne(data);
  }
  public genericUpdate(id, data): Promise<D> {
    console.log('in generic update');
    return this.model.findOne({ originalId: id }).lean().then((temp) => {
      console.log('res', temp);
      const dataToInsert = Object.assign(temp, {name: data, _id : this.generateObjectId()});
      console.log('res-----', dataToInsert);
      return this.genericUpdateCreate(dataToInsert).then((newres) => {
          console.log('in update create ', newres );
        });
    }).then((res) => {
      console.log('------------432-----', res);
      return this.model.updateOne( {_id: id}, {$set : {deletedAt: true}}, {upsert: true} );
    });
  }
  public genericDelete(data) {
    return this.model.findOneAndRemove(data);
  }
}

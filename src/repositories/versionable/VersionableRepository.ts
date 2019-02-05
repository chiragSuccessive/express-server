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
    return this.model.create({...data, _id: id});
  }
  public genericRead(data) {
    console.log('in read');
    return this.model.findOne(data);
  }
  public genericUpdate(id, data): Promise<D> {
    console.log('in generic update');
    return this.model.findOne({_id: id }).then((temp) => {
      console.log('res', temp);
      if (!temp.updateAt) {
        console.log('in update find', temp);
        // delete res.name;
        // delete temp._id;
        console.log('response after delete', temp);

        const dataToInsert = Object.assign(temp, {name: data, _id : this.generateObjectId()});
        console.log('res-----', dataToInsert);
        return this.genericCreate(dataToInsert).then((newres) => {
          console.log('in update create ', newres );
        });
      }
      else {
        console.log('is update at');
      }
      this.model.updateOne(id, {$set : {deletedAt: true}}, {upsert: true} );
    });
    // return this.model.findOne({ id : `{id}` }).then( (res) => {
    //   console.log('....................');
    //   const { originalId } = res;
    //   console.log('original id', originalId);
    //   console.log('in generic update', res);

    //   this.model.create( ...res);
    //   return this.model.findOneAndUpdate(name);
    // });
  }
  // public genericDelete(data) {
  //   return this.model.findOneAndRemove(data).then( (res) => {
  //     console.log(res);
  //   });
  // }
}

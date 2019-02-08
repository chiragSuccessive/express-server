
import { Document, DocumentQuery, Model, Query, Types } from 'mongoose';
export default class VersionableRepository<D extends Document, M extends Model<D>> {
  private model: M;

  constructor(model) {
    this.model = model;
  }
  public generateObjectId(): string {
    return String(Types.ObjectId());
  }
  public genericCount(): Query<number> {
    return this.model.countDocuments();
  }
  public genericCreate(data): Promise<D> {
    const id = this.generateObjectId();
    return this.model.create({...data, _id: id, originalId: id});
  }
  public async genericUpdateCreate(data): Promise<D> {
    const id = this.generateObjectId();
    return await this.model.create({...data, _id: id});
  }
  public genericRead(data): DocumentQuery<D, D, {}> {
    return this.model.findOne(data);
  }
  public async genericFind(role, skip , limit): Promise<D[]> {
    const count = await this.model.countDocuments();
    return await this.model.find(
      {
        deletedAt: {$exists: false},
        role,
      },
      // tslint:disable-next-line:no-null-keyword
      null,
      {
        limit: parseInt(limit, 10),
        skip: parseInt(skip, 10),
      },
    );
  }
  public async genericUpdate(id, data): Promise<D> {
    const fetched = await this.model.findOne({ originalId: id, deletedAt: { $exists: false}}).lean();
    if (!fetched) {
      throw new Error('incorrect id ');
    }
    const dataToInsert = Object.assign(fetched, {name: data, createdAt: new Date()});
    await this.genericUpdateCreate(dataToInsert);
    return await this.model.updateOne({ _id: id }, {$set: { deletedAt: true }});
  }
  public async genericDelete(id): Promise<D> {
    const fetched = await this.model.findOne({originalId: id, deletedAt: {$exists: false}});
    if (!fetched) {
      throw new Error('incorrect id or it is already deleted');
    }
    const deleted = await this.model.updateOne
    (
      {
        deletedAt: {$exists: false},
        originalId: id,
      },
      {
        $set: { deletedAt: true },
      },
    );
    return deleted;
  }
}

import * as mongoose from 'mongoose';
export default interface IVersionableModel extends mongoose.Document {
  createdAt: Date;
  deletedAt: Date;
  originalId: string;
}

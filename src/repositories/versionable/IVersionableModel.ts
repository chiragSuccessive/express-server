import { Document } from 'mongoose';
export default interface IVersionableModel extends Document {
  createdAt: Date;
  deletedAt: Date;
  originalId: string;
}

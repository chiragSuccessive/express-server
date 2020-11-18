import { Model , model } from 'mongoose';
import IUserModel from './IUserModel';
import UserSchema from './UserSchema';
const baseSchema = new UserSchema({collection: 'user'});
export const UserModel: Model<IUserModel> = model<IUserModel>('user', baseSchema, 'user', true);

import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import UserSchema from './UserSchema';
const baseSchema = new UserSchema({collection: 'user'});
export const UserModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>('user', baseSchema, 'user', true);

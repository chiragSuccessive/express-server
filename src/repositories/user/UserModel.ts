import * as mongoose from 'mongoose';
import UserSchema from "./UserSchema";
import IUserModel from './IUserModel';
const baseSchema = new UserSchema({collection:'user'});
export const UserModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>('user',baseSchema,'user',true);


import * as mongoose from 'mongoose';
class UserSchema extends mongoose.Schema{
  constructor(options) {
    const baseSchema = {
      id: String,
      name: String
    }
    super(baseSchema,options);
  }
}
export default UserSchema;

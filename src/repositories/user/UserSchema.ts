import * as mongoose from 'mongoose';
class UserSchema extends mongoose.Schema {
  constructor(options) {
    const baseSchema = {
      email: String,
      id: String,
      name: String,
      role: String,
    };
    super(baseSchema, options);
  }
}
export default UserSchema;

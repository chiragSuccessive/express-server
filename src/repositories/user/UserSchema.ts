import VersionableSchema from '../versionable/VersionableSchema';
class UserSchema extends VersionableSchema {
  constructor(options) {
    const baseSchema = {
      _id: String,
      email: String,
      id: String,
      name: String,
      password: String,
      role: String,
    };
    super(options, baseSchema);
  }
}
export default UserSchema;

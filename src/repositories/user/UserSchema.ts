import VersionableSchema from '../versionable/VersionableSchema';
class UserSchema extends VersionableSchema {
  constructor(options) {
    const baseSchema = {
      email: String,
      id: String,
      name: String,
      role: String,
    };
    super(options);
  }
}
export default UserSchema;

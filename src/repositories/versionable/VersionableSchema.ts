import { Schema } from 'mongoose';
export default class VersionableSchema extends Schema {
  constructor(options, userSchema)  {
    const versionSchema = Object.assign({
      createdAt: {
        Required: true,
        default: new Date(),
        type: Date,
      },
      deletedAt: {
        Required: false,
        type: Boolean,
      },
      originalId: {
        Required: true,
        type: String,
      },
      updatedAt: {
        Required: false,
        type: Date,
      },
    }, userSchema);
    super(versionSchema, options);
  }
}

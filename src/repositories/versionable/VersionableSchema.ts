import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(options)  {
    const versionSchema = {
      createdAt: {
        Required: true,
        default: Date.now(),
      },
      deletedAt: {
        Required: false,
        type: Date,
      },
      originalID: {
        Required: true,
        type: Date,
      },
      updatedAt: {
        Required: false,
        type: Date,
      },
    };
    super(versionSchema, options);
  }
}

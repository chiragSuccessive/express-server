import { IPermissions } from './interfaces';
const TRAINEE = 'trainee';
const TRAINER = 'trainer';
const HEAD_TRAINER = 'head-trainer';
const permissions: IPermissions = {
  node: {
    all: [],
    delete: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
  },
};
export default permissions;

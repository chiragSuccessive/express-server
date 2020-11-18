import { IPermissions } from './interfaces';
const TRAINEE = 'trainee';
const TRAINER = 'trainer';
const HEAD_TRAINER = 'head-trainer';
const permissions: IPermissions = {
  node: {
    all: [HEAD_TRAINER],
    delete: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER, HEAD_TRAINER],
    write: [TRAINER, HEAD_TRAINER],
  },
};
export default permissions;

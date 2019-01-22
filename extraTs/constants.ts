import { IPermissions } from "./interfaces";
const TRAINEE: string = "trainee";
const TRAINER: string = "trainer";
const HEAD_TRAINER: string = "head-trainer";
const permissions: IPermissions = {
  node: {
    all: [],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: [HEAD_TRAINER]
  },
  java: {
    all: [TRAINER, TRAINEE],
    read: [HEAD_TRAINER, TRAINER, TRAINEE],
    write: [HEAD_TRAINER],
    delete: []
  },
  python: {
    all: [TRAINEE],
    read: [HEAD_TRAINER, TRAINER, TRAINEE],
    write: [TRAINER],
    delete: [HEAD_TRAINER]
  }
};
export { TRAINEE, TRAINER, HEAD_TRAINER, permissions };

import {IPermissions} from "./interfaces";
const TRAINEE = "trainee";
const TRAINER = "trainer";
const HEAD_TRAINER = "head-trainer";
const permissions : IPermissions = {
  node: {
    all: [],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: [HEAD_TRAINER]
  }
}
export default permissions;

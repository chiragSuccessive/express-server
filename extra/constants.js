const TRAINEE = "trainee";
const TRAINER = "trainer";
const HEAD_TRAINER = "head-trainer";
const permissions = {
  getUsers: {
    all: [],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: [HEAD_TRAINER]
  },
  module1: {
    all: [TRAINER, TRAINEE],
    read: [HEAD_TRAINER, TRAINER, TRAINEE],
    write: [HEAD_TRAINER],
    delete: []
  },
  module2: {
    all: [TRAINEE],
    read: [HEAD_TRAINER, TRAINER, TRAINEE],
    write: [TRAINER],
    delete: [HEAD_TRAINER]
  }
};
export { TRAINEE, TRAINER, HEAD_TRAINER, permissions };

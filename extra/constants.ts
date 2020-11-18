const TRAINEE = "trainee";
const TRAINER = "trainer";
const HEAD_TRAINER = "head-trainer";
const permissions = {
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

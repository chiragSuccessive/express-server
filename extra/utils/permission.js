const TRAINEE = 'trainee' ;
const TRAINER = 'trainer';
const HEAD-TRAINER = 'head-trainer';

permissions = {
  getUsers: {
    all: [],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: [HEAD-TRAINER]
  },
  module1: {
    all: [TRAINER, TRAINEE],
    read: [HEAD-TRAINER, TRAINER, TRAINEE],
    write: [HEAD-TRAINER],
    delete: []
  },
  module2: {
    all: [TRAINEE],
    read: [HEAD-TRAINER, TRAINER, TRAINEE],
    write: [TRAINER],
    delete: [HEAD-TRAINER]
  }
};
function hasPermission(moduleName, role, permissionType) {
    if (permissions[moduleName] && permisssions[moduleName][permissionType] && permissions[moduleName][permissionType].includes(role)) {
      return true;
    } else {
      return false;
    }
}
hasPermission("getUsers", "trainee", "read");
hasPermission("module1", "trainer", "write");
hasPermission("module2", "head-trainer", "delete");

permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: ["head-trainer"]
  },
  module1: {
    all: ["trainer", "trainee"],
    read: ["head-trainer", "trainer", "trainee"],
    write: ["head-trainer"],
    delete: []
  },
  module2: {
    all: ["trainee"],
    read: ["head-trainer", "trainer", "trainee"],
    write: ["trainer"],
    delete: ["head-trainer"]
  }
};
function hasPermission(moduleName, role, permissionType) {
    if (permissions[moduleName] && permissions[moduleName][permissionType].includes(role)) {
      return true;
    } else {
      return false;
    }
}
hasPermission("getUsers", "trainee", "read");
hasPermission("module1", "trainer", "write");
hasPermission("module2", "head-trainer", "delete");

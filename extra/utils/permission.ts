import { permissions } from "../constants";
export default function hasPermission(moduleName, role, permissionType) {
  if (
    permissions[moduleName] &&
    permissions[moduleName][permissionType] &&
    permissions[moduleName][permissionType].includes(role)
  ) {
    return true;
  } else {
    return false;
  }
}

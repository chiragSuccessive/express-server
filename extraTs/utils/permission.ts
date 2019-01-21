import { permissions } from "../constants";
export default function hasPermission(moduleName:string, role:string, permissionType:string) :boolean {
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

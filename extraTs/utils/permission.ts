import { permissions } from "../constants";
export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string
): void {
  if (permissions[moduleName]["all" as string].includes(role)) {
    console.log("true");
  }
}

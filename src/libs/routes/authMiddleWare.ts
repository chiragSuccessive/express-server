import * as jwt from 'jsonwebtoken';
import configuration from "../../config/configuration";
import hasPermission from "./permissions";
export default (module, permissionType) => (req, res, next) => {
  const token = req.header('Authorization');
  const {key} = configuration;
  const userInfo = jwt.verify(token,key)
  // console.log(userInfo);

  if(!userInfo) {
    return next({error: "Unauthorized Access.", message: "User is not authorized", status:403});
  }
  // console.log((hasPermission(module,userInfo.role,permissionType)));

  if(!(hasPermission(module,userInfo.role,permissionType))) {
    return next({error: "Unauthorized Access", message: `${permissionType} permission not allowed`, status:403})
  }
  next();
}

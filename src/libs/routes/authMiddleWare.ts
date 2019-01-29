import * as jwt from 'jsonwebtoken';
import hasPermission from "./permissions";
export default (module, permissionType) => (req, res, next) => {
  const token = req.header('Authorization');
  const userInfo = jwt.verify(token,process.env.KEY)
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

import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import user from '../../repositories/user/UserRepository';
import hasPermission from './permissions';
export default (permissionType, module) => (req, res, next) => {
  const token = req.header('Authorization');
  const {key} = configuration;
  const userInfo = jwt.verify(token, key);
  console.log('userinfo', userInfo);
  if (! userInfo) {
    return next({error: 'Unauthorized Access', message: 'User is not authorized', status: 403});
  }
  // console.log((hasPermission(module,userInfo.role,permissionType)));

  user.read({id: userInfo.id}).then((users) => {
    if ( !users ) {
      return next({error: 'Unauthorized access', message: 'Permission denied', status: 400});
    }
  });
  if (!(hasPermission(module, userInfo.role, permissionType))) {
    return next({error: 'Unauthorized Access', message: `${permissionType} permission not allowed`, status: 403});
  }
  next();
};

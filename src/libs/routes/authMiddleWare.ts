import { verify } from 'jsonwebtoken';
import configuration from '../../config/configuration';
import user from '../../repositories/user/UserRepository';
import hasPermission from './permissions';
export default (permissionType, module) => (req, res, next) => {
try {
  const token = req.header('Authorization');
  const {key} = configuration;
  const userInfo = verify(token, key);
  if (! userInfo) {
    return next({error: 'Unauthorized Access', message: 'User is not authorized', status: 403});
  }
  user.read({_id: userInfo.id}).then((users) => {
    if ( !users ) {
      return next({error: 'Unauthorized access', message: 'Permission denied', status: 400});
    }
    else if (!(hasPermission(module, users.role, permissionType))) {
      return next({error: 'Unauthorized Access', message: `${permissionType} permission not allowed`, status: 403});
    }
    else {
      req.body.id = users.id;
      next();
    }
  });
} catch ( err ) {
  throw new Error(err);
  }
};

import * as bcrypt from 'bcrypt';
import { Router } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../config/configuration';
import successHandler from '../libs/routes/successHandler';
import validationHandler from '../libs/routes/validationHandler';
import user from '../repositories/user/UserRepository';
import validation from './trainee/validation';

const tokenRouter = Router();

try {
  tokenRouter.post('/', validationHandler(validation.postLogin), async (req, res, next) => {
    const { email, password} = req.body;
    if (! await user.read({email})) {
      return next({error: 'Unauthorized access', message: 'Permission denied - email is wrong', status: 400});
    }
    const fetched = await user.read({email});
    if (!bcrypt.compareSync(password, fetched.password)) {
      return next({error: 'Unauthorized access', message: 'Permission denied - password is wrong', status: 400});
    }
    res.send(successHandler('ok', 200, jwt.sign( fetched.toJSON(), config.key, {expiresIn: 900000})));
  });

} catch (err) {
  console.log(err);
}
export default tokenRouter ;

import * as bcrypt from 'bcrypt';
import config from '../config/configuration';
import user from '../repositories/user/UserRepository';
export default function seed() {
  console.log('in seed');
  user.count().then((res) => {
  if (res === 0) {
    const hashPassword = bcrypt.hashSync(config.password, 10);
    user.create(
      {
        email: 'head.trainer@email.com',
        id: '1',
        name: 'chirag',
        password: hashPassword,
        role: 'head-trainer',
      },
    );
    user.create(
      {
        email: 'trainer@email.com',
        id: '2',
        name: 'deepak',
        password: hashPassword,
        role: 'trainer',
      },
    );
  }
});
  // user.create({id:"3",name:"dslf"});
// user.read({id:"3"})
//  user.update({id:"3"},{name:"skdj"})
  //  user.delete({id:"3"});
}

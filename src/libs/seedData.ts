import user from '../repositories/user/UserRepository';
export default function seed() {
  console.log('in seed');
  user.count().then((res) => {
  if (res === 0) {
    user.create({id: '1', name: 'chirag', email: 'head.trainer@email.com', role: 'trainee'});
    user.create({id: '2', name: 'deepak', email: 'trainer@email.com', role: 'trainee'});
  }
});
  // user.create({id:"3",name:"dslf"});
// user.read({id:"3"})
//  user.update({id:"3"},{name:"skdj"})
  //  user.delete({id:"3"});
}

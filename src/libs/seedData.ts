import user from '../repositories/user/UserRepository';
export default function seed() {
  user.count().then((res) => {
  if (res === 0) {
    user.create({id: '1', name: 'chirag', email: 'head.trainer@email.com', role: 'head-trainer'});
    user.create({id: '2', name: 'deepak', email: 'trainer@email.com', role: 'trainer'});
  }
});
}

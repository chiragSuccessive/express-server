import { validateEmail } from './helpers'
export default function validateUsers(users ) {
  let validusers = [],
    invalidusers = [],
    validcount = 0,
    invalidcount = 0;
  users.forEach(function(user  , index ) :void {
    const { traineeEmail, reviewerEmail } = user;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
      validusers.push(`user ${index + 1}`);
      validcount++;
    } else {
      invalidusers.push(`user ${index + 1}`);
      invalidcount++;
    }
  });
  console.log(` ${validcount} valid users are ${validusers}`);
  console.log(` ${invalidcount} invalid users are ${invalidusers}`);
}

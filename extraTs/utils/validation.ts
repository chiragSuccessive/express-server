import { IUsers } from "./../../extraTs/interfaces";
import { validateEmail } from "./helpers";
export default function validateUsers(users: IUsers[]): void {
  let validusers: string[] = [],
    invalidusers: string[] = [],
    validcount: number = 0,
    invalidcount: number = 0;
  users.forEach(function(user: IUsers, index: number): void {
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

function validateEmail(email) {
  let re = /^\w+([\.-]?\w+)*@(successive.tech)/;
  return re.test(email);
}
function validateUsers(users) {
  let validusers = [],
    invalidusers = [],
    validcount = 0,
    invalidcount = 0;
  users.forEach(function(user, index) {
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
users = [
  {
    // user 1
    traineeEmail: "chirag.arora@successive.tech",
    reviewerEmail: "inderjeet.singh@successive.tech"
  },
  {
    // user 2
    traineeEmail: "anytrainee@successive.tech",
    reviewerEmail: "anyreviewer@successive.tech"
  },
  {
    // user 3
    traineeEmail: ".anytrainee@successive.tech",
    reviewerEmail: "anyreviewer@successive.tech"
  },
  {
    // user 4
    traineeEmail: "anytrainee@successive.tech",
    reviewerEmail: "#anyreviewer@successive.tech"
  }
];
validateUsers(users);

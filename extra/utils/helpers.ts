export function validateEmail(email) {
  let re = /^\w+([\.-]?\w+)*@(successive.tech)/;
  return re.test(email);
}

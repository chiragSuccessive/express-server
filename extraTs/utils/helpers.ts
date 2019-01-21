export function validateEmail(email:string):boolean {
  let re = /^\w+([\.-]?\w+)*@(successive.tech)/;
  return re.test(email);
}

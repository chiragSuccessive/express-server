export default function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let oneLinePattern = "";
    for (let space = n - i; space >= 1; space--) {
      oneLinePattern += " ";
    }
    for (let row = 1; row <= i; row++) {
      oneLinePattern += "* ";
    }
    console.log(oneLinePattern);
  }
}

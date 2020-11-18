export default function(n) {
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
  for (let i = n; i >= 1; i--) {
    let oneLinePattern = "";
    for (let space = 1; space <= n - i; space++) {
      oneLinePattern += " ";
    }
    for (let row = i; row >= 1; row--) {
      oneLinePattern += "* ";
    }
    console.log(oneLinePattern);
  }
}

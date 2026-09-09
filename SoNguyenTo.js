function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) if (n % i == 0) return false;
  return true;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nhập một số: ", (num) => {
  console.log(isPrime(Number(num)));
  readline.close();
});

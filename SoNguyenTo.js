// Code này chỉ chạy trên web f12
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) if (n % i == 0) return false;
  return true;
}

let num = 1;

do {
  num = Number(prompt("Nhập một số (nhập 0 để dừng):"));
  if (num !== 0) console.log(isPrime(num));
} while (num !== 0);

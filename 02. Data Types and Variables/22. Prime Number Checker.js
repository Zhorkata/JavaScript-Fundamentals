function prime(num) {
  let isPrime = true;

  if (num <= 1) {
    isPrime = false;
  } else if (num > 1) {
    for (let divisor = 2; divisor < num; divisor++) {
      if (num % divisor === 0) {
        isPrime = false;
        break;
      }
    }
  }
  console.log(isPrime);
}
prime(8);

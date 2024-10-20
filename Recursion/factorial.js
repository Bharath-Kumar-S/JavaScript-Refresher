const factorial = (n) => {
  if (n === 1) {
    // base case
    return 1;
  } else {
    // recursive
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));

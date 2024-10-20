const recursiveFunction = (x) => {
  if (x <= 0) {
    //base case
    console.log("Base case reached");
  } else {
    // Recursive call
    console.log(x);
    recursiveFunction(x - 1);
  }
};

recursiveFunction(5);

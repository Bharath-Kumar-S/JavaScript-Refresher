const sumOfMapValues = (numberMap) => {
  let sum = 0;
  for (let value of numberMap.values()) {
    sum += value;
  }
  return sum;
};

console.log(
  sumOfMapValues(
    new Map([
      ["a", 5],
      ["b", 10],
      ["c", 15],
    ])
  )
);

const frequentUser = (visits) => {
  const userMap = new Map();
  for (let visit of visits) {
    let count = userMap.get(visit) || 0;
    if (count <= visits.length / 4) {
      userMap.set(visit, count + 1);
    } else {
      return visit;
    }
  }
  return -1;
};

console.log(`Frequent User: ${frequentUser([1, 2, 3, 1, 2, 3, 1, 2, 3, 1])}`); // Expected output: 1
console.log(
  `Frequent User: ${frequentUser([5, 0, 5, 0, 5, 0, 5, 0, 1, 1, 1, 1, 1])}`
); // Expected output: 5
console.log(
  `Frequent User: ${frequentUser([3, 2, 2, 1, 3, 2, 3, 0, 0, 1, 1, 4])}`
); // Expected output: -1

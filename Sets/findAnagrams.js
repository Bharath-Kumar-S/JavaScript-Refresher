function sortCharacters(input) {
  return input.split("").sort().join("");
}

function findAnagrams(array1, array2) {
  let count = 0;
  const arr1Set = new Set(array1);
  array2.forEach((a) => {
    if (arr1Set.has(a)) {
      count += a.length;
    }
  });
  return count;
}

let array1 = ["cat", "dog", "tac", "god", "act"].map(sortCharacters);
let array2 = ["tca", "ogd", "atc", "taco"].map(sortCharacters);
let result = findAnagrams(array1, array2);
console.log(result); // output: 9

const arr = [3, 2, 4, 5, 1, 6];

// Sort ascending
console.log(arr.sort((a, b) => a - b));
// Sorts the array in ascending order

// Sort descending
console.log(arr.sort((a, b) => b - a));
// Sorts the array in descending order

// Map method
console.log(arr.map((e) => e + 10));
// Creates a new array by adding 10 to each element

// Reduce method
console.log(arr.reduce((acc, curr) => acc + curr, 0));
// Sums all elements of the array

// Filter method
console.log(arr.filter((e) => e % 2 === 0));
// Creates a new array with only the even numbers

// Find method
console.log(arr.find((e) => e % 2 === 0));
// Finds the first even number in the array

// Every method
console.log([2, 4, 6].every((e) => e % 2 === 0));
// Checks if all elements are even (returns true)
console.log([2, 4, 5].every((e) => e % 2 === 0));
// Checks if all elements are even (returns false)

// Some method
console.log([1, 3, 5].some((e) => e % 2 === 0));
// Checks if at least one element is even (returns false)

// ForEach method
arr.forEach((e) => console.log(e));
// Iterates over each element in the array and logs it

// Includes method
console.log(arr.includes(3));
// Checks if the array includes the value 3

// IndexOf method
console.log(arr.indexOf(3));
// Returns the first index of the value 3 in the array

// LastIndexOf method
console.log(arr.lastIndexOf(3));
// Returns the last index of the value 3 in the array

// Join method
console.log(arr.join("-"));
// Joins all elements into a string with "-" as separator

// Slice method
console.log(arr.slice(2, 4));
// Returns a shallow copy of the array from index 2 to 4 (excluding 4)

// Splice method
console.log(arr.splice(2, 0, 4));
// Adds the value 4 at index 2 without removing any element
console.log(arr);
// Logs the modified array

// ToString method
console.log(arr.toString());
// Converts the array to a string

// ValueOf method
console.log(arr.valueOf());
// Returns the array itself

// Keys method
console.log(Object.keys(arr));
// Returns an array of the array's keys (indices)

// Entries method
console.log(Object.entries(arr));
// Returns an array of [index, value] pairs

// Concat method
console.log(arr.concat([7, 8, 9]));
// Merges the array with another array

// Flat method
console.log([1, 2, [3, 4]].flat());
// Flattens the nested array into a single-level array

// FlatMap method
console.log([1, 2, [3, 4]].flatMap((e) => e));
// Flattens the array and applies a function

// IsArray method
console.log(Array.isArray(arr));
// Checks if the value is an array

// From method
console.log(Array.from("hello"));
// Creates an array from a string

// Reverse method
console.log(arr.reverse());
// Reverses the order of the elements in the array

// ReduceRight method
console.log(
  arr.reduceRight((acc, curr) => acc + curr),
  0
);
// Applies reduce starting from the last element of the array

// ToLocaleString method
console.log(arr.toLocaleString());
// Converts the array to a localized string

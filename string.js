const str = "Hello, World!";

// 1. length
console.log(str.length);
// Outputs: 13 (number of characters in the string)

// 2. toUpperCase
console.log(str.toUpperCase());
// Outputs: "HELLO, WORLD!" (converts the string to uppercase)

// 3. toLowerCase
console.log(str.toLowerCase());
// Outputs: "hello, world!" (converts the string to lowercase)

// 4. charAt
console.log(str.charAt(1));
// Outputs: "e" (character at index 1)

// 5. indexOf
console.log(str.indexOf("o"));
// Outputs: 4 (first occurrence of 'o' is at index 4)

// 6. lastIndexOf
console.log(str.lastIndexOf("o"));
// Outputs: 8 (last occurrence of 'o' is at index 8)

// 7. includes
console.log(str.includes("World"));
// Outputs: true (checks if 'World' is in the string)

// 8. startsWith
console.log(str.startsWith("Hello"));
// Outputs: true (checks if the string starts with 'Hello')

// 9. endsWith
console.log(str.endsWith("!"));
// Outputs: true (checks if the string ends with '!')

// 10. slice
console.log(str.slice(0, 5));
// Outputs: "Hello" (extracts the substring from index 0 to 5, not including 5)

// 11. substring
console.log(str.substring(0, 5));
// Outputs: "Hello" (similar to slice but doesn't accept negative indices)

// 12. substr
console.log(str.substr(7, 5));
// Outputs: "World" (starts from index 7 and extracts 5 characters)

// 13. replace
console.log(str.replace("World", "Everyone"));
// Outputs: "Hello, Everyone!" (replaces 'World' with 'Everyone')

// 14. split
console.log(str.split(", "));
// Outputs: ["Hello", "World!"] (splits the string into an array using ', ' as a separator)

// 15. trim
console.log("   Hello, World!   ".trim());
// Outputs: "Hello, World!" (removes whitespace from both ends of the string)

// 16. repeat
console.log("Hi! ".repeat(3));
// Outputs: "Hi! Hi! Hi! " (repeats the string 3 times)

// 17. concat
console.log(str.concat(" How are you?"));
// Outputs: "Hello, World! How are you?" (concatenates strings)

// 18. padStart
console.log("5".padStart(3, "0"));
// Outputs: "005" (pads the string to length 3 with '0' at the start)

// 19. padEnd
console.log("5".padEnd(3, "0"));
// Outputs: "500" (pads the string to length 3 with '0' at the end)

// 20. toString
console.log((123).toString());
// Outputs: "123" (converts the number to a string)

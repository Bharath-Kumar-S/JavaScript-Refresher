const color = new Set();

// add item to set
color.add("blue");

// size of set
console.log(color.size);

// check if exist in set
console.log(color.has("blue"));

// delete an item
color.delete("blue");

color.add("blue");

console.log(color);

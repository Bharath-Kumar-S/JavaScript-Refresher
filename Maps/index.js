const myMap = new Map();

// add pairs
myMap.set("🍓", 10);
myMap.set("🍑", 15);
myMap.set("🍍", 2);

// using get
console.log(myMap.get("🍓"));
console.log(myMap.get("🍍"));
console.log(myMap.get("🍑"));

// check for a key
console.log(myMap.has("🍓"));

// delete a key
myMap.delete("🍓");
console.log(myMap.has("🍓"));

// check size
console.log(myMap.size);

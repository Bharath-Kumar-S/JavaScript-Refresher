const createWordIndex = (sentence) => {
  let index = new Map();
  if (sentence !== "") {
    let words = sentence.split(" ");
    // implement this
    for (let word of words) {
      let count = index.get(word) || 0;
      index.set(word, count + 1);
    }
  }
  return index;
};

let sentence1 = "Hello Hello world world world";
let index1 = createWordIndex(sentence1);
console.log(index1); //Should print: { hello: 2, world: 3 }

let sentence2 = "";
let index2 = createWordIndex(sentence2);
console.log(index2); //Should print {} as the sentence is empty.

let sentence3 = "Quick Quick brown fox jumps over the lazy dog";
let index3 = createWordIndex(sentence3);
console.log(index3); //Should print: { quick: 2, brown: 1, fox: 1, jumps: 1, over: 1, the: 1, lazy: 1, dog: 1 }

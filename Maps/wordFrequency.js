const countWordFreq = (text = "") => {
  let words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);
  let frequencyMap = new Map();
  for (let word of words) {
    let count = frequencyMap.get(word) || 0;
    frequencyMap.set(word, count + 1);
  }

  return frequencyMap;
};

console.log(
  countWordFreq(
    "abc ght dfj gweg ujtryj fwv fwb fwgwet gwtg geg gweg rwg gerg reg rgwegeg gweg eg gg gwgwg tgwtgwert"
  )
);

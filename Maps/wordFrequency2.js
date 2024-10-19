const text =
  "Cosmo,is,an,an,incredible,technical,companion,with,very,strong,skills,in,Algorithms,and,Data,Structures,and,a,great,teacher,for,technical,interviews.";
const wordCount = new Map();
const words = text.split(",");

// TODO: iterate through words and count frequencies;
for (let word of words) {
  let count = wordCount.get(word) || 1;
  wordCount.set(word, count);
}

console.log(wordCount);

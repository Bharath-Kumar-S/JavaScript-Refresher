const getFruit = async (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓",
  };

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return fruits[name];
};

const makeSmoothie = async () => {
  const a = await getFruit("pineapple");
  const b = await getFruit("strawberry");

  return [a, b];
};

const makeSmoothie2 = async () => {
  const a = getFruit("pineapple");
  const b = getFruit("strawberry");

  const smoothie = await Promise.all([a, b]);
  return smoothie;
};

(async () => {
  const smoothie = makeSmoothie();
  const smoothie2 = makeSmoothie2();
  console.log(await Promise.all([smoothie2, smoothie]));
})();

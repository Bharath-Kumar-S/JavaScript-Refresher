const getFruit = async (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓",
  };

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return fruits[name];
};

const fruitLoop = async () => {
  for await (const fruit of Array.from(["pineapple", "peach", "strawberry"])) {
    console.log(await getFruit(fruit));
  }
};

fruitLoop();

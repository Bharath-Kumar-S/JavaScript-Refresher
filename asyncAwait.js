const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async!!"), 2000)
      : reject(new Error("Error!"));
  });
};

(async () => {
  let value = await asyncFunction();
  console.log(value);
})();

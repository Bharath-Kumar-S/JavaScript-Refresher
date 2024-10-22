let mock = () => {
  let t = 0;
  return {
    timer: () => {
      if (t <= 5) {
        t += 1;
        return "OK!";
      } else {
        throw new Error("No!");
      }
    },
  };
};

const mockFn = mock();
let intervalId = setInterval(() => {
  try {
    console.log(mockFn.timer());
  } catch (error) {
    console.error(error);
    clearInterval(intervalId);
    console.log("timer cleared");
  }
}, 500);

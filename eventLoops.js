console.log("1st log"); //sync

setTimeout(() => {
  console.log("2nd log"); //async
}, 0);

Promise.resolve().then(() => {
  console.log("3rd log"); //async
});

console.log("4th log"); //sync

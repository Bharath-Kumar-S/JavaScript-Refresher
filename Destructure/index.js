// Object representing a flyer
const flyer = {
  type: "drone",
  propellers: 4,
  maxSpeed: "60km/h",
};

// destructure the object to extract maxSpeed and other properties
const { maxSpeed, ...remaining } = flyer;

// using spread to create new updated flyer
const updatedFlyer = { ...remaining, maxSpeed: "120km/h" };

console.log(flyer);
console.log(updatedFlyer);

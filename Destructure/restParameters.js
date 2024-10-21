// Function to list ships in the fleet using ES6 Rest Parameters
const assembleFleet = (...spacecrafts) => {
  return spacecrafts.join(", ");
};

// List of spacecraft types for our Cosmos and Vehicles scenario
const fleet = assembleFleet(
  "Shuttle",
  "Rover",
  "Capsule",
  "Starship",
  "Cargo Ship"
);

console.log(fleet);

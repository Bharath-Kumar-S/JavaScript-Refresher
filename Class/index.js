class Dog {
  constructor(name) {
    this._name = name;
  }

  bark() {
    return `${this._name} says woof!`;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value) {
      this._name = value;
    } else {
      console.log("Error: Name cannot be empty");
    }
  }
}

// In object-oriented programming, an "instance" is an object created from a specific class.
// We can create a new instance in JavaScript using the new keyword:

let myDog = new Dog("Spot");
console.log(myDog.name);
console.log(myDog.bark());
console.log(myDog.name);
myDog.name = "";
console.log(myDog.name);
myDog.name = "Buddy";
console.log(myDog.name);

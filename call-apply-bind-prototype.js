const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));

console.log(person.fullName.apply(person1));
console.log(person.fullName.apply(person2));

/************************************************
 * passing args
 */

const obj = {
  name: "John",
};

const greeting = function (a, b) {
  return "Welcome " + this.name + " to " + a + " " + b;
};

console.log(greeting.call(obj, "How are you?")); // undefined for seconf function arg
console.log(greeting.call(obj, "Hello", "How are you?"));

console.log(greeting.apply(obj, ["How are you?"])); // undefined for seconf function arg
console.log(greeting.apply(obj, ["Hello", "How are you?"]));

const arr = [5, 3, 8, 1, 2, 9];

/******************************
 * Math.max with apply
 */

console.log(Math.max.apply(null, arr));

/******************************
 * Math.min with apply
 */

console.log(Math.min.apply(null, arr));

/****
 * Bind method
 */

const bound = greeting.bind(obj);
console.log(bound("Hello", "How are you?"));

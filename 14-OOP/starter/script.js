'use strict';

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const ziad = new Person('ziad', 2003);
console.log(ziad);

const ali = new Person('ali', 2004);
const mohammed = new Person('mohammed', 2001);
console.log(ali, mohammed);

console.log(ziad instanceof Person);

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

ziad.calcAge();

console.log(ziad.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(ziad)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.nationality = 'Egyptian';
console.log(ziad.nationality);

console.log(ziad.hasOwnProperty('firstName'));
console.log(ziad.hasOwnProperty('nationality'));

console.log(Person.prototype.__proto__.isPrototypeOf(Person)); // true
console.log(Person.prototype.__proto__.isPrototypeOf(Object)); // true
console.log(Person.prototype.constructor === Person); // true

console.log(ziad.__proto__);
console.log(ziad.__proto__.__proto__);
console.log(ziad.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.dir(x => x + 1);
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();

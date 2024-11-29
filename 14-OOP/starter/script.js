'use strict';

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   return 2024 - this.birthYear;
  // };
};

const ziad = new Person('Ziad', 2003);
console.log(ziad);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2005);
const jack = new Person('Jack', 2010);
console.log(matilda, jack);

console.log(ziad instanceof Person);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

ziad.calcAge();

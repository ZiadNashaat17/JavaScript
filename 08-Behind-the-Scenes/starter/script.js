'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, you're a millenial, ${firstName}`;
      console.log(str);

      function addNumbers() {
        return a + b;
      }
    }
    // console.log(str); this would cause an error
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Ziad';
calcAge(1990);
*/

/*
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(2003);

var firstName = 'Ziad';

const ziad = {
  firstName: 'Ziad',
  year: 2003,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

ziad.greet();
ziad.calcAge();
*/
/*
let age = 20;
let oldAge = age;
age = 21;
console.log(age);
console.log(oldAge);

const me = {
  firstName: 'Ziad',
  age: 21,
};
const friend = me;
friend.age = 22;

console.log('Friend', friend);
console.log('Me', me);
*/

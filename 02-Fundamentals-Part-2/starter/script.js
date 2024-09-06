"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive now.");

// const interface = "Audio";
// const private = 335;
*/

/*
// Lecture 30 | Functions
function logger() {
  console.log("My name is Ziad");
}

// calling/running/invoking function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 2);
console.log(appleOrangeJuice);

function testingDefaultArgs(age = 20, name = "Unkown") {
  console.log(`Hello, my name is ${name} and I'm ${age} years old!`);
}

testingDefaultArgs(21, "Ziad");

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const firstCountry = describeCountry("Egypt", 115, "Cairo");
const secondCountry = describeCountry("Finland", 6, "Helsinki");
const thirdCountry = describeCountry("Saudi Arabia", 30, "Riyadh");

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
*/

/*
// Lecture 31 | Function Delarations vs Expressions
// function declaration can be invoked before being declared, but function expression can't be invoked before being declared. 
// Function declaration
function calcAge1(birthYear) {
  return 2024 - Number(birthYear);
}

const age1 = calcAge1(2003);

// Function expression (Expressions return values)
const calcAge2 = function (birthYear) {
  return 2024 - Number(birthYear);
};

const age2 = calcAge2(2003);

console.log(age1, age2);

function percentageOfWorld1(country, population) {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  } of the world population.`;
}

const firstCountry = percentageOfWorld1("Egypt", 115);
const secondCountry = percentageOfWorld1("China", 1441);
const thirdCountry = percentageOfWorld1("Saudi Arabia", 30);

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);

const percentageOfWorld2 = function (country, population) {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  } of the world population.`;
};

const country1 = percentageOfWorld1("Egypt", 115);
const country2 = percentageOfWorld1("China", 1441);
const country3 = percentageOfWorld1("Saudi Arabia", 30);

console.log(country1);
console.log(country2);
console.log(country3);
*/
/*
// Lecture 32 | Arrow Functions
const calcAge3 = (birthYear) => 2024 - birthYear;

const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, name) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;

  //   return retirement;
  return `${name} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2003, "Ziad"));
console.log(yearsUntilRetirement(2001, "Mohamed"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const printName = (firstName, lastName, age) =>
  console.log(
    `Hello, my first name is ${firstName} and my last name is ${lastName} and I'm ${age} years old.`
  );

const getMaximum = function (num1, num2) {
  if (num1 > num2) return num1;
  if (num2 > num1) return num2;
};

const isMaximumEven = function (num1, num2) {
  const maximum = getMaximum(num1, num2);

  return maximum % 2 === 0;
};

// console.log(isMaximumEven(5, 8));
// printName("Ziad", "Nashaat", 21);

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  return retirement;
};

console.log(yearsUntilRetirement(1978, "Omar"));
console.log(yearsUntilRetirement(1950, "Muhammed"));
*/

/*
// Coding Challenge #1
const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`);
  } else {
    console.log("No team wins...");
  }
};

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

checkWinner(avgDolphins1, avgKoalas1);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

checkWinner(avgDolphins2, avgKoalas2);

console.log("Hello");
*/

/*
// Lecure 36 | Arrays
const friend1 = "Omar";
const friend2 = "Ali";
const friend3 = "Muhammed";

const friends = ["Omar", "Ali", "Muhammed"];

console.log(friends);

const y = new Array(2002, 2003, 2005, 2010);

console.log(y[0], y[3]);
console.log(friends.length);

friends[2] = "Ahmed";
console.log(friends);

const firstName = "Ziad";
const ziad = [firstName, "Nashaat", 2024 - 2003, "Student", friends];

console.log(ziad);
console.log(ziad.length);

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const years = [2001, 1990, 1988, 2010, 2005];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/
/*
// Lecture 37 | Array Methods
const friends = ["Omar", "Ali", "Muhammed"];

// Add element
friends.push("Ahmed"); // adds new element to the end
console.log(friends);

friends.unshift("Othman"); // adds new element in the beginning
console.log(friends);

// Delete element
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Ali"));
console.log(friends.indexOf("Othman"));

console.log(friends.includes("Ali"));
console.log(friends.includes("Othman"));

if (friends.includes("Ali")) {
  console.log("You have a friend called Ali!");
}
*/
/*
// Coding Callenge #2
const calcTip = function (billValue) {
  const tipValue =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  return tipValue;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);
*/

// const ziadArray = [
//   "Ziad",
//   "Nashaat",
//   2024 - 2003,
//   "Student",
//   ["Ali", "Muhammed", "Seif"],
// ];

/*
const ziadObject = {
  firstName: "Ziad",
  lastName: "Nashaat",
  age: 2024 - 2003,
  job: "Student",
  friends: ["Ali", "Muhammed", "Seif"],
};

console.log(ziadObject);
console.log(ziadObject.firstName);
console.log(ziadObject["firstName"]);

const interestedIn = prompt(
  "What do you want to know about Ziad? Choose between firstName, lastName, age, job, and friends"
);

if (ziadObject[interestedIn]) {
  console.log(ziadObject[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// Adding properties to the object
ziadObject.location = "Egypt";
ziadObject["university"] = "October 6 University";

console.log(ziadObject);

const ziad = `${ziadObject.firstName} has ${ziadObject.friends.length}, and his best friend is called ${ziadObject.friends[0]}`;

console.log(ziad);
*/

/*
const ziadObject = {
  firstName: "Ziad",
  lastName: "Nashaat",
  birthYear: 2003,
  job: "Computer Science Student",
  friends: ["Ali", "Muhammed", "Seif"],
  hasDriverLicense: false,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    console.log(
      `${this.firstName} is a ${this.calcAge()}-year old ${
        this.job
      }, and he does ${
        this.hasDriverLicense === true ? "" : "not"
      } have a driver's license.`
    );
  },
};

// console.log(ziadObject["calcAge"](2003));
// console.log(ziadObject.calcAge(ziadObject.birthYear));

console.log(ziadObject.calcAge());

console.log(ziadObject.age);
console.log(ziadObject.age);
console.log(ziadObject.age);

ziadObject.getSummary();
*/

/*
// Coding Challenge #3
const markObject = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johnObject = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const higherBMI =
  markObject.calcBMI() > johnObject.calcBMI()
    ? `${markObject.fullName}'s BMI (${markObject.calcBMI()}) is higher than ${
        johnObject.fullName
      }'s (${johnObject.calcBMI()})!`
    : `${johnObject.fullName}'s BMI (${johnObject.calcBMI()}) is higher than ${
        markObject.fullName
      }'s (${markObject.calcBMI()})!`;

console.log(higherBMI);
*/

/*
// Lecture 43 | Iteration the for Loop

// for loop keeps running while condition is TRUE
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}

for (let i = 0; i < 10; i++) {
  console.log(`Iteration ${i}`);
}
*/

/*
// Lecture 44 | Looping Arrays, Breaking and Continuing

const ziadArray = [
  "Ziad",
  "Nashaat",
  2024 - 2003,
  "CS Student",
  ["Muhammed", "Ali", "Seif"],
];
const types = [];

for (let i = 0; i < ziadArray.length; i++) {
  console.log(ziadArray[i], typeof ziadArray[i]);

  // types[i] = typeof ziadArray[i];
  types.push(typeof ziadArray[i]);
}

console.log(types);

const years = [2000, 1990, 2004, 2016, 1988];
const ages = [];

for (let i = 0; i < years.length; i++) {
  const currentYear = 2024;
  ages.push(currentYear - years[i]);
}

console.log(years, ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < ziadArray.length; i++) {
  if (typeof ziadArray[i] !== "string") continue;

  console.log(ziadArray[i], typeof ziadArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < ziadArray.length; i++) {
  if (typeof ziadArray[i] === "number") break;

  console.log(ziadArray[i], typeof ziadArray[i]);
}
*/

/*
// Lecture 45 | Looping Backwards and Loops in Loops
const ziadArray = [
  "Ziad",
  "Nashaat",
  2024 - 2003,
  "Student",
  ["Ali", "Muhammed", "Seif"],
  true,
];

for (let i = ziadArray.length - 1; i >= 0; i--) {
  console.log(i, ziadArray[i]);
}

for (let excersice = 1; excersice <= 3; excersice++) {
  console.log(`------Starting Excersice ${excersice}-------`);
  for (let rep = 1; rep <= 10; rep++) {
    console.log(`Repetition ${rep} in excersice ${excersice}`);
  }
}
*/

/*
// Lecture 46 | The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

console.log(dice);

while (dice !== 6) {
  console.log(dice);

  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("Loop is about to end...");
}
*/

// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (billValue) {
  const tipValue =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  return tipValue;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(`Average of bills: ${calcAverage(bills)}`);
console.log(`Average of tips: ${calcAverage(tips)}`);
console.log(`Average of totals: ${calcAverage(totals)}`);

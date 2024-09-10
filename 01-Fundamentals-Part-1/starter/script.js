/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Ziad";
let secondName = "Nashaat";

console.log(40);
console.log(firstName);
console.log(secondName);

console.log(40 + 20 - 8 + 1);

let myFirstJob = "Programmer";
let mySecondJog = "Engineer";

console.log(myFirstJob);
console.log(mySecondJog);

// Lecture 8 Assignment

let country = "Egypt";
let continent = "Africa";
let population = "120";

console.log(country);
console.log(continent);
console.log(population);
*/

/*

// Data Types Lecture

let javaScriptIsFun = true;

console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Ziad");

javaScriptIsFun = "YES!";

console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let nullVariable = null;
console.log(typeof nullVariable);

// Lecture 9 Assignment

let country = "Egypt";
let continent = "Africa";
let population = "120";
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
// Lecture 10

let age = 20;
age = 21;

const birthYear = 2003;
// birthYear = 2004; this will cause a TypeError

var lastName = "Nashaat";

// Lecture 10 Assignment

const country = "Egypt";
const continent = "Africa";
let population = "120";
const isIsland = false;
const language = "Arabic";

// country = "Saudi Arabia"; this will cause error
population = "125";
// language = "English"; this will cause error
*/

/*
// Lecture 11

// Math operators
const currentYear = 2034;
const ageZiad = currentYear - 2003;
const ageMalek = currentYear - 2017;
console.log(ageZiad, ageMalek);

console.log(ageZiad * 2, ageMalek / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Ziad";
const lastName = "Nashaat";

console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
console.log(x);

x += 10;
console.log(x);

x *= 4;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

// Comparison operators
console.log(ageZiad > ageMalek);
console.log(ageMalek >= 18);

const isMalekFullAge = ageMalek >= 18;
console.log(isMalekFullAge);

console.log(currentYear - 2003 > currentYear - 2017);

// Lecture 11 Assignment

let population = 120;
const populationOfEachHalf = population / 2;

console.log(populationOfEachHalf);

population++;
console.log(population);

const isMoreThanFinland = population > 6;
console.log(isMoreThanFinland);

const isLessThanAverage = population < 33;
console.log(isLessThanAverage);

const description =
  "Egypt is in Africa, and its 120 million people speaks Arabic";
console.log(description);
*/

/*
// Lecture 12

const currentYear = 2034;
const ageZiad = currentYear - 2003;
const ageMalek = currentYear - 2017;

console.log(currentYear - 2003 > currentYear - 2017);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageZiad + ageMalek) / 2;
console.log(ageZiad, ageMalek, averageAge);
*/

/*
// Coding Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(massMark, heightMark);
console.log(massJohn, heightJohn);
console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);
*/

/*
// Lecture 14

const firstName = "Ziad";
const lastName = "Nashaat";
const job = "Software Engineer";
const birthYear = 2003;
const currentYear = 2024;

const ziad =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " year old " +
  job +
  "!";

console.log(ziad);

const ziadNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}!`; //  Template Literals

console.log(ziadNew);
console.log(`Just a regular string...`);

console.log(
  "Multiple \n\
Lines \n\
String"
);

console.log(`Multiple
lines
String`);

// Lecture 14 Assignment

const country = "Egypt";
const continent = "Africa";
let population = "120";
const isIsland = false;
const language = "Arabic";

const description = `${country} is in ${continent}, and its ${population} million people speaks ${language}`;

console.log(description);
*/

/*
// Lecture 15

const age = 15;

if (age >= 18) {
  console.log(`Ziad can start driving`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Ziad can't start driving. Wait another ${yearsLeft} years`);
}

const birthYear = 1990;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// Lecture 15 Assignment

const country = "Egypt";
const population = 120;

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  const belowAverage = 33 - population;
  console.log(
    `${country}'s population is ${belowAverage} million below average.`
  );
}
*/

/*
// Coding Challenge #2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(`Mark's mass: ${massMark}, Mark's height: ${heightMark}`);
console.log(`John's mass: ${massJohn}, John's heihgt: ${heightJohn}`);
// console.log(BMIMark, BMIJohn);
// console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`
  );
} else {
  console.log(
    `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`
  );
}
*/

/*
// lecture 17

// type conversion
const inputYear = "2003";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Ziad"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 21 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "10");

let n = "1" + 1; // '11'
n = n - 1; // 11 - 1 = 10
console.log(n);
*/

/*
// Lecture 18

// 5 falsy values: 0, '', undefined, null, NaN. Anything else is truthy value
console.log(Boolean("0")); // falsy value
console.log(Boolean("Ziad")); // truthy value
console.log(Boolean(" ")); // truthy value. The string is not empty 
*/

// Lecture 19
/* 
=== is the strict equality operator. It's strict because it does not perform type coercion. So, it only returns true when both values are exactly the same.
== the loose equality operator. It's loose because it does type coercion unlike the strict equality operator.

'18' == 18 -> true
'18' === 18 -> false
*/
/*
const age = "18";

if (age === 18) console.log("You just became an adult! (Strict)");
if (age == 18) console.log("You just became an adult! (Loose)");

const favouriteNumber = Number(prompt("What's your favourite number?"));
console.log(favouriteNumber);

if (favouriteNumber === 18) {
  console.log("Cool! 18 is a great number!");
} else if (favouriteNumber === 9) {
  console.log("9 is also greate!");
} else {
  console.log("Number is neither 18 nor 9");
}

if (favouriteNumber !== 18) {
  console.log("Number is not 18!");
}
// Lecture 19 Assignment

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than one!");
} else {
  console.log("No borders");
}
*/
/*
// Lecture 21

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const isTired = false;

console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Ziad is able to dirve");
} else {
  console.log("Someone else should drive");
}
*/
/*
// Coding Challegne #3
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;

console.log(
  `Dolphins average score: ${averageDolphins}, Koalas average score ${averageKoalas}.`
);

// if (averageDolphins > averageKoalas) {
//   console.log("The winner is Dolphins team!!!");
// } else if (averageDolphins < averageKoalas) {
//   console.log("The winner is Koalas team!!!");
// } else {
//   console.log("Draw!");
// }

const minimumScore = 100;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("The winner is Dolphins team!!!");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log("The winner is Koalas team!!!");
} else if (
  averageDolphins === averageKoalas &&
  averageDolphins >= 100 &&
  averageKoalas >= 100
) {
  console.log("Draw!");
} else {
  console.log("No winner!!");
}
*/
/*
// Lecture 23

const day = "sunday";

switch (day) {
  case "monday":
    console.log("Monday");
    break;
  case "sunday":
    console.log("Sunday");
    break;
  case "tuesday":
  case "wednesday":
    console.log("Tuesday & Wednesday");
    break;
  case "thursday":
    console.log("Thursday");
    break;
  case "friday":
    console.log("Friday");
    break;
  case "saturday":
    console.log("Saturday");
    break;
  default:
    console.log("Wrong day input!!");
    break;
}

if (day === "sunday") {
  console.log("sunday");
} else if (day === "monday") {
  console.log("monday");
} else if (day === "tuesday" || day === "wednesday") {
  console.log("tuesday & wednesday");
} else if (day === "thursday") {
  console.log("Thursday");
} else if (day === "friday") {
  console.log("friday");
} else if (day === "saturday") {
  console.log("saturday");
} else {
  console.log("Invalid day input");
}
*/
/*
// Lecture 24

const age = 21;
const fullAge = age >= 18 ? true : false;

console.log(fullAge);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/
/*
// Coding Challegne #4
const bill = Number(prompt("Enter the bill value."));
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill cost is ${bill}, and the tip cost ${tip} and the total cost (bill + tip) is ${
    bill + tip
  }.`
);
*/

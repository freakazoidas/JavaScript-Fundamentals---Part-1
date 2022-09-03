// console.log("test");

// let = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1923;
// // const job;
// var job = "rogrammer";
// job = "tester";

// lasTane = "peckus";
// console.log(lasTane);
// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, Math.round((ageJonas / 6) * 10) / 10, 2 ** 3);
// // auksciau padauginta is 10, tada suapvalinta, tada padalinta is 10 tam, kad butu vienas skaicius po kablelio
// const firstName = "Mantas";
// const lastName = "Peckus";
// console.log(firstName + " " + lastName);
// console.log(typeof firstName, typeof lastName);
// // Assigment operators
// let x = 10 + 5; // x = 15
// x += 10; // x = x + 15 = 25
// x *= 4; // x= x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);
// // comparison operators
// console.log(ageJonas > ageSarah); // >,<,<+, >=
// console.log(ageSarah >= 18);
// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; //x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const markBmi = 20;
// const johnBMI = 25;
// const markHigherBMI = johnBMI > markBmi;
// console.log(markHigherBMI);
// const firstName = "Mantas";
// const job = "techop";
// const birthYear = 1989;
// const currentYear = 2037;

// const jonas =
//   "I'm " + firstName + " am a " + (currentYear - birthYear) + "years old" + job;
// console.log(jonas);
// const jonasNew = `I'm ${firstName}, a ${
//   currentYear - birthYear
// } year old ${job}`;

// console.log(jonasNew);

// console.log(`just regular string`);

// console.log(`first line \n\
// second line \n\
// third line`);

// console.log(`and
// it
// also
// works this way too`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearsLeft} years 😊`);
// }

// const birthYear = 1995;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const johnBMI = 25;
// const markBMI = 27;

// if (johnBMI > markBMI) {
//   console.log(`John's BMI ${johnBMI} is larger than Marks ${markBMI}`);
// } else {
//   console.log(`Marks's BMI ${markBMI} is larger than Johns ${johnBMI}`);
// }

//type conversion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log("I am " + 23 + " years old");
// console.log("I am " + "23" + " years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
// console.log("23" * "2", "23" / "2");

// let n = "1" + 1; // 11 nes +
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 5 + "5");
// typeof (2 + 3 + 5 + "5");
// console.log("10" - "4" - "3" - 2 + "5");

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all;)");
// } else {
//   console.log("you should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("height is defined");
// } else {
//   console.log("height undefined");
// }

// // Equality operator + if, else if, else, not equality operator
// const age = "18";
// if (age === 18) console.log("you became adult (strict)");
// if (age == 18) console.log("you became adult (loose)");

// const favoriteNumber = Number(prompt("favorite number?"));
// console.log(favoriteNumber);
// console.log(typeof favoriteNumber);

// if (favoriteNumber === 23) {
//   // 23 === 23, '23' == 23 -> TRUE ; 22 === 23 -> FALSE
//   console.log("23 is great number");
// } else if (favoriteNumber === 7) {
//   console.log("7 also good");
// } else {
//   console.log("not 7 or 23");
// }

// if (favoriteNumber !== 23) console.log("why not 23");

// Logical operators
const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence || hasGoodVision);

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (hasDriversLicence && hasGoodVision) {
//   console.log("saras good to drive");
// } else {
//   console.log("sarah should not drive");
// }

// const isTired = false; // C
// console.log(hasDriversLicence || hasGoodVision || isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log("sarah is good to drive");
// } else {
//   console.log("sarah should not drive");
// }
const D = 88;
const K = 88;

if (D === K && (D < 100 || K < 100)) {
  console.log("draw, but no winners, since less then 100");
} else if (D === K) {
  console.log("draw");
} else if (K > 100 && K > D) {
  console.log("K is winner");
} else if (K < D && D > 100) {
  console.log("D is winner");
} else console.log("no winner, since winner scores below 100");

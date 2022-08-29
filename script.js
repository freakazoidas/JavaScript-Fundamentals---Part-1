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
const firstName = "Mantas";
const job = "techop";
const birthYear = 1989;
const currentYear = 2037;

const jonas =
  "I'm " + firstName + " am a " + (currentYear - birthYear) + "years old" + job;
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}`;

console.log(jonasNew);

console.log(`just regular string`);

console.log(`first line \n\second line \n\third line`);

console.log(`and
it 
also 
works this way too`);

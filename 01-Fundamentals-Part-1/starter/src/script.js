// let js = 'amazing';
// if (js === 'amazing') {
//     console.log('Amazing!');
// }

// let firstName = 'Juan';
// console.log(firstName);

// TODO 
// ! Warning!
// * Note 


// isJavascriptFun = false;
// console.log(isJavascriptFun);
// console.log(typeof(isJavascriptFun));



// * Operators
// const YEAR = 2037; 
// const ageJonas = YEAR - 1991;
// const ageSarah = YEAR - 2018;
// console.log(ageJonas);
// console.log(ageSarah);

// console.log(ageJonas - ageSarah);

// const firstName = "Carlos";
// const lastName = 'Becerra';
// console.log(firstName + ' ' + lastName);


// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀


// function bmi(mass, height) {
//     result = mass / (height ** 2);
//     return result;
// }



// let markMass = 78;
// let markHeight = 1.69;
// let jonhMass = 92;
// let jonhHeight = 1.95;

// let markBmi = bmi(markMass, markHeight);


// let jonhBmi = bmi(jonhMass, jonhHeight);

// console.log("Mark bmi: " + markBmi);
// console.log("Jonh bmi: " + jonhBmi);

// let markHigherBmi = markBmi > jonhBmi;
// console.log(markHigherBmi);


// const firstName = 'Juan';
// const job = 'student';
// const birthYear = 1994;
// const currentYear = 2020;

// const juan = `I'm ${firstName}, a ${currentYear-birthYear} year old ${job}`
// console.log(juan);

// const age = 17;


// if (age >= 18) {
//     console.log("You can start dirving");
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`You cant drive 
// you need ${yearsLeft} more years`);
// }

// const birtYear = 2001;

// let century;
// if(birtYear <= 2000){
//     century = 20;
// }else{
//     century =21;
// }
// console.log(century);



// function bmi(mass, height) {
//     result = mass / (height ** 2);
//     return result;
// }



// let markMass = 95;
// let markHeight = 1.88;
// let jonhMass = 85;
// let jonhHeight = 1.76;

// let markBmi = bmi(markMass, markHeight);


// let jonhBmi = bmi(jonhMass, jonhHeight);


// let markHigherBmi = markBmi > jonhBmi;

// if(markHigherBmi){
//     console.log(`Mark's BMI (${markBmi.toFixed(1)}) is higher 
// than Jhon's (${jonhBmi.toFixed(1)})!`);
// }else{
//     console.log(`John's BMI (${jonhBmi.toFixed(1)}) is higher 
// than Mark's (${markBmi.toFixed(1)})!`);
// }

// let message;

// if(message === undefined){
//     console.log(true);
// }else{
//     console.log(false);
// }

// const averageScore = (team, score1, score2, score3) => {
//     let name = team;
//     let minScore;
//     let average = (score1 + score2 + score3) / 3;
//     if (score1 >= 100 || score2 >= 100 || score3 >= 100) {
//         minScore = true;
//     } else {
//         minScore = false;
//     }
//     return { name, average, minScore };

// }

// const winner = (team1, team2) => {
//     if((team1.average> team2.average) && (team1.minScore)){
//         console.log(`${team1.name} is the winner`);
//     } else if ((team2.average > team1.average) && (team2.minScore))
//     {
//         console.log(`${team2.name} is the winner`);
//     } else if ((team1.average === team2.average) && (team1.minScore && team2.minScore))
//     {
//         console.log('Drawn');
//     }else{
//         console.log('No winners')
//     }
// } 

// let dolphinsAverageScore = averageScore('Dolphins', 99, 99, 100);
// let koalasAverageScore = averageScore('Koalas', 99, 99, 100);
// console.log(dolphinsAverageScore);
// console.log(koalasAverageScore);
// winner(dolphinsAverageScore, koalasAverageScore)

// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Go to gym');
//         break;
//     default:
//         console.log('no Task'); 
// }


// let age = 18;
// age >= 18 ? console.log('I like to drink wine \u{1F377}') : console.log('I like to drink water');
// console.log(`I like to drink ${age >= 18 ? "wine \u{1F377}" : "water"}`);

let tip;
let bill = 275;

tip = bill >= 50 && bill <= 300 ? (bill * .15) + bill : bill > 300 ? (bill * .2) + bill : bill;
console.log(`The bill was ${bill}, the tip was ${((bill >= 50 && bill <= 300 ? (bill * .15) + bill : bill > 300 ? (bill * .2) + bill : bill) - bill).toFixed(1)}, and the total value ${tip}`);
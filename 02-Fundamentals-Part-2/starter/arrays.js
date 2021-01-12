// let alumns = { 'name': 'Carlos', 'name': 'Rosario' }


// for(alumn in alumns){
//     console.log(alumns.name);
// }

// const friends = ['Miguel', 'Lazy', 'Marcos'];
// console.log(friends);

const years = new Array(1990, 1967, 2002, 2010, 2018);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = 'Jose';
// console.log(friends);

// const carlos = ['Carlos', 'Becerra', 26, 'student', friends];
// console.log(carlos);

const calcAge =  (birthYear) => {
    return 2020 - birthYear;
} 

let ages = [];

years.forEach(element => {
    console.log(calcAge(element));
    age = calcAge(element);
    ages.push(age)
});

console.log(ages);
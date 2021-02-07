// TODO Nested Scope

const hummus =  function(factor){
    const ingredient = function(amount, unit, name) {
        const ingredientAmount =  amount * factor;
        if(ingredientAmount > 1){
            unit = unit + `s`;
        }
        console.log(`${ingredientAmount} ${unit} of ${name}`);
    }
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};


// hummus(1);

// TODO Functions as Values


// const launchMissiles = function(){
//     missileSystem.launch('now');
// };
// if(safeMode){
//     launchMissiles = function(){ /* do nothing */ }
// }

// TODO Declaration Notation


// console.log("The future says:", future());

function future(){
    return "You'll never have flying cars";
}


// TODO Arrow Functions

const power = (base, exponent) => {
    let result =1;
    for(let count = 0; count < exponent; count ++){
        result *= base;
    }
    return result;
};

// console.log(power(2,3));

// * Arrow functions with only one parameter can be writhing without parantesis
// * and return keyword

const square1 = (x) => {return x * x;}
const square2 = x => x * x;

// console.log(square2(2));



// TODO Optional Arguments

const minus = function(a, b){
    if(b === undefined){
        return -a;
    }
    else{
        return a - b;
    }
}

// console.log(minus(5));
// console.log(minus(20,10));

// * Argument default values

function power2(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
// console.log(power2(4));

// TODO Closure 
// ? What happens to lacal bindings when the function call created them is no
// ? longer 


function wrapValue(n){
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
// console.log(wrap1());

function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(2);
// console.log(twice(5));


// TODO Recursion
// ? A function that calls itself


function recursivePower(base, exponent){
    if(exponent === 0) return 1;
else{
    return base *recursivePower(base, exponent -1)
}
}

// console.log(power(2, 4));


function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
// console.log(findSolution(24));



// TODO Growing functions

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
// printFarmInventory(7, 11);

// function printZeroPaddedWithLabel(number, label) {
//     let numberString = String(number);
//     while (numberString.length < 3) {
//         numberString = "0" + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }

// function printFarmInventory(cows, chickens, pigs) {
//     printZeroPaddedWithLabel(cows, "Cows");
//     printZeroPaddedWithLabel(chickens, "Chickens");
//     printZeroPaddedWithLabel(pigs, "Pigs");
// }


// printFarmInventory(7, 11, 3);

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}
function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
// printFarmInventory(7, 16, 3);

// TODO Exercices 


// ? Minimun
// The previous chapter introduced the standard function Math.min that returns
// its smallest argument.We can build something like that now.Write a function
// min that takes two arguments and returns their minimum.


function findMin(a, b){
    return Math.min(a, b);
}

// console.log(findMin(7, 5));

// ? Recursion

// Define a recursive function isEven corresponding to this description.The
// function should accept a single parameter(a positive, whole number) and return
// a Boolean.
// Test it on 50 and 75. See how it behaves on - 1. Why ? Can you think of a
// way to fix this ?


function isEven(a){
    if(a === 0 || a === -0){
        return 'Even';
    }else if(a === 1 || a === -1){
        return 'Odd'
    }
    return isEven(a - 2);
}

// console.log(isEven(-1));

// ? Bean Counting
// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character(for example,
// "b" ).The first character has position 0, which causes the last one to be found at
// position string.length - 1.In other words, a two - character string has length
// 2, and its characters have positions 0 and 1.
// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters there are in the
// string.
// Next, write a function called countChar that behaves like countBs, except
// it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters).Rewrite countBs to
// make use of this new function.



const countChar = function (myString, myChar) {
    let counter = 0;
    for(let letter of [...myString]){
        if(letter.toLowerCase() === myChar.toLowerCase()){ counter++; }
    }
    return counter;
}
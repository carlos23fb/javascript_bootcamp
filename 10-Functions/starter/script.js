'use strict';

// TODO Functions Accepting Callback functions

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// FIXME: High Order Function

const transformer = function(str, fn){
    console.log(`Orginal: ${str}`)
    console.log(`Transform string: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`)
}


transformer('JavaScript is the best!!', oneWord)



// * Example

const high5 = function(){
    console.log('high 5!!')
}

document.body.addEventListener('click', high5)

// TODO First-Class functions

// ? Store functions in variables or properties

const add = (a, b) => a + b;


// const counter = {
//     value: 23,
//     inc: function(){ this.value++}
// }

// ? Pass functions as arguments to OTHER functions (call back)

const greet = () => console.log('Hey Juan');

document.querySelector('button').addEventListener('click', greet)


// TODO High-Order functions

// ? A function that receives another function as an argument, that returns a new function, or both. This is possible because of first class functions.


// ? function that returns new function

function count(){
    let counter = 0;

    return function(){
        counter++;
    }
}


// TODO Passing arguments : Value vs Reference

// const flight = 'LH234'
// const juan = {
//     name: 'Carlos Becerra',
//     passport: 123456789
// }

// const checkIn = function(flightNum, passanger){
//     flightNum = 'LH999';
//     passanger.name = 'Mr.' + passanger.name;

//     if(passanger.passport === 123456789){
//         alert('check In!')
//     }else{
//         alert('Wrong passport!')
//     }
    
// }

// checkIn(flight, juan)
// console.log(flight)
// console.log(juan)

// //  FIXME:  Real world Example

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(juan);
// console.log(juan)
// checkIn(flight, juan);


// TODO Default Parameters in functions

// const bookings = []

// const createBooking = function(flightNum=1, numPassangers=1, price=300){
//     const booking = {
//         flightNum,
//         numPassangers,
//         price
//     }
//     console.log(booking)
//     bookings.push(booking)
// }

// createBooking(12)

// console.log(bookings)
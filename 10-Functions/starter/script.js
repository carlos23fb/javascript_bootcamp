'use strict';

// TODO Passing arguments : Value vs Reference

const flight = 'LH234'
const juan = {
    name: 'Carlos Becerra',
    passport: 123456789
}

const checkIn = function(flightNum, passanger){
    flightNum = 'LH999';
    passanger.name = 'Mr.' + passanger.name;

    if(passanger.passport === 123456789){
        alert('check In!')
    }else{
        alert('Wrong passport!')
    }
    
}

checkIn(flight, juan)
console.log(flight)
console.log(juan)

//  FIXME:  Real world Example

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(juan);
console.log(juan)
checkIn(flight, juan);


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
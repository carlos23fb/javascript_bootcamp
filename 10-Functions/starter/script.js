'use strict';

// TODO The call and apply and methods



const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    book : function (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }

}

// lufthansa.book(123, 'Carlos')
// lufthansa.book(635, 'Jhon Smith')

// console.log(lufthansa.bookings)

const eurowings = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    
}

const book =  lufthansa.book;

// ! the const book is not the same as lufthansa.book so airline is undefined

// book(23, 'Sara')

// FIXME: Using the call methos to replace the object 

// book.call(eurowings, 23, 'Sara')
// console.log(eurowings)


// book.call(lufthansa, 239, 'Maria Lopez')

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'Lx',
    bookings: []
}

// book.call(swiss, 123, 'Carlos Becerra')


// FIXME:

const flightData = [583, 'George Copper']

// book.apply(swiss, flightData)

// book.call(swiss, ...flightData)

// 

// TODO Functions returning functions

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

const greet = greeting => name => console.log(`${greeting} ${name}`)

const greeterHey = greet('Hi')
// greeterHey('Jonas')
// greeterHey('Juan')

// greet('Hello')('Julian')



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


// transformer('JavaScript is the best!!', oneWord)

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

// const greet = () => console.log('Hey Juan');

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
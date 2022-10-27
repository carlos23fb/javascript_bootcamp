'use strict';

// TODO Default Parameters in functions

const bookings = []

const createBooking = function(flightNum=1, numPassangers=1, price=300){
    const booking = {
        flightNum,
        numPassangers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking(12)

console.log(bookings)
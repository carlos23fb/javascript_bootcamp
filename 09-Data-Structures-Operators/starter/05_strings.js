'use strict';


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    }
}


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({ time = '20:00', address, starterIndex = 1, mainIndex = 0 }) {
        console.log(`Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Pasta with ${ing1}, ${ing2}, ${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, otherIngredients);
    },
    openingHours,

};

const airline = 'TAP Air Portugal';
// const plane = 'A320';


// console.log(plane[0]);
// console.log("BH#"[0]);

// console.log(airline.length);
// console.log("BASDFA01".length);

// console.log(airline.lastIndexOf("A"));
// console.log(airline.indexOf("T"));
// console.log(airline.toLowerCase().indexOf("portugal"));
// console.log(airline.slice(4));
// console.log(airline.slice(airline.indexOf("Air"), airline.lastIndexOf("Portugal")-1).length);

// console.log(airline.slice(0, airline.indexOf(" ")));

// const checkMiddleSeat = function(seat){

//     if (seat.indexOf("B") > -1 || seat.indexOf("E") > -1){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(checkMiddleSeat("1U"));



let passanger = "jUaN "
let email = "juan@home.com"
let login = "JUAN@home.coM"
let fix_login = login.trim().toLowerCase()


let fixName = passanger[0].toUpperCase() + passanger.slice(1).toLowerCase() 
// console.log(fixName);
// console.log(email === fix_login);

const phrase = ["Oh", "hi", "Mark"]

// console.log(phrase.join(" "));

const priceGB = "288,97E"
const priceUS = priceGB.replace("E", "$").replace(",", ".")
// console.log(priceUS);

const plane = "Airbus A320"
// console.log(plane.toLowerCase().includes("boeing"));

// console.log(plane.toLowerCase().startsWith("air"));

// if(plane.startsWith("Airbus") && plane.endsWith("neo")){
//     console.log("Part of the new Airbus Family");
// }


let checkBaggage = function(items){
    let baggage = items.toLowerCase()
    
    if (baggage.includes("knife") || baggage.includes("gun")){
        console.log("Your are not allowed to take the plane, please move to the inspection section");
    }else{
        console.log("Welcome you are allowed to take the plane");
    }
}

// checkBaggage("I have a laptop, Knife, dog")

const capitalizeName = function(name){
    let arrName = name.split(" ")
    let capArrName = []
    arrName.forEach(name =>{
        capArrName.push(name[0].toUpperCase() + name.slice(1).toLowerCase())
    })
    return capArrName.join(" ");
}

// console.log(capitalizeName("juan carlos flores becerra"));


const maskCreditCard = function(number){
    let myStr = number + '';
    let lastNumbers = myStr.slice(-4);
    return lastNumbers.padStart(myStr.length, "*");
};

// console.log(maskCreditCard(7187628763286));

const alert = " Bad waether... All Departures Delayed... "

console.log(alert.repeat(5));